import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MyCard(props) {
  return (
    <Card className="my-card" style={{ width: '25rem' }}>
      <Card.Img variant="top" className="card-image" src="https://i.imgur.com/5UJcfuc.jpeg" />
      <div className="image"></div>
      <Card.Body>
        <Card.Title>
          <center>
            Card Title
            </center>
        </Card.Title>
        <Card.Text>
          <center>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </center>
        </Card.Text>
        <center>
          <Button variant="secondary">Go somewhere</Button>
        </center>
      </Card.Body>
    </Card>
  )
}

export default MyCard;