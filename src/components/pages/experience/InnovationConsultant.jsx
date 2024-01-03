import Slidebar from "../../Sidebar"
import Navbar from "../../Navbar"
import InnovationConcultant_Body from "./InnovationConsultant_Body"

export default function InnovationConsultant() {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Resume' />
                <InnovationConcultant_Body />
            </div>
        </main>
    )
}