import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const styleShow = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    const styleHide = {
      border: 'no',
      padding: 0,
      borderWidth: 0
    }

    const message = this.props.message

    if (message.message !== '') {
      return (
        <div style={styleShow}>
          {message.message}
        </div>   
      )
    } else {
      return (
        <div style={styleHide}>
          {message.message}
        </div>
      )
    }
    
  }
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    message: state.message,
    filter: state.filter
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification) 

export default ConnectedNotification
