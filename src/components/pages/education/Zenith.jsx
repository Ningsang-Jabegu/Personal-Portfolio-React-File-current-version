import Slidebar from "../../Sidebar"
import Navbar from "../../Navbar"
import Zenith_Body from "./Zenith_Body";
export default function Zenith() {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Resume' />
                <Zenith_Body />
            </div>
        </main>
    )
}