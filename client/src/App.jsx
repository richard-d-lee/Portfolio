import React from 'react';
import Banner from './components/Banner.jsx';
import Landing from './components/Landing.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';
import controllers from './controllers.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'landing',
    };
    this.handleAbout = controllers.handleAbout.bind(this);
  }

  render() {
    return (
      <div onClick={() => {console.log('hello')}}>
        <Banner />
        <Landing clicker={this.handleAbout}/>
        <Resume />
        <Footer />
      </div>
    );
  }
}
export default App;