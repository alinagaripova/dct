import React from "react"
import c1 from '../../images/bg-img/c-1.jpg'
import c3 from '../../images/bg-img/c-3.jpg'
import { Carousel } from 'react-bootstrap';

export default () => (
    <section className="mosh-team-area section_padding_100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10">
                    <div className="section-heading text-center">
                        <p>Команда</p>
                        <h2>Знакомься с нашей невероятной командой</h2>
                        <h5 className="mt-30">В нашей компании работают исключительно профессионалы, энергичные и
                            жизнерадостные личности</h5>
                    </div>
                </div>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <div className="row justify-content-around">
                            <div className="single-team-slide text-center">
                                <div className="team-thumbnail">
                                    <img className="d-block w-100" src={c3} alt="Second slide"/>
                                </div>
                                <div className="team-meta-info">
                                    <h4>Егор Павлов</h4>
                                    <p>Бэкенд-разработчик</p>
                                </div>
                            </div>
                            <div className="single-team-slide text-center">
                                <div className="team-thumbnail">
                                    <img className="d-block w-100" src={c1} alt="First slide"/>
                                </div>
                                <div className="team-meta-info">
                                    <h4>Алина Гарипова</h4>
                                    <p>Фронтенд-разработчик</p>
                                </div>
                            </div>
                            <div className="single-team-slide text-center">
                                <div className="team-thumbnail">
                                    <img className="d-block w-100" src={c3} alt="Second slide"/>
                                </div>
                                <div className="team-meta-info">
                                    <h4>Егор Павлов</h4>
                                    <p>Бэкенд-разработчик</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row justify-content-around">
                            <div className="single-team-slide text-center">
                                <div className="team-thumbnail">
                                    <img className="d-block w-100" src={c1} alt="Second slide"/>
                                </div>
                                <div className="team-meta-info">
                                    <h4>Алина Гарипова</h4>
                                    <p>Фронтенд-разработчик</p>
                                </div>
                            </div>
                            <div className="single-team-slide text-center">
                                <div className="team-thumbnail">
                                    <img className="d-block w-100" src={c3} alt="Second slide"/>
                                </div>
                                <div className="team-meta-info">
                                    <h4>Егор Павлов</h4>
                                    <p>Бэкенд-разработчик</p>
                                </div>
                            </div>
                            <div className="single-team-slide text-center">
                                <div className="team-thumbnail">
                                    <img className="d-block w-100" src={c1} alt="Second slide"/>
                                </div>
                                <div className="team-meta-info">
                                    <h4>Алина Гарипова</h4>
                                    <p>Фронтенд-разработчик</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </section>
)
