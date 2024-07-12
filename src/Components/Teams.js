import React from 'react'
import '@mdi/font/css/materialdesignicons.min.css';
import Tiktok from '../Assets/tiktok.webp';
import '../fonts.css'
import { Vec1, Vec2, Vec3, Vec4, Vec5, Vec6, Vec7, Vec8 } from '../Assets';

export default function Teams() {
    const teamMembers = [
        {
            name: 'Amanda Fisher',
            title: 'Founder & Specialist',
            description: "There are many variations of passages of Lorem Ipsum available",
            imgSrc: Vec1,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: '#',
                email: '#',
            },
        },
        {
            name: 'Amanda Fisher',
            title: 'Tired & M. Specialist',
            description: "There are many variations of passages of Lorem Ipsum available",
            imgSrc: Vec2,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: '#',
                email: '#',
            },
        },
        {
            name: 'Mike Cannon',
            title: 'Team Member',
            description: "There are many variations of passages of Lorem Ipsum available",
            imgSrc: Vec3,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: '#',
                email: '#',
            },
        },
        {
            name: 'Amanda Fisher',
            title: 'Founder & Specialist',
            description: "There are many variations of passages of Lorem Ipsum available",
            imgSrc: Vec4,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: '#',
                email: '#',
            },
        },
        {
            name: 'Amanda Fisher',
            title: 'Tired & M. Specialist',
            description: "There are many variations of passages of Lorem Ipsum available",
            imgSrc: Vec5,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: '#',
                email: '#',
            },
        },
        {
            name: 'Mike Cannon',
            title: 'Team Member',
            description: "There are many variations of passages of Lorem Ipsum available",
            imgSrc: Vec6,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: '#',
                email: '#',
            },
        },
        {
            name: 'Doesn\'t matter',
            title: 'Lol',
            description: "There are many variations of passages of Lorem Ipsum available",
            imgSrc: Vec7,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: '#',
                email: '#',
            },
        },
        {
            name: 'Doesn\'t matter',
            title: 'Lol',
            description: "There are many variations of passages of Lorem Ipsum available",
            imgSrc: Vec8,
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: '#',
                email: '#',
            },
        },
    ];

    return (
        <div className="flex items-center justify-center max-w-[1443px] mx-auto bg-white pb-20 font-sp-pro">
            <div className="flex flex-col">
                <div className="flex flex-col mt-2">
                    <div className="container max-w-[1443px] px-2 md:px-5 lg:px-8">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4 flex flex-col gap-3">
                                <h1 className="text-black text-xl font-bold">WHO WE ARE</h1>
                                <h1 className="text-black text-4xl font-bold ">Meet our team</h1>
                                <p className="text-gray-700 text-lg font-light">
                                    Just take a look - each member of the team is watching your every gesture and will hear your every whisper.
                                </p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="max-w-[1443px] mb-6 px-6 sm:px-6 lg:px-0 shadow-xl py-3 rounded-2xl">
                                    <div className="grid grid-cols-1 justify-between items-center gap-5">

                                        <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 mx-auto h-60"
                                            src={member.imgSrc} alt={member.name} />

                                        <div className="text-center mt-6">
                                            <h1 className="text-black text-xl font-bold mb-1">{member.name}</h1>
                                            <div className="text-gray-700 font-light mb-2">{member.title}</div>
                                            <div className="text-gray-500 font-light mb-2">{member.description}</div>

                                            <div className="flex items-center justify-center gap-2 transition-opacity duration-300">
                                                <a href={member.social.linkedin} className="flex rounded-full bg-black h-10 w-10">
                                                    <i className="mdi mdi-linkedin text-white mx-auto mt-2"></i>
                                                </a>
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
    )
}
