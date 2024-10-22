import React, { useState } from "react";
import { Link } from "react-router-dom";
import HEADER_PART from "./automate_process/HEADER_PART";
export default function Privacy_Notice_Body({ setNavTarget }) {

    return (
        <article className="privacynotice bulletAllow  active" data-page="notfound">
            <HEADER_PART txt={`Privacy Notice`} />

            <section className="about-text">
                <h2>1. Introductionn</h2>
                <p>
                    At <strong className="important">Ningsang Jabegu</strong>'s Personal Portfolio Website, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Notice explains how we collect, use, disclose, and protect your information when you interact with our website and services.
                </p>
                <p>
                    By using this website, you consent to the data practices described in this notice. If you do not agree with this Privacy Notice, please do not use this website.
                </p>
                <h2>2. Information We Collect</h2>
                <p>
                We collect personal information that you voluntarily provide when interacting with this website, including but not limited to:
                    <ul>
                        <li><strong className="important">Name</strong></li>
                        <li><strong className="important">Email Address</strong></li>
                        <li><strong className="important">Other details</strong> you provide via forms (such as your message, request to add a webpage, or answers to optional questions).</li>
                    </ul>
                    This information is collected when you:
                    <ul>
                        <li>Submit a message via the <strong className="important">Contact Form</strong>.</li>
                        <li>Submit a request via the<strong className="important">Request to Add New Webpage Form</strong>.</li>
                        <li>Interact with any other features or services offered on the website.</li>
                    </ul>
                    
                </p>
                <h2>3. Use of Your Information</h2>
                <p>
                We use the personal information you provide for the following purposes:
                <ul>
                        <li>To respond to your inquiries submitted through the <strong className="important">Contact Form</strong>.</li>
                        <li>To review and process requests submitted via the <strong className="important">Request to Add New Webpage Form</strong>.</li>
                        <li>To improve our website and services based on feedback and information you provide.</li>
                        <li>To offer exclusive benefits or services to members of specific organizations (e.g., the <strong className="important"> Rotaract Club of Baneshwor</strong>, if applicable).</li>
                    </ul>
                </p>
                <h2>4. Data Storage and Security</h2>
                <p>
                We take appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet or electronic storage is 100% secure.
                    <ul>
                        <li>Your data is stored securely on trusted servers.</li>
                        <li>Personal information will not be shared with third parties without your consent, except where required by law or necessary for service delivery.</li>
                    </ul>
                </p>
                <h2>5. Data Sharing and Third Parties</h2>
                <p>
                Your personal information will not be sold, exchanged, transferred, or shared with any third parties without your explicit consent, except for:
                <ul>
                        <li><strong className="important">Service providers</strong> who assist us in maintaining and operating the website (e.g., hosting providers, email services) and who agree to keep this information confidential.</li>
                        <li><strong className="important">Legal compliance</strong>: We may disclose your information to comply with applicable laws or legal processes.</li>
                    </ul>
                </p>
                <h2>6. Cookies and Tracking Technologies</h2>
                <p>
                This website may use cookies or similar tracking technologies to enhance user experience and collect information about your usage of the site. Cookies are small files stored on your device that help the website function more efficiently. You can control cookie settings through your browser preferences.
                </p>
                <h2>7. User Rights</h2>
                <p>
                You have the right to:
                <ul>
                        <li><strong className="important">Access </strong> your personal data: You may request a copy of the personal information we hold about you.</li>
                        <li><strong className="important">Correct or update</strong> your data: You may request that we correct or update your personal information.</li>
                        <li><strong className="important">Delete your data: </strong> You may request that we delete your personal information unless we are required to retain it by law or for legitimate business purposes.</li>
                    </ul>
                    To exercise any of these rights, please contact us via the <Link to='/contact'>Contact Form</Link>.
                </p>
                <h2>8. Third-Party Links</h2>
                <p>
                This website may include links to third-party websites. We are not responsible for the privacy practices or the content of those websites. We encourage you to read the privacy policies of any third-party sites you visit through links on this website.
                </p>
                <h2>9. Children's Privacy</h2>
                <p>
                This website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such information, we will take immediate steps to delete it.
                </p>
                <h2>10. Changes to This Privacy Notice</h2>
                <p>
                We reserve the right to update this Privacy Notice at any time. Any changes will be posted on this page, and the date of the latest revision will be updated at the top of this document. Your continued use of the website following any changes indicates your acceptance of the updated terms.
                </p>
                <h2>11. Contact Information</h2>
                <p>
                If you have any questions or concerns about this Privacy Notice or how we handle your personal information, please contact us via the <Link to='/contact'>Contact Form</Link> on the website.
                </p>
                <hr />
                <h2>Links:</h2>
                <ul>
                    <li><Link to="/legal-notice">Legal Notice</Link></li>
                    <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
                </ul>
            </section>

        </article>
    )
}