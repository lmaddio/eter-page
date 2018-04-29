import React from 'react';

import teamImg from '../../assets/team.jpg';

const Presentation = ({t})=>(
  <div className="section section-presentation">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="description">
            <h4 className="header-text">{t('home.team.title')}</h4>
            <p dangerouslySetInnerHTML={{__html: t('home.team.details')}}></p>
            <p dangerouslySetInnerHTML={{__html: t('home.team.description')}}></p>
          </div>
        </div>
        <div className="col-md-5 col-md-offset-1 hidden-xs">
          <img src={teamImg} alt="team" />
        </div>
      </div>
    </div>
  </div>
)

export default Presentation