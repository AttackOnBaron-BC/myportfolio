import React from 'react';

const Resume: React.FC = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="path/to/your-resume.pdf" download>Download Resume</a>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        <li>Proficiency 3</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
