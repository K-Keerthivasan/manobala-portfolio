
import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Contact() {
    return (
        <section className="px-6 py-12 max-w-screen-md mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Let's Connect!</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-base">
                Feel free to reach out with your projects, questions, or to connect. I'll respond promptly,
                and we can explore opportunities together.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow flex flex-col items-center">
                <EnvelopeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-1">Email</p>
                <a
                    href="mailto:youremail@example.com"
                    className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                    youremail@example.com
                </a>
            </div>
        </section>
    );
}