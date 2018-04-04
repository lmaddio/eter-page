import React from 'react'

const Footer = ()=>(
  <footer className="footer">
    <div className="container">
      <div className="social-area pull-right">
        <a href="#" target="_blank" className="btn btn-social btn-facebook btn-simple">
          <i className="fa fa-facebook-square" />
        </a>
        <a href="#" target="_blank" className="btn btn-social btn-twitter btn-simple">
          <i className="fa fa-twitter" />
        </a>
        <a href="#" target="_blank" className="btn btn-social btn-pinterest btn-simple">
          <i className="fa fa-pinterest" />
        </a>
      </div>
      <div className="copyright">
        © 2018 <a href="#">Eter</a>
      </div>
    </div>
  </footer>
)

export default Footer