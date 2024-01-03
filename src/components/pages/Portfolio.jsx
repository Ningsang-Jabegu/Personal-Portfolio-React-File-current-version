import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import Portfolio_Body from "./Portfolio_Body";
export default function Portfolio() {
    return(
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Portfolio' />
                <Portfolio_Body />
            </div>
        </main>
    )
}