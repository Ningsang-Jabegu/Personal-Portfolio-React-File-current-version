import Slidebar from "../../Sidebar"
import Navbar from "../../Navbar"
import FrontEndWebDeveloper_Body from "./FrontEndWebDeveloper_Body";
export default function FrontEndWebDeveloper() {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Resume' />
                <FrontEndWebDeveloper_Body />
            </div>
        </main>
    )
}