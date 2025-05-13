import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import vector from "../logo/Vector.svg";

export const Header = () => {
    const location = useLocation();
    return (
        <header>
            <Link to="/"><img src={vector} alt="Ayat Bliss" /></Link>
            <h1>Ayat Bliss</h1>
            <Link to={location.pathname === '/developer' ? '/' : '/developer'}>
                <svg viewBox="0 0 16 16" aria-checked={location.pathname === '/developer' ? true : false}>
                    <path d="M13.9205 2.2377C13.5784 1.84531 13.1722 1.53404 12.7252 1.32168C12.2782 1.10931 11.799 1 11.3151 1C10.8312 1 10.3521 1.10931 9.90504 1.32168C9.45801 1.53404 9.05185 1.84531 8.70976 2.2377L7.99982 3.05166L7.28988 2.2377C6.5989 1.44548 5.66172 1.00041 4.68453 1.00041C3.70733 1.00041 2.77016 1.44548 2.07917 2.2377C1.38819 3.02993 1 4.10441 1 5.22479C1 6.34516 1.38819 7.41965 2.07917 8.21187L2.78911 9.02583L7.99982 15L13.2105 9.02583L13.9205 8.21187C14.2627 7.81967 14.5342 7.354 14.7194 6.84146C14.9047 6.32893 15 5.77958 15 5.22479C15 4.67 14.9047 4.12064 14.7194 3.60811C14.5342 3.09558 14.2627 2.6299 13.9205 2.2377Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
        </header>
    )
}
