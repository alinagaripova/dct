import React from "react"
import welcome from '../../images/bg-img/welcome-bg.png'
import display2 from '../../images/bg-img/display2.png'
import display from '../../images/bg-img/display.png'
import { Carousel } from 'react-bootstrap';

export default () => (
    <section className="welcome_area clearfix" id="home" style={{backgroundImage:`url(${welcome})`}}>
                <Carousel>
                    <Carousel.Item>
                        <div className="single-hero-slide d-flex align-items-end justify-content-center">
                            <div className="hero-slide-content text-center">
                                <h2>Готовые шаблоны для документов</h2>
                                <h4>Заполняй форму!</h4>
                                <img className="slide-img" src={display2} alt=""/>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="single-hero-slide d-flex align-items-end justify-content-center">
                            <div className="hero-slide-content text-center">
                                <h2>Готовые шаблоны для документов</h2>
                                <h4>Получай готовый документ!</h4>
                                <img className="slide-img" src={display} alt=""/>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
    </section>
)
