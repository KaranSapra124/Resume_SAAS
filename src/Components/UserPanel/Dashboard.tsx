import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
            <Link to="/user/resume-templates" className="hover:underline">
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
       <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
