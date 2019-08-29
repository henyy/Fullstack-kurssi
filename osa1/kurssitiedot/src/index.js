import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}


const Content = (props) => {
  return (
    <>
      <p>{props.parts}</p>
    </>
  )
}


const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const parts = <>
                  <p>{course.parts[0].name + " " + course.parts[0].exercises}</p>
                  <p>{course.parts[1].name + " " + course.parts[1].exercises}</p>
                  <p>{course.parts[2].name + " " + course.parts[2].exercises}</p>
                </>

  return (
    <div>
      <Header course={course.name} />
      <Content parts={parts} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))