import React from "react";

const Course = props => {
  const course = () =>
    props.course.map(part => (
      <div key={part.id}>{<Courses course={part} />}</div>
    ));

  return <>{course()}</>;
};

const Courses = props => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content course={props.course.parts} />
      <Total total={props.course.parts} />
    </div>
  );
};

const Header = props => {
  return <h2> {props.course} </h2>;
};

const Content = ({ course }) => {
  const content = () =>
    course.map(c => (
      <p key={c.id}>
        {c.name} {c.exercises}
      </p>
    ));

  return <div>{content()}</div>;
};

const Total = ({ total }) => {
  const totalAmount = total.reduce((sum, e) => {
    return sum + e.exercises;
  }, 0);
  return (
    <div>
      <p>
        <b>Total of {totalAmount} exercises</b>
      </p>
    </div>
  );
};

export default Course;