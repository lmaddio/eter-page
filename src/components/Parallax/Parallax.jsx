import React from 'react'

const Parallax = () => (
  <div className="Parallax parallax filter-gradient blue" data-color="blue">
    <div className="parallax-background">
      <img className="parallax-background-image" src="assets/img/template/bg3.jpg" />
    </div>
    <div className="container">
      <div className="row">
        {/*<div className="col-md-5 hidden-xs">
          <div className="parallax-image">
            <img className="phone" src="assets/img/template/iphone3.png" style={{marginTop: 20}} />
          </div>
        </div>*/}
        <div className="col-md-6 col-md-offset-3">
          <div className="description" style={{textAlign: "center"}}>
            <h2>ETER!</h2>
            <br />
            <h5>Monitor libre de calidad de aire para proyectos de ciencia comunitaria</h5>
          </div>
          {/*<div className="buttons">
            <button className="btn btn-fill btn-neutral">
              <i className="fa fa-apple" /> Appstore
            </button>
            <button className="btn btn-simple btn-neutral">
              <i className="fa fa-android" />
            </button>
            <button className="btn btn-simple btn-neutral">
              <i className="fa fa-windows" />
            </button>
          </div>*/}
        </div>
      </div>
    </div>
  </div>
)
export default Parallax