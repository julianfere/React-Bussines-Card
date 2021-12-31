import React from "react";

export default function MainInfo() {
  return (
    <div className="main-info">
      <h1>Julian Feregotti</h1>
      <p>Software Developer</p>
      <a href="https://www.instagram.com/julianferegotti/?hl=es-la">pingardium.leviosa</a>
      <div className="contact-links">
        <a href="#" className='link email'><i class="fas fa-envelope"></i>Email</a>
        <a href="https://www.linkedin.com/in/juli%C3%A1n-feregotti-37a274201/" className='link linked'><i class="fab fa-linkedin"></i>LinkedIn</a>
      </div>
      <div className="info-container">
        <h2>About</h2>
        <p>
          I am a Backend Developer with learning frontend. I have a passion for creating beautiful and
          functional websites and applications.
        </p>
        <h2>Interests</h2>
        <p>
          I love to create and build things. 
          I am a big fan of the pingardium.leviosa
        </p>
      </div>
    </div>
  )
}