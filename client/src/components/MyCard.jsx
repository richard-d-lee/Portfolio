import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import gif from './giphy.gif'

function MyCard(props) {
  return (
    <div className="full-card">
      <Card className="my-card" style={{ width: '100%', backgroundColor: "black" }}>
        <Card.Img variant="top" className="card-image" src={gif} style={{ width: '25rem', height: 'auto'}}/>
        <Card.Body style={{ backgroundColor: '#333333'}}>
          <center>
            <Button variant="secondary">{props.link}</Button>
          </center>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MyCard;