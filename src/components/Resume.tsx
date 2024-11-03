import React from 'react';
import { Briefcase, GraduationCap, Code, Wrench } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="https://docs.google.com/document/d/1YaD_u6YO3frqIcxr4CdbOgowgMZ_xSX2IwtKALoQfFk/edit?usp=sharing" target="_blank" download>Download Resume</a>

    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 bg-white shadow-lg rounded-lg">
        {/* Header Section */}
        <div>
          <h1 className="text-gray-600">Attack on Baron</h1>
          <p className="text-gray-600">Software Engineer</p>
          <p className="text-gray-600">hezuole@gmail.com</p>
        </div>

        {/* Skills Section */}
        <section className="py-6 border-b border-gray-200">
          <div className="flex items-center mb-4">
            <Code className="mr-2 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2 text-gray-700">Programming Languages</h3>
              <p className="text-gray-600">C#, Java, SQL, MySQL, Javascript, HTML, Typescript, ReactJS</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-700">IDE</h3>
              <p className="text-gray-600">Microsoft Visual Studio, Eclipse, Microsoft SQL Server, Snowflake</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-700">Experience</h3>
              <p className="text-gray-600">ASP.NET, Responsive Web Development, Agile Methodology, TDD, Scrum</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-700">Version Control</h3>
              <p className="text-gray-600">Microsoft Azure, Git, Jira</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-6 border-b border-gray-200">
          <div className="flex items-center mb-4">
            <GraduationCap className="mr-2 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">University of Mary Hardin-Baylor</h3>
              <p className="text-gray-600">Master's Degree in Information System</p>
              <p className="text-gray-500">Coursework: Database Design, SAP, Advanced Programming in Java</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-6 border-b border-gray-200">
          <div className="flex items-center mb-4">
            <Briefcase className="mr-2 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800">Software Engineer</h3>
              <p className="text-gray-600">Texas Department of Juvenile Justice, Austin | April 2020 - Sep 2023</p>
              <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
                <li>Implemented emergency SQL function for Azure SQL Server database optimization, removing 9M+ redundant records</li>
                <li>Developed responsive web pages with C# .NET and MVC, improving system responsiveness by 20%</li>
                <li>Created SharePoint website prototype with custom web parts and workflows</li>
                <li>Optimized database queries using ADO.NET, achieving 30% performance improvement</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Device & Software Engineer</h3>
              <p className="text-gray-600">ZTE, Seattle | July 2017 - Jan 2018</p>
              <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
                <li>Developed solution for seamless call transfer between cellular networks and Wi-Fi</li>
                <li>Configured network testing parameters using Android Studio</li>
                <li>Created web application for testing data using Java and MySQL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Software Engineer</h3>
              <p className="text-gray-600">South Carolina Department of Juvenile Justice, Columbia | Sep 2015 - Nov 2016</p>
              <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
                <li>Migrated legacy web application to ASP.NET MVC 4, improving maintainability by 40%</li>
                <li>Led database migration to SQL Server 2012, improving system performance by 20%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Projects Section */}
        <section className="py-6">
          <div className="flex items-center mb-4">
            <Wrench className="mr-2 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Current Projects</h2>
          </div>
          <div>
            <p className="text-gray-600">Supporting ZTE testing system using Java/Python, SpringBoot</p>
            <p className="text-gray-600">Developing server temperature Analyst application using ASP.Net</p>
          </div>
        </section>
      </div>
    </div>
    </section>
  );
};

export default Resume;
