'use client';


'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUser,
    faBriefcase,
    faPalette,
    faLayerGroup,
    faEnvelope,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

import { faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const dark = !isDarkMode;
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        setIsDarkMode(dark);
    };

    const navigation = [
        { name: 'Home', href: '/', icon: faHome },
        { name: 'About', href: '/about', icon: faUser },
        { name: 'Projects', href: '/projects', icon: faBriefcase },
        { name: 'Creative Area', href: '/creative', icon: faPalette },
        { name: 'Stack', href: '/stack', icon: faLayerGroup },
        { name: 'Contact', href: '/contact', icon: faEnvelope },
    ];

    const sidebarClassName = `w-80 h-screen flex flex-col justify-between py-8 px-6 transition-colors duration-300 ${
        isClient
            ? isDarkMode
                ? 'bg-gray-900 text-gray-100 border-r-gray-800'
                : 'bg-white text-gray-800 border-r-gray-200'
            : 'bg-white text-gray-800 border-r-gray-200'
    }`;

    const navItemClassName = (href: string) =>
        `group w-full flex items-center gap-3 px-4 py-3 rounded-md transition text-[17px]
   ${pathname === href ? 'text-blue-600 font-semibold' : 'text-gray-500 dark:text-gray-400'}
   hover:text-gray-700 dark:hover:text-gray-300`;

    return (
        <aside className={sidebarClassName}>
            <div>
                {/* Profile and Name in horizontal row */}
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src="/images/pic.jpg"
                        alt="Profile"
                        className="w-16 h-16 object-cover shadow"
                    />
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Dinesh B</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-t border-gray-300 dark:border-gray-700 mb-6" />

                {/* Nav Items */}
                <nav className="space-y-6">
                    {navigation.map(({ name, href, icon }) => (
                        <button
                            key={name}
                            onClick={() => router.push(href)}
                            className={navItemClassName(href)}
                        >
                            <span className="h-5 w-5 overflow-hidden relative flex items-center justify-center">
                                <FontAwesomeIcon
                                    icon={icon}
                                    className="absolute top-0 left-0 transition-transform duration-300 group-hover:-translate-y-5"
                                />
                                <FontAwesomeIcon
                                    icon={icon}
                                    className="absolute top-5 left-0 opacity-50 transition-transform duration-300 group-hover:-translate-y-5"
                                />
                            </span>
                            <span>{name}</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Bottom: Theme Toggle + Socials */}
            <div className="mt-8">
                <hr className="border-t border-gray-300 dark:border-gray-700 mb-4" />
                <div className="flex justify-center gap-6 mb-4">
                    {[faPaperPlane, faBehance, faLinkedin].map((icon, idx) => (
                        <span
                            key={idx}
                            className="h-5 w-5 overflow-hidden relative flex items-center justify-center group"
                        >
                            <FontAwesomeIcon
                                icon={icon}
                                className="absolute top-0 left-0 transition-transform duration-300 group-hover:-translate-y-5 text-gray-500 dark:text-gray-400"
                            />
                            <FontAwesomeIcon
                                icon={icon}
                                className="absolute top-5 left-0 opacity-50 transition-transform duration-300 group-hover:-translate-y-5 text-gray-500 dark:text-gray-400"
                            />
                        </span>
                    ))}
                </div>
                <div className="flex flex-col items-center">
                    <button onClick={toggleDarkMode} className="p-2 rounded-full border dark:border-white border-black">
                        {isDarkMode ? (
                            <SunIcon className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <MoonIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        )}
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
