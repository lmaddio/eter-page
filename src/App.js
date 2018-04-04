import React, { Component } from 'react';

import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'
import Parallax from './components/Parallax/Parallax.jsx'
import Clients from './components/Clients/Clients.jsx'
import Presentation from './components/Presentation/Presentation.jsx'
import Presentation2 from './components/Presentation/Presentation2.jsx'

const NAV = {
  links: [
    {
      icon: "fa-github",
      to: "https://github.com/rlyehlab/eter",
      text: "Github"
    }
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav {...NAV}/>
        <Parallax/>
        <Clients/>
        <Presentation/>
        <Presentation2/>
        <Footer/>
      </div>
    );
  }
}

export default App;
