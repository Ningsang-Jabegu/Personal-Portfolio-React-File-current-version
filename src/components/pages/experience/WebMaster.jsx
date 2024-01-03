import Slidebar from "../../Sidebar"
import Navbar from "../../Navbar"
import WebMaster_Body from "./WebMaster_Body"

export default function WebMaster() {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Resume' />
                <WebMaster_Body />
            </div>
        </main>
    )
}