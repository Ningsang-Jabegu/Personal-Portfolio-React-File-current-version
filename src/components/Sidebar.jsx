import { useState } from "react"
import { Link } from "react-router-dom";
export default function Slidebar() {
    const [showDetail, setShowDetail] = useState(false)
    const handleSidebarClick = ()=> {
        setShowDetail(!showDetail)
    }
    const dateObject = new Date();
    // sidebar
    return(
        <aside className={`sidebar ${showDetail ? "active":""}`} data-sidebar>

            <div className="sidebar-info">

                <figure className="avatar-box">
                    <img src="/assets/images/Profile Picture.PNG" alt="Ningsang Jabegu" width="80" />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Ningsang Jabegu">Ningsang Jabegu</h1>

                    <p className="title">Web Master</p>
                </div>

                <button className="info_more-btn" onClick={()=>{handleSidebarClick()}} data-sidebar-btn>
                    <span>Show Contacts</span>

                    <ion-icon name="chevron-down"></ion-icon>
                </button>

            </div>

            <div className="sidebar-info_more">

                <div className="separator"></div>

                <ul className="contacts-list">

                    <li className="contact-item">

                        <div className="icon-box">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>

                            <a href="mailto:ningsanglimbu5203@gmail.com" style={{textOverflow : "ellipsis"}}
                                className="contact-link" title="ningsanglimbu5203@gmail.com">ningsanglimbu5203@gmail.com</a>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            <ion-icon name="phone-portrait-outline"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Phone</p>

                            {/* <a href="#" className="contact-link " title="Currently I am unavailable in mobile phone.">+977 *** *******</a> */}
                            <p className="contact-link " title="Currently I am unavailable in mobile phone.">+977 *** *******</p>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            <ion-icon name="calendar-outline"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>

                            <time dateTime="1982-06-23" title={`I am currently ${dateObject.getFullYear() - 2002 } years old.`}>July 17, 2002</time>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            <ion-icon name="location-outline"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Location</p>

                            <address title="This is my temperorary address.">Koteshwor, Kathmandu, Nepal</address>
                        </div>

                    </li>

                </ul>

                <div className="separator"></div>

                <ul className="social-list">

                    <li className="social-item">
                        <Link to="https://www.facebook.com/ningsang.jabegu/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </Link>
                    </li>

                    <li className="social-item">
                        <Link to="https://twitter.com/JabeguNingsang" target="_blank" rel="noopener noreferrer" className="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </Link>
                    </li>

                    <li className="social-item">
                        <Link to="https://www.instagram.com/nh_jabegu/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </Link>
                    </li>

                    <li className="social-item" >
                        <Link to="https://www.linkedin.com/in/ningsang-jabegu-45b545216/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </Link>
                    </li>

                    <li className="social-item" >
                        <Link to="https://github.com/Ningsang-Jabegu" target="_blank" rel="noopener noreferrer" className="social-link">
                            <ion-icon name="logo-github"></ion-icon>
                        </Link>
                    </li>

                </ul>

            </div>

        </aside>
    )
}