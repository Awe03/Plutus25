'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const PlutusLandingPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-black text-white"  style={{ fontFamily: 'Times New Roman, serif' }}>
            {/* Header */}
            <header className="absolute top-0 left-0 w-full z-20 p-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="w-[20rem] h-28 relative">
                            <Image
                                src="/PlutusLogo.png"
                                alt="Plutus Logo"
                                width={200}
                                height={200}
                                className={'-mt-[5rem] -ml-[4rem]'}
                                style={{ width: '20rem', height: '20rem' }}
                            />
                        </div>
                        <div className={'-ml-[10rem] mt-[2rem] space-y-1'}>
                            <h1 className="text-2xl font-bold tracking-wider">PLUTUS&#39;25</h1>
                            <p className="text-base tracking-widest">GREENWOOD HIGH</p>
                        </div>
                    </div>

                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex flex-col space-y-1.5 p-2"
                    >
                        <span className="block w-8 h-0.5 bg-white"></span>
                        <span className="block w-8 h-0.5 bg-white"></span>
                        <span className="block w-8 h-0.5 bg-white"></span>
                    </button>
                </div>
            </header>

            {/* Main Hero Section - Full viewport height */}
            <section className="h-screen w-full flex items-center justify-between px-16 relative overflow-hidden ">
                {/* Left Content */}
                <div className="flex-1 max-w-xl z-10">
                    <div className="relative w-full h-[30rem] -mb-[10rem] -ml-[10%]">
                        <Image
                            src="/PlutusText.png"
                            alt="PLUTUS"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl font-light tracking-wider text-white">
                            FROM RUINS TO RICHES
                        </h3>
                        <p className="text-2xl tracking-wider text-white">
                            6<sup className="text-sm">TH</sup> AND 7<sup className="text-sm">TH</sup> AUGUST
                        </p>
                    </div>
                </div>

                {/* King Image - Full height with gradient */}
                <div className="absolute bottom-0 left-3/4 transform -translate-x-1/2 w-[800px] h-full">
                    <Image
                        src="/king.png"
                        alt="King with sword"
                        fill
                        className="object-bottom object-contain"
                    />
                    {/* Gradient overlay for smooth fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                         style={{
                             background: 'linear-gradient(to top, black 0%, transparent 30%, transparent 100%)'
                         }}>
                    </div>
                </div>

                {/* Vertical 2025 Image */}
                <div className="absolute -right-[17rem] top-1/2 transform -translate-y-1/2 w-[42rem] h-full z-10">
                    <Image
                        src="/2025.png"
                        alt="2025"
                        fill
                        className="object-contain"
                    />
                </div>
            </section>

            {/* About Plutus Section */}
            <section className="px-16 py-24 max-w-5xl mx-auto">
                <h2 className="text-5xl font-bold mb-10" style={{ color: '#DC2626' }}>
                    ABOUT PLUTUS
                </h2>
                <div className="space-y-6 text-white text-lg leading-relaxed">
                    <p>
                        GREENWOOD HIGH PRESENTS THE EAGERLY AWAITED ECONOMICS AND COMMERCE FEST, EMPOWERING STUDENTS TO SHOWCASE THEIR FINANCIAL EXPERTISE. INSPIRED BY THE GREEK MYTHOLOGY DEITY PLUTUS, THIS EVENT OFFERS AN IMMERSIVE EXPERIENCE WITH DIVERSE EDUCATIONAL ACTIVITIES, ALLOWING ATTENDEES TO EXPAND THEIR KNOWLEDGE AND SKILLS IN ECONOMICS AND COMMERCE.
                    </p>
                    <p>
                        DYSTOPIAN RENAISSANCE BLENDS THE PAST AND FUTURE—WHERE ANCIENT WISDOM MEETS A CRUMBLING WORLD. RED AND PURPLE REFLECT POWER, SCARCITY, AND REVIVAL. IT EXPLORES HOW ECONOMIES SURVIVE COLLAPSE, HOW TRADE ADAPTS, AND HOW WEALTH IS REDEFINED IN A CHANGING WORLD OF COMMERCE.
                    </p>
                </div>

                {/* Register Now Button */}
                <div className="flex justify-center mt-16">
                    <button className="bg-red-700 hover:bg-red-800 text-white px-16 py-5 text-2xl font-bold tracking-wider transition-all duration-300 transform hover:scale-105">
                        REGISTER NOW
                    </button>
                </div>
            </section>

            {/* Bottom Red Banner */}
            <footer className="bg-red-700 text-white py-4 px-8">
                <div className="flex justify-between items-center text-sm">
                    <span>Greenwood High Int. School, Sarjapur</span>
                    <div className="flex items-center space-x-8">
                        <span>@plutus.2025</span>
                        <span>events@greenwoodhigh.edu.in</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PlutusLandingPage;