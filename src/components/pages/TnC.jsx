import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import TnC_Body from "./TnC_Body";
export default function TnC({ setNavTarget }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='' />
                <TnC_Body />
            </div>
        </main>
    )
}