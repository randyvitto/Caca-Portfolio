import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
    const [currentPage, setCurrentPage] = useState('Portfolio');

    const renderPage = () => {
        switch (currentPage) {
            case 'Portfolio':
                return <PortfolioPage />;
            case 'About':
                return <AboutPage />;
            case 'Contact':
                return <ContactPage />;
            default:
                return <PortfolioPage />;
        }
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased flex flex-col min-h-screen" >
            <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}