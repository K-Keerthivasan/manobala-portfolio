import "./globals.css";
import Sidebar from '../components/Sidebar';
import MobileTopBar from '../components/MobileTopBar'; // Assuming you have this component

export const metadata = {
    title: 'Keerthi | Portfolio',
    description: 'Portfolio showcasing web dev & VFX work.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="flex h-screen overflow-hidden">
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* Mobile Top Bar */}
            <div className="md:hidden w-full">
                <MobileTopBar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-y-auto md:pl-64"> {/* Adjust padding for desktop sidebar */}
                <header className="md:hidden fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-10">
                    {/* The MobileTopBar is already fixed, no need for another fixed header here */}
                </header>
                <main className="flex-1 p-6 md:p-6 mt-0 md:mt-0"> {/* Adjust top margin for mobile if needed */}
                    {children}
                </main>
                <footer className="text-center text-sm text-gray-500 py-4 border-t">
                    © {new Date().getFullYear()} Keerthi. All rights reserved.
                </footer>
            </div>
        </div>
        </body>
        </html>
    );
}