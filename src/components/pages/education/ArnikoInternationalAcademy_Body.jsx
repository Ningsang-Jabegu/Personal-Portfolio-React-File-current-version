import { Link } from "react-router-dom";
import { EducationArnikoLogo, EducationArnikoAuxfin, EducationArnikoBiticon, EducationArnikoKrafter, EducationArnikoNeb, EducationArnikoRobotechnepal, EducationAscolTu } from "../../importImage/SiteImages";
export default function ArnikoInternationalAcademy_Body() {
    return (
        <article className="Arniko active" data-page="Arniko">
            <header>
                <h2 className="h2 article-title">AISS</h2>
            </header>
            <div className="education-main">
                <img src={EducationArnikoLogo} className="img-center" alt="Amrit Campus Official Logo" style={{borderRadius: "1em"}} />
                <br />
                <h3> Arniko International Secondary School & College</h3>
                <p>2018 — 2020</p>
                <br />
                <p className="timeline-text">
                Arniko Int'l SS & College (in our time, we used to call this institute Arniko International Academy) is a unique and vibrant learning community, dedicated to providing a high-quality education and a safe, supportive environment for all of the students. It provides schools from kindergarten to grade 12, and now they are providing a Bachelor degree in Computer Application (BCA). In this institute, I have studied grades 11 and 12 (or plus two) in the science stream, concentrating on computer science and basic mathematics.                </p><br />
                <p className="timeline-text">
                    The fee structure for my plus 2 was NRP 70,000 in my 11<sup>th</sup> grade and NRP 85,000 in my 12<sup>th</sup> grade. I am in the 2078<sup>th</sup> batch, now it is around NRP 50,000 for BSc. CSIT. Below are some of the major highlights of ASCOL.
                </p><br />

                <h3> Affiliated To:</h3><br />
                <div className="education-flex education-center education-figure">
                    <figure>
                        <img src={EducationArnikoNeb} alt="National Examination Board's Logo" />
                        <figcaption><Link className="a" to="https://www.neb.gov.np/" target="_blank">National Examination Board<ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Government Agency For School Level Education</p>
                    </figure>
                    <figure>
                        <img src={EducationAscolTu} alt="Tribhuvan University's Logo" />
                        <figcaption><Link className="a" to="https://cdcsit.edu.np/" target="_blank">Tribhuvan University<ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Nepal's First Public University</p>
                    </figure>
                </div>
                <br />

                <h3> IT Partner</h3><br />
                <div className="education-flex education-center education-figure">
                <figure>
                        <img src={EducationArnikoKrafter} alt="Krafter's Logo" />
                        <figcaption><Link className="a" to="https://krafters.tech/" target="_blank">Krafters<ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Software company</p>
                    </figure>
                <figure>
                        <img src={EducationArnikoBiticon} alt="Bit Iconic's Logo" />
                        <figcaption><Link className="a" to="https://www.facebook.com/biticonic/" target="_blank">Bit Iconic<ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Computer company</p>
                    </figure>
                    <figure>
                        <img src={EducationArnikoAuxfin} alt="Auxfin's Logo" />
                        <figcaption><Link className="a" to="https://www.auxfin.com/" target="_blank">Auxfin<ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Software company in Patan, Nepal</p>
                    </figure>
                </div>
                <br />

                <h3> Robotics Partner</h3><br />
                <div className="education-flex education-center education-figure">
                    <figure>
                        <img src={EducationArnikoRobotechnepal} alt="Tribhuvan University's Logo" />
                        <figcaption><Link className="a" to="https://www.facebook.com/ROBOTECHNEPAL/" target="_blank">RoboTechNepal<ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Software company in Patan, Nepal</p>
                    </figure>
                </div>
                <br />
                <Link to="https://www.arniko.edu.np/" target="_blank">
                    <button>Visit Arniko <ion-icon name="school-outline"></ion-icon>
                    </button>
                </Link>
            </div>
        </article>
    )
}