import { useState, } from "react"
import { Link } from "react-router-dom"
import HEADER_PART from "./automate_process/HEADER_PART"
import { Project1Thumbnail, Project2Thumbnail, Project3Thumbnail, ProjectBootcamp1Thumbnail, ProjectGraphicDesign10Thumbnail, ProjectGraphicDesign11Thumbnail, ProjectGraphicDesign12Thumbnail, ProjectGraphicDesign1Thumbnail, ProjectGraphicDesign2Thumbnail, ProjectGraphicDesign3Thumbnail, ProjectGraphicDesign4Thumbnail, ProjectGraphicDesign5Thumbnail, ProjectGraphicDesign6Thumbnail, ProjectGraphicDesign7Thumbnail, ProjectGraphicDesign8Thumbnail, ProjectGraphicDesign9Thumbnail } from "../importImage/SiteImages"
export default function Portfolio_Body() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [filterSelect, setFilterSelect] = useState(false)
    const [initial, setInitial] = useState(true)
    const handleClick = (placeholder) => {
        setActiveFilter(placeholder)
        setFilterSelect(false)
    }
    const mobileFilterSelect = () => {
        setInitial(false)
        setFilterSelect(!filterSelect)
    }
    return (
        <article className="portfolio active" data-page="portfolio">

            <HEADER_PART txt="Portfolio" />

            <section className="projects">

                <ul className="filter-list">

                    <li className="filter-item" onClick={() => { handleClick('All') }}>
                        <button className={`${activeFilter === 'All' ? "active" : ""}`} data-filter-btn>All</button>
                    </li>

                    <li className="filter-item" onClick={() => { handleClick('Web Design And Development') }}>
                        <button className={`${activeFilter === 'Web Design And Development' ? "active" : ""}`} data-filter-btn>Web Design And Development</button>
                    </li>

                    <li className="filter-item" onClick={() => { handleClick('Graphic Design') }}>
                        <button className={`${activeFilter === 'Graphic Design' ? "active" : ""}`} data-filter-btn>Graphic Design</button>
                    </li>

                    <li className="filter-item" onClick={() => { handleClick('Bootcamp') }}>
                        <button className={`${activeFilter === 'Bootcamp' ? "active" : ""}`} data-filter-btn>Bootcamp</button>
                    </li>

                </ul>

                <div className="filter-select-box">
                    {/* "filter-select active" */}
                    <button className={`filter-select ${filterSelect === true ? "active" : ""}`} onClick={() => { mobileFilterSelect() }} data-select>

                        <div className="select-value" data-select-value>{!initial ? activeFilter : "Select Category"}</div>

                        <div className="select-icon">
                            <ion-icon name="chevron-down"></ion-icon>
                        </div>

                    </button>

                    <ul className="select-list">

                        <li className="select-item">
                            <button data-select-item onClick={() => { handleClick('All') }}>All</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item onClick={() => { handleClick('Web Design And Development') }}>Web Design And Development</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item onClick={() => { handleClick('Graphic Design') }}>Graphic Design</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item onClick={() => { handleClick('Bootcamp') }}>Bootcamp</button>
                        </li>

                    </ul>

                </div>

                <ul className="project-list">

                    <li className={`project-item ${activeFilter === 'Web Design And Development' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="web design and development">
                        <Link to="https://fastblurpro.com/" target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={Project1Thumbnail} alt="Fastblur Production" loading="lazy" />
                            </figure>

                            <h3 className="project-title">FastBlur Production</h3>

                            <p className="project-category">Web design and development</p>

                        </Link>
                    </li>

                    <li className={`project-item ${activeFilter === 'Web Design And Development' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="web design and development">
                        <Link to="https://chobegusajumlung.org.np/" target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={Project2Thumbnail} alt="Kirat Yakthung Thegimhang Chobegu Sajumlung" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Kirat Yakthung Thegimhang Chobegu Sajumlung</h3>

                            <p className="project-category">Web design and development</p>

                        </Link>
                    </li>

                    <li className={`project-item ${activeFilter === 'Web Design And Development' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="web design and development">
                        <Link to="https://kamalseling.com.np/" target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={Project3Thumbnail} alt="Kamal Seling" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Kamal Seling</h3>

                            <p className="project-category">Web design and development</p>

                        </Link>
                    </li>

                    <li className={`project-item ${activeFilter === 'Bootcamp' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="bootcamp">
                        <Link to="https://docs.google.com/document/d/15dGTQOiPaFL35tkh5OM9qymEx14qUmdoOJt6rBbKQ4g/edit?usp=sharing" target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectBootcamp1Thumbnail} alt="Front End Web Development Bootcamp" loading="lazy" />
                            </figure>

                            <h3 className="project-title">60 Days Front End Web Development Bootcamp 2023</h3>

                            <p className="project-category">Bootcamp</p>

                        </Link>
                    </li>

                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign1Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign1Thumbnail} alt="Shree Krishna Janma Aasthami" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Shree Krishna Janma Aasthami </h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign2Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign2Thumbnail} alt="Heartfelt tribute" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Heartfelt tribute - 1</h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign3Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign3Thumbnail} alt="Banner for Facebook Coverpage" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Banner for Facebook Coverpage</h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign4Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign4Thumbnail} alt="Heartfelt tribute - 2" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Heartfelt tribute - 2</h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign5Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign5Thumbnail} alt="Poem Bannar" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Poem Bannar - 1</h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign6Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign6Thumbnail} alt="Poem Bannar - 2" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Poem Bannar - 2</h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign7Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign7Thumbnail} alt="Simple Father's Day Bannar - 1" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Simple Father's Day Bannar - 1</h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign8Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign8Thumbnail} alt="Poem Bannar - 3" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Poem Bannar - 3</h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign9Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign9Thumbnail} alt="Congratulation Bannar - 1" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Congratulation Bannar - 1</h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign10Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign10Thumbnail} alt="Facebook Meme Sample" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Facebook Meme Sample</h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign11Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign11Thumbnail} alt="Canva Advertisment Post Design" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Canva Advertisment Post Design</h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                    <li className={`project-item ${activeFilter === 'Graphic Design' || activeFilter === 'All' ? "active" : ""}`} data-filter-item data-category="graphic design">
                        <Link to={ProjectGraphicDesign12Thumbnail} target="_blank" rel="noopener noreferrer">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={ProjectGraphicDesign12Thumbnail} alt="Haritalika Teej Design" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Haritalika Teej Design</h3>

                            <p className="project-category">Graphic Design</p>

                        </Link>
                    </li>
                </ul>

            </section>

        </article>
    )
}