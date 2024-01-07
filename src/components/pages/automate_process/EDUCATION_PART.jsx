import { Link } from "react-router-dom"
import { education_data } from "../data/Education_Data"
export default function EDUCATION_PART() {
    const education_list = education_data.map((edu, index) =>(
        <li className="timeline-item">

                    <h4 className="h4 timeline-item-title"><Link to={edu.linkPath} className="edu-link" key={index}> {edu.linkTitle} {edu.linkPath !== "#" &&<ion-icon name="open-outline"></ion-icon>}</Link></h4>

                    <span>{edu.joiningDate}</span>

                    <p className="timeline-text">
                        {edu.briefInfo}
                    </p>

                </li>
    ))
    return (
        <section className="timeline">

            <div className="title-wrapper">
                <div className="icon-box">
                    <ion-icon name="book-outline"></ion-icon>
                </div>

                <h3 className="h3">Education</h3>
            </div>

            <ol className="timeline-list">
                {education_list}
            </ol>

        </section>
    )
}