import React from 'react'
import { handleVoteMessage } from '../reducers/notificationReducer'
import { handleVoteAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteList extends React.Component {

  handleVote =  (id, content) => async () => {
    console.log('handleVote')
    const anecdote = this.props.visibleAnecdotes.find(anecdote => anecdote.id === id)
    const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }

    this.props.handleVoteAnecdote(changedAnecdote)
    
    this.props.handleVoteMessage('Voted anecdote: '+ content)
    
    setTimeout(() => {
      this.props.handleVoteMessage('')
    }, 5000)
  }

  render() {
    const anecdotes = this.props.visibleAnecdotes
    
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
const anecdotesToShow = (anecdotes, filter) => {
  if (filter.filter !== '') {
    return anecdotes.filter(anecdote => anecdote.content.includes(filter.filter))
  } else {
    return anecdotes
  }
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const mapDispatchToProps = {
  handleVoteAnecdote, handleVoteMessage
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList) 

export default ConnectedAnecdoteList
