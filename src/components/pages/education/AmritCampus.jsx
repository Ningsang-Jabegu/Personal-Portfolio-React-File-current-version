import Slidebar from "../../Sidebar"
import Navbar from "../../Navbar"
import AmritCampus_Body from "./AmritCampus_Body";
export default function AmritCampus() {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Resume' />
                <AmritCampus_Body />
            </div>
        </main>
    )
}