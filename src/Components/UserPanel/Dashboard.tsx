import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [name] = useState<String | null>("Karan");
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#2563eb] text-white p-5">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-2">
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/resume-templates" className="hover:underline">
              Resume Templates
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/settings" className="hover:underline">
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {name}!</h1>
        <p className="text-gray-600 mt-2">
          Manage your resumes and settings from here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
