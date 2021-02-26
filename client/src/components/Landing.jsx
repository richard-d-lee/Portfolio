import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import MyCard from './MyCard.jsx'

function Landing(props) {
  return (
    <div className="landing">
      <MyCard link="About Me"/>
      <MyCard link="Portfolio"/>
      <MyCard link="Artwork"/>
    </ div>
  )
}

export default Landing;