import React, { Suspense, lazy, memo } from 'react';
import { Link } from "react-router-dom";
import { Btn_Data } from "../data/Btn_Data";

const SERVICE_PART = lazy(() => import("./SERVICE_PART"));

const HomeContent = memo(() => (
    <p aria-label="Brief introduction and mission statement">
        I'm Ningsang Jabegu, a web developer, cultural advocate, and future public servant, on a mission to blend technology, culture, and service. My goal is to leave a lasting impact through my work in software development, Yakthung promotion, and eventually, public service <Link to="/about" className="read-more-link" aria-label="Read more about Ningsang Jabegu">...</Link>
    </p>
));

const AboutContent = memo(() => (
    <>
        <p aria-label="Introduction and technical expertise">
            Hello, I'm Ningsang Jabegu, a web developer with a passion for building dynamic, user-centric websites and mobile applications. I am committed to solving real-world problems through clean, efficient code, whether it's through creating dynamic websites, developing mobile apps for Android and iOS, or crafting desktop applications. As a perfectionist, I strive to deliver flawless and high-performing solutions.
        </p>
        <p aria-label="Cultural advocacy and Yakthung promotion">
            Alongside my technical journey, I'm deeply engaged in promoting Yakthung (Limbu) language and culture, currently working towards setting a world record by writing the thickest book in the Yakthung script. This endeavor represents my dedication to preserving and promoting my cultural heritage through innovative projects.
        </p>
        <p aria-label="Future aspirations in public service">
            Beyond the world of technology, I have a long-term vision of contributing to my country as a public servant, with the goal of one day serving as Secretary at the Ministry of Foreign Affairs. My dedication to both technology and public service defines my personal and professional life, and I'm constantly working towards blending these passions for a better future.
        </p>
    </>
));

export default function ABOUT_PART({ compIn = 'About' }) {
    return (
        <section className="about-text">
            {compIn === 'Home' ? <HomeContent /> : <AboutContent />}
            <p className="about-tagline" aria-label="Tagline: Coding culture into the future">
                <ion-icon name="ribbon-outline" aria-label="Ribbon icon"></ion-icon> Coding culture into the future
            </p>
            {compIn === 'About' && (
                <Suspense fallback={<div>Loading...</div>}>
                    <SERVICE_PART dataFrom={Btn_Data} type='btn' aria-label="Contact Ningsang Jabegu" />
                </Suspense>
            )}
        </section>
    );
}
