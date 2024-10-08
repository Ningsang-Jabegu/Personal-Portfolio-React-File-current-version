import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { EducationAscolLogo, EducationAscolTu } from "../../importImage/SiteImages";
export default function AmritCampus_Body() {
    return (
        <article className="ASCOL active" data-page="ASCOL">
            <header>
                <h2 className="h2 article-title">ASCOL</h2>
            </header>
            <div className="education-main">
                <img src={EducationAscolLogo} className="img-center" alt="Amrit Campus Official Logo" style={{ borderRadius: "1em" }} />
                <br />
                <h3> Amrit Science Campus</h3>
                <p>2022 — running</p>
                <br />
                <p className="timeline-text">
                    Amrit Science Campus or commonly also called as ASCOL is a constitute campus of Tribhuvan University. It provide Bachelor's and Master's degree programs in the field of science in affordable price and which is why I am currently joined at this Campus for the Bachelor's degree. It is Bachelor's of Science in Computer Science and Information Technology(BSc. CSIT).
                </p><br />
                <p className="timeline-text">
                    The fee structure of my bachelor's degree program is within NRP 25,000 up to NRP 45,000. I am in the 2078<sup>th</sup> batch, now it is around NRP 50,000 for BSc. CSIT. Below are some of the major highlights of ASCOL.
                </p><br />

                <h3> Constitute Campus of</h3><br />
                <div className="education-flex education-center education-figure">
                    <figure>
                        <img src={EducationAscolTu} alt="Tribhuvan University's Logo" />
                        <figcaption><Link className="a" to="https://cdcsit.edu.np/" target="_blank">Tribhuvan University<ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Nepal's First Public University</p>
                    </figure>
                </div>
                <br />
                <Link to="https://amritcampus.edu.np/" target="_blank">
                    <button>Visit ASCOL <ion-icon name="school-outline"></ion-icon>
                    </button>
                </Link>
            </div>
        </article>
    )
}