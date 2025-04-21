'use client';

import Image from 'next/image';
import React from 'react';

const projects = [
    {
        title: 'HOUSEHOLD REPAIRS APP',
        subtitle: 'A Household service done at door step by one click.',
        tools: ['FIGMA'],
        image: '/household-app.png', // you can replace with actual path
        bg: 'bg-gradient-to-br from-[#516d2e] to-[#93a262]',
    },
    {
        title: 'BSNL Website Remapping',
        subtitle: '',
        tools: ['FIGMA'],
        image: '/bsnl-site.png', // you can replace with actual path
        bg: 'bg-white',
    },
];

export default function ProjectsSection() {
    return (
        <section className="px-6 py-10 max-w-screen-2xl mx-auto">
            <div className="mb-8 text-center">
        <span className="inline-block px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full mb-3">
          ● Available for Work
        </span>
                <h2 className="text-4xl font-bold">Projects: <br className="sm:hidden" /> Showcasing My Journey</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((proj, index) => (
                    <div key={index} className={`rounded-lg shadow-md overflow-hidden p-6 ${proj.bg}`}>
                        <div className="flex justify-center mb-4">
                            <Image src={proj.image} alt={proj.title} width={400} height={300} className="rounded-lg object-contain" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                        {proj.subtitle && <p className="text-sm text-gray-700 mb-3">{proj.subtitle}</p>}
                        <div className="flex flex-wrap gap-2 text-xs">
                            {proj.tools.map((tool, i) => (
                                <span key={i} className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                  Tools Used: {tool}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
