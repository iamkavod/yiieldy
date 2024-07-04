import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Cookie, Cookiez } from '../Assets';
import '../App.css';

export default function Cookies({ show }) {
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        const isCookieAccepted = localStorage.getItem('cookieAccepted');
        if (isCookieAccepted === 'true' || isCookieAccepted === 'false') {
            setShowBanner(false);
        }
    }, []);

    const handleAllow = () => {
        localStorage.setItem('cookieAccepted', 'true');
        setShowBanner(false);
    };

    const handleCancel = () => {
        localStorage.setItem('cookieAccepted', 'false');
        setShowBanner(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const popupContent = document.getElementById("popup-content");
            if (popupContent && !popupContent.contains(event.target)) {
                setShowBanner(true);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!show) {
        return null;
    }

    return (
        <CSSTransition
            in={showBanner}
            timeout={10000}
            classNames="cookie-banner"
            unmountOnExit
        >
            <div className="fixed bottom-0 w-full lg:h-20 h-44 bg-primaryColorLight text-gray-500 p-4 lg:flex grid grid-cols-1 gap-3 justify-between items-center z-[500]" id="popup-content" role="alert">
                <div className='flex justify-center lg:items-center gap-5'>
                    <img src={Cookiez} className='w-8' alt="Cookie icon" />
                    <p className="text-justify lg:hidden block">
                        Our website uses cookies. By continuing to navigate, we assume your permission to deploy cookies as detailed in our Privacy Policy.
                    </p>
                    <p className="text-start hidden lg:block">
                        Our website uses cookies. By continuing to navigate, we assume your <br /> permission to deploy cookies as detailed in our Privacy Policy.
                    </p>
                </div>
                <div className="flex lg:justify-center justify-end lg:gap-10">
                    <button
                        className="mr-2 bg-primaryColor text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-[.9]"
                        onClick={handleAllow}
                    >
                        <img src={Cookie} alt="Accept Cookie icon" />
                        <p>Accept Cookies</p>
                    </button>
                    <button
                        className="bg-white text-primaryColor px-4 py-1 rounded-full hover:opacity-[.9]"
                        onClick={handleCancel}
                    >
                        Decline
                    </button>
                </div>
            </div>
        </CSSTransition>
    );
}
