import React from "react"
import { Link } from "react-router-dom";
import { ExperienceInnovationconsultant } from "../../importImage/SiteImages";
export default function InnovationConsultant_Body() {
    return (
        <article className="Experience active" data-page="Experience">
            <header>
                <h2 className="h2 article-title">Experience</h2>
            </header>
            <div className="education-main">
                <img src={ExperienceInnovationconsultant} className="img-center" alt="Innovation Consultant Banner" style={{ borderRadius: "1em" }} />
                <br />
                <h3> Innovation Consultant</h3>
                <p>2022 Aug — 2022 Nov</p>
                <br />
                <p className="timeline-text">
                    I have worked as an Innovation Consultant at Globalshala for three months. 
                </p><br />
                <p className="timeline-text">
                    This was my first virtual internship experience as an innovation consultant, and creating innovative idea to uplift the Globalshala's student. Most of our task was on the team based.
                </p><br />

                <h3> My virtual internship works includes :-</h3><br />
                <ol style={{ color: "var(--light-gray);", marginLeft: "1em" }}>
                    <li>Researching the new ideas to grow the sales of Globalshala.</li>
                    <li>Doing secondary as well as primary research where we have conducted survey. </li>
                    <li>Attend meeting weekly and discuss on the how we can improve Globalshala.</li>
                    <li>Designed the student face detectation that will measure the student's level of happiness or focusness when he/she is learning or taking class virtually.</li>
                    <li>Created and presented weekly basis presentation on the findings of the research with the team member.</li>
                    <li>Effective communications between every team members to circulate the current status / progress of our work.</li>
                </ol>
                <br />
                <Link to="https://globalshala.com/" target="_blank">
                    <button>Visit Globalshala <ion-icon name="school-outline"></ion-icon>
                    </button>
                </Link>
            </div>
        </article>
    )
}