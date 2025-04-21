'use client';

import Image from 'next/image';

export default function About() {
    return (
        <section className="p-6 min-h-screen">
            {/* Availability Badge */}
            <div className="mb-10">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full mb-4">
                    ● Available for Work
                </span>

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                    {/* Text Section */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-3">
                            About Me: <br /> UI / UX Designer
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed whitespace-normal overflow-visible">                            I am a passionate <strong>UI/UX designer</strong> with a background in finance.
                            I began my professional journey as a fraud analyst, which gave me valuable insight into
                            user behavior, risk analysis, and data-driven thinking. Over time, I realized my true calling
                            lies in using design to solve real-world problems and create intuitive user experiences.
                            <br /><br />
                            My work is focused on crafting clean, user-friendly digital interfaces that make life easier and
                            more enjoyable for people. Whether it’s a mobile app or a web platform, I bring a blend of
                            creativity, empathy, and problem-solving to everything I design.
                        </p>
                    </div>

                    {/* Profile Image */}
                    <div className="rounded-xl overflow-hidden">
                        <Image
                            src="/images/pic.jpg"
                            alt="UI/UX Designer Avatar"
                            width={300}
                            height={300}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            <hr className="my-8 border-gray-300 dark:border-gray-700" />

            {/* Education & Stack Section */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Education */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed whitespace-normal overflow-visible">                        I earned my <strong>MBA in Finance</strong>, which strengthened my skills in critical thinking,
                        decision-making, and understanding user behavior from a business lens.
                        Prior to that, I completed my <strong>Bachelor's in Commerce</strong> from Vivekananda College,
                        where I developed a strong foundation in business logic and analytics.
                        <br /><br />
                        My early education includes <strong>HSC from MCC School</strong> and <strong>SSLC from LMD School</strong>.
                        It was during these formative years that I discovered my love for creativity and technology—something
                        that naturally led me to pursue a career in design.

                    </p>
                    <button className="group inline-flex items-center gap-2 px-4 py-2 border border-black rounded-md transition-all duration-300">
                        <span>View Projects</span>
                        <span className="transform transition-all duration-300 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100">
    →
  </span>
                    </button>


                </div>

                {/* Stack */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Stack</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed whitespace-normal overflow-visible">                        My design stack includes tools like <strong>Figma</strong>, <strong>Adobe Illustrator</strong>, and <strong>Photoshop</strong>,
                        which I use to build responsive, visually stunning interfaces. I’m also proficient in
                        <strong> MS Word</strong> and <strong>PowerPoint</strong> for project documentation and design presentations.
                        <br /><br />
                        I focus on <strong>user-centered design</strong> principles, ensuring every solution I create
                        is functional, aesthetically pleasing, and easy to use. I constantly explore new trends and
                        design systems to stay ahead in the ever-changing UI/UX landscape.
                    </p>
                    <button className="mt-4 px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        View Stack
                    </button>
                </div>
            </div>
        </section>
    );
}
