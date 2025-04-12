import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Looks like you're lost... 🧐</p>
      <Link to="/" style={{ marginTop: '20px', display: 'inline-block', fontSize: '18px' }}>
        Go back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
