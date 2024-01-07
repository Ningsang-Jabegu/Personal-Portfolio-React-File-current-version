import { Link } from "react-router-dom"
export default function Education_Part() {
    return (
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
    )
}