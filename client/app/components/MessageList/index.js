import React, {Component} from 'react'
import Message from '../Message'
import MessageForm from '../MessageForm'
import $ from 'jquery'

class MessageList extends Component {

  componentDidMount() {
    const {actions} = this.props

    $.ajax(
      {
        type: 'GET',
        url: '/api/messages',
        success: ((data) => actions.createMessageList(data)),
      }
    )
  }

  renderMessage(actions, message) {
    return message.displayState ?
      <Message
        key={message.id}
        message={message}
        actions={actions}
      />
      :
      <MessageForm
        key={message.id}
        message={message}
        actions={actions}
      />

  }

  render() {
    const {messages, actions} = this.props
    return (
      <div>
        {
          messages.map(
            (message) => this.renderMessage(actions, message)
          )
        }
      </div>
    )
  }
}

export default MessageList