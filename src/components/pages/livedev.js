import { FaLaptop, FaDesktop, FaCode, FaGlobe, FaGithub, FaDiscord, FaYoutube, FaDocker } from 'react-icons/fa';
import './livedev.css';

function LiveDev() {

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
    <div className="live-dev-container">
      <div className="home-container" style={{ height: 'calc(50vh - 80px)' }}>
        {renderIcons()}
      </div>
      <div className="twitch-container">
        <div className="twitch-embed">
          <iframe
            title="Twitch Stream"
            src="https://player.twitch.tv/?channel=eshan_singh&parent=dev-es-web.netlify.app"
            frameBorder="0"
            allowFullScreen="true"
            scrolling="no"
            height="378"
            width="620">
          </iframe>
        </div>
        <div className="twitch-chat">
          <iframe
            title="Twitch Chat"
            id="chat_embed"
            src="https://www.twitch.tv/embed/eshan_singh/chat?parent=dev-es-web.netlify.app"
            height="500"
            width="350">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default LiveDev;
