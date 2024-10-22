import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import Legal_Notice_Body from "./Legal_Notice_Body";
export default function Legal_Notice({ setNavTarget }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='' />
                <Legal_Notice_Body />
            </div>
        </main>
    )
}