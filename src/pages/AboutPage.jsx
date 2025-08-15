import React from 'react';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <img 
                src="https://placehold.co/800x500/cccccc/ffffff?text=About+Me" 
                alt="About me" 
                className="mx-auto rounded-lg mb-8 shadow-md"
            />
            <div className="text-left space-y-4 text-gray-700 leading-relaxed">
                <p>Hello! I'm a passionate designer and illustrator with a love for creating vibrant and engaging visuals. My journey into the world of art started with a simple pencil and a sketchbook, and has since evolved into a full-fledged career in digital media.</p>
                <p>I specialize in character design, branding, and user interface design. I believe that great design is not just about aesthetics, but also about telling a story and creating a meaningful connection with the audience.</p>
                <p>When I'm not designing, you can find me exploring new coffee shops, hiking in the mountains, or getting lost in a good video game. Thanks for stopping by!</p>
            </div>
        </div>
    );
}