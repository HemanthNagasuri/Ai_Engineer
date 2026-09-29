export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technology: string;
  concepts: string[];
  fullDescription: string;
  pythonCode: string;
  interactiveType: 'voter' | 'calculator' | 'atm' | 'grade';
  githubAvailable: boolean;
}

export interface SkillItem {
  name: string;
  status: 'Learning' | 'Exploring' | 'Familiar' | 'Active Focus';
  description?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface RoadmapStage {
  phase: number;
  title: string;
  tag: string;
  status: 'Current Academic Focus' | 'Foundational Work' | 'In Progress' | 'Active Exploration' | 'Upcoming Horizon' | 'Long-Term Vision';
  description: string;
  topics: string[];
}

export interface HackathonLesson {
  title: string;
  description: string;
  takeaway: string;
}
