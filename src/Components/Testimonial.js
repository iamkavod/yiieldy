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
                        spacing: 48,
                    },
                    breakpoints: {
                        '(min-width: 1024px)': {
                            slides: {
                                origin: 'auto',
                                perView: 2.5,
                                spacing: 48,
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
        <section className="bg-white">
            <div className="max-w-[1443px] flex justify-between items-center gap-20">
                <button
                    aria-label="Previous slide"
                    id="keen-slider-previous"
                    className="transition"
                >
                    <img src={Left} alt="Left" />
                </button>
                <div className="flex flex-col gap-5">
                    <h3 className="lg:text-2xl text-xl text-primaryColor text-center">
                        Testimonials
                    </h3>
                    <h1 className="lg:text-5xl text-2xl font-bold text-center">
                        Our customers think we’re the best
                    </h1>
                </div>
                <button
                    aria-label="Next slide"
                    id="keen-slider-next"
                    className="transition"
                >
                    <img src={Right} alt="Right" />
                </button>
            </div>
            <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide">
                        <blockquote className="flex h-full flex-col justify-between bg-white py-10 w-full">
                            <div>
                                <div className="grid grid-cols-1 h-[400px]">
                                    <div className="flex justify-between items-center">
                                        <img src={Quote} alt="quote" />
                                        <img src={Star} alt="star" />
                                    </div>
                                    <div>
                                        <p>
                                            I recently used the Yiieldy Fiidz app's feed calculator to
                                            estimate my poultry production.
                                        </p>
                                        <p>
                                            This app makes feed management easier by removing the guesswork,
                                            which has helped me save significant money. Its simple and
                                            accurate design makes it a must-have for every poultry farmer.
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <h1>Jacob Odiakosa</h1>
                                            <p>Winners Farm Ltd</p>
                                        </div>
                                        <img src={Check} alt="Check" />
                                    </div>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                    <div className="keen-slider__slide">
                        <blockquote className="flex h-full flex-col justify-between bg-white py-10">
                            <div>
                                <div className="grid grid-cols-1 h-[400px]">
                                    <div className="flex justify-between items-center">
                                        <img src={Quote} alt="quote" />
                                        <img src={Star} alt="star" />
                                    </div>
                                    <div>
                                        <p>
                                            Previously, I relied on my intuition to discuss my poultry
                                            production. However, since using Yiieldy Fiidz, I have gained
                                            invaluable insights into how efficiently my flocks convert feed
                                            into weight gain.
                                        </p>
                                        <p>
                                            This has enabled me to make informed decisions about their
                                            feeding strategies and boosted my confidence in my poultry
                                            management. I am impressed with integrating such a data-driven
                                            tool into the app. Fantastic job!
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <h1>Abu Warlord</h1>
                                            <p>Azuri-Green Acres</p>
                                        </div>
                                        <img src={Check} alt="Check" />
                                    </div>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                    <div className="keen-slider__slide">
                        <blockquote className="flex h-full flex-col justify-between bg-white py-10">
                            <div>
                                <div className="grid grid-cols-1 h-[400px]">
                                    <div className="flex justify-between items-center">
                                        <img src={Quote} alt="quote" />
                                        <img src={Star} alt="star" />
                                    </div>
                                    <div>
                                        <p>
                                            I recently used the Yiieldy Fiidz app's feed calculator to
                                            estimate my poultry production.
                                        </p>
                                        <p>
                                            This app makes feed management easier by removing the guesswork,
                                            which has helped me save significant money. Its simple and
                                            accurate design makes it a must-have for every poultry farmer.
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <h1>Ekaidem Jeremiah</h1>
                                            <p>Ecoregions Nigeria</p>
                                        </div>
                                        <img src={Check} alt="Check" />
                                    </div>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
