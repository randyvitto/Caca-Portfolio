import React, { useState, useEffect } from 'react';

export default function PdfModal({ pdfUrl, isOpen, onClose }) {
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        if (!isOpen || !pdfUrl) {
            return;
        }
        setStatus('loading');
        const verifyPdfUrl = async () => {
            try {
                const response = await fetch(pdfUrl, { method: 'HEAD' });
                const contentType = response.headers.get('content-type');
                if (response.ok && contentType && contentType.includes('application/pdf')) {
                    setStatus('success');
                } else {
                    setStatus('error');
                }
            } catch (err) {
                setStatus('error');
            }
        };
        verifyPdfUrl();
    }, [isOpen, pdfUrl]);

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

    if (!isOpen) return null;

    return (
        // THIS IS THE LINE WE'VE UPDATED
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-20"
                aria-label="Close PDF viewer"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div
                className="relative bg-gray-900 w-[90vw] h-[90vh] max-w-5xl rounded-lg shadow-2xl flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {status === 'loading' && <div className="text-gray-800 text-2xl">Verifying PDF...</div>}
                
                {status === 'error' && (
                    <div className="text-center text-gray-800 p-4">
                        <h3 className="text-3xl font-bold mb-4">PDF Not Found</h3>
                        <p className="text-xl">The requested file could not be loaded.</p>
                        <p className="text-gray-500 mt-2 text-sm">Please ensure the file exists at: {pdfUrl}</p>
                    </div>
                )}

                {status === 'success' && (
                    <iframe
                        src={pdfUrl}
                        className="w-full h-full rounded-lg"
                        title="PDF Viewer"
                        frameBorder="0"
                    ></iframe>
                )}
            </div>
        </div>
    );
}