import { useState } from "react"
import TESTIMONIAL_PROCESS from "./TESTIMONIAL_PROCESS"
import TESTIMONIAL_MODEL_CLICK from "../onClick/TESTIMONIAL_MODEL_CLICK"
export default function TESTIMONIAL_PART() {
    const [openModel, setOpenModel] = useState(false) 
    const [modelData, setModelData] = useState({
        imgSrc: "",
        imgAlt: "",
        nameClient: "",
        briefText: []
    })
    return (
        <section className="testimonials">

                <h3 className="h3 testimonials-title">Testimonials</h3>

                <ul className="testimonials-list has-scrollbar">
                    {/* {testimonial_lists} */}
                    <TESTIMONIAL_PROCESS openModel = {openModel} setOpenModel = {setOpenModel} modelData = {modelData} setModelData = {setModelData} />
                    <TESTIMONIAL_MODEL_CLICK openModel = {openModel} setOpenModel = {setOpenModel} modelData = {modelData} setModelData = {setModelData} />
                </ul>

            </section>
    )
}
