import React, { Fragment } from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Breadcumb from "../components/breadcrumb"
import Footer from "../components/footer"
import edit from '../images/core-img/edit.png'


export default () => {
    return(
        <Fragment>
            <Header/>
            <Breadcumb title="Формы" action="Выбери форму"/>
            <section className="mosh--services-area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={edit} alt=""/>
                                </div>
                                <div className="feature-content">
                                    <Link to="/listpage"><h4>Уведомления</h4></Link>
                                    <p>Выбери необходимый документ</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={edit} alt=""/>
                                </div>
                                <div className="feature-content">
                                    <Link to="/listpage"><h4>Распоряжения</h4></Link>
                                    <p>Выбери необходимый документ</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={edit} alt=""/>
                                </div>
                                <div className="feature-content">
                                    <Link to="/listpage"><h4>Акты</h4></Link>
                                    <p>Выбери необходимый документ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </Fragment>
    )}