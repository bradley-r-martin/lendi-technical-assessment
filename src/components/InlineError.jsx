import React from 'react';

const InlineError = ({ message = null }) => {
    return (message ? (
      <div className="text-xs text-red-400">
          { message }
      </div>
    ) : null)
}

export default InlineError;


