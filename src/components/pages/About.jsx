import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import HEADER_PART from "./automate_process/HEADER_PART.jsx"
import ABOUT_PART from "./automate_process/ABOUT_PART.jsx";
import SERVICE_PART from "./automate_process/SERVICE_PART.jsx"
import TESTIMONIAL_PART from "./automate_process/TESTIMONIAL_PART.jsx"
import CLIENT_PART from "./automate_process/CLIENT_PART.jsx"
export default function About({ setNavTarget }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='About' />
                <article class="about  active" data-page="about">
                    <HEADER_PART txt="About me" />

                    <ABOUT_PART />

                    <SERVICE_PART />

                    <TESTIMONIAL_PART />

                    <CLIENT_PART />

                </article>
            </div>
        </main>
    )
}