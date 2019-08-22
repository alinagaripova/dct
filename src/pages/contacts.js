import React, { Fragment }  from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Breadcumb from "../components/breadcrumb"
import map from '../images/core-img/map.png'
import call from '../images/core-img/call.png'
import message from '../images/core-img/message.png'


export default () => (
    <Fragment>
        <Header/>
        <Breadcumb title="Контакты" action="Свяжитесь с нами"/>
        <section className="contact-area section_padding_100">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="contact-form-area">
                            <h2>Напиши нам</h2>
                            <form action="#">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <input type="text" className="form-control" id="name" placeholder="Имя"/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="email" className="form-control" id="email" placeholder="Эл.почта"/>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control" id="subject" placeholder="Тема"/>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Сообщение"></textarea>
                                    </div>
                                    <button className="btn mosh-btn mt-50" type="submit">Отправить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="contact-information">
                            <h2>Контактная информация:</h2>
                            <div className="single-contact-info d-flex">
                                <div className="contact-icon mr-15">
                                    <img src={map} alt=""/>
                                </div>
                                <p>г. Казань, ул.Карла Маркса, д.5, оф.114</p>
                            </div>
                            <div className="single-contact-info d-flex">
                                <div className="contact-icon mr-15">
                                    <img src={call} alt=""/>
                                </div>
                                <p>Тел: +7(843)259-99-23 </p>
                            </div>
                            <div className="single-contact-info d-flex">
                                <div className="contact-icon mr-15">
                                    <img src={message} alt=""/>
                                </div>
                                <p>info@headmade.pro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </Fragment>
)