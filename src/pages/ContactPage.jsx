import React from 'react';

// You can use an icon library like 'react-icons' for a better look,
// but for simplicity, we'll use simple text labels.

export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Information</h2>
            <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
                
                {/* Name */}
                <div className="flex items-center">
                    <div className="w-24 font-bold text-gray-600">Name:</div>
                    <div className="text-gray-800">Your Name</div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                    <div className="w-24 font-bold text-gray-600">Email:</div>
                    <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
                        your.email@example.com
                    </a>
                </div>

                {/* Phone Number */}
                <div className="flex items-center">
                    <div className="w-24 font-bold text-gray-600">Phone:</div>
                    <div className="text-gray-800">+1 (234) 567-890</div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                    <div className="w-24 font-bold text-gray-600 mt-1">Address:</div>
                    <div className="text-gray-800">
                        <p>123 Creative Lane</p>
                        <p>Art City, Design State 54321</p>
                        <p>United States</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}