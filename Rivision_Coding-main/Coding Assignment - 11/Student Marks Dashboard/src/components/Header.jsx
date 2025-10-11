import React from 'react';

const Header = ({ averageMarks, topper }) => {
  console.log('Header component rendered');
  return (
    <div className="header">
      <h2>Average Marks: {averageMarks.toFixed(2)}</h2>
      <h2>Topper: {topper}</h2>
    </div>
  );
};

export default React.memo(Header);