import React from 'react';
import './index.css';

function ShowStatus(props) {
  const {
    date,
    duration,
    statusCode,
    url
  } = props;

  // Remove protocol and www from URL to output a more readable vendor name.
  const vendor = url.split('https://www.')[1];

  // Readable date format.
  const dateString = new Date(date).toLocaleString();
  
  // Class to style OK versus error status codes.
  const statusClass = statusCode === 200 ? 'status status--ok' : 'status status--error';

  return (
    <div className="vendor-status">
      <h2>{vendor}</h2>
      <p>Status: <span className={statusClass}>{statusCode}</span></p>
      <p>Request duration: {duration} ms</p>
      <p>Accessed at: {dateString}</p>
    </div>
  )
}

export default ShowStatus;
