import React from 'react'

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

    const messages = this.props.store.getState().message
    
    
    if (messages.message !== '') {
      return (
      <div style={styleShow}>
        {messages.message}
      </div>   
      )
    } else {
      return (
        <div style={styleHide}>
          {messages.message}
        </div>
      )
    }
    
  }
}

export default Notification
