import React from 'react';
import HeroBackground from '../../assets/images/hero.jpg';

const heroStyle = {
  backgroundImage: "url( " + HeroBackground + ")"
}

function Hero() {
  return (
    <section className="hero" style={heroStyle}>
      <div className="subtitle">
        <h2>Explicit Nerd, Closet Jock</h2>
      </div>
    </section>
  )
}

export default Hero;