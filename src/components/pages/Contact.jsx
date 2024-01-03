import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import Contact_Body from "./Contact_Body";
export default function Contact() {
    return(
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Contact' />
                <Contact_Body />
            </div>
        </main>
    )
}