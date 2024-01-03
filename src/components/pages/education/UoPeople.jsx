import Slidebar from "../../Sidebar"
import Navbar from "../../Navbar"
import UoPeople_Body from "./UoPeople_Body";
export default function UoPeople() {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Resume' />
                <UoPeople_Body />
            </div>
        </main>
    )
}