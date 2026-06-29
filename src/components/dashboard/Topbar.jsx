import { Bell, Search, UserCircle2 } from "lucide-react";

const Topbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">

      <div className="h-20 px-5 lg:px-8 flex items-center  ">

        {/* Left */}

        <div className="   ms-auto" >

          <h1 className="text-2xl font-bold">
            Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            Welcome Back, Admin
          </p>

        </div>

        {/* Right */}



      </div>

    </header>
  );
};

export default Topbar;