'use client';

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

export default function TopNav() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Top navbar (visible only on small screens) */}
            <header className="md:hidden flex justify-between items-center px-4 py-3 bg-white dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <img src="/images/profile.jpg" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Dinesh B</h2>
                        <p className="text-xs text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                    </div>
                </div>
                <button onClick={() => setIsSidebarOpen(true)} className="text-gray-700 dark:text-white">
                    <Bars3Icon className="w-6 h-6" />
                </button>
            </header>

            {/* Sidebar as drawer */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </>
    );
}
