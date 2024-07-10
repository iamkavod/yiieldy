import React from 'react'
import '@mdi/font/css/materialdesignicons.min.css';
import Tiktok from '../Assets/tiktok.webp';
import '../fonts.css'

export default function Teams() {
    const teamMembers = [
        {
            name: 'Amanda Fisher',
            title: 'Founder & Specialist',
            description: "jajaja",
            imgSrc: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80',
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
            description: "jajaja",
            imgSrc: 'https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80',
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
            description: "jajaja",
            imgSrc: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80',
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
            description: "jajaja",
            imgSrc: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80',
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
            description: "jajaja",
            imgSrc: 'https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80',
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
            description: "jajaja",
            imgSrc: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80',
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
            description: "jajaja",
            imgSrc: 'https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80',
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
            description: "jajaja",
            imgSrc: 'https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80',
            social: {
                twitter: '#',
                tiktok: '#',
                linkedin: '#',
                email: '#',
            },
        },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-white pb-20 font-sp-pro">
            <div className="flex flex-col">
                <div className="flex flex-col mt-2">
                    <div className="container max-w-7xl px-4">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4 flex flex-col gap-3">
                                <h1 className="text-gray-900 text-xl font-bold">WHO WE ARE</h1>
                                <h1 className="text-gray-900 text-4xl font-bold ">Meet our team</h1>
                                <p className="text-gray-700 text-lg font-light">
                                    Just take a look - each member of the team is watching your every gesture and will hear your every whisper.
                                </p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-4 grid-cols-1">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="w-full md:w-6/12 lg:w-[300px] mb-6 px-6 sm:px-6 lg:px-4 shadow-xl p-3 rounded-2xl mx-[5px]">
                                    <div className="flex flex-col">
                                        <a href="#" className="mx-auto">
                                            <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src={member.imgSrc} alt={member.name} />
                                        </a>

                                        <div className="text-center mt-6">
                                            <h1 className="text-gray-900 text-xl font-bold mb-1">{member.name}</h1>
                                            <div className="text-gray-700 font-light mb-2">{member.title}</div>
                                            <div className="text-gray-500 font-light mb-2">{member.description}</div>

                                            <div className="flex items-center justify-center gap-2 transition-opacity duration-300">
                                                <a href={member.social.twitter} className="flex rounded-full bg-black h-10 w-10">
                                                    <i className="mdi mdi-twitter text-white mx-auto mt-2"></i>
                                                </a>
                                                <a href={member.social.tiktok} className="flex items-center justify-center rounded-full bg-black h-10 w-10">
                                                    <img src={Tiktok} className='mx-auto w-5' />
                                                </a>
                                                <a href={member.social.linkedin} className="flex rounded-full bg-black h-10 w-10">
                                                    <i className="mdi mdi-linkedin text-white mx-auto mt-2"></i>
                                                </a>
                                                <a href={member.social.email} className="flex rounded-full bg-black h-10 w-10">
                                                    <i className="mdi mdi-email text-white mx-auto mt-2"></i>
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
