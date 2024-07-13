import React from 'react';
import '@mdi/font/css/materialdesignicons.min.css';
import Tiktok from '../Assets/tiktok.webp';
import '../fonts.css';
import { Pic1, Pic2, Pic3, Pic4, Pic5 } from '../Assets';

export default function Teams() {
    const teamMembers = [
        {
            name: 'Mfon Uwa',
            title: 'Founder & CTO ',
            description: "",
            imgSrc: Pic1,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: 'https://www.linkedin.com/in/mfon-uwa-942a9320/',
                email: '#',
            },
        },
        {
            name: 'Sharon Idahosa',
            title: 'Vice President ',
            description: "",
            imgSrc: Pic4,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: 'https://www.linkedin.com/in/sharonidahosa/',
                email: '#',
            },
        },
        {
            name: 'Dominica Una',
            title: 'Project Manager',
            description: "",
            imgSrc: Pic3,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: 'https://www.linkedin.com/in/dominica-una/',
                email: '#',
            },
        },
        {
            name: 'Olandro Marcus',
            title: 'Agronomist',
            description: "",
            imgSrc: Pic5,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: '#',
                email: '#',
            },
        },
        {
            name: 'Uko Akpabio',
            title: 'Web Developer',
            description: "",
            imgSrc: Pic2,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: 'https://www.linkedin.com/in/oku-akpabio-08baaa222/',
                email: '#',
            },
        },
    ];

    return (
        <div className="flex items-center justify-center max-w-[1443px] mx-auto bg-white pb-20 font-sp-pro">
            <div className="w-full">
                <div className="flex flex-col mt-2">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4 flex flex-col gap-3">
                                <h1 className="text-black text-4xl font-bold">Meet our team</h1>
                                <p className="text-gray-700 text-lg font-light">
                                    Introducing the Dedicated Professionals Behind Our Success
                                </p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="w-full mb-6 px-6 sm:px-6 lg:px-0 shadow-xl py-3 rounded-2xl">
                                    <div className="grid grid-cols-1 justify-center items-center gap-5">
                                        <img className="rounded-2xl drop-shadow-md transition-all duration-200 delay-100 mx-auto h-60"
                                            src={member.imgSrc} alt={member.name} />

                                        <div className="text-center mt-6 px-5 w-full">
                                            <h1 className="text-black text-xl font-bold mb-1">{member.name}</h1>
                                            <div className="text-gray-700 font-light mb-2">{member.title}</div>
                                            <div className="text-gray-500 font-light mb-2">{member.description}</div>

                                            <div className="flex items-center justify-center gap-2 transition-opacity duration-300">
                                                {member.imgSrc !== Pic5 && (
                                                    <a href={member.social.linkedin} className="flex rounded-full bg-black h-10 w-10" target='_blank' rel="noopener noreferrer">
                                                        <i className="mdi mdi-linkedin text-white mx-auto mt-2"></i>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
