import React, { Component } from 'react'
import $ from 'jquery'

class MessageForm extends Component {
  onSubmit() {
    const { actions } = this.props
    $.ajax({
      type: 'POST',
      url: '/api/messages',
      data: {
        message: {text: this.textMessage.value}
      },
      success: ((data) => actions.addMessage(data))
    })
  }

  render() {
    return (
      <div>
        <textarea rows="4" cols="40" ref={(input) => { this.textMessage =  input }} />
        <input type="button" value="登録" onClick={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default MessageForm