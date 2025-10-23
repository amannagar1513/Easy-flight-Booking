import React, { useEffect } from "react";
import "./front.css";

const Front = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-fade");
    const reveal = () => {
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="header">
        <div className="logo">Easier Flight Booking</div>
        <div className="support">
          <span className="support-text">📞 24/7 Support:</span>
          <a href="tel:+11234567890" className="header-phone">
            +1 (630) 824-3722
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fly Smarter, Fly Cheaper </h1>
          <p>Your trusted partner for premium airline bookings</p>

          {/* <div className="hero-phone">
            <span>📞 Call Us Anytime:</span>
            <a href="tel:+16308243722">+1 (630) 824-3722</a>
          </div> */}

          <a href="tel:+16308243722" className="cta-btn">
            Book Now
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="features scroll-fade">
        <div className="feature-card">🛫 Easy Bookings</div>
        <div className="feature-card">💸 Best Deals</div>
        <div className="feature-card">🌍 Global Reach</div>
        <div className="feature-card">🕑 24/7 Support</div>
      </section>

      {/* Deals */}
      <section className="deals scroll-fade">
        <h2>Hot Deals for You 🔥</h2>
        <div className="deal-list">
          <div className="deal-card">NYC ✈️ LA — $199</div>
          <div className="deal-card">Chicago ✈️ Miami — $149</div>
          <div className="deal-card">SF ✈️ Vegas — $99</div>
          <div className="deal-card">Boston ✈️ Orlando — $129</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials scroll-fade">
        <h2>What Our Customers Say 💬</h2>
        <div className="testimonial-list">
          <div className="testimonial-card">“Amazing service, booked instantly!”</div>
          <div className="testimonial-card">“Saved me $200 on flights!”</div>
          <div className="testimonial-card">“Customer support is top-notch.”</div>
          <div className="testimonial-card">“Loved the seamless experience!”</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq scroll-fade">
        <h2>Frequently Asked Questions ❓</h2>
        <div className="faq-item">How do I book flights?</div>
        <div className="faq-item">Can I cancel after booking?</div>
        <div className="faq-item">Do you offer international flights?</div>
        <div className="faq-item">Are there hidden fees?</div>
      </section>

      {/* Footer */}
      <footer className="footer scroll-fade">
        <p>© 2025 NexusCore Airlines. All rights reserved.</p>
        <p>
          📞 Call Us:{" "}
          <a href="tel:+16308243722" className="footer-phone">
            +1 (630) 824-3722
          </a>
        </p>
      </footer>

      {/* Floating Call Button */}
      <a href="tel:+16308243722" className="floating-call">
        📞
      </a>
    </div>
  );
};

export default Front;
