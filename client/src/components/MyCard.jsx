import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import gif from './gif.gif'

function MyCard(props) {
  return (
    <div className="full-card">
      <Card className="my-card" style={{ width: '25rem', backgroundColor: "black" }}>
        <Card.Img variant="top" className="card-image" src={gif} style={{ height: '25rem'}}/>
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