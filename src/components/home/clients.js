import React from "react"
import clients1 from '../../images/clients-img/1.png'
import clients2 from '../../images/clients-img/2.png'
import uslugi from '../../images/clients-img/uslugi.png'
import headmade from '../../images/clients-img/headmade.png'
import hm from '../../images/clients-img/hm.svg'

export default () => (
    <section className="mosh-clients-area section_padding_100 clearfix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <p>Клиенты</p>
                        <h2>Мы гордимся нашими клиентами</h2>
                    </div>
                </div>
                <div className="col-12">
                    <div className="clients-logo-area d-sm-flex align-items-center justify-content-between">
                        <a href="/"><img src={clients1} alt="clients"/></a>
                        <a href="/"><img src={uslugi} alt="clients"/></a>
                        <a href="/"><img src={headmade} alt="clients"/></a>
                        <a href="/"><img src={hm} alt="clients  "/></a>
                        <a href="/"><img src={clients2} alt="clients"/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)