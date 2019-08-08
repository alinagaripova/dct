import React from 'react';
import hm from '../../images/clients-img/hm.svg'


export default () => (
        <section className="mosh-aboutUs-area section_padding_100_0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="mosh-about-us-content">
                            <div className="section-heading">
                                <p>Функции</p>
                                <h2>Что вы получите, начав свой бизнес с нами</h2>
                            </div>
                            <ul>
                                <li>- разработка web-проектов: как целиком, так и отдельными компонентами</li>
                                <li>- консалтинговые услуги: помогаем организовать правильные процессы разработки</li>
                                <li>- project resque: временное усиление команды заказчика с целью вытянуть "покосившийся" проект</li>
                            </ul>
                            <a href="http://headmade.pro/about" className="btn mosh-btn mt-50">Подробнее</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mosh-about-us-thumb wow fadeInUp" data-wow-delay="0.5s">
                            <img src={hm} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)