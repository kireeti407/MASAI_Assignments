// src/pages/Dashboard.jsx
import React from "react";
import HabitTracker from "../components/HabitTracker";
import JournalEditor from "../components/JournalEditor";
import Heatmap from "../components/Heatmap";
import StreakCounter from "../components/StreakCounter";
const Dashboard = () => {
  return (
    <div className="p-4 space-y-6">
      <StreakCounter />
      <HabitTracker />
      <JournalEditor />
      <Heatmap />
    </div>
  );
};

export default Dashboard;
