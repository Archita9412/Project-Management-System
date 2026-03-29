export interface Project {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  taskCount: number;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in_progress" | "done";
  assignee?: string;
  subtasks: Subtask[];
  createdAt: string;
}

export interface Subtask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  role: "admin" | "project_admin" | "member";
  avatar?: string;
}

export const mockProjects: Project[] = [
  { id: "1", name: "Website Redesign", description: "Complete overhaul of the company website with new branding", memberCount: 5, taskCount: 12, createdAt: "2026-03-15" },
  { id: "2", name: "Mobile App v2", description: "Second iteration of the mobile application with new features", memberCount: 8, taskCount: 24, createdAt: "2026-03-10" },
  { id: "3", name: "API Integration", description: "Third-party API integration for payment processing", memberCount: 3, taskCount: 7, createdAt: "2026-03-20" },
  { id: "4", name: "Design System", description: "Build a comprehensive design system for all products", memberCount: 4, taskCount: 16, createdAt: "2026-03-01" },
];

export const mockTasks: Task[] = [
  { id: "t1", title: "Design homepage mockups", description: "Create high-fidelity mockups for the new homepage layout", status: "done", assignee: "Alice", subtasks: [{ id: "s1", title: "Desktop layout", isCompleted: true }, { id: "s2", title: "Mobile layout", isCompleted: true }], createdAt: "2026-03-16" },
  { id: "t2", title: "Implement authentication flow", description: "Build login, register, and password reset pages", status: "in_progress", assignee: "Bob", subtasks: [{ id: "s3", title: "Login page", isCompleted: true }, { id: "s4", title: "Register page", isCompleted: false }, { id: "s5", title: "Password reset", isCompleted: false }], createdAt: "2026-03-17" },
  { id: "t3", title: "Set up CI/CD pipeline", description: "Configure automated testing and deployment pipeline", status: "todo", assignee: "Charlie", subtasks: [], createdAt: "2026-03-18" },
  { id: "t4", title: "Database schema design", description: "Design and implement the database schema for user data", status: "todo", subtasks: [{ id: "s6", title: "ERD diagram", isCompleted: false }], createdAt: "2026-03-19" },
  { id: "t5", title: "Write API documentation", description: "Document all API endpoints with examples", status: "in_progress", assignee: "Diana", subtasks: [], createdAt: "2026-03-20" },
];

export const mockMembers: Member[] = [
  { id: "m1", name: "Alice Chen", email: "alice@example.com", role: "admin" },
  { id: "m2", name: "Bob Smith", email: "bob@example.com", role: "project_admin" },
  { id: "m3", name: "Charlie Park", email: "charlie@example.com", role: "member" },
  { id: "m4", name: "Diana Ross", email: "diana@example.com", role: "member" },
  { id: "m5", name: "Evan Lee", email: "evan@example.com", role: "member" },
];

export const mockNotes: Note[] = [
  { id: "n1", title: "Sprint Planning Notes", content: "Focus on authentication and core UI components this sprint. Target completion by end of week.", createdAt: "2026-03-16" },
  { id: "n2", title: "Design Review Feedback", content: "Client approved the blue color palette. Proceed with implementation. Minor adjustments needed on mobile nav.", createdAt: "2026-03-18" },
];
