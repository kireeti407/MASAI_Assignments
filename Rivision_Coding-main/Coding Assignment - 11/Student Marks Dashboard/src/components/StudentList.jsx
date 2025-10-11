import React from 'react';
import Student from './Student';

const StudentList = ({ students, onIncreaseMarks }) => {
  console.log('StudentList component rendered');
  return (
    <div className="student-list">
      {students.map((student) => (
        <Student
          key={student.id}
          student={student}
          onIncreaseMarks={onIncreaseMarks}
        />
      ))}
    </div>
  );
};

export default React.memo(StudentList);