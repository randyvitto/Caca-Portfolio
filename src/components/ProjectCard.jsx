// src/components/ProjectCard.jsx

import React from 'react';

export default function ProjectCard({ project, onClick }) {
    return (
        <div className="group cursor-pointer" onClick={onClick}>
            <div className="overflow-hidden bg-gray-100">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x450/efefef/333333?text=Image+Error'; }}
                />
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
        </div>
    );
}