import React from 'react';
import Banner from './components/Banner.jsx';
import Landing from './components/Landing.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Banner />
        <Landing />
        <Banner />
      </div>
    );
  }
}
export default App;