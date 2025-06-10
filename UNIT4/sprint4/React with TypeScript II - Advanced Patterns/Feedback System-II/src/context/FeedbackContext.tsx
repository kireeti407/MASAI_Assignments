import React, { createContext, useContext, useState, ReactNode } from "react";

type FeedbackData = {
  name: string;
  email: string;
  rating: number | '';
  feedback: string;
};

type FeedbackContextType = {
  data: FeedbackData;
  setData: (data: FeedbackData) => void;
};

const defaultData: FeedbackData = {
  name: "",
  email: "",
  rating: '',
  feedback: "",
};

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<FeedbackData>(defaultData);

  return (
    <FeedbackContext.Provider value={{ data, setData }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) throw new Error("useFeedback must be used within FeedbackProvider");
  return context;
};
