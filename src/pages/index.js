import React, { Fragment } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Carousel from "../components/home/carousel"
import Clients from "../components/home/clients"
import Description from "../components/home/description"
import Feedback from "../components/home/feedback"


export default () => (
    <Fragment>
        <Header/>
        <Carousel/>
        <Clients/>
        <Description/>
        <Feedback/>
        <Footer/>
    </Fragment>
)
