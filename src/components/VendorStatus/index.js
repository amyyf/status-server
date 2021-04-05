import React from 'react';
import ShowStatus from '../ShowStatus';

export default class VendorStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'v1/all-status', // Calls only one endpoint to not duplicate front-end data
      vendors: []
    }
  }

  componentDidMount() {
    // Get data when component mounts to populate components.
    this.getStatus(this.state.endpoint);
    // Set interval to fetch data once a minute.
    this.statusId = setInterval(
      () => this.getStatus(this.state.endpoint),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.statusId);
  }

  // Fetch endpoint status from API and set state.
  getStatus(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          vendors: data
        })
      });
  }

  render() {
    return (
      <>
        {
          // Loading state.
          !this.state.vendors.length
          && <p>Fetching data...</p>
        }
        {
          // Show status when we have data.
          this.state.vendors.length
          && this.state.vendors.map((vendor, index) => (
            <ShowStatus
              date={vendor.date}
              duration={vendor.duration}
              key={index}
              statusCode={vendor.statusCode}
              url={vendor.url}
            />
          ))
        }
      </>
    );
  }
}
