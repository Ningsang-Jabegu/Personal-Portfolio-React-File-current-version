import { Link } from "react-router-dom"
import { experience_data } from "../data/Experience_Data"
export default function EXPERIENCE_PART() {
    const experience_list = experience_data.map((exp, index) => (
        <li className="timeline-item" key={index}>

                    <h4 className="h4 timeline-item-title"><Link to={exp.linkPath} className="exp-link">{exp.linkTitle} {exp.linkPath !== "#" &&<ion-icon name="open-outline"></ion-icon>}</Link></h4>

                    <span>{exp.joiningDate}</span>

                    <p className="timeline-text">
                        {exp.briefInfo}
                    </p>

                    <span className="timeline-text-skill">
                        <b>Skills:</b> {exp.skills}
                    </span>
                </li>
    ))
    return (
        <section className="timeline">

            <div className="title-wrapper">
                <div className="icon-box">
                    <ion-icon name="book-outline"></ion-icon>
                </div>

                <h3 className="h3">Experience</h3>
            </div>

            <ol className="timeline-list">

                {experience_list}

            </ol>

        </section>
    )
}