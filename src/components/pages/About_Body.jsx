import React, { Fragment, useState } from "react"
import { testimonialsData } from "../TestimonialData"
export default function About_Body() {
    const [openModel, setOpenModel] = useState(false) 
    const [modelData, setModelData] = useState({
        imgSrc: "",
        imgAlt: "",
        nameClient: "",
        briefText: []
    })
    const handleTestimonialClick = (testimonial_data) => {
        setOpenModel(true)
        setModelData({
            modelData,
            imgSrc: `${testimonial_data["imgSrc"]}`,
            imgAlt: `${testimonial_data["imgAlt"]}`,
            nameClient: `${testimonial_data["nameClient"]}`,
            briefText: `${testimonial_data["briefText"]}`
        })
        
    }
    console.log(modelData["briefText"])
    const testimonial_lists = testimonialsData.map((testimonial, index) => {
        return (
            <li class="testimonials-item" key={index}>
                <div class="content-card" data-testimonials-item onClick={() => { handleTestimonialClick(testimonial) }}>

                    <figure class="testimonials-avatar-box">
                        <img src={testimonial["imgSrc"]} alt={testimonial["imgAlt"]} width="60" height="80"
                            data-testimonials-avatar />
                    </figure>

                    <h4 class="h4 testimonials-item-title" data-testimonials-title>{testimonial["nameClient"]}</h4>

                    <div class="testimonials-text" data-testimonials-text>
                    <p dangerouslySetInnerHTML={{ __html: testimonial["briefText"] }} />
                    </div>

                    {/* <div class="testimonials-url" data-testimonials-url>
                        Url :
                        <a href={testimonial["url"]} target="_blank">
                            {testimonial["url"]}
                        </a>
                    </div> */}

                </div>
            </li>
        )
    })
    return (
        <article class="about  active" data-page="about">

            <header>
                <h2 class="h2 article-title">About me</h2>
            </header>

            <section class="about-text">
                <p>
                    I'm Web Master, instructor and Graphics Designer from Kathmandu, Nepal, working in web
                    development and design media.
                    I enjoy simplifying complex problems into simple, beautiful, and intuitive creations.

                </p>

                <p>
                    My goal is to design your website so that it is functional and user-friendly while also being
                    eye-catching. On top of that, I personalize your product and ensure that it is appealing and
                    simple to use. My goal is to convey your message and identity in the most creative way possible.
                    I designed websites for a number of established brands.

                </p>
            </section>


            {/* <!--
          - service
        --> */}

            <section class="service">

                <h3 class="h3 service-title">What i'm doing</h3>

                <ul class="service-list">

                    <li class="service-item">

                        <div class="service-icon-box">
                            <ion-icon name="desktop-outline"></ion-icon>
                            {/* <!-- <img src="./assets/images/icon-design.svg
                " alt="design icon" width="40" /> --> */}
                        </div>

                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">Web design</h4>

                            <p class="service-item-text">
                                The most modern and high-quality design made at a professional level.
                            </p>
                        </div>

                    </li>

                    <li class="service-item">

                        <div class="service-icon-box">
                            <ion-icon name="code-download-outline"></ion-icon>
                            {/* <!-- <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" /> --> */}
                        </div>

                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">Web development</h4>

                            <p class="service-item-text">
                                High-quality development of sites at the professional level.
                            </p>
                        </div>

                    </li>

                    <li class="service-item">

                        <div class="service-icon-box">
                            <ion-icon name="color-palette-outline"></ion-icon>
                            {/* <!-- <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40" /> --> */}
                        </div>

                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">Graphics Design</h4>

                            <p class="service-item-text">
                                I make high-quality print and digital design.
                            </p>
                        </div>

                    </li>

                    <li class="service-item">

                        <div class="service-icon-box">
                            {/* <!-- <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" /> --> */}
                            <ion-icon name="images-outline"></ion-icon>

                        </div>

                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">Photography</h4>

                            <p class="service-item-text">
                                I make high-quality photos of any category at a professional level.
                            </p>
                        </div>

                    </li>

                </ul>

            </section>


            {/* <!--
          - testimonials
        --> */}

            <section class="testimonials">

                <h3 class="h3 testimonials-title">Testimonials</h3>

                <ul class="testimonials-list has-scrollbar">
                    {testimonial_lists}
                </ul>

            </section>


            {/* <!--
          - testimonials modal
        --> */}

            <div class={`modal-container ${openModel ? "active" : ""} `} data-modal-container>

                <div class={`overlay ${openModel ? "active" : ""} `} data-overlay onClick={() => { setOpenModel(false) }} ></div>

                <section class="testimonials-modal">

                    <button class="modal-close-btn" data-modal-close-btn onClick={() => { setOpenModel(false) }} >
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div class="modal-img-wrapper">
                        <figure class="modal-avatar-box">
                            <img src={modelData["imgSrc"]} alt={modelData["imgAlt"]} width="80" data-modal-img />
                        </figure>

                        <img src="./assets/images/icon-quote.svg" alt="quote icon" />
                    </div>

                    <div class="modal-content">

                        <h4 class="h3 modal-title" data-modal-title>{modelData["nameClient"]}</h4>

                        <time datetime="2021-06-14">14 June, 2021</time>

                        <div data-modal-text>
                        <p dangerouslySetInnerHTML={{ __html: modelData["briefText"] }} />
                        </div>

                    </div>

                </section>

            </div>


            {/* <!--
          - clients
        --> */}

            <section class="clients">

                <h3 class="h3 clients-title">Clients</h3>

                <ul class="clients-list has-scrollbar">

                    <li class="clients-item">
                        <a href="/assets/images/client/client_1.avif" target="_blank">
                            <img src="/assets/images/client/client_1.avif" alt="Fastblur Production" />
                        </a>
                    </li>

                    <li class="clients-item">
                        <a href="/assets/images/client/client_2.png" target="_blank">
                            <img src="/assets/images/client/client_2.png" alt="Kirat Yakthung Thegimhang Chobegu Sajumlung (new)" />
                        </a>
                    </li>

                    <li class="clients-item">
                        <a href="/assets/images/client/client_3.png" target="_blank">
                            <img src="/assets/images/client/client_3.png" alt="Kirat Yakthung Thegimhang Chobegu Sajumlung (old)" />
                        </a>
                    </li>

                    <li class="clients-item">
                        <a href="/assets/images/client/client_4.png" target="_blank">
                            <img src="/assets/images/client/client_4.png" alt="Zenith English School" />
                        </a>
                    </li>

                </ul>

            </section>

        </article>
    )
}