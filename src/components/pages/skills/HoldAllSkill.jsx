import Slidebar from "../../Sidebar"
import Navbar from "../../Navbar"
import { Link } from "react-router-dom"
import { skill_Data } from "../data/Skill_Data"
import HEADER_PART from "../automate_process/HEADER_PART"
import moment from "moment"

export default function HoldAllSkill({ select }) {
    const year = 2024;
    const startOfYear = new Date(year, 0, 1); // January 1st of the year
    const endOfYear = new Date(year + 1, 0, 1); // January 1st of the next year
    const totalDaysInYear = (endOfYear - startOfYear) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
    const totalProject = 100
    const startDate = moment('2024-01-01');
    const today = moment();
    const daysPassed = today.diff(startDate, 'days');

    const skillContent = skill_Data.map((skill, index) => (
        <div className={`skill-main projects ${select !== skill.skillTitle && "hide"}`}>
            <img src="/assets/images/experience/front-end-web-developer.png" className="img-center" alt="Front End Web Developer Banner" style={{ borderRadius: "1em" }} />
            <br />
            <h3>{skill.skillTitle}</h3>
            <br />
            <p>{skill.skillText}</p>
            {/* <p>Here are the list of {skill.skillTitle} project I have completed:</p>
            <ul className="skill-list content-card" style={{ width: "fit-content" }}>

                <li className={`skill-item`} data-filter-item data-category="web design and development">
                    <Link to="#" target="_blank" rel="noopener noreferrer">

                        <figure className="project-img">
                            <div className="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="/assets/images/project/project-graphicDesign-1.jpg" alt="Fastblur Production" loading="lazy" />
                        </figure>

                        <h3 className="project-title">FastBlur Production</h3>

                        <p className="project-category">Web design and development</p>

                    </Link>
                </li>
            </ul> 
            <p>Here are the list of {skill.skillTitle} project I am working on:</p>
            <p>Here are the list of {skill.skillTitle} project I am planning to do :</p> */}
            {select === skill.skillTitle && `I am planning to complete total of 100 ${select} project in the year 2024.`}
            <ul>
                <br />
                <li className="content-card">
                    <div className="title-wrapper">
                        <h5 className="h5">Started Date : <data value="2024-01-01">2024-Jan-1</data></h5>

                    </div>
                </li><br />
                <li className="content-card">
                    <div className="title-wrapper">
                        <h5 className="h5">Total Project to complete : <data value={totalProject}>{totalProject}</data></h5>

                    </div>
                </li><br />
                <li className="content-card">
                    <div className="title-wrapper">
                        <h5 className="h5">Started Date : <data value="2024-01-01">2024-Jan-1</data></h5>

                    </div>
                </li><br />
                <li className="content-card">
                    <div className="title-wrapper">
                        <h5 className="h5">Completed Project (include project of only this year) : </h5>
                        <data value="0">0%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "0%" }}></div>
                    </div>
                </li><br />
                <li className="content-card">
                    <div className="title-wrapper">
                        <h5 className="h5">Remaining Project : </h5>
                        <data value={totalProject - 0}>{totalProject - 0}</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: `${totalProject - 0}%` }}></div>
                    </div>
                </li><br />
                <li className="content-card">
                    <div className="title-wrapper">
                        <h5 className="h5">Time left : </h5>
                        <data value={totalDaysInYear - daysPassed}>{totalDaysInYear - daysPassed} days</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: `${100 - (daysPassed / totalDaysInYear) * 100}%` }}></div>
                    </div>
                </li><br />
                <li className="content-card">
                    <div className="title-wrapper">
                        <h5 className="h5">Completion Date : <data value="2025-01-01">2025-Jan-1</data></h5>

                    </div>
                </li><br />
            </ul>

            <p>External link you might want to visit :</p>
        </div>
    ))

    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Resume' />
                <article className="Experience active" data-page="Experience">
                    <HEADER_PART txt="Skill" />
                    {skillContent}
                </article>
            </div>
        </main>
    )
}