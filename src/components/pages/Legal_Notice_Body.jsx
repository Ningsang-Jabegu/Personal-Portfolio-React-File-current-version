import React, { useState } from "react";
import { Link } from "react-router-dom";
import HEADER_PART from "./automate_process/HEADER_PART";
export default function Legal_Notice_Body({ setNavTarget }) {

    return (
        <article className="legalnotice bulletAllow  active" data-page="notfound">
            <HEADER_PART txt={`Legal Notice`} />

            <section className="about-text">
                <h2>1. General Information</h2>
                <p>
                This personal portfolio website, operated by <strong className="important">Ningsang Jabegu</strong>, aims to showcase professional work, cultural advocacy, and provide a platform for communication and requests related to web development projects. By using this website, you agree to adhere to all terms and conditions outlined below. Your continued use of this website indicates acceptance of these terms.
                </p>
                <h2>2. Data Collection & Use</h2>
                <p>
                    Through forms such as the <strong className="important">Contact Form</strong> and <strong className="important">Request to Add New Webpage Form</strong>, we collect personal information, including but not limited to, your name, email address, and additional information you voluntarily provide. This data is used solely for:
                    <ul>
                        <li>Responding to inquiries submitted via the Contact Form.</li>
                        <li>Evaluating and processing requests submitted through the <strong className="important">Request to Add New Webpage Form</strong>.</li>
                    </ul>
                    All personal information collected on this website is handled with strict confidentiality and in compliance with applicable data protection laws. Your data will not be shared with third parties without your express consent, except where required by law.
                </p>
                <h2>3. Contact Form</h2>
                <p>
                    The <strong className="important">Contact Form</strong> on this website requires the following mandatory fields: <strong className="important">Name</strong>, <strong className="important">Email</strong>, and <strong className="important">Your Message</strong>. The <strong className="important">Send Message</strong> button will only be enabled after these fields are filled in. Additionally, the form includes a checkbox for users to indicate whether they are a member of the <strong className="important">Rotaract Club of Baneshwor</strong>. Membership is requested as part of the form to offer exclusive benefits to members. In the future, this feature may be updated or changed.
                </p>
                <h2>4. Request to Add New Webpage Form</h2>
                <p>
                    By submitting a request through the <strong className="important">Request to Add New Webpage Form </strong> (accessible by entering a non-existent path on the domain or using the following template:
                    <span className="quote">https://www.ningsangjabegu.com.np/[any-string-or-words]</span>), you agree to the following:
                    <ul>
                        <li>You will not submit any content that promotes or sells items deemed illegal under the laws and regulations of the <strong className="important">Government of Nepal</strong>.</li>
                        <li>You affirm that your request does not violate any legal requirements or infringe on the rights of any third parties.</li>
                        <li>Any request submitted may be subject to review and approval, and we reserve the right to reject any request without further explanation.</li>
                        <li>The <strong className="important">Send Request</strong> button will only be enabled once you tick the box confirming that you accept all terms and conditions. By ticking this box, you affirm compliance with the terms related to the content of the request and the legal regulations outlined below.</li>
                    </ul>
                </p>
                <h2>5. Compliance with Government of Nepal Laws</h2>
                <p>
                    All visitors, users, and contributors to this website agree to fully comply with the laws and regulations set forth by the <strong className="important">Government of Nepal</strong>. This includes adhering to laws concerning online content, intellectual property, and prohibited items or services. Requests that are found to violate such laws will be automatically rejected, and legal authorities may be notified where applicable.
                </p>
                <h2>6. User Consent</h2>
                <p>
                    For forms that require user consent, including the Request to Add New Webpage Form, users must check the consent box to indicate their acceptance of all terms and conditions before submitting their request. The consent statement for the Request to Add New Webpage Form is as follows:
                    <quote className='quote'>
                        “By ticking this box, I fully accept all the terms and conditions of this personal portfolio site. I have not requested any webpage that promotes or sells items deemed illegal by the Government of Nepal. I adhere to all the rules and regulations set forth by the Government of Nepal.”
                    </quote>
                    Similarly, the Contact Form requires users to acknowledge their Rotaract Club membership, if applicable, by checking the corresponding box. This feature allows exclusive benefits to be offered to members of the <strong className="important">Rotaract Club of Baneshwor</strong>.
                </p>
                <h2>7. Disclaimer of Liability</h2>
                <p>
                    The content and services provided on this website are offered “as-is” without any guarantees or warranties. While we strive to ensure the accuracy and reliability of the information on this site, <strong className="important">Ningsang Jabegu</strong> will not be held liable for any errors, omissions, or outcomes resulting from the use of this site. Users are responsible for ensuring their compliance with local laws and regulations.
                </p>
                <h2>8. Changes to Legal Notice</h2>
                <p>
                    We reserve the right to update or modify this Legal Notice at any time without prior notice. Continued use of this website following any changes indicates your acceptance of the updated terms.
                </p>
                <h2>9. Contact Information</h2>
                <p>
                    For any questions or concerns regarding these Terms and Conditions, please contact us via the <Link to='/contact'>Contact Form</Link> on the website.
                </p>
                <hr />
                <h2>Links:</h2>
                <ul>
                    <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
                    <li><Link to="/privacy-notice">Privacy Notice</Link></li>
                </ul>
            </section>

        </article>
    )
}