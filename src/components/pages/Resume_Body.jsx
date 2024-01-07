import { Link } from "react-router-dom";
import HEADER_PART from "./automate_process/HEADER_PART";
import EDUCATION_PART from "./automate_process/EDUCATION_PART";

export default function Resume_Body(){
    return(
        <article className="resume active" data-page="resume">
                <HEADER_PART txt="Resume"/>

               <EDUCATION_PART />

                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>

                        <h3 className="h3">Experience</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title"><Link to="/resume/experience/FrontEndWebDeveloper" className="exp-link">Front End Web Developer <ion-icon name="open-outline"></ion-icon></Link></h4>

                            <span>2022 Dec — Present</span>

                            <p className="timeline-text">
                               I am currently working as a remote front end web developer at Chobegu Sajumlung and Zenith High School.
                            </p>

                            <span className="timeline-text-skill">
                                <b>Skills:</b> HTML, CSS, JavaScript, React, Graphics Designing, Version Control, Website Hosting, CSS frameworks, JS frameworks (some)
                            </span>
                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title"><Link to="/resume/experience/FrontEndWebInstructor" className="exp-link">Front End Web Development Instructor <ion-icon name="open-outline"></ion-icon></Link></h4>

                            <span>2022 August — 2022 November</span>

                            <p className="timeline-text">
                               I have taught three month (90 days) Front End Web Development Bootcamp at IT Enterpreneur Nepal (currently the institute name has changed to Triangle Hunt) more than 30 students. In this 90 days massive bootcamp, I have taught the basics to intermidiate level of front end web development.
                            </p>

                            <span className="timeline-text-skill">
                                <b>Skills:</b> HTML, CSS, JavaScript, researching, collabrating, leadership, coaching
                            </span>
                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title"><Link to="/resume/experience/WebMaster" className="exp-link">Web Master <ion-icon name="open-outline"></ion-icon></Link></h4>

                            <span>2019 May — 2022 July</span>

                            <p className="timeline-text">
                                I have worked as a webmaster in KYTCS organization. Here my job was to design, code, and deploy the static front end pages.
                            </p>
                            <span className="timeline-text-skill">
                                <b>Skills:</b> HTML, CSS, Graphics Designing, Version Control, Website Hosting, Adobe Illustrator, Figma
                              </span>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title"><Link to="/resume/experience/InnovationConsultant" className="exp-link">Innovation Consultant <ion-icon name="open-outline"></ion-icon></Link></h4>

                            <span>2022 May - 2022 August</span>

                            <p className="timeline-text">
                                I have worked in GlobalShala as a Innovation Consultant 
                            </p>
                            
                            <span className="timeline-text-skill">
                              <b>Skills:</b> communication, innovative idea, creative thinking, Adobe Photoshop cs2
                            </span>
                        </li>

                    </ol>

                </section>

                <section className="skill">

                    <h3 className="h3 skills-title">My skills</h3>

                    <ul className="skills-list content-card">

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">Web design & development</h5>
                                <data value="80">80%</data>
                            </div>

                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{width: "80%"}}></div>
                            </div>

                        </li>

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">Graphic design</h5>
                                <data value="70">70%</data>
                            </div>

                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{width: "70%"}}></div>
                            </div>

                        </li>

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">Teaching</h5>
                                <data value="90">90%</data>
                            </div>

                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{width: "90%"}}></div>
                            </div>

                        </li>

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">WordPress</h5>
                                <data value="50">50%</data>
                            </div>

                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{width: "50%"}}></div>
                            </div>

                        </li>

                    </ul>

                </section>

        </article>
    )
}