import React from 'react';

export default class VendorStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amazon: {},
      google: {}
    }
  }

  componentDidMount() {
    this.getStatus('v1/amazon-status');
    // this.statusId = setInterval(
    //   () => fetch('v1/amazon-status').then(response => console.log(response)),
    //   1000
    // );
  }

  componentWillUnmount() {
    clearInterval(this.statusId);
  }

  getStatus(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          amazon: data
        })
      });
  }

  render() {
    return (
      <>
        <p>URL: {this.state.amazon.url}</p>
        <p>Status code: {this.state.amazon.statusCode}</p>
        <p>Request duration: {this.state.amazon.duration} ms</p>
        <p>Date: {this.state.amazon.date}</p>
      </>
    );
  }
}
