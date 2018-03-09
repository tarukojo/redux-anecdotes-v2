import React from 'react'
import { handleSubmit } from '../reducers/anecdoteReducer'
import { handleSubmitMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {

  createNew = (event) => {
    event.preventDefault()
    this.props.handleSubmit(event.target.anecdote.value)
    
    this.props.handleSubmitMessage('New message created:'+ event.target.anecdote.value)
    
    setTimeout(() => {
      this.props.handleSubmitMessage('')
    }, 5000)
    event.target.anecdote.value = ''
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.createNew}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
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
  handleSubmit, 
  handleSubmitMessage
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm
