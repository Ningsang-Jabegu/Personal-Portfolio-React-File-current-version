import React, { useState } from "react";
import { Link } from "react-router-dom";
import HEADER_PART from "./automate_process/HEADER_PART";
export default function NotFound_Body({ setNavTarget }) {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [newPage, setNewPage] = useState(`${window.location.href}`)
    // const [yourExperties, setYourExperties] = useState('') // Currently not in use
    const [occupation, setOccupation] = useState('')
    const [referrer, setReferrer] = useState('')
    const [message, setMessage] = useState('')
    const [termsAccepted, setTermsAccepted] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [ifErrorOccured, setIfErrorOccured] = useState(false)

    const handleError = () => {
        setIsLoading(false)
        setIfErrorOccured(true)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        const scriptURL = 'https://script.google.com/macros/s/AKfycbziGHHzrtVQIVsdrV6k_k95bIdltYF3PJW8WkBDwz9i-HLD4gSnxPJFsI6QJkU6FHdRhQ/exec'
        const formData = new FormData()
        formData.append('sheet', 'Request For New Webpage')
        formData.append('fullname', fullname)
        formData.append('email', email)
        formData.append('newpage', newPage)
        formData.append('occupation', occupation)
        formData.append('referrer', referrer)
        formData.append('message', message)
        formData.append('termsAccepted', termsAccepted)
        await fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => response.json())  // Extract JSON data from the response
            .then(data => console.log('Success!', data))  // Log the data
            .catch(error => {
                console.log('Error', error.message)
                handleError()
            });

        setFullname('');
        setEmail('')
        setNewPage('')
        setOccupation('')
        setReferrer('')
        setMessage('')
        setTermsAccepted(false)
        setIsSubmitted(true)
        setIsLoading(false)
    }
    const isFormValid = [fullname, email, newPage, occupation, referrer, message, termsAccepted].every(Boolean);

    return (
        <article className="notfound  active" data-page="notfound">
            <HEADER_PART txt={`404 \nPage Not Found !`} />

            <section className="about-text">
                <p>
                    As a web master, instructor, and graphic designer based in Kathmandu, Nepal, I specialize in web development and design media. However, despite my expertise in creating web pages, I regret to inform you that <b style={{ color: "#FFC562" }}>the specific page you’re searching for does not exist on my website</b>. I apologize for any inconvenience this may cause.
                </p>
                <p>
                    You can visit <Link to='/sitemap' style={{ display: "inline", color: "#FFC562", opacity: ".7", textDecoration: "underline" }}>site map</Link> to check for the paths for different web pages available in this personal website.
                </p>
                <p>
                    If you want to see the page you are trying to search for in the future, then please fill up the form below. I will appreciate your call on that and give you credit for making that page possible to publish on my website.
                </p>
            </section>

            <section className="contact-form">

                <h3 className="h3 form-title">Request To Add New Webpage </h3>
                <div className="contact-form-main-content">
                    {!isSubmitted &&
                        <form action="#" className="form" data-form onSubmit={handleSubmit}>

                            <div className="input-wrapper">
                                <input type="text" name="fullname" className="form-input" placeholder="Full name" required
                                    data-form-input value={fullname} onChange={e => setFullname(e.target.value)} />

                                <input type="email" name="email" className="form-input" placeholder="Email address" required
                                    data-form-input value={email} onChange={e => setEmail(e.target.value)} />

                                <input type="text" name="newPageToCreate" className="form-input" placeholder="Proposed web page or link" required
                                    data-form-input value={newPage} onChange={e => setNewPage(e.target.value)} />

                                <input type="text" name="occupation" className="form-input" placeholder="Who are you? eg. student, web master" required
                                    data-form-input value={occupation} onChange={e => setOccupation(e.target.value)} />

                                <input type="text" name="referrer" className="form-input" placeholder="Where did you hear about my portfolio site" required
                                    data-form-input value={referrer} onChange={e => setReferrer(e.target.value)} />
                            </div>

                            <textarea name="message" className="form-input" placeholder="Why you want me to publish it? ... Because it ..." required
                                data-form-input value={message} onChange={e => setMessage(e.target.value)}></textarea>

                            <input type="checkbox" name="termsAccepted" id="termsAccepted" className="form-input" required
                                style={{ width: "20px", height: "20px", display: "inline", marginRight: "1em" }}
                                data-form-input value={termsAccepted} onChange={e => setTermsAccepted(e.target.value)} />
                            <label for="termsAccepted" style={{ color: "#fff", opacity: "0.7", fontSize: "11pt", lineHeight: "2", marginTop: "1em", display: "inline" }}>By ticking this box, I fully accept all the terms and conditions of this personal portfolio site. I have not requested any webpage that promotes or sells items deemed illegal by the Government of Nepal. I adhere to all the rules and regulations set forth by the Government of Nepal.</label>
                            <button className="form-btn" type="submit" disabled={!isFormValid} style={{ marginTop: ".8em" }} data-form-btn>
                                <ion-icon name="book"></ion-icon>
                                <span>Request a Purpose</span>
                            </button>

                        </form>}

                    {isLoading && (
                        <div className="spinner-container">
                            <div className="spinner"></div>
                        </div>
                    )}

                    {isSubmitted && (
                        <div className="success-message">
                            <span className="checkmark">✔</span>
                            Your proposal has been received! After reviewing your purposal I will be in contact with you within 48 hours.
                        </div>
                    )}

                    {ifErrorOccured && (
                        <div className="error-message">
                            <span className="crossmark">X</span>
                            We have failed to receive your message. If it's urgent then please email me at <a href="mailto:ningsanglimbu5203@gmail.com" className="a">ningsanglimbu5203@gmail.com</a> or directly contact me on <a href="tel:+9779806060663" className="a">+977-980 606 0663</a>
                        </div>
                    )}

                    <style jsx>{`
.contact-form-main-content {
    position: relative;
}
.success-message, .error-message {
    // font-weight: bold;
    margin-top: 10px;
    text-align: center;
    color: #d0a956;
}
.success-message {
    color: #d0a956;
}
.a {
    color: #fff;
    opacity:.7;
}
.a:hover {
    text-decoration: underline;
}
.checkmark, .crossmark {
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: white;
    text-align: center;
    line-height: 22px;
    margin-right: 5px;
}
.checkmark {
    background: green;
}
.crossmark {
    background: red;
}
.spinner-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    height: 100%;
    width: 100%;
    background: #555e7340;
    border-radius: 1em;
    z-index:3;
}
.spinner {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`}</style>
                </div>

            </section>

        </article>
    )
}