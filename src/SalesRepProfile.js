import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, PlusCircle, HelpCircle } from 'lucide-react';

const SalesRepProfile = () => {
  const [activeTab, setActiveTab] = useState('About Me');
  const tabs = ['About Me', 'Experiences', 'Recommended'];

  return (
    <div className="flex flex-col lg:flex-row bg-[#0f1621] text-gray-300 p-4 min-h-screen">
     
      <div className=" space-y-4">
        <div className="bg-[#1e2837] rounded-lg p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2 bg-[#141e2c] p-1 rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeTab === tab
                      ? 'bg-black text-white shadow-[0_2px_4px_rgba(0,0,0,0.2),0_-3px_1px_rgba(255,255,255,0.1)]'
                      : 'text-gray-400 shadow-[0_2px_4px_rgba(0,0,0,0.2),0_-3px_1px_rgba(255,255,255,0.1)]'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <HelpCircle className="text-gray-500" size={18} />
          </div>
          <div className="text-sm">
            Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. I
            was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4
            year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked
            between 9-10 AM. This is a...
          </div>
        </div>

        <div className="bg-[#1e2837] rounded-lg p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Gallery</h2>
            <div className="flex items-center space-x-2">
              <button className="bg-[#2a3544] text-white px-3 py-1 rounded-full flex items-center space-x-1 text-sm shadow-[0_2px_4px_rgba(0,0,0,0.2),0_-1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_-1px_1px_rgba(255,255,255,0.1)] transition-all">
                <PlusCircle size={14} />
                <span>ADD IMAGE</span>
              </button>

             <button
                
                className="
                    px-6 py-3
                    bg-gray-800 hover:bg-gray-700
                    text-white font-semibold
                    rounded-full
                    shadow-lg hover:shadow-xl
                    transform hover:-translate-y-0.5 transition duration-200
                    relative
                    overflow-hidden
                "
                >
                <span className="relative z-10"><HelpCircle className="text-gray-500" size={18} />Add Image</span>
                <span 
                    className="
                    absolute inset-0 
                    bg-gradient-to-b from-white/20 to-transparent
                    opacity-50
                    "
                ></span>
             </button>




              <button className="bg-[#2a3544] p-1 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2),0_-1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_-1px_1px_rgba(255,255,255,0.1)] transition-all">
                <ChevronLeft className="text-gray-400" size={18} />
              </button>
              <button className="bg-[#2a3544] p-1 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2),0_-1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_-1px_1px_rgba(255,255,255,0.1)] transition-all">
                <ChevronRight className="text-gray-400" size={18} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-[#2a3544] rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/400"
                  alt={`Gallery image ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesRepProfile;