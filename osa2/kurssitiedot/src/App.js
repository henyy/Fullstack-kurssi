import React from 'react'
import Course from './components/course.js'


const App = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course course={course} />
    </div>
  );
};

export default App;