import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import {Route} from 'react-router-dom';

import './assets/style.css';

import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import Parallax from './components/Parallax/Parallax.jsx';
import Clients from './components/Clients/Clients.jsx';
import Colaborate from './components/Colaborate/Colaborate.jsx';
import Presentation from './components/Presentation/Presentation.jsx';

function wrapWithProps(WrapComponent, nProps) {
  return ()=>(<WrapComponent {...nProps}/>)
}

class Components extends Component {
  getLinks() {
    const {i18n} = this.props;
    const {languages, language} = i18n;
    const links = [];
    ['es', 'en'].forEach(l=>{
      console.log("lng", l, language);
      links.push({
        anchor: {
          href: "#",
          className: language === l ? 'disabled btn' : 'btn',
          onClick: (e)=>{
            e.preventDefault();
            this.props.i18n.changeLanguage(l);
          },
          disabled: language === l,
        },
        text: l
      });
    });
    return {links};
  }

  componentWillMount() {
    console.log("Components componentWillMount", this.props);
  }
  
  render() {
    const {t} = this.props;
    return (
      <div>
        <Nav {...this.getLinks.bind(this)()} t={t}/>
        <Parallax t={t}/>
        <Clients t={t}/>
        <Presentation t={t}/>
        <Colaborate t={t}/>
        <Footer t={t}/>
      </div>
    );
  }
}

class App extends Component {
  componentWillMount() {
    console.log("componentWillMount", this.props)
  }

  render() {
    return (
      <div className="App">
        <I18n>
          {(t, {i18n})=>(
            <Route path="/" exact component={wrapWithProps(Components, {t, i18n})}/>
          )}
        </I18n>
      </div>
    );
  }
}

export default App;
