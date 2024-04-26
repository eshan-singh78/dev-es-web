import { FaLaptop, FaDesktop, FaCode, FaGlobe, FaGithub, FaDiscord, FaYoutube, FaDocker } from 'react-icons/fa';
import { useState } from 'react'; 
import './connectus.css';

function Contactme() {
  const [status, setStatus] = useState(null); 

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
    { left: '350px', top: '450px' },
    { left: '1200px', top: '50px' },
    { left: '1300px', top: '90px' },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      senderName: formData.get('name'),
      senderEmail: formData.get('email'),
      subject: formData.get('subject'),
      text: formData.get('message')
    };

    try {
      const response = await fetch('https://adventurous-clam-pumps.cyclic.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        e.target.reset(); 
        alert('Email sent successfully!');
      } else {
        setStatus('Failed to send email. Please try again later.');
      }
    } catch (error) {
      setStatus('Error occurred. Please try again later.');
    }
  };

  return (
    <div className="home-container" style={{ height: 'calc(100vh - 80px)' }}>
      {renderIcons()}
      <div className="white-card" style={{ width: '500px', height: '400px' }}>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  );
}

export default Contactme;
