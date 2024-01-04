import { useState } from "react"
import Testimonial_Model_Click from "../onClick/Testimonial_Model_Click"
import Testimonial_Process from "./Testimonial_Process"
export default function Testimonial_Part() {
    const [openModel, setOpenModel] = useState(false) 
    const [modelData, setModelData] = useState({
        imgSrc: "",
        imgAlt: "",
        nameClient: "",
        briefText: []
    })
    return (
        <section class="testimonials">

                <h3 class="h3 testimonials-title">Testimonials</h3>

                <ul class="testimonials-list has-scrollbar">
                    {/* {testimonial_lists} */}
                    <Testimonial_Process openModel = {openModel} setOpenModel = {setOpenModel} modelData = {modelData} setModelData = {setModelData} />
                    <Testimonial_Model_Click openModel = {openModel} setOpenModel = {setOpenModel} modelData = {modelData} setModelData = {setModelData} />
                </ul>

            </section>
    )
}