import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      <Sidebar />

     <div className="flex-1 min-w-0 flex flex-col lg:ml-72">

        <Topbar />

       <main className="flex-1 p-4 sm:p-5 lg:p-8 overflow-x-hidden">
    <Outlet />
</main>

      </div>

    </div>
  );
};

export default DashboardLayout;