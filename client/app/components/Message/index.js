import React, {Component} from 'react'

class Message extends Component {

  toggle(){
    const { actions, message } = this.props
    actions.toggleDisplayState(message.id)
  }

  render() {
    const { message } = this.props
    return (
      <div onClick={this.toggle.bind(this)}>{message.text}</div>
    )
  }
}
export default Message