import React from 'react'

import rlyeh from '../../assets/Rlyeh.jpg';
import aerocene from '../../assets/aerocene-logo.jpg';
import mzLogo from '../../assets/mz-logo.png';
import unsamLogo from '../../assets/unsam-logo.png';
import eterLogo from '../../assets/logo.svg';

const LOGOS = [
  {
    src: rlyeh, href: "https://rlab.be"
  }, 
  {
    src: aerocene, href: "http://aerocene.org"
  }, 
  {
    src: mzLogo, href: "https://science.mozilla.org"
  }, 
  {
    src: unsamLogo, href: "http://www.unsam.edu.ar/"
  }, 
  {
    src: eterLogo, href: "#"
  }
];

const Footer = ()=>(
  <footer className="footer">
    <div className="container">
      <div className="social-area pull-left" style={{height: 70}}>
        {LOGOS.map(({src, href="#"},i)=>
          <a href={href} 
            target="_blank" 
            key={i.toString()} 
            style={{display: "inline"}}
            className="">
            <img className="image-h-responsive" src={src} alt="logo"/>
          </a>
        )}
      </div>
      {/*<div className="social-area pull-right">
        <a href="#" target="_blank" className="btn btn-social btn-facebook btn-simple">
          <i className="fa fa-facebook-square" />
        </a>
        <a href="#" target="_blank" className="btn btn-social btn-twitter btn-simple">
          <i className="fa fa-twitter" />
        </a>
        <a href="#" target="_blank" className="btn btn-social btn-pinterest btn-simple">
          <i className="fa fa-pinterest" />
        </a>
      </div>*/}
      <div className="copyright">
        © 2018 <a href="/">Eter</a>
      </div>
    </div>
  </footer>
)

export default Footer