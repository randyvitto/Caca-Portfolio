import React from 'react';

export default function Header({ setCurrentPage, currentPage }) {
    const navLinkClasses = (pageName) => 
        `cursor-pointer hover:text-black transition-colors ${currentPage === pageName ? 'text-black font-bold' : 'text-gray-700'}`;

    return (
        <header className="py-10">
            <div className="container mx-auto flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
                <nav>
                    <ul className="flex space-x-8 text-lg font-medium">
                        <li onClick={() => setCurrentPage('Portfolio')} className={navLinkClasses('Portfolio')}>Portfolio</li>
                        <li onClick={() => setCurrentPage('About')} className={navLinkClasses('About')}>About</li>
                        <li onClick={() => setCurrentPage('Contact')} className={navLinkClasses('Contact')}>Contact</li>
                    </ul>
                </nav>
                <div className="flex space-x-4 text-sm text-gray-500">
                    <a href="#" className="hover:text-black transition-colors">X</a>
                    <a href="#" className="hover:text-black transition-colors">Be</a>
                    <a href="#" className="hover:text-black transition-colors">In</a>
                </div>
            </div>
        </header>
    );
}