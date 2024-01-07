import HEADER_PART from "./automate_process/HEADER_PART.jsx";
import EDUCATION_PART from "./automate_process/EDUCATION_PART.jsx";
import EXPERIENCE_PART from "./automate_process/EXPERIENCE_PART.jsx";
export default function Resume_Body(){
    return(
        <article className="resume active" data-page="resume">
                <HEADER_PART txt="Resume"/>

               <EDUCATION_PART />

                <EXPERIENCE_PART />

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