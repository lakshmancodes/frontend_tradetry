import React from 'react';

function StatusIndicator({ status }) {
  return status ? (
    <div className="mt-4 text-blue-500">{status}</div>
  ) : null;
}

export default StatusIndicator;
