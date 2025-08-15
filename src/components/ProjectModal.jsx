import React, { useEffect } from 'react';

export default function ProjectModal({ project, isOpen, onClose }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>
            <div
                className={`relative bg-white w-11/12 max-w-4xl max-h-[90vh] rounded-lg shadow-xl overflow-y-auto transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10"
                    aria-label="Close project details"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div>
                    <img 
                        src={project.imageUrl.replace('600x450', '1200x900')} 
                        alt={project.title} 
                        className="w-full h-auto object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x900/efefef/333333?text=Image+Error'; }}
                    />
                    <div className="p-8 sm:p-10">
                        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                        <p className="text-md text-gray-500 mb-6">{project.category}</p>
                        <p className="text-base text-gray-700 leading-relaxed">
                            {project.details}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}