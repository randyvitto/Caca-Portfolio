import React, { useState, useEffect } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import ProjectModal from '../components/ProjectModal';

const mockProjects = [
    { id: 1, title: "It's fun to dream", category: "Illustration", imageUrl: "https://placehold.co/600x450/f0a443/ffffff?text=Robot", details: "Detailed description for 'It's fun to dream'. This piece explores the intersection of technology and childhood imagination." },
    { id: 2, title: "Chimp tee", category: "Graphic Design", imageUrl: "https://placehold.co/600x450/4a8ab3/ffffff?text=Chimp", details: "Detailed description for 'Chimp tee'. A graphic illustration designed for apparel with a striking and memorable character." },
    { id: 3, title: "3NES Show", category: "Fan Art", imageUrl: "https://placehold.co/600x450/d75a4a/ffffff?text=Mario", details: "Detailed description for '3NES Show'. A tribute to classic video games, reimagining an iconic character with a modern style." },
    { id: 4, title: "Monster Friends", category: "Character Design", imageUrl: "https://placehold.co/600x450/63c1a5/ffffff?text=Monsters", details: "Detailed description for 'Monster Friends'. A series of friendly monster characters developed for an animated short." },
    { id: 5, title: "Space Explorer", category: "Illustration", imageUrl: "https://placehold.co/600x450/3d4a6a/ffffff?text=Astronaut", details: "Detailed description for 'Space Explorer'. An editorial illustration about the wonders of space exploration." },
    { id: 6, title: "Cityscape", category: "Concept Art", imageUrl: "https://placehold.co/600x450/c7a3c3/ffffff?text=City", details: "Detailed description for 'Cityscape'. Concept art for a futuristic city in a video game." },
];

export default function PortfolioPage() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setProjects(mockProjects);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [isModalOpen]);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <>
            <ProjectGrid projects={projects} onProjectClick={handleProjectClick} />
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}