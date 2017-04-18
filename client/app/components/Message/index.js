import React, {Component} from 'react'

class Message extends Component {

  toggle() {
    const {actions, message} = this.props
    actions.toggleDisplayState(message.id)
  }

  onDelete() {
    const {actions, message} = this.props

    $.ajax({
      type: 'DELETE',
      url: `/api/messages/${message.id}`,
      success: (() => actions.deleteMessage(message.id))
    })
  }

  render() {
    const {message} = this.props
    return (
      <div>
        <span onClick={this.toggle.bind(this)}>
          {message.text}</span>
        <a href="#" onClick={this.onDelete.bind(this)}>[削除]</a>
      </div>
    )
  }
}
export default Message