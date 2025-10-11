"""import React, { useState, useMemo, useCallback } from 'react';
import { generateStudents } from './utils/helpers';
import Header from './components/Header';
import StudentList from './components/StudentList';
import './App.css';

const App = () => {
  const [students, setStudents] = useState(generateStudents());

  const handleIncreaseMarks = useCallback((id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, marks: student.marks + 1 } : student
      )
    );
  }, []);

  const { averageMarks, topper } = useMemo(() => {
    console.log('Calculating average and topper');
    const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
    const averageMarks = totalMarks / students.length;
    const topper = students.reduce((prev, current) =>
      prev.marks > current.marks ? prev : current
    ).name;
    return { averageMarks, topper };
  }, [students]);

  return (
    <div className="App">
      <h1>Student Marks Dashboard</h1>
      <Header averageMarks={averageMarks} topper={topper} />
      <StudentList students={students} onIncreaseMarks={handleIncreaseMarks} />
    </div>
  );
};

export default App;
""