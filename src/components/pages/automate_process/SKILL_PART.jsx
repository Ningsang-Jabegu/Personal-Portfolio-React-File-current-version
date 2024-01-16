import { Link } from "react-router-dom"
import { skill_Data } from "../data/Skill_Data"

export default function SKILL_PART() {
    const skill_list = Object.entries(skill_Data).map(([skillName, skill], index) => (
        <li className="skills-item content-card" key={index}>
            <Link to={skill.skillLink}>
                <div className="skill-body-wrapper">
                    <h5 className="h5">{skillName}</h5>
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
                {skill_list}
            </ul>
        </section>
    )
}

// console.log(Object.entries(skill_Data)) // display array ["":{..}]