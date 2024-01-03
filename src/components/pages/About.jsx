import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import About_Body from "./About_Body";
export default function About({ setNavTarget }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='About' />
                <About_Body />
            </div>
        </main>
    )
}