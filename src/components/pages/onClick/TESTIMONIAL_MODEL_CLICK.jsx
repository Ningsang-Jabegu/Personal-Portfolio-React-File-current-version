// import React, { useState } from "react"
export default function TESTIMONIAL_MODEL_CLICK({openModel, setOpenModel, modelData, setModelData}) {
    return (
        <>
            {/* <!--
          - testimonials modal
        --> */}

            <div className={`modal-container ${openModel ? "active" : ""} `} data-modal-container>

                <div className={`overlay ${openModel ? "active" : ""} `} data-overlay onClick={() => { setOpenModel(false) }} ></div>

                <section className="testimonials-modal">

                    <button className="modal-close-btn" data-modal-close-btn onClick={() => { setOpenModel(false) }} >
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src={modelData["imgSrc"]} alt={modelData["imgAlt"]} width="80" data-modal-img />
                        </figure>

                        <img src="./assets/images/icon-quote.svg" alt="quote icon" />
                    </div>

                    <div className="modal-content">

                        <h4 className="h3 modal-title" data-modal-title>{modelData["nameClient"]}</h4>

                        <time dateTime="2021-06-14">14 June, 2021</time>

                        <div data-modal-text>
                            <p dangerouslySetInnerHTML={{ __html: modelData["briefText"] }} />
                        </div>

                    </div>

                </section>

            </div>
        </>
    )

}
