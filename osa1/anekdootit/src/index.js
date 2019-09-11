import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const HighestVote = (votes, anecdote) => {
    let i = votes.indexOf(Math.max(...votes))
    
    return (
        <>
            <h1>Anecdote with most votes</h1>
            <p>{anecdote[i]}</p>
            <p>has {votes[i]} votes</p>
        </>
    )
  }

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
      ]

    const len = anecdotes.length;

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(len).fill(0))

    const randomAnecdote = () => setSelected(Math.floor(Math.random() * len))

    const Vote = (selected) => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
      }

    return (
        <div>
            <h1>Anecdote of the day</h1>
                <p>{anecdotes[selected]}</p>
                <p>has {votes[selected]} votes</p>
                <button onClick={() => Vote(selected)}>Vote</button>
                <button onClick={randomAnecdote}>Next anecdote</button>
                <div>{HighestVote(votes, anecdotes)}</div>
        </div>
        )
    }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)