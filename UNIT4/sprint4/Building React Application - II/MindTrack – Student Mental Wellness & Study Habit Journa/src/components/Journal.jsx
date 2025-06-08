import React from "react";
import JournalEditor from "../components/JournalEditor";
const Journal = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Daily Reflection</h2>
      <JournalEditor />
    </div>
  );
};
export default Journal;