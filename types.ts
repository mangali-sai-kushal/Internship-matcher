
export interface User {
  id: string;
  name: string;
  email: string;
  profileCompleted: boolean;
  resume?: string;
  skills?: string[];
  education?: string;
}

export interface Internship {
  id: string;
  companyName: string;
  role: string;
  location: string;
  stipend: string;
  description: string;
  applyLink: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export type ViewState = 'intro' | 'signin' | 'signup' | 'home' | 'profile' | 'match' | 'msg';
