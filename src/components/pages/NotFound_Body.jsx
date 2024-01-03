import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import NotFound from "../pages/NotFound"
export default function NotFound_Body({ setNavTarget }) {
    return (
        <article class="about  active" data-page="about">

                        <header>
                            <h2 class="h2 article-title">404 Page Not Found !</h2>
                        </header>

                        <section class="about-text">
                            <p>
                            As a web master, instructor, and graphic designer based in Kathmandu, Nepal, I specialize in web development and design media. I take complex problems and transform them into simple, beautiful, and intuitive designs. However, despite my expertise in creating web pages, I regret to inform you that <b style={{color:"#FFC562"}}>the specific page you’re searching for does not exist on my website</b>. I apologize for any inconvenience this may cause.
                            </p>
                            <p>
If you want to see the page you are trying to search for in the future, then please let me know. I will appreciate your call on that and give you credit for making that page possible to publish on my website.
</p>
                        </section>


                    </article>
    )
}