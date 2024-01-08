import HEADER_PART from "./automate_process/HEADER_PART";
import EDUCATION_PART from "./automate_process/EDUCATION_PART";
import EXPERIENCE_PART from "./automate_process/EXPERIENCE_PART";
import SKILL_PART from "./automate_process/SKILL_PART";
export default function Resume_Body(){
    return(
        <article className="resume active" data-page="resume">
                <HEADER_PART txt="Resume"/>

               <EDUCATION_PART />

                <EXPERIENCE_PART />

                <SKILL_PART />

        </article>
    )
}