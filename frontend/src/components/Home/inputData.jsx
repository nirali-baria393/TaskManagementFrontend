import React from "react";
import { RiCloseLine } from "react-icons/ri";

const InputData = ({ InputDiv, setInputDiv }) => {
  return (
    <>
      {/* Background Overlay */}
      <div
        className={`${InputDiv} fixed top-0 left-0 bg-black bg-opacity-70 h-screen w-full transition-opacity duration-300`}
      ></div>

      {/* Modal Container */}
      <div
        className={`${InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full transition-opacity duration-300`}
      >
        {/* Modal Box */}
        <div className="w-full max-w-lg bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl transform transition-all duration-500">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Add New Task</h2>
            <button
              className="text-3xl text-gray-400 hover:text-gray-100 transition-colors duration-300 transform hover:rotate-90"
              onClick={() => setInputDiv("hidden")}
            >
              <RiCloseLine />
            </button>
          </div>

          {/* Input Fields */}
          <input
            type="text"
            placeholder="Task Title"
            name="title"
            className="px-4 py-3 rounded-lg w-full bg-gray-700 text-white border border-gray-600 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />

          <textarea
            name="desc"
            cols="30"
            rows="5"
            placeholder="Task Description"
            className="px-4 py-3 rounded-lg w-full bg-gray-700 text-white border border-gray-600 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />

          {/* Submit Button */}
          <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg w-full text-white font-bold hover:from-blue-600 hover:to-teal-600 transition-transform transform hover:scale-105 duration-300">
            Submit Task
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
