import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Breadcrumb from "../components/breadcrumb"
import AboutUs from "../components/about/aboutUs"
import FunFacts from "../components/about/funFacts"
import Team from "../components/about/team"


export default () => (
    <div>
        <Header/>
        <Breadcrumb title="О нас" action="Прочитай нашу историю"/>
        <AboutUs/>
        <FunFacts/>
        <Team/>
        <Footer/>
    </div>
)