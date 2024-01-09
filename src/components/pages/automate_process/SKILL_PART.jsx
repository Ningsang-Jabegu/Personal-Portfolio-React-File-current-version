import { Link } from "react-router-dom"
import { skill_Data } from "../data/Skill_Data"
export default function SKILL_PART() {
    const skill_list = skill_Data.map((skill, index) =>
    (
        <li className="skills-item content-card">
            <Link to={skill.skillLink}>
                <div className="skill-body-wrapper">
                    <h5 className="h5">{skill.skillTitle}</h5>
                    <ion-icon name={skill.ionIcon_name}></ion-icon>
                    {/* <data value="80">80%</data> */}
                </div>
                <div className="skill-button-wrapper" title={`View my ${skill.skillTitle} skill`}>
                    <span><ion-icon name="eye-outline" ></ion-icon></span>

                </div>
            </Link>

        </li>
    ))
    return (
        <section className="skill">

            <h3 className="h3 skills-title">My skills</h3>

            <ul className="skills-list">

                {/* <li className="skills-item">

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

                        </li> */}
                {skill_list}
            </ul>

        </section>
    )
}
