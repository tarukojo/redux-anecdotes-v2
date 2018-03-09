import React from 'react'
import { handleSubmit } from '../reducers/anecdoteReducer'
import { handleSubmitMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {

  createNew = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    const newAnecdote = await anecdoteService.createNew(content)
    console.log(newAnecdote)
    this.props.handleSubmit(newAnecdote)
    
    this.props.handleSubmitMessage('New message created:'+ content)
    
    setTimeout(() => {
      this.props.handleSubmitMessage('')
    }, 5000)
    
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
