import Slidebar from "../Sidebar";
import Navbar from "../Navbar";
import HEADER_PART from "./automate_process/HEADER_PART";
import ABOUT_PART from "./automate_process/ABOUT_PART";
import SERVICE_PART from "./automate_process/SERVICE_PART";
import TESTIMONIAL_PART from "./automate_process/TESTIMONIAL_PART";
import CLIENT_PART from "./automate_process/CLIENT_PART";

export default function Home({ setNavTarget, homepage = false }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Home' />
                <article className="home active" data-page="home">
                    <HEADER_PART txt="Introduction" alt="Introduction to my personal website (Who am I, What I do, and How I do)." />

                    <ABOUT_PART compIn="Home" />

                    <SERVICE_PART />

                    <TESTIMONIAL_PART />

                    <CLIENT_PART />

                </article>
            </div>
        </main>
    );
}