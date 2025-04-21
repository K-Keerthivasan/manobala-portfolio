'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {Bars3Icon, MoonIcon, SunIcon, XMarkIcon} from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUser,
    faBriefcase,
    faPalette,
    faLayerGroup,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const TopDownBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
     const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigation = [
        { name: 'Home', href: '/', icon: faHome },
        { name: 'About', href: '/about', icon: faUser },
        { name: 'Projects', href: '/projects', icon: faBriefcase },
        { name: 'Creative Area', href: '/creative', icon: faPalette },
        { name: 'Stack', href: '/stack', icon: faLayerGroup },
        { name: 'Contact', href: '/contact', icon: faEnvelope },
    ];

    const topDownBarClassName = `fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-gray-100 shadow-md' : 'bg-white text-gray-900 shadow-md'
    }`;
    const menuClassName = `fixed top-16 left-0 w-full z-40 transform transition-transform duration-300 ${
        isDarkMode ? 'bg-gray-900 text-gray-100 shadow-lg' : 'bg-white text-gray-800 shadow-lg'
    } ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`;
    const navItemClassName = (href: string) =>
        `group flex items-center gap-3 px-4 py-3 transition text-sm
   ${pathname === href ? 'text-blue-600 font-semibold' : (isDarkMode ? 'text-gray-400' : 'text-gray-500')}
   hover:${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`;

    return (
        <div className="relative">
            <div className={topDownBarClassName}>
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                            <img
                                src="/images/profile-small.jpg" // Use a smaller profile image
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Dinesh B</h1>
                    </div>
                    <div className="flex items-center">
                        <button onClick={toggleDarkMode} className="p-2 rounded-full border dark:border-white border-black focus:outline-none mr-2">
                            {isDarkMode ? <SunIcon className="h-5 w-5 text-yellow-400" /> : <MoonIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />}
                        </button>
                        <button onClick={toggleMenu} className="focus:outline-none">
                            {isMenuOpen ? (
                                <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <nav className={menuClassName}>
                <div className="p-6 flex flex-col">
                    <div className="text-center mb-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto">
                            <img
                                src="/images/profile.jpg"
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">Dinesh B</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                    </div>
                    <div className="space-y-2">
                        {navigation.map(({ name, href, icon }) => (
                            <button
                                key={name}
                                onClick={() => {
                                    router.push(href);
                                    setIsMenuOpen(false); // Close menu after navigation
                                }}
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
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TopDownBar;