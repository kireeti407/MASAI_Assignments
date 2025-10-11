import React from 'react';

const Student = ({ student, onIncreaseMarks }) => {
  console.log(`Student component rendered: ${student.name}`);
  return (
    <div className="student">
      <span>{student.name}</span>
      <span>{student.marks}</span>
      <button onClick={() => onIncreaseMarks(student.id)}>+</button>
    </div>
  );
};

export default React.memo(Student);