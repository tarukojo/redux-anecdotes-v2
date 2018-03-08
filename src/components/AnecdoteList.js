import React from 'react'
import { handleVoteMessage } from '../reducers/notificationReducer'
import { handleVoteAnecdote } from '../reducers/anecdoteReducer'

class AnecdoteList extends React.Component {

  handleVote = (id, content) => () => {
    console.log('handleVote')
    this.props.store.dispatch( 
      handleVoteAnecdote(id)
    )
    this.props.store.dispatch(
      handleVoteMessage('Voted message '+ content)
    )
    setTimeout(() => {
      this.props.store.dispatch(handleVoteMessage(''))
    }, 5000)
  }

  render() {
    var anecdotes = this.props.store.getState().anecdotes
    
    if (this.props.store.getState().filter.filter !== '') {
      console.log(this.props.store.getState().filter)
      anecdotes = anecdotes.filter(anecdote => anecdote.content.includes(this.props.store.getState().filter.filter))
    }

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.handleVote(anecdote.id, anecdote.content)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
