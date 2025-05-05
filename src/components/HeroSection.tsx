
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
}) => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container text-center text-white z-10">
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 opacity-90 animate-fade-in">
          {subtitle}
        </p>
        <div className="animate-fade-in">
          <Link
            to={buttonLink}
            className="btn btn-primary px-8 py-3 text-lg"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
