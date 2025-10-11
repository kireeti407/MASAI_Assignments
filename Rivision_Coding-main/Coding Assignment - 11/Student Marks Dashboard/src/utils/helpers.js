
export const generateStudents = () => {
  const students = [];
  for (let i = 1; i <= 1000; i++) {
    students.push({
      id: i,
      name: `Student ${i}`,
      marks: Math.floor(Math.random() * 101),
    });
  }
  return students;
};
