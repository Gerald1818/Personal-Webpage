import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function SubmissionSuccess() {
  const location = useLocation();
  const { name, email, message } = location.state;

  return (
    <Container className="container">
      <div class="panel">
        <center>
      <h1>Thank you, {name}!</h1>
      <p>Your message has been sent.</p>
      <h3>Details:</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
      </center>
      </div>
    </Container>
  );
}

export default SubmissionSuccess;
