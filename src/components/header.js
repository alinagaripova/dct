import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/core-img/dct-logo.png"

export default () => {
    const [ariaExpanded, setariaExpanded] = useState(false);
    const [navBar, setnavbar] = useState("navbar-toggler");
    const [navCollapse, setnavvCollapse] = useState("collapse navbar-collapse justify-content-end")

    function OnClick() {
        if(ariaExpanded){
            setariaExpanded(false)
            setnavbar("navbar-toggler collapsed")
            setnavvCollapse("collapse navbar-collapse justify-content-end")

        } else {
            setariaExpanded(true);
            setnavbar("navbar-toggler")
            setnavvCollapse("collapse navbar-collapse justify-content-end show")
        }

    }
    return (
        <header className="header_area clearfix">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-12 h-100">
                        <div className="menu_area h-100">
                            <nav className="navbar h-100 navbar-expand-lg align-items-center">
                                <Link className="navbar-brand" to="/"><img src={logo}
                                                                           style={{width: "70px", height: "70px"}}
                                                                           alt="logo"/></Link>
                                <button onClick={OnClick} className={navBar} type="button" data-toggle="collapse"
                                        data-target="#mosh-navbar" aria-controls="mosh-navbar" aria-expanded={ariaExpanded}
                                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                                </button>
                                <div className={navCollapse} id="mosh-navbar">
                                    <ul className="navbar-nav animated" id="nav">
                                        <li className="nav-item"><Link className="nav-link" to="/">Главная</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/about">О нас</Link>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link" to="/sortlist">ЗАПОЛНИ ФОРМУ
                                            ЗДЕСЬ!</Link></li>
                                        <li className="nav-item"><Link className="nav-link"
                                                                       to="/contacts">Контакты</Link></li>
                                    </ul>
                                    <div className="search-form-area animated">
                                        <form action="#" method="post">
                                            <input type="search" name="search" id="search"
                                                   placeholder="Type keywords &amp; hit enter"/>
                                            <button type="submit" className="d-none"><img
                                                src={require('../images/core-img/search-icon.png')} alt="Search"/>
                                            </button>
                                        </form>
                                    </div>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
