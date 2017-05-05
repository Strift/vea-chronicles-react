import React, {Component} from 'react'

export default class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: this.props.delay > 0 ? false : true
    }
    this.initDelay()
  }

  initDelay = () => {
    if (this.props.delay > 0) {
      setTimeout(this.handleTimeout, this.props.delay)
    }
  }

  handleTimeout = () => {
    this.setState({ visible: true })
  }

  renderContent = () => {
    return <span>{this.props.content}</span>
  }

  render() {
    return <span>{this.state.visible && this.renderContent()}</span>
  }
}

Message.defaultProps = {
  delay: 0
}