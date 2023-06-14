import React from 'react';
import '../css/header.css'; 
import logoImage from '../images/logo/logo-110x56.png';

const HeaderComponent = () => {
  return (
    <header className="header" role="banner">
      <div className="wrap">
        <div className="logo">
          <a href="index.html" title="Transfers">
            <img src={logoImage} alt="The Luxury Transfers" />
          </a>
        </div>

        <nav role="navigation" className="main-nav">
          <ul>
            <li className="active">
              <a href="index.html" title="">
                Home
              </a>
            </li>
            <li>
              <a href="destinations.html" title="Destinations">
                Destinations
              </a>
              <ul>
                <li>
                  <a href="destination-austria.html" title="Austria">
                    Austria
                  </a>
                </li>
                <li>
                  <a href="destination-czechia.html" title="Czech Republic">
                    Czech Republic
                  </a>
                </li>
                <li>
                  <a href="destination-germany.html" title="Germany">
                    Germany
                  </a>
                </li>
                <li>
                  <a href="destination-hungary.html" title="Hungary">
                    Hungary
                  </a>
                </li>
                <li>
                  <a href="destination-poland.html" title="Poland">
                    Poland
                  </a>
                </li>
                <li>
                  <a href="destination-europe.html" title="Europe">
                    Europe
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="tailor-made.html" title="Tailor made">
                Tailor made
              </a>
            </li>
            <li>
              <a href="services.html" title="services">
                Services & Info
              </a>
              <ul>
                <li>
                  <a href="services.html#tab1" title="Private transfers">
                    Private transfers
                  </a>
                </li>
                <li>
                  <a href="services.html#tab2" title="Shuttle transfers">
                    Shuttle transfers
                  </a>
                </li>
                <li>
                  <a href="services.html#tab3" title="Limousine transfers">
                    Limousine transfers
                  </a>
                </li>
                <li>
                  <a href="blog.html" title="Blog">
                    Useful Information
                  </a>
                </li>
                <li>
                  <a href="blog2.html" title="Post">
                    Know Before Travel
                  </a>
                </li>
                <li>
                  <a href="faq.html" title="Faq">
                    Faq
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html" title="Contact">
                Contact
              </a>
            </li>
            <li>
              <a href="about.html" title="About us">
                About us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
