import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { Check, Left, Quote, Right, Star } from '../Assets';

export default function Testimonial() {
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            const keenSlider = new KeenSlider(
                sliderRef.current,
                {
                    loop: true,
                    slides: {
                        origin: 'center',
                        perView: 1.25,
                        spacing: 16,
                    },
                    breakpoints: {
                        '(min-width: 1024px)': {
                            slides: {
                                origin: 'auto',
                                perView: 2.5,
                                spacing: 32,
                            },
                        },
                        '(max-width: 1024px)': {
                            slides: {
                                origin: 'center',
                                perView: 1.25,
                                spacing: 40,
                            },
                        },
                        '(max-width: 768px)': {
                            slides: {
                                origin: 'center',
                                perView: 1,
                                spacing: 40,
                            },
                        },
                    },
                },
                []
            );

            const keenSliderPrevious = document.getElementById('keen-slider-previous');
            const keenSliderNext = document.getElementById('keen-slider-next');

            if (keenSliderPrevious && keenSliderNext) {
                keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
                keenSliderNext.addEventListener('click', () => keenSlider.next());
            }

            return () => {
                keenSlider.destroy();
            };
        }
    }, []);

    return (
        <section className="max-w-screen-[1443px]">
            <div className="max-w-[1443px] lg:py-20 lg:px-8 md:px-5 px-0 mx-auto lg:gap-0 gap-5">
                <div className='flex lg:flex-row items-center justify-between'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-primaryColor font-bold lg:text-xl md:text-sm text-xs'>Testimonial</h2>
                        <h1 className='lg:text-4xl md:text-2xl text-xl font-bold lg:pr-0 md:pr-0 pr-10'>Our Customers Think We're The Best</h1>
                    </div>
                    <div className='flex gap-5'>
                        <button
                            aria-label="Previous slide"
                            id="keen-slider-previous"
                            className="rounded-full border border-primaryColor p-3 text-primaryColor transition hover:bg-primaryColor hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 rtl:rotate-180"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            aria-label="Next slide"
                            id="keen-slider-next"
                            className="rounded-full border border-primaryColor p-3 text-primaryColor transition hover:bg-primaryColor hover:text-white"
                        >
                            <svg
                                className="size-5 rtl:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 5l7 7-7 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mt-8 lg:mx-auto max-w-[1443px]">
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide">
                            <blockquote className="flex h-full flex-col lg:gap-0 md:gap-0 gap-5 lg:justify-between md:justify-between lg:py-12 max-w-[1443px]">
                                <div>
                                    <div className='flex justify-between'>
                                        <div>
                                            <img src={Quote} className='h-4' />
                                        </div>
                                        <img src={Star} />
                                    </div>
                                    <div className="mt-10">
                                        <p className="mt-4 leading-relaxed text-black text-justify">
                                            I recently used the Yiieldy Fiidz app's feed calculator to estimate my poultry production.
                                        </p>
                                        <p className="mt-4 leading-relaxed text-black text-justify">
                                            This app makes feed management easier by removing the guesswork, which has helped me save significant money. Its simple and accurate design makes it a must-have for every poultry farmer.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col gap-2'>
                                        <p className="lg:mt-8 text-lg font-black text-black">Jacob Odiakosa</p>
                                        <p className='text-sm'>Winners Farm Ltd</p>
                                    </div>
                                    <img src={Check} />
                                </div>
                            </blockquote>
                        </div>
                        <div className="keen-slider__slide">
                            <blockquote className="flex h-full flex-col lg:gap-0 md:gap-0 gap-5 lg:justify-between md:justify-between lg:py-12">
                                <div>
                                    <div className='flex justify-between'>
                                        <div>
                                            <img src={Quote} className='h-4' />
                                        </div>
                                        <img src={Star} />
                                    </div>
                                    <div className="mt-10">
                                        <p className="mt-4 leading-relaxed text-black text-justify">
                                            Previously, I relied on my intuition to discuss my poultry production. However, since using Yiieldy Fiidz, I have gained invaluable insights into how efficiently my flocks convert feed into weight gain.
                                        </p>
                                        <p className="mt-4 leading-relaxed text-black text-justify">
                                            This has enabled me to make informed decisions about their feeding strategies and boosted my confidence in my poultry management. I am impressed with integrating such a data-driven tool into the app. Fantastic job!
                                        </p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col gap-2'>
                                        <p className="mt-8 text-lg font-black text-black">Abu Warlord</p>
                                        <p className='text-sm'>Azuri-Green Acres</p>
                                    </div>
                                    <img src={Check} />
                                </div>
                            </blockquote>
                        </div>
                        <div className="keen-slider__slide">
                            <blockquote className="flex h-full flex-col lg:gap-0 md:gap-0 gap-5 lg:justify-between md:justify-between lg:py-12">
                                <div>
                                    <div className='flex justify-between'>
                                        <div>
                                            <img src={Quote} className='h-4' />
                                        </div>
                                        <img src={Star} />
                                    </div>
                                    <div className="mt-10">
                                        <p className="mt-4 leading-relaxed text-black text-justify">
                                            Yiieldy Fiidz AI Staff is a game-changer; it is like having a pocket expert ready to provide real-time solutions.
                                        </p>
                                        <p className="mt-4 leading-relaxed text-black text-justify">
                                            It empowers my team with knowledge, improving productivity and profitability. Keep up the great work!
                                        </p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col gap-2'>
                                        <p className="mt-8 text-lg font-black text-black">Ekaidem Jeremiah</p>
                                        <p className='text-sm'>Ecoregions Nigeria</p>
                                    </div>
                                    <img src={Check} />
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
