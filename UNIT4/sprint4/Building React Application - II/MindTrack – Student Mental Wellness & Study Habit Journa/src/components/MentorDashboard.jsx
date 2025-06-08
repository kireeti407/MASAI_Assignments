
import React from "react";
import MentorCommentBox from "../components/MentorCommentBox";
const MentorDashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Mentor Dashboard</h2>
      {/* Example: List of student logs */}
      <MentorCommentBox studentId="123" />
    </div>
  );
};

export default MentorDashboard;
