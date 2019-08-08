import React from 'react';
import {Link} from "gatsby"
import cta from '../../images/bg-img/cta.jpg'



export default () => {
    return (
        <section className="mosh-call-to-action-area bg-img bg-overlay section_padding_100" style={{backgroundImage:`url(${cta})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cta-content text-center wow fadeIn" data-wow-delay="0.5s">
                            <div className="section-heading">
                                <p>обратная связь</p>
                                <h2>Тебе есть что нам сказать?</h2>
                                <Link to="/contacts" className="btn mosh-btn">Напиши нам</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}