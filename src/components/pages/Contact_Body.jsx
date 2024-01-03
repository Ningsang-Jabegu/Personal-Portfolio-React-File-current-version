import React, { useState } from "react"
export default function Contact_Body() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
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
        formData.append('sheet', 'User Contact Info')
        formData.append('fullname', fullname)
        formData.append('email', email)
        formData.append('message', message)
        await fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => response.json())  // Extract JSON data from the response
            .then(data => console.log('Success!', data))  // Log the data
            .catch(error => {
                console.log('Error', error.message)
                handleError()
            });

        setFullname('');
        setEmail('')
        setMessage('')
        setIsSubmitted(true)
        setIsLoading(false)
    }
    const isFormValid = fullname !== "" && email !== "" && message !== ""
    return (
        <article className="contact active" data-page="contact">

            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2254.1962723408155!2d85.34278966005192!3d27.67986995191101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQwJzQ5LjMiTiA4NcKwMjAnMzguNCJF!5e0!3m2!1sen!2snp!4v1703070341600!5m2!1sen!2snp" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </figure>
            </section>

            <section className="contact-form">

                <h3 className="h3 form-title">Contact Form</h3>
                <div className="contact-form-main-content">
                    {!isSubmitted &&
                        <form action="#" className="form" data-form onSubmit={handleSubmit}>

                            <div class="input-wrapper">
                                <input type="text" name="fullname" className="form-input" placeholder="Full name" required
                                    data-form-input value={fullname} onChange={e => setFullname(e.target.value)} />

                                <input type="email" name="email" className="form-input" placeholder="Email address" required
                                    data-form-input value={email} onChange={e => setEmail(e.target.value)} />
                            </div>

                            <textarea name="message" className="form-input" placeholder="Your Message" required
                                data-form-input value={message} onChange={e => setMessage(e.target.value)}></textarea>

                            <button className="form-btn" type="submit" disabled={!isFormValid} data-form-btn>
                                <ion-icon name="paper-plane"></ion-icon>
                                <span>Send Message</span>
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
                            Form submitted successfully! I will be in contact to you within 48 hours.
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