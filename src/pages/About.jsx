import React, { useState, useEffect } from 'react';
import { 
  FaShieldAlt, 
  FaUsers, 
  FaCheckCircle, 
  FaTruck, 
  FaLeaf, 
  FaBoxOpen, 
  FaGlobe, 
  FaAward, 
  FaClock, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt 
} from 'react-icons/fa';
import "../styles/About.css";

const TypewriterText = ({ words, className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== currentWord) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText !== '') {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

const FadingSubtitle = ({ subtitles, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <p key={currentIndex} className={`${className} slide-in`}>
      {subtitles[currentIndex]}
    </p>
  );
};

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: "/farmer.jpg", caption: "Real Farms" },
    { image: "globalnet.jpg", caption: "Global Reach" },
    { image: "sustainable.jpg", caption: "Pure Produce" },
    { image: "/expert.jpg", caption: "Quality First" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="testimonial-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="testimonial-image"
          />
          <div className="testimonial-overlay">
            <div className="testimonial-caption">
              {slide.caption}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function About() {
  const heroWords = ["We Grow.", "We Ship.", "We Care."];
  const subtitles = [
    "Rooted in India, Trusted Globally",
    "From Fields to Ports – Seamlessly Delivered",
    "Delivering Quality. Building Trust."
  ];

  const promiseCards = [
    {
      icon: <FaShieldAlt className="icon" size={32} />,
      title: "Purity First",
      description: "Every product meets international standards through rigorous quality controls"
    },
    {
      icon: <FaUsers className="icon" size={32} />,
      title: "Farmer-Centric Trade",
      description: "Direct partnerships ensuring fair prices and sustainable farming practices"
    },
    {
      icon: <FaCheckCircle className="icon" size={32} />,
      title: "Global-Grade Compliance",
      description: "Full traceability and certification for seamless international trade"
    }
  ];

  const services = [
    { icon: <FaTruck className="icon" size={32} />, title: "Export Logistics", description: "End-to-end shipping solutions" },
    { icon: <FaLeaf className="icon" size={32} />, title: "Organic Products", description: "Certified organic agricultural goods" },
    { icon: <FaBoxOpen className="icon" size={32} />, title: "Custom Packaging", description: "Tailored packaging for global markets" },
    { icon: <FaGlobe className="icon" size={32} />, title: "Market Access", description: "Direct routes to international buyers" },
    { icon: <FaAward className="icon" size={32} />, title: "Quality Assurance", description: "ISO certified quality management" },
    { icon: <FaClock className="icon" size={32} />, title: "24/7 Support", description: "Round-the-clock export assistance" }
  ];

  const stats = [
    { number: "30+", label: "Countries" },
    { number: "500+", label: "Farmers" },
    { number: "1000+", label: "Shipments" },
    { number: "24x7", label: "Export Team" }
  ];

  return (
    <div className="min-h-screen bg-earth-cream">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-title">
            <TypewriterText words={heroWords} />
          </div>
          
          <div className="hero-subtitle">
            <FadingSubtitle subtitles={subtitles} />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-images fade-in-left">
              <img
                src="/export.jpg"
                alt="Farm landscape"
                className="story-image"
              />
              <img
                src="/glob1.jpg"
                alt="Export operations"
                className="story-image"
              />
              <img
                src="/glob8.jpg"
                alt="Agricultural products"
                className="story-image"
              />
              <img
                src="/glob4.jpg"
                alt="Farmers at work"
                className="story-image"
              />
            </div>
            
            <div className="story-content fade-in-right">
              <h2>Our Story</h2>
              <p>
                Founded in 2024, GlobalCorExport began with a simple belief: Indian agriculture deserves a global stage. 
                We started when a group of agricultural engineers noticed the gap between India's rich farming heritage 
                and international market access.
              </p>
              <p>
                Today, we bridge that gap by connecting traditional farmers with modern export channels, ensuring 
                quality produce reaches global consumers while maintaining fair partnerships with our farming communities. 
                Our mission drives everything we do – making Indian agriculture globally competitive while staying true 
                to sustainable practices.
              </p>
              <p>
                Every shipment tells a story of dedication, from soil to shelf, carrying the essence of Indian 
                agriculture to tables worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="promise-section">
        <div className="container">
          <h2 className="promise-title fade-in-up">Our Promise</h2>
          
          <div className="promise-cards">
            {promiseCards.map((card, index) => (
              <div key={index} className="promise-card fade-in-up">
                <div className="promise-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-title fade-in-up">Our Services</h2>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in-up">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="stats-section">
        <div className="container">
          <h2 className="stats-title fade-in-up">Why Choose Us</h2>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card fade-in-up">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="testimonial-section">
        <div className="container">
          <h2 className="testimonial-title fade-in-up">Our Journey</h2>
          
          <div className="fade-in-up">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Final Content Block */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-content">
            <blockquote className="quote-text fade-in-up">
              "Every grain we export carries the promise of quality, the heritage of Indian agriculture, 
              and the trust of farmers who believe in sustainable growth."
            </blockquote>
            
            <div className="quote-author fade-in-up">
              — Neel kothari, Founder
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-in-left">
              <h2>Get In Touch</h2>
              <p>
                Ready to export your products globally? Let's discuss how we can help 
                your agricultural business reach international markets.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon"><FaEnvelope className="icon" size={24} /></div>
                  <span><a href="mailto:globalcorexport@gmail.com">globalcorexport@gmail.com</a></span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><FaPhone className="icon" size={24} /></div>
                  <span><a href="tel:+917226994742">+91 7226994742</a></span>
                </div>
                
              </div>
            </div>
            
            <div className="contact-cta fade-in-right">
              <button className="cta-button">
                Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}