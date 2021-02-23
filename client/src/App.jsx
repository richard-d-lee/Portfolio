import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Banner from './components/Banner.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      key: "home"
    };
    this.setKey = this.setKey.bind(this);
  }

  setKey(k) {
    console.log('selected' + k);
    this.setState({ key: k });
  }

  render() {
    return (
      <div className="container">
          <h1>React Bootstrap Tabs Example - ItSolutionStuff.com</h1>
     
          <Tabs
            id="controlled-tab-example"
            activeKey={this.state.key}
            onSelect={(k) => this.setKey(k)}
          >
     
            <Tab eventKey="home" title="Home">
              <p>this is a home tab</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <p>this is profile tab</p>
            </Tab>
            <Tab eventKey="setting" title="Setting">
              <p>this is setting tab</p>
            </Tab>
         
          </Tabs>
     
      </div>
    );
  }
}
export default App;