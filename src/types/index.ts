import { Dispatch, SetStateAction } from 'react';

export type SectionType = 'About Me' | 'Portfolio' | 'Contact' | 'Resume';

export interface HeaderProps {
  currentSection: SectionType;
  setCurrentSection: Dispatch<SetStateAction<SectionType>>;
}

export interface Project {
  title: string;
  imageUrl: string;
  deployedLink: string;
  githubLink: string;
}

export interface FormState {
  name: string;
  email: string;
  message: string;
}