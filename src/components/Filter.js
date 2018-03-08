import React from 'react'
import { handleFilterChange } from '../reducers/filterReducer'

class Filter extends React.Component {
  
  handleChange = (event) => {
    event.preventDefault()
    this.props.store.dispatch(
      handleFilterChange(event.target.value)
    )
  }

  render() {
    const style = {
      marginTop: 10,
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Filter