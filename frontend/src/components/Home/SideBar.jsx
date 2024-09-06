import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const data = [
    {
      title: "All Tasks",
      icon: <CgNotes />,
      link: "/",
    },
    {
      title: "Important Tasks",
      icon: <MdLabelImportant />,
      link: "/ImportantTasks",
    },
    {
      title: "Completed Tasks",
      icon: <FaCheckDouble />,
      link: "/Completedtasks",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between bg-gray-800 text-white p-6">
      <div>
        {/* Optional: Add a Logo or Avatar */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gray-700 rounded-full h-16 w-16 flex items-center justify-center text-3xl font-bold text-white">
            N
          </div>
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Nirali Baria</h2>
          <h4 className="text-sm text-gray-400">niralibaria123@gmail.com</h4>
          <hr className="my-4 border-gray-600" />
        </div>
        <div>
          {data.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className={`flex items-center p-4 my-2 rounded-lg transition-all duration-300 ${
                location.pathname === item.link
                  ? "bg-gray-700 border-l-4 border-blue-500"
                  : "hover:bg-gray-600"
              }`}
            >
              <span className="mr-4 text-xl">{item.icon}</span>
              <span className="text-lg">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <button className="bg-red-600 w-full p-3 rounded-lg mt-4 hover:bg-red-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
