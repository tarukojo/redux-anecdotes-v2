import React from 'react'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    const messages = this.props.store.getState().message
    return (
      <div style={style}>
        {messages.message}
      </div>   
    )
  }
}

export default Notification
