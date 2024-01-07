// import React, { useState } from "react"
export default function TESTIMONIAL_MODEL_CLICK({openModel, setOpenModel, modelData, setModelData}) {
    return (
        <>
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
        </>
    )

}