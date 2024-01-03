import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import NotFound_Body from "./NotFound_Body";
export default function NotFound({ setNavTarget }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='About' />
                <NotFound_Body />
            </div>
        </main>
    )
}