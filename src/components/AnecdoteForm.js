import React from 'react'
import { handleSubmit } from '../reducers/anecdoteReducer'

class AnecdoteForm extends React.Component {

  createNew = (event) => {
    event.preventDefault()
    this.props.store.dispatch(
      handleSubmit(event.target.anecdote.value)
    )
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
