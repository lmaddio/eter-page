import React from 'react'

const Presentation = ()=>(
  <div className="section section-presentation">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="description">
            <h4 className="header-text">¿Qué queremos hacer?</h4>
            <p>Pretendemos construir un dispositivo que mida la calidad del aire (PM2.5 y PM10) basándonos en el Proyecto MACA. Lo hacemos junto a docentes de José León Suárez (Escuela Técnica UNSAM) y referentes comunitarios, generando materiales educativos libres para que se pueda reproducir la experiencia. Además, los datos generados van a ser alojados en nuestros servidores, puestos a libre disponibilidad. </p>
            <p>Pensamos que las personas tienen que conocer las herramientas disponibles que las pueden ayudar a visibilizar y buscar soluciones a sus problemas de todos los días. Combinando sensores de bajo costo disponibles en el mercado con la ética y filosofía del software libre, queremos mostrar cómo se pueden construir herramientas libres que sean útiles para las personas.
            </p><p>
            </p></div>
        </div>
        <div className="col-md-5 col-md-offset-1 hidden-xs">
          <img src="assets/img/template/mac.png" />
        </div>
      </div>
    </div>
  </div>
)

export default Presentation