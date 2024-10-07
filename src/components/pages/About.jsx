import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import HEADER_PART from "./automate_process/HEADER_PART"
import ABOUT_PART from "./automate_process/ABOUT_PART";
export default function About({ setNavTarget, homepage = false }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='About' />
                <article className="about  active" data-page="about">
                    <HEADER_PART txt="About me" alt="Introduction to myself." />

                    <ABOUT_PART />

                </article>
            </div>
        </main>
    )
}