export interface FeedbackEntry {
  id: string;
  name: string;
  email: string;
  rating: number;
  feedback: string;
  date: string; // ISO string
}

export interface FeedbackState {
  feedbacks: FeedbackEntry[];
  filter: {
    rating?: number;
    date?: string;
  };
}
