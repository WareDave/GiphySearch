import React from 'react';
import logo from './logo.svg';
import './App.css';
import DaveSux from './DaveSux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
   
  }

  render() {
    return (
      <DaveSux />
    )
  }
}


export default App;