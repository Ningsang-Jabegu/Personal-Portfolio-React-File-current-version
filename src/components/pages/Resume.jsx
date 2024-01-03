import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import Resume_Body from "./Resume_Body";
export default function Resume() {
    return(
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Resume' />
                <Resume_Body />
            </div>
        </main>
    )
}