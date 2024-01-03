import { Link } from "react-router-dom";

export default function Resume_Body(){
    return(
        <article className="resume active" data-page="resume">

                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>

                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>

                        <h3 className="h3">Education</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title"><Link to="/resume/education/UoPeople" className="edu-link"> University of The People <ion-icon name="open-outline"></ion-icon></Link></h4>

                            <span>2023 — running</span>

                            <p className="timeline-text">
                                In Amrit Science Campus, I have completed my first year and now parallelly I have joined the University of The People, as an BS-CS (Bachelor's of Science in Computer Scinece) student. 
                            </p>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title"><Link to="/resume/education/AmritCampus" className="edu-link">Amrit Science Campus (ASCOL) <ion-icon name="open-outline"></ion-icon></Link></h4>

                            <span>2022 — running</span>

                            <p className="timeline-text">
                                After a year gap due to my internal problem, I again resume my academic journey. Currently, I am doing my Bachelor's degree in Computer Science and Information Technology (BSc. CSIT).
                            </p>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title"><Link to="/resume/education/ArnikoInternationalAcademy" className="edu-link">Arniko International Secondary School<ion-icon name="open-outline"></ion-icon></Link></h4>

                            <span>2018 — 2020</span>

                            <p className="timeline-text">
                                After I have completed my grade 10 from Dharan, I came here at Kathmandu for my further studies. I did my plus two (10 + 2) from Science stream taking computer science and mathematics as an elective.
                            </p>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title"><Link to="/resume/education/ZenithHighSchool" className="edu-link">Zenith High School<ion-icon name="open-outline"></ion-icon></Link></h4>

                            <span>2015 — 2018</span>

                            <p className="timeline-text">
                                I have completed my grade 8 to grade 10 (SEE) from Zenith High School located in Dharan, Sunsari. Here, I have taken optional math and account subject as an elective.
                            </p>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title"><Link to="#" className="edu-link">Shree Khalangatar Higher Secondary School</Link></h4>

                            <span>2014 — 2015</span>

                            <p className="timeline-text">
                            I have completed grade 8 at Shree Khalangatar Higher Secondary School, and when I was in the middle of grade 9, I had to migrate my studies from my village to Zenith High School, Dharan. Since this was Nepali medium school, when I reached Dharan, I had to repeat grade 8 in Zenith (from the middle of the year of grade 9 in my village school).                            </p>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title"><Link to="#" className="edu-link">Mechi English School</Link></h4>

                            <span>2006 — 2014</span>

                            <p className="timeline-text">
                                I spent most of my childhood in this School. From Nursary to Grade 6.
                            </p>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title"><Link to="#" className="edu-link">Millinium English Boarding School</Link></h4>

                            <span>2008</span>

                            <p className="timeline-text">
                               I have spend a year in this school. This was the only school in my village back then which teaches in English medium.
                            </p>

                        </li>
                    </ol>

                </section>

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