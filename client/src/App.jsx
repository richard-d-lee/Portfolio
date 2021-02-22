import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button';
import Banner from './components/Banner.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="full-app">
        <Banner />
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2" aria-label="Second group">
            <Button>5</Button> <Button>6</Button> <Button>7</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Third group">
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
  //hello from windows!
}

export default App;