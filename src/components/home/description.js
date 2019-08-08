import React from 'react';
import {Link} from "gatsby"

import form from '../../images/bg-img/form.png'


export default () => {
    return (
        <section className="mosh-features-area section_padding_100 clearfix">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-12 col-md-6">
                        <div className="section-heading">
                            <p>знакомься</p>
                            <h2>Попробуй заполнить форму при использовании наших шаблонов и получи готовый документ</h2>
                        </div>
                        <div className="features-content">
                            <p>Нажимай на кнопку и попробуй заполнить форму как на фото слева, после заполнения формы жми кнопку "Отправить".
                                <br/>Далее будет доступен pdf-файл заполненный твоими данными,
                                <br/> который можно будет скачать</p>
                            <div className="features-progress-bar mt-50">
                                <Link to="/lib/print_form_schemas/usluga/ugr/completed.yaml" className="btn mosh-btn">Заполнить форму</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-img">
                <img src={form} alt=""/>
            </div>
        </section>
    );
}
