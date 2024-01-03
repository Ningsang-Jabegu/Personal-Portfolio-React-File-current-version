import { Link } from "react-router-dom";
export default function Zenith_Body() {
    return (
        <article className="Arniko active" data-page="Arniko">
            <header>
                <h2 className="h2 article-title">ZHS</h2>
            </header>
            <div className="education-main">
                <img src="/assets/images/education/zenith-logo.png" className="img-center" alt="Zenith High School Official Logo" style={{borderRadius: "1em"}} />
                <br />
                <h3> Zenith High School</h3>
                <p>2015 — 2018</p>
                <br />
                <p className="timeline-text">
                Zenith High School (formally Zenith Residential School) is a unique and vibrant learning community, dedicated to providing a high-quality education and a safe, supportive environment for all of the students. It provides schools from kindergarten to grade 10, and further planning for up to grade 12. In this institute, I have studied grades 8 to 10  concentrating on Optional Mathematics and Office Accountancy.                </p><br />
                <p className="timeline-text">
                    The fee structure for my grade 8 to 10 was around NRP 1,00,000 including hostel fee per year. We (my classmates) were the first batch of appearing grade 10 board exam (SEE). Below are some of the major highlights of Zenith High School.
                </p><br />

                <h3> Affiliated To:</h3><br />
                <div className="education-flex education-center education-figure">
                    <figure>
                        <img src="/assets/images/education/Arniko-essentials/neb.png" alt="National Examination Board's Logo" />
                        <figcaption><Link className="a" to="https://www.neb.gov.np/" target="_blank">National Examination Board<ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Government Agency For School Level Education</p>
                    </figure>
                </div>
                
                <br />
                <Link to="https://www.facebook.com/ZHSDharan/" target="_blank">
                    <button>Visit Zenith <ion-icon name="school-outline"></ion-icon>
                    </button>
                </Link>
            </div>
        </article>
    )
}