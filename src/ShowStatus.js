import React from 'react';

function ShowStatus(props) {
  const {
    date,
    duration,
    statusCode,
    url
  } = props;

  // Readable date format.
  const dateString = new Date(date).toLocaleString();
  
  // Class to style OK versus error responses.
  const statusClass = statusCode === 200 ? 'status--ok' : 'status--error';

  return (
    <div>
      <h2>{url}</h2>
      <p>Status: <span class={statusClass}>{statusCode}</span></p>
      <p>Request duration: {duration} ms</p>
      <p>Accessed at: {dateString}</p>
    </div>
  )
}

export default ShowStatus;
