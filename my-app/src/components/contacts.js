// src/components/contacts.js

import React from 'react'
import Card from 'react-bootstrap/Card';

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
      {contacts.map((contact, index) => (
        <Card key={index}>
          <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Subtitle>{contact.email}</Card.Subtitle>
          <Card.Text>{contact.company.catchPhrase}</Card.Text>
            </Card.Body>
        </Card>

      ))}
    </div>
  )
};

export default Contacts