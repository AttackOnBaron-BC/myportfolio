import { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './index.css';

type SectionType = 'About Me' | 'Portfolio' | 'Contact' | 'Resume';

const App = () => {
  const [currentSection, setCurrentSection] = useState<SectionType>('About Me');

  const renderSection = () => {
    switch(currentSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="App">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;