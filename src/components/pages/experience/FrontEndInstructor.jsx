import Slidebar from "../../Sidebar"
import Navbar from "../../Navbar"
import FrontEndInstructor_Body from "./FrontEndInstructor_Body"

export default function FrontEndWebInstructor() {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Resume' />
                <FrontEndInstructor_Body />
            </div>
        </main>
    )
}