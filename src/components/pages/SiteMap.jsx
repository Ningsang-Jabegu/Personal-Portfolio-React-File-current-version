import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import HEADER_PART from "./automate_process/HEADER_PART";
export default function SiteMap({ setNavTarget }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='' />
                <article className="notfound  active" data-page="notfound">

                <HEADER_PART txt="Site Map" />

                    <section className="about-text">
                        <p>
                            This is sitemap                </p>
                    </section>

                </article>
            </div>
        </main>
    )
}