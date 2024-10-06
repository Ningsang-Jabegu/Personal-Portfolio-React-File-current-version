import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import HEADER_PART from "./automate_process/HEADER_PART"
import ABOUT_PART from "./automate_process/ABOUT_PART";
import SERVICE_PART from "./automate_process/SERVICE_PART"
import TESTIMONIAL_PART from "./automate_process/TESTIMONIAL_PART"
import CLIENT_PART from "./automate_process/CLIENT_PART"
export default function About({ setNavTarget, homepage=false }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='About' />
                <article class="about  active" data-page="about">
                    <HEADER_PART txt="About me" alt="Introduction to myself." />

                    <ABOUT_PART />

                </article>
            </div>
        </main>
    )
}