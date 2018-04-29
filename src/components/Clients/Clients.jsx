import React from 'react'

import './Clients.css';
import imgSrc from '../../assets/Republica_Frente.jpg';

const Clients = ({t})=>(
  <div className="section section-gray section-clients Clients">
    <div className="container-fluid text-center">
      <h4 className="header-text">{t('home.whatdoing.title')}</h4>
      <div className="row">
        <div className="col-xs-12">
          <p dangerouslySetInnerHTML={{__html: t('home.whatdoing.description')}}></p>
        </div>
        <div className="col-xs-12 col-md-8 col-md-offset-2">
          <p>{t('home.whatdoing.image-desc')}</p>
        </div>
        <div className="col-xs-12">
          <div className="image-container">
            <img src={imgSrc} alt="Republica_Frente"/>
          </div>
        </div>
        <div className="col-xs-12 col-md-8 col-md-offset-2">
          <p>{t('home.whatdoing.image-desc2')}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Clients