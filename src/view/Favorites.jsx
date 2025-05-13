import React from 'react'
import { Helmet } from 'react-helmet-async';
import dev from '../dev/dev.jpeg';

export const Favorites = () => {
    return (
        <>
            <Helmet>
                <title>Developer • Ayat Bliss</title>
            </Helmet>
            <div className="meet-up">
                <img src={dev} alt="Muhammad Jazib" />
                <h2>Muhammad Jazib</h2>
                <p>Muhammad Jazib is a talented and innovative <span>developer</span> with a passion for creating dynamic and impactful web applications. With a strong background in both front-end and back-end development, Jazib excels in transforming ideas into functional, user-friendly digital solutions. His expertise spans various programming languages and frameworks, making him a versatile asset in the tech community.</p>
                <a href="https://www.instagram.com/xitxmuhammadjazib/" target='_blank' >Follow on Instagram</a>
            </div>
        </>
    )
}
