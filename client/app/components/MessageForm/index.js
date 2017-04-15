import React, {Component} from 'react'
import $ from 'jquery'

class MessageForm extends Component {
  onSubmit() {
    const {actions} = this.props
    $.ajax({
      type: 'POST',
      url: '/api/messages',
      data: {
        message: {text: this.textMessage.value}
      },
      success: ((data) => actions.addMessage(data))
    })
  }

  onUpdate() {
    const { actions, message } = this.props
    $.ajax({
      type: 'PUT',
      url: `/api/messages/${message.id}`,
      data: {
        message: {text: this.textMessage.value}
      },
      success: (() => actions.updateMessage(message.id, this.textMessage.value))
    })
  }

  toggle() {
    const {actions, message} = this.props
    actions.toggleDisplayState(message.id)
  }

  render() {
    const { message } = this.props
    const cancelButton = message ? <input type="submit" value="キャンセル" onClick={this.toggle.bind(this)}/> : ''
    return (
      <div>
        <textarea rows="4" cols="40" ref={(input) => {
          this.textMessage = input
        }} defaultValue={message ? message.text : ''} />
        {cancelButton}
        <input type="button" value={message ? '編集' : '登録'} onClick={message ? this.onUpdate.bind(this) : this.onSubmit.bind(this)}/>
      </div>
    )
  }
}

export default MessageForm