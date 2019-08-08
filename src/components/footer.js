import React from "react"
import { Link } from "gatsby"
import map from '../images/core-img/map.png'
import call from '../images/core-img/call.png'
import message from '../images/core-img/message.png'

export default () => (
    <footer className="footer-area clearfix">
        <div className="top-footer-area section_padding_100_0">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-100">
                            <Link to="/" className="mb-50 d-block"><img src={require('../images/core-img/dct-logo.png')} alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-100">
                            <h5>Навигация:</h5>
                            <ul>
                                <li className="nav-item active"><Link className="nav-link" to="/">Главная</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">О нас</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sortlist">Формы</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contacts">Контакты</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-100">
                            <h5>Контактная информация:</h5>
                            <div className="footer-single-contact-info d-flex">
                                <div className="contact-icon">
                                    <img src={map} alt=""/>
                                </div>
                                <p>г. Казань, ул.Карла Маркса, д.5, оф.114</p>
                            </div>
                            <div className="footer-single-contact-info d-flex">
                                <div className="contact-icon">
                                    <img src={call} alt=""/>
                                </div>
                                <p>Тел: +7(843)259-99-23 </p>
                            </div>
                            <div className="footer-single-contact-info d-flex">
                                <div className="contact-icon">
                                    <img src={message} alt=""/>
                                </div>
                                <p>info@headmade.pro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)