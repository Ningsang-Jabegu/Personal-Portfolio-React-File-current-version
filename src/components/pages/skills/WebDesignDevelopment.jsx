import Slidebar from "../../Sidebar"
import Navbar from "../../Navbar"
import { Link } from "react-router-dom"
import HEADER_PART from "../automate_process/HEADER_PART"
import { ExperienceFrontendwebdeveloper } from "../../importImage/SiteImages"

export default function WebDesignDevelopment() {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Resume' />
                <article className="Experience active" data-page="Experience">
                    <HEADER_PART txt="Skill"/>
                    <div className="education-main">
                        <img src={ExperienceFrontendwebdeveloper} className="img-center" alt="Front End Web Developer Banner" style={{ borderRadius: "1em" }} />
                        <br />
                        <h3> Web Design and Development</h3>
                        <p>The most modern and high-quality design made at a professional level.</p>
                        {/* <p>2022 Dec — Present</p>
                        <br />
                        <p className="timeline-text">
                            I am working as a remote front-end web developer in Kirat Yakthung Thegimhang Chobegu Sajumlung (KYTCS) or Chobegu Sajumlung. Here, my main work is to update the website content on a regular basis. To learn about the working culture of this organization, I am given the task of showing those organizational activities on this website.
                        </p><br />
                        <p className="timeline-text">
                            Since this is the social organization that works for the upliftment of the Jabegu/Chobegu family, as a Jabegu/Chobegu, I am contributing my time to this organization without any salary. I am volunteering here as a front-end web developer.
                        </p><br />

                        <h3> My works includes :-</h3><br />
                        <ol style={{ color: "var(--light-gray);", marginLeft: "1em" }}>
                            <li>Crafting the new user interface for the website according to the modern world.</li>
                            <li>Updating the content of the website in weekly basis.</li>
                            <li>Adding new tools and features in the website that helps unite the Jabegu/Chobegu family.</li>
                            <li>Collabrating with the more experence people of the Jabegu family on how can I contribute better for the website.</li>
                            <li>Handeling web cencus and presenting the data provided in the website with colourful graphics (charts, tables, bars, etc.)</li>
                            <li>Now, currently working on making the system that shows the geneology of a person (Jabegu), this means for me, this system will provide the info of my father, grand father, great grand father, great great grand father,... and so on.</li>
                        </ol>
                        <br />
                        <Link to="https://chobegusajumlung.org.np/" target="_blank">
                            <button>Visit Chobegu Sajumlung <ion-icon name="school-outline"></ion-icon>
                            </button>
                        </Link> */}
                    </div>
                </article>
            </div>
        </main>
    )
}