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

    const skillDetail = () => {
        return <p>Skill detail</p>
    }
    // console.log(skill_Data["Web Design And Development"].skillInfo["Total Project To Complete"]["Total"]())
    const skillContent = Object.entries(skill_Data).map(([skillName, skill], index) => (
        <div className={`skill-main projects ${select !== skillName ? "hide" : ""}`}>

            <img src="/src/assets/images/experience/front-end-web-developer.png" className="img-center" alt="Front End Web Developer Banner" style={{ borderRadius: "1em" }} />
            <br />
            <h3>{skillName}</h3>
            <br />
            <p>{skill.skillText}</p>
            <p>I am planning to complete total of 100 ${select} project in the year 2024.</p>
            <ul>
            <br />
            <li className="content-card">
                <div className="title-wrapper">
                    <h5 className="h5">Started Date : <data>{`${skill.skillInfo["Started Date"]["Year"]}-${skill.skillInfo["Started Date"]["Month"]["name"]}-${skill.skillInfo["Started Date"]["Day"]}`}</data></h5>
                </div>
            </li><br />
            <li className="content-card">
                <div className="title-wrapper">
                    <h5 className="h5">Total Project to complete : <data>{skill.skillInfo["Total Project To Complete"]["Total"]()}</data></h5>

                </div>
            </li><br />
            <li className="content-card">
                <div className="title-wrapper">
                    <h5 className="h5">Completed Project (include project of only this year) : </h5>
                    <data >{skill.skillInfo["Completed Project"]["Total"]()}%</data>
                </div>

                <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{ width: `${skill.skillInfo["Completed Project"]["Total"]()}%` }}></div>
                </div>
            </li><br />
            {/* <li className="content-card">
                <div className="title-wrapper">
                    <h5 className="h5">Remaining Project : </h5>
                    <data >{skill.skillInfo["Remaining Project"]["Total"]()}</data>
                </div>

                <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{ width: `${skill.skillInfo["Remaining Project"]["Total"]()}%` }}></div>
                </div>
            </li><br /> */}
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
                    <h5 className="h5">Completion Date : <data>{`${skill.skillInfo["Completion Date"]["Year"]}-${skill.skillInfo["Completion Date"]["Month"]["name"]}-${skill.skillInfo["Completion Date"]["Day"]}`}</data></h5>

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
                    <div className="skill-main projects ">
                    </div>
                    {skillContent}
                </article>
            </div>
        </main>
    )
}

{/*  */}