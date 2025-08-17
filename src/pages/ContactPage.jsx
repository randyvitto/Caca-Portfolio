import React from 'react';

export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Information</h2>
            <div className="bg-white p-12 rounded-lg shadow-md space-y-8">
                
                {/* Name */}
                <div className="flex items-center">
                    <div className="w-28 font-bold text-gray-600">Name:</div>
                    <div className="text-gray-800 ml-4">Navisa Khairani</div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                    <div className="w-28 font-bold text-gray-600">Email:</div>
                    <a href="mailto:navisakkhairani9@gmail.com" className="text-blue-600 hover:underline ml-4">
                        navisakkhairani9@gmail.com
                    </a>
                </div>

                {/* Phone Number */}
                <div className="flex items-center">
                    <div className="w-28 font-bold text-gray-600">Phone:</div>
                    <div className="text-gray-800 ml-4">+49 403 787 713</div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                    <div className="w-28 font-bold text-gray-600 mt-1">Address:</div>
                    <div className="text-gray-800 ml-4">
                        <p>Melbourne, Victoria 3000</p>
                        <p>Australia</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}