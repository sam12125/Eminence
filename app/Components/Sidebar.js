"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "w-1/6" : "w-20"}`}>
      <div
        className={`sidebar ${
          isOpen ? "w-1/6" : "w-20"
        } bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-50 overflow-y-auto transition-all duration-300`}
      >
        <div className="sidebar-header p-4 flex items-center justify-between gap-4">
          {isOpen}
          <button className="toggle-btn text-gray-800" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="sidebar-content p-4 text-gray-800">
            <div className="mb-4">
              <p className="mb-2 p-2">General</p>
              <h1 className="font-bold mb-2 hover:text-blue-500 hover:bg-blue-100 p-2 transition duration-300">
                Overview
              </h1>
              <h1 className="font-bold mb-4 hover:text-blue-500 hover:bg-blue-100 p-2 transition duration-300">
                Settings
              </h1>
            </div>

            <div className="mb-4">
              <p className="mb-2 p-2">Main Menu</p>
              <h1 className="font-bold mb-2 hover:text-blue-500 hover:bg-blue-100 p-2 transition duration-300">
                All Files
              </h1>
              <h1 className="font-bold mb-2 hover:text-blue-500 hover:bg-blue-100 p-2 transition duration-300">
                Recent
              </h1>
              <h1 className="font-bold mb-2 hover:text-blue-500 hover:bg-blue-100 p-2 transition duration-300">
                Docs
              </h1>
              <h1 className="font-bold mb-2 hover:text-blue-500 hover:bg-blue-100 p-2 transition duration-300">
                Photos
              </h1>
              <h1 className="font-bold mb-2 hover:text-blue-500 hover:bg-blue-100 p-2 transition duration-300">
                Trash
              </h1>
            </div>

            <button className="create-btn bg-blue-500 w-full mt-14 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create New
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
