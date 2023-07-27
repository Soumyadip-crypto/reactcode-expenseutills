import React from 'react';

export default function Alert(props) {
  const { alert } = props;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        {alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  );
}

