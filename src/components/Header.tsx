import { FC } from 'react';
import { HeaderProps, SectionType } from '../types';

const Header: FC<HeaderProps> = ({ currentSection, setCurrentSection }) => {
  const sections: SectionType[] = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header>
      <h1>Attack on Baron</h1>
      <nav>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            className={currentSection === section ? 'active' : ''}
          >
            {section}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;