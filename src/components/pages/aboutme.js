import React, { useState, useEffect } from 'react';
import { FaLaptop, FaDesktop, FaCode, FaGlobe, FaGithub, FaDiscord, FaYoutube, FaDocker } from 'react-icons/fa';
import './aboutme.css';

function useTypewriterEffect(words, speed) {
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [typing, setTyping] = useState(true);
  const [disappearing, setDisappearing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typing) {
        if (currentWord === words[index]) {
          setTyping(false);
          setDisappearing(true);
          setTimeout(() => {
            setDisappearing(false);
            setTimeout(() => {
              setTyping(true);
              setCurrentWord('');
              setIndex((prevIndex) => (prevIndex + 1) % words.length);
            }, 500); // Pause before starting next word
          }, 1000); // Time for word to stay before disappearing
        } else {
          setCurrentWord((prevWord) => prevWord + words[index][prevWord.length]);
        }
      } else if (disappearing) {
        if (currentWord === '') {
          setDisappearing(false);
        } else {
          setCurrentWord((prevWord) => prevWord.slice(0, -1));
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, currentWord, words, speed, typing, disappearing]);

  return currentWord;
}

function Aboutme() {
  const words = ["Developer", "Tech Geek", "Cyber Security Enthusiast"];
  const currentWord = useTypewriterEffect(words, 150);

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

  const iconPositions = [
    { left: '100px', top: '100px' },
    { left: '200px', top: '200px' },
    { left: '300px', top: '400px' },
    { left: '1250px', top: '300px' },
    { left: '500px', top: '450px' },
    { left: '1200px', top: '50px' },
    { left: '700px', top: '90px' },
    { left: '1000px', top: '80px' },
  ];

  const renderIcons = () => {
    return icons.map((Icon, index) => {
      const { left, top } = iconPositions[index];
      const style = {
        left,
        top,
      };
      return (
        <Icon key={index} className="icon" style={style} />
      );
    });
  };

  return (
    <div className="home-container" style={{ height: 'calc(100vh - 80px)' }}> 
      <div className="card" style={{ width: '400px', height: '300px' }}>
        <div className="about-text">
          <h2>Who am I?</h2>
          <h3>I am a {currentWord}</h3>
          <p>My name is Eshan Singh and I belong from Kanpur,Uttar Pradesh. I have devoted my last few years entirely into understanding the various field of tech to its core and now finally I atleast know something new which I can impart to other's to make their tech journey smooth. Join me! I will be posting content on Youtube/Instagram and projects related to tech along with source code on github. You can check some of the recent projects on the Project tab on navigation bar and also can suggest some. So see ya'll soon!</p>
        </div>
      </div>
      {renderIcons()}
    </div>
  );
}

export default Aboutme;
