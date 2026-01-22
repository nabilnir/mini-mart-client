
"use client";
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
    {
        name: "Elara Vance",
        role: "Interior Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
        text: "I was skeptical about ordering a kitchen set online, but Mini Mart's quality exceeded my expectations. The obsidian finish is gorgeous!"
    },
    {
        name: "Theron Thorne",
        role: "Software Architect",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
        text: "Finally a shop that understands aesthetics. My desk setup is now complete thanks to their minimalist tech collection."
    },
    {
        name: "Zephyrine Solis",
        role: "Freelance Artist",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
        text: "Fastest delivery I've ever experienced. I ordered a lamp on Tuesday and it was glowing in my room by Wednesday evening."
    },
    {
        name: "Orion Nyx",
        role: "Cloud Architect",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
        text: "The cloud-sync feature on the smart products is seamless. It's rare to find hardware that plays this nicely with modern stacks."
    },
    {
        name: "Seraphina Sterling",
        role: "Fashion Blogger",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
        text: "I've featured Mini Mart in my last three lookbooks. Their accessories have this unique 'it' factor that my followers adore."
    },
    {
        name: "Daxer Draken",
        role: "Pro Gamer",
        image: "https://images.unsplash.com/photo-1519085184588-e8c114fec67c?q=80&w=150&h=150&auto=format&fit=crop",
        text: "The ergonomic support on the gaming chairs here isn't just marketing hype. My back feels 100% better after a 12-hour raid."
    }
];

export default function ReviewCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsToShow(1);
            else if (window.innerWidth < 1024) setItemsToShow(2);
            else setItemsToShow(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (reviews.length - (itemsToShow - 1)));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + (reviews.length - (itemsToShow - 1))) % (reviews.length - (itemsToShow - 1)));
    };

    // Autoplay
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [itemsToShow]);

    const maxIndex = reviews.length - itemsToShow;
    const safeIndex = Math.min(currentIndex, maxIndex);

    return (
        <div className="relative group">
            {/* Carousel Container */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out gap-8"
                    style={{ transform: `translateX(-${safeIndex * (100 / itemsToShow)}%)` }}
                >
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="min-w-full sm:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-21.33px)]"
                        >
                            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 italic text-slate-600 relative h-full flex flex-col justify-between">
                                <div className="text-6xl text-blue-100 absolute top-4 left-4 font-serif">“</div>
                                <p className="relative z-10 mb-8 leading-relaxed">
                                    {review.text}
                                </p>
                                <div className="flex items-center gap-4 not-italic">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-50 shadow-sm">
                                        <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">{review.name}</div>
                                        <div className="text-xs text-blue-500 font-semibold uppercase tracking-wider">{review.role}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-400 hover:text-blue-600 hover:scale-110 transition-all z-20 opacity-0 group-hover:opacity-100 border border-slate-100"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-400 hover:text-blue-600 hover:scale-110 transition-all z-20 opacity-0 group-hover:opacity-100 border border-slate-100"
            >
                <FaChevronRight />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: reviews.length - itemsToShow + 1 }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === safeIndex ? 'w-8 bg-blue-600' : 'bg-slate-200'}`}
                    />
                ))}
            </div>
        </div>
    );
}
