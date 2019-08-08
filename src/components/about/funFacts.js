import React from 'react';
import features2 from '../../images/bg-img/features-2.png'
import settings2 from '../../images/core-img/settings-2.png'
import photoCamera from '../../images/core-img/photo-camera.png'
import like from '../../images/core-img/like.png'
import gamepad from '../../images/core-img/gamepad.png'


export default () => (
    <section className="mosh-about-features-area section_padding_100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-4">
                    <div className="mosh-features-thumb wow fadeIn" data-wow-delay="0.5s">
                        <img src={features2} alt=""/>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className="mosh-about-us-content">
                        <div className="section-heading">
                            <p>Про нас</p>
                            <h2>Веселые факты про нас и почему нас любят клиенты</h2>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="single-feature-area d-flex">
                                    <div className="feature-icon mr-30">
                                        <img src={settings2} alt=""/>
                                    </div>
                                    <div className="feature-content">
                                        <h5>Мы профессионалы</h5>
                                        <p>Мы не сидим на месте и постоянно повышаем свою квалификацию</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="single-feature-area d-flex">
                                    <div className="feature-icon mr-30">
                                        <img src={photoCamera} alt=""/>
                                    </div>
                                    <div className="feature-content">
                                        <h5>Красивый офис</h5>
                                        <p>У нас уютный офис с печеньками в центре города</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="single-feature-area d-flex">
                                    <div className="feature-icon mr-30">
                                        <img src={like} alt=""/>
                                    </div>
                                    <div className="feature-content">
                                        <h5>30т подписчиков</h5>
                                        <p>Мы активно следим за соц.сетями и открыто ведём бизнес</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="single-feature-area d-flex">
                                    <div className="feature-icon mr-30">
                                        <img src={gamepad} alt=""/>
                                    </div>
                                    <div className="feature-content">
                                        <h5>Мы любим игры</h5>
                                        <p>В свободные часы мы весело проводим время</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="http://headmade.pro/about" className="btn mosh-btn mt-50">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)