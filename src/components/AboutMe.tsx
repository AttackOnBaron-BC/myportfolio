import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about">      
      <h2>About Me</h2>
      <div className="container">
        <img src="https://i.pinimg.com/564x/37/b1/92/37b192a7b75e9bac00b5ed3527852cd8.jpg" alt="Your Name" />
      
        <p className='text'>Attack on Baron (J) is a versatile Software Engineer with extensive experience in full-stack web development, specializing in C#, Java, TypeScript, and ReactJS. With expertise in ASP.NET, Entity Framework, and Blazor, J has successfully delivered numerous web applications and database solutions across both public and private sectors. Their technical prowess extends to cloud technologies through Microsoft Azure, coupled with strong database management skills in PostgreSQL, MSSQL, and MySQL. Throughout their career, J has demonstrated a consistent track record of optimizing system performance and developing responsive web solutions, achieving up to 40% improvement in code maintainability and 30% enhancement in database query performance. With a Master's degree in Information Systems, J continues to leverage their comprehensive technology stack to deliver efficient software solutions.</p>
      </div>
    </section>
  );
};

export default AboutMe;
