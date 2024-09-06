import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

const Cards = ({ home, setInputDiv }) => {
  const data = [
    {
      title: "The Best Task Management App",
      desc: "I have created this app using React, Angular, Node.js, and MongoDB.",
      status: "Incomplete",
    },
    {
      title: "CPP Concepts",
      desc: "I need to clear basics of CPP. Topics: Abstraction, Inheritance, Polymorphism, Virtual Functions, etc.",
      status: "Complete",
    },
    {
      title: "Assignment",
      desc: "My Assignment Submission is on 18th April. I have to complete it.",
      status: "Incomplete",
    },
    {
      title: "Projects",
      desc: "I have to complete my project as soon as possible.",
      status: "Incomplete",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data &&
        data.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between bg-gradient-to-tr from-gray-800 to-gray-700 rounded-xl p-6 text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{item.desc}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button
                className={`${
                  item.status === "Incomplete"
                    ? "bg-red-500 hover:bg-red-700"
                    : "bg-green-500 hover:bg-green-700"
                } px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300`}
              >
                {item.status}
              </button>

              <div className="flex space-x-4">
                <button className="text-xl text-gray-400 hover:text-pink-500 transition-colors duration-300">
                  <CiHeart />
                </button>
                <button className="text-xl text-gray-400 hover:text-blue-500 transition-colors duration-300">
                  <FaEdit />
                </button>
                <button className="text-xl text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      {home === "true" && (
        <button
          className="flex flex-col justify-center items-center bg-gradient-to-tr from-gray-800 to-gray-700 rounded-xl p-6 text-gray-400 hover:text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          onClick={() => setInputDiv("fixed")}
        >
          <IoAddCircle className="text-6xl mb-4 text-teal-400 animate-bounce" />
          <h2 className="text-2xl">Add Task</h2>
        </button>
      )}
    </div>
  );
};

export default Cards;