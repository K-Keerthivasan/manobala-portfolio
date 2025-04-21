'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check local storage for theme preference on mount
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        const html = document.documentElement;
        if (!isDarkMode) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="px-6 py-10 max-w-screen-xl mx-auto text-gray-900 dark:text-white">
            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full w-10 h-10 flex items-center justify-center z-50"
            >
                {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1m-9 0h-1m-2 5l-.707-1.414M3 9l.707-1.414M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                )}
            </button>

            {/* Header / Hero Section */}
            <section className="text-center space-y-5 mb-14">
                <span className="inline-block px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full dark:bg-green-800 dark:text-green-200">
                    ● Available for Work
                </span>

                <button className="px-4 py-1 border border-gray-300 rounded-md text-sm shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                    Resume
                </button>

                <h1 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    Hey there! <br /> I&apos;m Dinesh B...
                </h1>

                <p className="text-gray-600 dark:text-gray-400 text-base max-w-lg mx-auto">
                    I’m a passionate UI/UX designer turning real-world problems into seamless digital experiences.
                </p>

                <Link
                    href="/about"
                    className="inline-block px-4 py-2 border border-gray-400 rounded-md mt-2 dark:border-gray-600 dark:text-white"
                >
                    More about Me
                </Link>
            </section>

            {/* Recent Projects */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2 dark:border-gray-600 dark:text-white">Recent Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project 1 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                        <Image
                            src="/household-app.png"
                            alt="Household Repairs App"
                            width={500}
                            height={300}
                            className="rounded-md mb-4"
                        />
                        <p className="text-xs text-gray-500 uppercase mb-1 dark:text-gray-400">Category</p>
                        <p className="font-semibold dark:text-white">Household repairs app</p>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                        <Image
                            src="/bsnl-site.png"
                            alt="BSNL Website Remapping"
                            width={500}
                            height={300}
                            className="rounded-md mb-4"
                        />
                        <p className="text-xs text-gray-500 uppercase mb-1 dark:text-gray-400">Category</p>
                        <p className="font-semibold dark:text-white">BSNL Website remapping</p>
                    </div>
                </div>

                <Link
                    href="/projects"
                    className="inline-block mt-4 px-4 py-2 border border-gray-400 rounded-md dark:border-gray-600 dark:text-white"
                >
                    All Projects
                </Link>
            </section>

            {/* Stack Section */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2 dark:border-gray-600 dark:text-white">Stack</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { title: 'Framer', desc: 'Web Design', icon: '/framer.png' },
                        { title: 'Figma', desc: 'Collaborative Design', icon: '/figma.png' },
                        { title: 'Chat GPT', desc: 'Content Generation', icon: '/chatgpt.png' },
                        { title: 'Photoshop', desc: 'image editing tool', icon: '/photoshop.png' },
                        { title: 'Illustrator', desc: 'vectors editing tool', icon: '/illustrator.png' },
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex gap-4 items-center">
                            <Image src={item.icon} alt={item.title} width={40} height={40} />
                            <div>
                                <p className="font-medium dark:text-white">{item.title}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Link
                    href="/stack"
                    className="inline-block mt-4 px-4 py-2 border border-gray-400 rounded-md dark:border-gray-600 dark:text-white"
                >
                    All Stack
                </Link>
            </section>

            {/* Footer */}
            <footer className="text-sm text-gray-500 text-center border-t pt-4 dark:border-gray-600 dark:text-gray-400">
                © Copyright {new Date().getFullYear()}. All rights Reserved. <br />
                Made by <Link href="https://uhub.design" className="underline dark:text-blue-400">Ulhub.design</Link> in <span className="underline dark:text-blue-400">Framer</span>
            </footer>
        </div>
    );
}