import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import gif from './giphy.gif'

function MyCard(props) {
  return (
    <div className="full-card">
      <Card className="my-card" style={{ width: '100%', backgroundColor: "black" }}>
        <Card.Img variant="top" className="card-image" src={gif} style={{ width: '25rem', height: 'auto'}}>
          </Card.Img>
          <center>
            <Button className="button" variant="light">{props.link}</Button>
          </center>
      </Card>
    </div>
  )
}

export default MyCard;