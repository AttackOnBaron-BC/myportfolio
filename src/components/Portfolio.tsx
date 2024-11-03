import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        {/* Repeat for each project */}
        <div className="portfolio-item">
          <img src="path/to/project-image.jpg" alt="Project Title" />
          <h3>Project Title</h3>
          <a href="link-to-deployed-app">Deployed App</a>
          <a href="link-to-github-repo">GitHub Repo</a>
        </div>
      </div>

      <div className="portfolio-items">
        {/* Repeat for each project */}
        <div className="portfolio-item">
          <img src="path/to/project-image.jpg" alt="Project Title" />
          <h3>Project Title</h3>
          <a href="link-to-deployed-app">Deployed App</a>
          <a href="link-to-github-repo">GitHub Repo</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
