import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
export default function UoPoeple_Body() {
    const [isMobile, setIstMobile] = useState(window.innerWidth <= 580)
    useEffect(() => {
        const handleResize = () => {
            setIstMobile(window.innerWidth <= 580)
        }
        window.addEventListener('resize', handleResize)
        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <article className="UoPeople active" data-page="UoPeople">
            <header>
                <h2 className="h2 article-title">UoPeople</h2>
            </header>
            <div className="education-main">
                <img src="/assets/images/education/UoPeople-logo.png" className="img-center" alt="University of The People's Official Logo" style={{borderRadius: "1em"}} />
                <br />
                <h3> University of The People</h3>
                <p>2023 — running</p>
                <br />
                <p className="timeline-text">
                    University of The People or commonly also called as UoPeople is 100% online. They provide tuition-free degree programs and which is why I am currently enrolled at this University in the Bachelor's degree. It is Bachelor's of Science in Computer Science (BS. CS).
                </p><br />
                <p className="timeline-text">
                    Only I need to pay is the course assessment (Exam) fee of USD 120 for each course. Below are some of the major highlights of UoPeople.
                </p><br />

                <h3> Approved and Accredited by</h3><br />
                <div className="education-flex education-center education-figure">
                    <figure>
                        <img src="/assets/images/education/UoPeople-essentials/bppe.png" alt="Bureau for Private Postsecondary Education Logo" />
                        <figcaption><Link className="a" to="https://www.bppe.ca.gov/" target="_blank">Bureau for Private Postsecondary Education <ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>California State agency</p>
                    </figure>
                    <figure>
                        <img src="/assets/images/education/UoPeople-essentials/deac.png" alt="Distance Education Accrediting Commission Logo" />
                        <figcaption><Link className="a" to="https://www.deac.org/" target="_blank">Distance Education Accrediting Commission <ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Private Non Profit Organization</p>
                    </figure>
                </div><br />
                <h3> In Collaboration with</h3><br />
                <div className="education-flex education-center education-figure uni-lists">
                    <figure>
                        <img src="/assets/images/education/UoPeople-essentials/nyu.png" alt="New York University Logo" />
                        <figcaption><Link className="a" to="https://www.nyu.edu/" target="_blank">New York University <ion-icon name="open-outline"></ion-icon></Link> </figcaption>
                        <p>New York, USA <span className="dot"></span> Private Not-For-Profit Institution</p>
                    </figure>
                    <figure>
                        <img src="/assets/images/education/UoPeople-essentials/University-of-Edinburgh.png" alt="University of Edinburgh Logo" />
                        <figcaption><Link className="a" to="https://www.ed.ac.uk/" target="_blank">University of Edinburgh <ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Edinburgh, Scotland <span className="dot"></span> Public University</p>
                    </figure>
                    <figure>
                        <img src="/assets/images/education/UoPeople-essentials/ibo.png" alt="International Baccalaureate Organization Logo" />
                        <figcaption><Link className="a" to="https://www.ibo.org/" target="_blank">International Baccalaureate Organization <ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Geneva, Switzerland</p>
                    </figure>
                    <figure>
                        <img src="/assets/images/education/UoPeople-essentials/havard.png" alt="Havard Business School Online Logo" />
                        <figcaption><Link className="a" to="https://online.hbs.edu/" target="_blank">Havard Business School Online <ion-icon name="open-outline"></ion-icon> </Link></figcaption>
                        <p> Boston, Massachusetts, USA <span className="dot"></span> Private Research University</p>
                    </figure>
                    <figure>
                        <img src="/assets/images/education/UoPeople-essentials/mcgill.png" alt="McGill University" />
                        <figcaption><Link className="a" to="https://www.mcgill.ca/" target="_blank">McGill University <ion-icon name="open-outline"></ion-icon></Link></figcaption>
                        <p>Montreal, Canada <span className="dot"></span> Public University</p>
                    </figure>
                </div>
                <br />
                <Link to="https://www.uopeople.edu/" target="_blank">
                    <button>Visit UoPeople <ion-icon name="school-outline"></ion-icon>
                    </button>
                </Link>
            </div>
        </article>
    )
}