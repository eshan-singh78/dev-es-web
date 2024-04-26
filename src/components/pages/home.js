import React from 'react';
import { FaLaptop, FaDesktop, FaCode, FaGlobe, FaGithub, FaDiscord, FaYoutube, FaDocker } from 'react-icons/fa';
import './home.css';
import placeholderImage from '../assets/homeimg.jpg';

function Home() {
  const icons = [
    FaLaptop,
    FaDesktop,
    FaCode,
    FaGlobe,
    FaGithub,
    FaDiscord,
    FaYoutube,
    FaDocker
  ];

  const getRandomPosition = () => {
    const x = Math.random() * (window.innerWidth - 50); 
    const y = Math.random() * (window.innerHeight - 50); 
    return { x, y };
  };

  const renderIcons = () => {
    return icons.map((Icon, index) => {
      const { x, y } = getRandomPosition();
      const opacity = Math.random() * 0.5 + 0.5; 

      const style = {
        left: `${x}px`,
        top: `${y}px`,
        opacity: opacity
      };

      return (
        <Icon key={index} className="icon" style={style} />
      );
    });
  };

  return (
    <div className="home-container" style={{ height: 'calc(100vh - 80px)' }}> 
      <div className="card" style={{ width: '400px', height: '300px' }}>
        <img src={placeholderImage} alt="Placeholder" className="placeholder-image" />
        <div className="welcome-text">
          <h2>Hi there!</h2>
          <p>Welcome to the official site of Dev Eshan. You all can leave your project ideas here, or can explore the site for a while!</p>
        </div>
      </div>
      {renderIcons()}
    </div>
  );
}

export default Home;
