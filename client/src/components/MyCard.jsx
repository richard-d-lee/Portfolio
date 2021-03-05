import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import gif from './giphy.gif'

function MyCard(props) {
  console.log(props.clicker)
  let myFunc = () => {console.log('hello')}
  if (props.clicker) {
    myFunc = props.clicker
  }
  return (
    <div className="full-card">
      <label> hello </label>
      <Card className="my-card" style={{ width: '100%', backgroundColor: "black", borderRadius: '15px', border: "1px solid white"}}>
        <Card.Img variant="top" className="card-image" src={gif} style={{ width: '25rem', height: 'auto', borderRadius: '15px'}}>
          </Card.Img>
          <center>
            <Button 
              type="button" 
              onClick={
                myFunc
              } 
              className="button"
              variant="light">
                {props.link}
            </Button>
          </center>
      </Card>
    </div>
  )
}

export default MyCard;