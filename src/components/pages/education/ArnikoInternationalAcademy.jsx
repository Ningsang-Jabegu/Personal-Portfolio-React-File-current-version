import Slidebar from "../../Sidebar"
import Navbar from "../../Navbar"
import ArnikoInternationalAcademy_Body from "./ArnikoInternationalAcademy_Body";
export default function ArnikoInternationalAcademy() {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Resume' />
                <ArnikoInternationalAcademy_Body />
            </div>
        </main>
    )
}