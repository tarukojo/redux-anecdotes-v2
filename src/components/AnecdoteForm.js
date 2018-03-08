import React from 'react'
import { handleSubmit } from '../reducers/anecdoteReducer'
import { handleSubmitMessage } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {

  createNew = (event) => {
    event.preventDefault()
    this.props.store.dispatch(
      handleSubmit(event.target.anecdote.value)
    )
    this.props.store.dispatch(
      handleSubmitMessage('New message created:'+ event.target.anecdote.value)
    )
    setTimeout(() => {
      this.props.store.dispatch(handleSubmitMessage(''))
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

export default AnecdoteForm
