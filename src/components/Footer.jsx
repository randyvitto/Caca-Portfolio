import React from 'react';

export default function Footer() {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8 mt-16">
            <div className="container mx-auto text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Navisa Khairani. All Rights Reserved.</p>
            </div>
        </footer>
    );
}