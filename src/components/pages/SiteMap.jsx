import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import NotFound_Body from "./NotFound_Body";
import Header_Part from "./automate_process/Header_Part";
export default function SiteMap({ setNavTarget }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='' />
                <article class="notfound  active" data-page="notfound">

                <Header_Part txt="Site Map" />

                    <section class="about-text">
                        <p>
                            This is sitemap                </p>
                    </section>

                </article>
            </div>
        </main>
    )
}