// src/pages/PortfolioPage.jsx

import React, { useState, useEffect } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import PdfModal from '../components/PdfModal'; // Import the new PDF modal

const mockProjects = [
    { id: 1, title: "Sweetheart Revival", category: "Design", imageUrl: "/images/Image-1.png", pdfUrl: "/pdfs/SWEETHEART-REVIVAL.pdf" },
    { id: 2, title: "South Sea", category: "Design", imageUrl: "/images/Image-2.png", pdfUrl: "/pdfs/SOUTH-SEA.pdf" },
    { id: 3, title: "Inner Reflection", category: "Design", imageUrl: "/images/Image-3.png", pdfUrl: "/pdfs/ACNE-STUDIOS.pdf" },
    { id: 4, title: "Venus", category: "Design", imageUrl: "/images/Image-4.png", pdfUrl: "/pdfs/VENUS.pdf" },
    { id: 5, title: "Fashion Illustration And Technical Flats", category: "Design", imageUrl: "/images/Image-5.png", pdfUrl: "/pdfs/FASHION-LLUSTRATION-AND-TECHNICAL-FLATS.pdf" },
    // Make sure you have a pdfUrl for each project
];

export default function PortfolioPage() {
    const [projects, setProjects] = useState([]);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setProjects(mockProjects);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    }, [isModalOpen]);

    const handleProjectClick = (project) => {
        setSelectedPdf(project.pdfUrl);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Delay clearing to allow for closing animation if you add one
        setTimeout(() => setSelectedPdf(null), 300);
    };

  return (
        <>
            <ProjectGrid projects={projects} onProjectClick={handleProjectClick} />
            {isModalOpen && selectedPdf && ( // <-- This is the fix
                <PdfModal
                    pdfUrl={selectedPdf}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}