import { FaLaptop, FaDesktop, FaCode, FaGlobe, FaGithub, FaDiscord, FaYoutube, FaDocker } from 'react-icons/fa';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import './project.css';

function Aboutme() {

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
    { left: '250px', top: '200px' },
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

  const projects = [
    {
      title: "First Portfolio!",
      link: "https://github.com/eshan-singh78/es_web_html-css",
      description: "This is the source code of my portfolio made on Html, Css and JS!"
    },
    {
      title: "To-Do Gui!",
      link: "https://github.com/eshan-singh78/todo-gui-cpp",
      description: "This is a to-do gui app built upon c++ using windows sdk!"
    },
    {
      title: "VE-Compiler [NPM package]",
      link: "https://www.npmjs.com/package/ve-compiler",
      description: "This is a code compiling package for JS!"
    },
    {
      title: "Server - VE-Compiler",
      link: "https://github.com/eshan-singh78/server-ve-compiler",
      description: "Express server built using VE-Compiler"
    },
    {
      title: "Client - VE-Compiler",
      link: "https://github.com/eshan-singh78/client-ve-vompiler",
      description: "Online IDE client using server-ve-compiler, built on React"
    },
    {
      title: "SMTP-MAIL Api",
      link: "https://github.com/eshan-singh78/mail-api-ser-public",
      description: "Source code for SMTP Mail api which uses google smtp credentials"
    },
    {
      title: "Gui Calculator",
      link: "https://github.com/eshan-singh78/calculator-gui-cpp",
      description: "This is a calculator gui app built upon c++ using windows sdk!"
    },
  ];

  const renderProjectCards = () => {
    return projects.map((project, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Card className="card">
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom fontSize={18}>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="p">
              <a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>
            </Typography>
            <Typography variant="body2" color="text.secondary" component="p">
              {project.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <div className="home-container" style={{ height: 'calc(100vh - 80px)' }}>
      <Grid container spacing={3}>
        {renderProjectCards()}
      </Grid>
      {renderIcons()}
    </div>
  );
}

export default Aboutme;
