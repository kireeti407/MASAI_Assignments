export enum Priority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export interface Task {
  id: number;
  description: string;
  completed: boolean;
  priority: Priority;
}
