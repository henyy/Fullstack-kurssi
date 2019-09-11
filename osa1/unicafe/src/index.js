import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>
          {value}
        </td>
      </tr>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const sumGoodAndBad = good + bad
  const positive = (good/all) * 100 + ' %'
  const average = Math.round(((good - bad) / sumGoodAndBad) * 100) / 100

  if(all === 0){
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>)
  }
    return(
      <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </>
    )
  }


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>Give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text="Good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button onClick={() => setBad(bad + 1)} text="Bad" />
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)