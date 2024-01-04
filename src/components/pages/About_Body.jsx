import React from "react"
import About_Part from "./automate_process/About_Part"
import Service_Part from "./automate_process/Service_Part"
import Testimonial_Part from "./automate_process/Testimonial_Part"
import Client_Part from "./automate_process/Client_Part"
import Header_Part from "./automate_process/Header_Part"
export default function About_Body() {
    return (
        <article class="about  active" data-page="about">
            <Header_Part txt = "About me"/>

            <About_Part />

            <Service_Part />

            <Testimonial_Part />

            <Client_Part />

        </article>
    )
}