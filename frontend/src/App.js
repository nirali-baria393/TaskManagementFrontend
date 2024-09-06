import React from "react";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/Completedtasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-800 to-gray-900 text-white h-screen p-2 relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<AllTasks />} />
            <Route path="/ImportantTasks" element={<ImportantTasks />} />
            <Route path="/Completedtasks" element={<CompletedTasks />} />
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
