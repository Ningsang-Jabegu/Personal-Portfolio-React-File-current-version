import Slidebar from "../Sidebar"
import Navbar from "../Navbar";
import Blog_Body from "./Blog_Body";
export default function Blog() {
    return(
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar activeLink='Blog' />
                <Blog_Body />
            </div>
        </main>
    )
}