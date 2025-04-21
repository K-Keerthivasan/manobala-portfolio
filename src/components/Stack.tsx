import React from 'react';

const skills = [
    {
        title: 'Framer',
        category: 'Web Design',
        description:
            "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to life, allowing stakeholders to experience the user flow and interactions before development begins. It's invaluable for refining the user experience.",
    },
    {
        title: 'Figma',
        category: 'Collaborative Design',
        description:
            'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based approach streamlines the design process.',
    },
    {
        title: 'Chat GPT',
        category: 'Content Generation',
        description:
            'ChatGPT is my content generation and assistance tool. I leverage it for content ideas, copywriting, and problem-solving. It provides invaluable insights and suggestions that enhance the quality of my projects.',
    },
    {
        title: 'Maze',
        category: 'user testing tool',
        description:
            'Maze is a user research and testing platform that helps designers, product teams, and researchers test prototypes, concepts, and ideas quickly—without writing code. It allows you to collect actionable insights from real users, helping you validate designs before launch.',
    },
    {
        title: 'Photoshop',
        category: 'Image Manipulation',
        description:
            'Photoshop is my image editing Swiss army knife. I rely on it for retouching photos, creating graphics, and optimizing images for web use. It ensures that visual elements are pixel-perfect.',
    },
    {
        title: 'Illustrator',
        category: 'Vector Graphics',
        description:
            'Illustrator is my go-to for vector graphics and icon design. I use it to create custom icons, logos, and illustrations that seamlessly integrate into web designs.',
    },
];

export default function Stack() {
    return (
        <section className="px-6 py-12 max-w-screen-lg mx-auto">
            <div className="text-sm mb-3 text-green-600">● Available for Work</div>
            <h2 className="text-4xl font-bold mb-8">My Skill Stack: <br className="md:hidden" /> Crafting Digital Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-1">{skill.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{skill.category}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}