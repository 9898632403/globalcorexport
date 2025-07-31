import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaShippingFast, FaLeaf, FaClipboardCheck, FaSearchDollar, FaRecycle, FaHeadset, FaTimes } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { IoCheckmarkCircle } from 'react-icons/io5';
import '../styles/Home.css';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  
  // Professional content for agri-export startup
  const phrases = [
    "Bridging Farmers to Global Markets",
    "Premium Agri-Commodities Export",
    "Sustainable Farm-to-World Supply"
  ];
  
  const subtitles = [
    "Certified Organic Produce | Worldwide Shipping",
    "Direct Farmer Connect | Competitive Pricing",
    "Quality Assurance | Ethical Sourcing"
  ];

  // Typewriter effect for main heading
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < phrases[currentPhrase].length) {
        setTypedText(phrases[currentPhrase].substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          setTypedText('');
        }, 2500);
      }
    }, 80);
    
    return () => clearInterval(typingInterval);
  }, [currentPhrase]);

  // Subtitle rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Testimonial auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (expandedCard === null) { // Don't auto-slide when card is expanded
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [expandedCard]);

  // Professional services data with detailed content
  const services = [
    {
      icon: <FaLeaf className="service-icon" />,
      title: "Farm Fresh Produce",
      summary: "Premium-quality grains, fruits, and vegetables sourced directly from certified organic farms",
      details: {
        description: "We partner with certified organic farms across India to bring you the freshest produce. Our quality control begins at the farm level, ensuring only the best crops are selected for export.",
        features: [
          "100+ varieties of seasonal fruits and vegetables",
          "Direct procurement from farmer cooperatives",
          "Organic and fair-trade certifications",
          "Harvest-to-shipment in under 72 hours"
        ],
        image: "/glob4.jpg"
      }
    },
    {
      icon: <FaShippingFast className="service-icon" />,
      title: "Global Logistics",
      summary: "End-to-end cold chain logistics with real-time tracking to 50+ countries",
      details: {
        description: "Our temperature-controlled supply chain ensures your produce arrives in perfect condition. We handle all documentation, customs clearance, and last-mile delivery.",
        features: [
          "Dedicated cold storage facilities",
          "Real-time GPS tracking",
          "Customs brokerage services",
          "Air, sea, and land transport options"
        ],
        image: "/globalnet.jpg"
      }
    },
    {
      icon: <FaClipboardCheck className="service-icon" />,
      title: "Quality Assurance",
      summary: "Rigorous testing and certification for international export standards",
      details: {
        description: "Our in-house quality lab tests for pesticides, heavy metals, and microbial content. We meet all international food safety standards including EU, USDA, and JAS.",
        features: [
          "ISO 17025 accredited testing lab",
          "Pre-shipment inspection reports",
          "Phytosanitary certification",
          "Food safety compliance documentation"
        ],
        image: "/quality.jpg"
      }
    },
    {
      icon: <FaSearchDollar className="service-icon" />,
      title: "Custom Sourcing",
      summary: "Tailored procurement solutions for bulk buyers and distributors",
      details: {
        description: "Need specific varieties, packaging, or quantities? Our sourcing team will find exactly what you need and negotiate the best prices on your behalf.",
        features: [
          "Private label packaging",
          "Custom crop specifications",
          "Volume discounts",
          "Seasonal availability forecasting"
        ],
        image: "/glob2.jpg"
      }
    },
    {
      icon: <FaRecycle className="service-icon" />,
      title: "Sustainable Farming",
      summary: "Ethical partnerships promoting regenerative agriculture practices",
      details: {
        description: "We invest in sustainable farming practices that improve soil health and reduce environmental impact while maintaining high yields.",
        features: [
          "Water conservation programs",
          "Organic fertilizer initiatives",
          "Carbon footprint reduction",
          "Farmer training programs"
        ],
        image: "/sustainable.jpg"
      }
    },
    {
      icon: <FaHeadset className="service-icon" />,
      title: "Export Support",
      summary: "Dedicated account managers for seamless international trade",
      details: {
        description: "Our export specialists guide you through every step of the process, from product selection to final delivery.",
        features: [
          "Multilingual support team",
          "Market intelligence reports",
          "Trade regulation updates",
          "After-sales support"
        ],
        image: "/expert.jpg"
      }
    }
  ];

  // Professional testimonials
  const testimonials = [
    {
      image: "/glob1.jpg",
      quote: "Aromatic. Long-grain. Laboratory-tested. Our basmati rice reaches premium markets with zero compromise.",
      name: "Basmati Rice"
    },
    {
      image: "/glob3.jpg",
      quote: "Ethically sourced Indian spices — high in oil content, color, and aroma. Perfect for global cuisine standards.",
      name: "Indian Spices"
    },
    {
      image: "/glob7.jpg",
      quote: "Fresh-picked, hygienically packed vegetables with full cold chain support for export-ready freshness.",
      name: "Fresh Vegetables"
    }
  ];

  // Intersection Observer for scroll animations
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [featureRef, featureInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Stats counter animation
  const [stats, setStats] = useState({
    countries: 0,
    farmers: 0,
    shipments: 0
  });

  useEffect(() => {
    if (statsInView) {
      const duration = 2000;
      const startTime = Date.now();
      
      const animateCounters = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setStats({
          countries: Math.floor(progress * 35),
          farmers: Math.floor(progress * 1200),
          shipments: Math.floor(progress * 450)
        });
        
        if (progress < 1) {
          requestAnimationFrame(animateCounters);
        } else {
          setStats({
            countries: 35,
            farmers: 1200,
            shipments: 450
          });
        }
      };
      
      animateCounters();
    }
  }, [statsInView]);

  // Manual testimonial navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Toggle card expansion
  const toggleCardExpand = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="typewriter">
              {typedText}
              <span className="cursor">|</span>
            </h1>
            <p className="subtitle fade-in-out">{subtitles[currentSubtitle]}</p>
            
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Your Trusted Agri-Export Partner</h2>
              <p>
                GlobalCorExport is a next-generation agricultural export company connecting Indian farmers with global markets. 
                We specialize in the export of premium grains, fruits, vegetables, spices, and pulses—ensuring ethical sourcing, 
                rigorous quality control, and seamless logistics.
              </p>
              
              <div className="stats-grid" ref={statsRef}>
                <div className={`stat-item ${statsInView ? 'animate' : ''}`}>
                  <div className="stat-number">+{stats.countries}</div>
                  <div className="stat-label">Export Destinations</div>
                </div>
                <div className={`stat-item ${statsInView ? 'animate' : ''}`}>
                  <div className="stat-number">{stats.farmers}+</div>
                  <div className="stat-label">Partner Farmers</div>
                </div>
                <div className={`stat-item ${statsInView ? 'animate' : ''}`}>
                  <div className="stat-number">{stats.shipments}+</div>
                  <div className="stat-label">Annual Shipments</div>
                </div>
              </div>
            </div>
            
            <div className="about-images">
              <div className="image-grid">
                <img 
                  src="/quality.jpg" 
                  alt="Quality inspection at farm" 
                  className="image-1" 
                  loading="lazy"
                />
                <img 
                  src="/farmer.jpg" 
                  alt="Fresh organic produce" 
                  className="image-2" 
                  loading="lazy"
                />
                <img 
                  src="/glob4.jpg" 
                  alt="Global shipping logistics" 
                  className="image-3" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with expandable cards */}
      <section id="services" className="services-section" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <h2>Our Integrated Export Solutions</h2>
            <p>Comprehensive services from farm to foreign market</p>
          </div>
          <div className={`services-grid ${servicesInView ? 'animate' : ''}`}>
            {services.map((service, index) => (
              <div 
                className={`service-card ${expandedCard === index ? 'expanded' : ''}`} 
                key={index}
              >
                {expandedCard === index ? (
                  <div className="expanded-content">
                    <button 
                      className="close-button" 
                      onClick={() => toggleCardExpand(index)}
                      aria-label="Close detailed view"
                    >
                      <FaTimes />
                    </button>
                    <div className="expanded-image">
                      <img src={service.details.image} alt={service.title} loading="lazy" />
                    </div>
                    <div className="expanded-text">
                      <h3>{service.title}</h3>
                      <p className="description">{service.details.description}</p>
                      <ul className="features-list">
                        {service.details.features.map((feature, i) => (
                          <li key={i}>
                            <IoCheckmarkCircle className="check-icon" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="service-icon-container">
                      {service.icon}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <div className="learn-more">
                      <button 
                        className="learn-more-button" 
                        onClick={() => toggleCardExpand(index)}
                      >
                        Learn more <FiChevronRight className="arrow-icon" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Block */}
      <section className="feature-section" ref={featureRef}>
        <div className="feature-gradient"></div>
        <div className="container">
          <div className={`feature-content ${featureInView ? 'animate' : ''}`}>
            <div className="feature-text">
              <h2>Transparent & Sustainable Supply Chain</h2>
              <p className="highlight">
                "Empowering Farmers, Delivering Quality"
              </p>
              <p>
                Our unique farmgate procurement model ensures fair prices for farmers while delivering 
                competitive rates to international buyers. We've eliminated 4-5 middlemen, creating a 
                win-win ecosystem with traceability at every step.
              </p>
              <ul className="feature-list">
                <li>
                  <IoCheckmarkCircle className="check-icon" />
                  <span>Direct contracts with FPOs and cooperatives</span>
                </li>
                <li>
                  <IoCheckmarkCircle className="check-icon" />
                  <span>Blockchain-enabled shipment tracking</span>
                </li>
                <li>
                  <IoCheckmarkCircle className="check-icon" />
                  <span>Climate-controlled storage and transport</span>
                </li>
              </ul>
              <a href="/contact" className="btn outline">
                Explore Our Supply Chain <FiChevronRight className="btn-icon" />
              </a>
            </div>
            <div className="feature-image">
              <img 
                src="/chaain.jpg" 
                alt="Sustainable farming" 
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Signature Exports</h2>
            <p>Delivering quality products across the globe</p>
          </div>
          <div className="testimonials-slider">
            <div className="slider-track" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                    <div className="image-frame"></div>
                  </div>
                  <div className="testimonial-content">
                    <p className="quote">"{testimonial.quote}"</p>
                    <div className="author-info">
                      <p className="author-name">{testimonial.name}</p>
                      <p className="author-position">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="cta-gradient"></div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Source Premium Agri-Commodities?</h2>
            <p>
              Our export specialists are available to discuss your requirements, 
              provide samples, and guide you through the import process.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn primary">
                Get a Custom Quote <FiChevronRight className="btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;