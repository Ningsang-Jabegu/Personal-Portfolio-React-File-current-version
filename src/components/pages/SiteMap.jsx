import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import NotFound_Body from "./NotFound_Body";
export default function SiteMap({ setNavTarget }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='' />
                <article class="notfound  active" data-page="notfound">

                    <header>
                        <h2 class="h2 article-title">Site Map</h2>
                    </header>

                    <section class="about-text">
                        <p>
                            This is sitemap                </p>
                    </section>

                </article>
            </div>
        </main>
    )
}