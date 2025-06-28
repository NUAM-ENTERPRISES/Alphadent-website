import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DentalCard.css';
import servicesData from '../Data/services';
import defaultImg from '../assets/imgg2.png';

const DentalCard = ({ services: propsServices }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Fallback priority: props > location.state > default data
  const services = propsServices || location.state?.services || servicesData;

  useEffect(() => {
    const cards = document.querySelectorAll('.dentalcard-flex-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const handleClick = (service) => {
    navigate(`/service/details/${encodeURIComponent(service.title)}`, {
      state: { service },
    });
  };

  if (!Array.isArray(services) || services.length === 0) {
    return <p>No service data available.</p>;
  }

  return (
    <div className="dentalcard-wrapper">
      <h2 className="section-heading">Our Services</h2>
      <div className="dentalcard-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="dentalcard-flex-card"
            role="button"
            tabIndex={0}
            onClick={() => handleClick(service)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleClick(service);
            }}
          >
            <div className="dentalcard-content">
              <div className="dentalcard-image">
                <img
                  src={service.image || defaultImg}
                  alt={service.title}
                  className="dentalcard-left-img"
                />
              </div>
              <div className="dentalcard-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button
                  className="read-more-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(service);
                  }}
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DentalCard;
