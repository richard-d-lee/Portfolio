import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import MyCard from './MyCard.jsx'

function Landing(props) {
  return (
    <div className="landing">
      <MyCard />
      <MyCard />
      <MyCard />
    </ div>
  )
}

export default Landing;