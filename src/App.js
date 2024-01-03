import React, { useState } from 'react';
import Slidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Navbar from "./components/Navbar";
import CombineSection from "./components/CombineSection";
import Blog_1 from './components/pages/blogs/Blog_1';
import NotFound from './components/pages/NotFound';
import Blog_2 from './components/pages/blogs/Blog_2';
import Blog_3 from './components/pages/blogs/Blog_3';
import Blog_4 from './components/pages/blogs/Blog_4';
import Blog_5 from './components/pages/blogs/Blog_5';
import UoPoeple from './components/pages/education/UoPeople';
import AmritCampus from './components/pages/education/AmritCampus';
import ArnikoInternationalAcademy from './components/pages/education/ArnikoInternationalAcademy';
import Zenith from './components/pages/education/Zenith'
import Blog_6 from './components/pages/blogs/Blog_6';
import FrontEndWebDeveloper from './components/pages/experience/FrontEndWebDeveloper';
import FrontEndWebInstructor from './components/pages/experience/FrontEndInstructor';
import WebMaster from './components/pages/experience/WebMaster';
import InnovationConsultant from './components/pages/experience/InnovationConsultant';
import Blog_7 from './components/pages/blogs/Blog_7';
import Blog_8 from './components/pages/blogs/Blog_8';
import Blog_9 from './components/pages/blogs/Blog_9';
import SiteMap from './components/pages/SiteMap';

function App() {
  const [navTarget, setNavTarget] = useState("About");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/How-Reading-Books-Makes-You-A-Better-Front-End-Developer" element={<Blog_1 />} />
          <Route path="/blog/Just-Watching-Video-Tutorials-from-YouTube-Doesn’t-Make-You-an-Experienced-Web-Developer" element={<Blog_2 />} />
          <Route path="/blog/Is-a-Bachelor’s-Degree-Necessary-to-Master-Frontend-Web-Development?" element={<Blog_3 />} />
          <Route path='/blog/How-to-Flourish-as-a-Front-End-Web-Developer?' element={<Blog_4 />} />
          <Route path='/blog/Why-to-Become-a-Front-End-Developer-While-Starting-a-Career-in-IT' element={<Blog_5 />} />
          <Route path='/blog/How-to-Start-Your-First-Project-for-a-Client' element={<Blog_6 />} />
          <Route path='/blog/Why-Debugging-in-Front-End-Development-is-Crucial' element={<Blog_7 />} />
          <Route path='/blog/Why-Consistency-Matters-in-Becoming-a-Better-Front-End-Developer' element={<Blog_8 />} />
          <Route path='/blog/Broadening-Your-Horizons-as-a-Front-End-Web-Developer' element={<Blog_9 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path='/resume/education/UoPeople' element={<UoPoeple />}/>
          <Route path='/resume/education/AmritCampus' element={<AmritCampus />}/>
          <Route path='/resume/education/ArnikoInternationalAcademy' element={<ArnikoInternationalAcademy />}/>
          <Route path='/resume/education/ZenithHighSchool' element={<Zenith />}/>
          <Route path='/resume/experience/FrontEndWebDeveloper' element={<FrontEndWebDeveloper />}/>
          <Route path='/resume/experience/FrontEndWebInstructor' element={<FrontEndWebInstructor />}/>
          <Route path='/resume/experience/WebMaster' element={<WebMaster />}/>
          <Route path='/resume/experience/InnovationConsultant' element={<InnovationConsultant />}/>
          <Route path='/sitemap' element={<SiteMap />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <main>
        <Slidebar />
        <div className="main-content">
          <Navbar setNavTarget={setNavTarget} />
          {navTarget === 'About' && <About />}
          {navTarget === 'Blog' && <Blog />}
          {navTarget === 'Contact' && <Contact />}
          {navTarget === 'Portfolio' && <Portfolio />}
          {navTarget === 'Resume' && <Resume />}
        </div>
      </main> */}
      {/* <CombineSection navTarget = {navTarget} setNavTarget = {setNavTarget}/> */}
      {/* <About setNavTarget = {setNavTarget}/> */}
    </>
  );
}

export default App;
