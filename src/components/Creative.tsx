'use client';

import Image from 'next/image';
import React from 'react';

export default function Creative() {
    return (
        <section className="px-6 py-12 max-w-screen-xl mx-auto">
            {/* Availability + Heading */}
            <div className="mb-6">
        <span className="inline-block px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full mb-3">
          ● Available for Work
        </span>
                <h2 className="text-4xl font-bold">Creative Area</h2>
                <h3 className="text-2xl font-semibold mt-2">Photography</h3>
                <p className="text-gray-700 mt-4 max-w-3xl">
                    I’m interested in capturing moody, atmospheric moments that speak louder than words.
                    Through my lens, I explore the delicate dance between light and shadow, where every frame becomes a quiet story waiting to be felt.
                </p>
                <p className="text-gray-700 mt-2 max-w-3xl">
                    I’m drawn to scenes that evoke emotion—whether it’s the stillness of a foggy morning, the glow of golden hour, or the raw intensity in a fleeting expression.
                    My photography isn’t just about what you see, but about what you feel—inviting viewers to pause, reflect, and connect with the soul of the moment.
                </p>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <Image src="/photo1.png" alt="photo1" width={400} height={400} className="rounded-lg object-cover" />
                <Image src="/photo2.png" alt="photo2" width={400} height={400} className="rounded-lg object-cover" />
                <Image src="/photo3.png" alt="photo3" width={400} height={400} className="rounded-lg object-cover" />
                <Image src="/photo4.png" alt="photo4" width={400} height={400} className="rounded-lg object-cover" />
            </div>

            {/* Short Film Section */}
            <div className="mt-20">
                <h3 className="text-3xl font-bold mb-4">Short film</h3>
                <Image
                    src="/nizhal-poster.png"
                    alt="Short film poster"
                    width={900}
                    height={500}
                    className="rounded-lg mb-6"
                />

                <p className="mb-4">
                    🎬 <strong>Short Film: <em>Nizhal</em></strong><br />
                    Together with a group of passionate friends, I co-created a short film titled <em>Nizhal</em>, which we proudly released on YouTube.
                    This creative journey went far beyond just filming—it helped me grow as a storyteller, leader, and designer.
                </p>

                <h4 className="text-lg font-semibold mb-2">✨ What I Learned & Experienced:</h4>
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                    <li><strong>🧠 Team Leadership:</strong> Took initiative in guiding our team, managing roles, and ensuring smooth coordination throughout the shoot.</li>
                    <li><strong>💰 Budget & Resource Management:</strong> Handled the planning and allocation of funds to keep the production efficient and cost-effective.</li>
                    <li><strong>📝 Storyboarding:</strong> Played a key role in visualizing scenes before filming, helping the team align on direction, shots, and flow.</li>
                    <li><strong>🎥 Night Shoots & Lighting:</strong> With most scenes shot at night, I explored creative ways to work with limited light.</li>
                </ul>
            </div>
        </section>
    );
}
