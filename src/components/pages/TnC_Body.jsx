import React, { useState } from "react";
import { Link } from "react-router-dom";
import HEADER_PART from "./automate_process/HEADER_PART";
export default function TnC_Body({ setNavTarget }) {

    return (
        <article className="tnc bulletAllow  active" data-page="notfound">
            <HEADER_PART txt={`Terms and \nConditions`} />

            <section className="about-text">
                <h2>1. Introduction</h2>
                <p>
                    Welcome to the personal portfolio website of <strong className="important">Ningsang Jabegu</strong>. These Terms and Conditions govern your use of this website and its services. By accessing or using this website, you agree to abide by these terms, the <strong className="important">Legal Notice</strong>, the <strong className="important">Privacy Notice</strong>, and the <strong className="important">Terms and Conditions</strong> . If you do not agree to these terms, please do not use this website.
                </p>
                <h2>2. Intellectual Property</h2>
                <p>
                    All content on this website, including text, images, designs, logos, and other material, is the intellectual property of <strong className="important">Ningsang Jabegu</strong> unless otherwise stated. Unauthorized use, reproduction, or distribution of any content without written permission is prohibited. Any trademarks, logos, and service marks displayed are the property of their respective owners.
                </p>
                <h2>3. Website Content</h2>
                <p>
                    This website provides information on web development, cultural advocacy, and personal services. The information on this website is provided "as is" and may be changed or updated at any time without notice. While we strive for accuracy, we do not guarantee the completeness, accuracy, or reliability of the information provided. Use of the content on this website is at your own risk.
                </p>
                <h2>4. Use of Services</h2>
                <p>
                    You may interact with the services offered on this website, including filling out forms such as the <strong className="important">Contact Form</strong> and <strong className="important">Request to Add New Webpage Form</strong>. You agree that:
                    <ul>
                        <li>All information you provide is accurate and complete.</li>
                        <li>You will not submit any content or requests that violate the laws of the Government of Nepal or infringe on the rights of third parties.</li>
                        <li>The Request to Add New Webpage Form may be subject to review and may be rejected for any reason at the sole discretion of the website owner.</li>
                    </ul>
                </p>
                <h2>5. User Accounts and Security</h2>
                <p>
                    If at any point you create an account or provide personal information through this website, you are responsible for maintaining the confidentiality of your account and personal information. You agree to notify us immediately of any unauthorized use of your account or personal data. We reserve the right to terminate your account or restrict access to the website at our sole discretion.
                </p>
                <h2>6. Data Collection and Privacy</h2>
                <p>
                    This website collects personal data through forms, including your name, email address, and other details. The collection and use of this data are governed by the Privacy Notice. Your data will be used solely for the purposes of responding to inquiries, evaluating requests, or improving the services provided through this website. Please refer to our <strong className="important">Privacy Notice</strong> for more information on how we handle your data.
                </p>
                <h2>7. Third-Party Links and Services</h2>
                <p>
                    This website may contain links to third-party websites or services that are not controlled or operated by <strong className="important">Ningsang Jabegu</strong>. We are not responsible for the content, policies, or practices of third-party websites. The inclusion of any third-party link does not imply endorsement or affiliation. You are encouraged to review the terms and privacy policies of any third-party sites you visit.
                </p>
                <h2>8. Limitation of Liability</h2>
                <p>
                    To the fullest extent permitted by law, <strong className="important">Ningsang Jabegu</strong> will not be liable for any damages, including direct, indirect, incidental, or consequential damages, arising from the use or inability to use this website or its services. This includes, but is not limited to, damages resulting from errors, interruptions, or loss of data.
                </p>
                <h2>9. Compliance with Laws</h2>
                <p>
                    You agree to use this website in compliance with all applicable laws and regulations. Specifically, you must ensure that any content you submit, or services you request, comply with the legal requirements of the <strong className="important">Government of Nepal</strong>. We reserve the right to report any unlawful activity to the relevant authorities.
                </p>
                <h2>10. Modifications to Terms</h2>
                <p>
                    We reserve the right to modify these Terms and Conditions at any time. Any updates or modifications will be posted on this page, and your continued use of this website following the posting of changes constitutes acceptance of those changes.
                </p>
                <h2>11. Governing Law</h2>
                <p>
                    These Terms and Conditions are governed by the laws of the <strong className="important">Government of Nepal</strong>. Any disputes arising from the use of this website will be subject to the exclusive jurisdiction of the courts of Nepal.
                </p>
                <h2>12. Contact Information</h2>
                <p>
                    For any questions or concerns regarding these Terms and Conditions, please contact us via the <Link to='/contact'>Contact Form</Link> on the website.
                </p>

                <hr />
                <h2>Links:</h2>
                <ul>
                    <li><Link to="/legal-notice">Legal Notice</Link></li>
                    <li><Link to="/privacy-notice">Privacy Notice</Link></li>
                </ul>
            </section>

        </article>
    )
}