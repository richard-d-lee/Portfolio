import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MyCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className="card-image" src="https://i.imgur.com/5UJcfuc.jpeg" />
      <div className="image"></div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default MyCard;