import Slidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume"
import Navbar from "./Navbar";
export default function CombineSection({navTarget,setNavTarget}) {
    return (
        <main>
            <Slidebar />
            <div className="main-content">
                <Navbar setNavTarget={setNavTarget} />
                {navTarget === 'About' && <About />}
                {navTarget === 'Blog' && <Blog />}
                {navTarget === 'Contact' && <Contact />}
                {navTarget === 'Portfolio' && <Portfolio />}
                {navTarget === 'Resume' && <Resume />}
            </div>
        </main>
    )
}