import React from "react"
import { Link } from "react-router-dom";
import { ExperienceFrontendwebinstructor } from "../../importImage/SiteImages";
export default function FrontEndInstructor_Body() {
    return (
        <article className="Experience active" data-page="Experience">
            <header>
                <h2 className="h2 article-title">Experience</h2>
            </header>
            <div className="education-main">
                <img src={ExperienceFrontendwebinstructor} className="img-center" alt="Front End Web Instructor Banner" style={{ borderRadius: "1em" }} />
                <br />
                <h3> Front End Web Instructor</h3>
                <p>2022 Aug — 2022 Nov</p>
                <br />
                <p className="timeline-text">
                    I have worked as a front-end web instructor at IT Entrepreneur Nepal for three months. By mentoring more than 40 students in those three months, I have gained communication skills, presentation skills, leadership skills, etc.
                </p><br />
                <p className="timeline-text">
                    This was my first experience as an instructor, teaching others the basics of web development. For the first few days, I felt it was difficult to run the class, but some days later, I learned how to control the class.
                </p><br />

                <h3> My works includes :-</h3><br />
                <ol style={{ color: "var(--light-gray);", marginLeft: "1em" }}>
                    <li>Creating the syllabus for three month bootcamp.</li>
                    <li>Designing the certificates for the bootcamp. </li>
                    <li>Spend most of my time solving the students doubts.</li>
                    <li>Taking online/physical class.</li>
                    <li>Preparing presentation slide for in-class-demo, classwork, homework, and project ppt.</li>
                    <li>Stay positive and respond to the student positively etc.</li>
                </ol>
                <br />
                <Link to="https://docs.google.com/document/d/15dGTQOiPaFL35tkh5OM9qymEx14qUmdoOJt6rBbKQ4g/edit?usp=sharing" target="_blank">
                    <button>Look Bootcamp's Syllabus <ion-icon name="book-outline"></ion-icon>
                    </button>
                </Link>
            </div>
        </article>
    )
}