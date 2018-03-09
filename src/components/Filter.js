import React from 'react'
import { handleFilterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'

class Filter extends React.Component {
  
  handleChange = (event) => {
    event.preventDefault()
    this.props.handleFilterChange(event.target.value)    
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    message: state.message,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  handleFilterChange
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter) 

export default ConnectedFilter