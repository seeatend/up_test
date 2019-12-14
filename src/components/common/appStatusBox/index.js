import React from 'react'

class AppStatusBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'off'
    }
  }

  componentDidMount() {
    this.setState({ status: this.props.appStatus })
  }

  render() {
    return (
      <div className="app-status-box">
        <div className={`status bold off ${this.state.status === 'off' ? 'active' : ''}`} onClick={() => this.setState({ status: 'off' })}>Off</div>
        <div className={`status bold sandbox ${this.state.status === 'sandbox' ? 'active' : ''}`} onClick={() => this.setState({ status: 'sandbox' })}>Sandbox</div>
        <div className={`status bold live ${this.state.status === 'live' ? 'active' : ''}`} onClick={() => this.setState({ status: 'live' })}>Live</div>
      </div>
    );
  }
}

export default AppStatusBox;