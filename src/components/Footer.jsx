import React from 'react';
import '../Footer.css';

export default function Footer() {
  return (
    <footer className="footer  text-white py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-start">
          <div className="footer-item">
            <h5 className="footer-title">Service App</h5>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            <p>Designed with ❤️ by Kelompok 1</p>
          </div>
          <div className="footer-item">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-map-marker-alt"></i> Jl. Example No. 1, Jakarta</li>
              <li><i className="fas fa-phone-alt"></i> (021) 123-456-789</li>
              <li><i className="fas fa-envelope"></i> support@serviceapp.com</li>
            </ul>
          </div>
          <div className="footer-item">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-links">
              <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
