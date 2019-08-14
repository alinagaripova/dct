import React from 'react';
import { Link } from "gatsby"
import breadcumb from '../images/core-img/breadcumb.png'

export default (props) => (
    <div className="mosh-breadcumb-area" style={{backgroundImage:`url(${breadcumb})`}}>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="bradcumbContent">
                        <h2>{props.title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Главная</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{props.action}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
)