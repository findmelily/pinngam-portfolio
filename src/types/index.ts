import type { CSSProperties } from "react";

// ===== Hero Section Types =====
export interface HeroProps {
  loop: boolean;
  holdDelay: number;
}

export interface StatusProps {
  text: string;
  isAvailable: boolean;
  isTilted: boolean;
}

export interface TechIconConfig {
  key: string;
  alt: string;
  src: string;
  style: CSSProperties;
  anim: {
    y: number[];
    rotate: number[];
  };
  dur: number;
  delay: number;
  cls: string;
}

// ===== Card / Activity Types =====
export interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

export interface ActivityItem {
  image: string;
  title: string;
  description: string;
  alt: string;
}

// ===== Aboutme Types =====
export interface AboutmeData {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  resumePath: string;
  githubUrl: string;
  profileImage: string;
}

// ===== Navbar Types =====
export interface NavItem {
  name: string;
  href: string;
}

// ===== Experience Types =====
export interface WorkHistory {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface ExperienceData {
  title: string;
  workHistory: WorkHistory[];
}

// ===== Education Types =====
export interface EducationItem {
  period: string;
  university: string;
  faculty: string;
  degree: string;
  gpax: string;
  tetetScore: string;
  coursework: string[];
  logo?: string;
  honors?: string;
}

export interface EducationData {
  title: string;
  items: EducationItem[];
}

// ===== Project Types =====
export interface ProjectItem {
  title: string;
  role: string[];
  period: string;
  description: string[];
  skills: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectsData {
  title: string;
  items: ProjectItem[];
}
