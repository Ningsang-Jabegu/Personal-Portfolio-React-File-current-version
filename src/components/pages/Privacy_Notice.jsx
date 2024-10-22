import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import Privacy_Notice_Body from "./Privacy_Notice_Body";
export default function Privacy_Notice({ setNavTarget }) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='' />
                <Privacy_Notice_Body />
            </div>
        </main>
    )
}