import React from 'react'
import { handleVoteMessage } from '../reducers/notificationReducer'
import { handleVoteAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {

  handleVote = (id, content) => () => {
    console.log('handleVote')
    this.props.handleVoteAnecdote(id)
    
    this.props.handleVoteMessage('Voted message '+ content)
    
    setTimeout(() => {
      this.props.handleVoteMessage('')
    }, 5000)
  }

  render() {
    var anecdotes = this.props.anecdotes
    
    if (this.props.filter.filter !== '') {
      console.log(this.props.filter)
      anecdotes = anecdotes.filter(anecdote => anecdote.content.includes(this.props.filter.filter))
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    message: state.message,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  handleVoteAnecdote, handleVoteMessage
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList) 

export default ConnectedAnecdoteList
