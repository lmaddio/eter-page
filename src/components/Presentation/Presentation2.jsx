import React from 'react'

const Presentation = ()=>(
  <div className="section section-demo">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div id="description-carousel" className="carousel fade" data-ride="carousel">
            <div className="carousel-inner">
              <div className="item">
                <img src="assets/img/template/examples/home_33.jpg" alt />
              </div>
              <div className="item active">
                <img src="assets/img/template/examples/home_22.jpg" alt />
              </div>
              <div className="item">
                <img src="assets/img/template/examples/home_11.jpg" alt />
              </div>
            </div>
            <ol className="carousel-indicators carousel-indicators-blue">
              <li data-target="#description-carousel" data-slide-to={0} className />
              <li data-target="#description-carousel" data-slide-to={1} className="active" />
              <li data-target="#description-carousel" data-slide-to={2} className />
            </ol>
          </div>
        </div>
        <div className="col-md-5 col-md-offset-1">
          <h4 className="header-text">¿Qué necesitamos?</h4>
          <p>
            Toda colaboración es bienvenida <br/>
            Necesitamos gente que sepa de desarrollo de software, páginas web, diseño, electrónica, hardware, educación, desarrollo de juegos, trabajo con la comunidad, ciencia comunitaria, contaminación atmosférica... Siempre hay algo para hacer :)
            <br/>
            En concreto podés ver nuestra lista de tareas pendientes <a href="https://github.com/rlyehlab/eter/issues" target="_blank">acá</a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Presentation