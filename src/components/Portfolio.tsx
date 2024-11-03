import React from 'react';
import '../index.css';

interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  deployedUrl: string;
  githubUrl: string;
}

const Portfolio: React.FC = () => {
  // Sample portfolio items - replace with your actual data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Weather App (Coming Soon)",
      imageUrl: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png",
      deployedUrl: "https://project1.com",
      githubUrl: "https://github.com/AttackOnBaron-BC/tianqiyubao"
    },
    {
      id: 2,
      title: "Employee Management System",
      imageUrl: "https://cdn0.iconfinder.com/data/icons/project-management-81/64/Employee-management-monitor-selection-organization-512.png",
      deployedUrl: "https://project2.com",
      githubUrl: "https://github.com/AttackOnBaron-BC/empolyee-management-system"
    },
    {
      id: 3,
      title: "Car Builder",
      imageUrl: "https://c8.alamy.com/comp/T75CMW/car-robot-factory-icon-simple-illustration-of-car-robot-factory-vector-icon-for-web-design-isolated-on-white-background-T75CMW.jpg",
      deployedUrl: "https://project2.com",
      githubUrl: "https://github.com/AttackOnBaron-BC/carbuilder"
    },
    {
      id: 4,
      title: "Super Readme.md Generator",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2620/2620624.png",
      deployedUrl: "https://project2.com",
      githubUrl: "https://github.com/AttackOnBaron-BC/supergenerator"
    },
    {
      id: 5,
      title: "Random Quiz",
      imageUrl: "https://www.shutterstock.com/shutterstock/photos/2187584333/display_1500/stock-vector-random-loot-mystery-box-icon-vector-illustration-in-flat-style-2187584333.jpg",
      deployedUrl: "https://project2.com",
      githubUrl: "https://github.com/AttackOnBaron-BC/randomQuiz"
    },
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-heading">Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <div className="portfolio-item-content">
              <img src={item.imageUrl} alt={item.title} className="portfolio-image" />
              <h3 className="portfolio-title">{item.title}</h3>
              <div className="portfolio-links">
                <a href={item.deployedUrl} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                  Deployed App
                </a>
                <a href={item.githubUrl} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;