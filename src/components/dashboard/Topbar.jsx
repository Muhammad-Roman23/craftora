import { Bell, Search, UserCircle2 } from "lucide-react";

const Topbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">

      <div className="h-20 px-5 lg:px-8 flex items-center justify-between">

        {/* Left */}

        <div>

          <h1 className="text-2xl font-bold">
            Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            Welcome Back, Admin
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Search */}

          <div className="hidden md:flex items-center gap-3 bg-gray-100 rounded-xl px-4 h-11">

            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-48"
            />

          </div>

          {/* Notification */}

          <button
            className="
            w-11
            h-11
            rounded-xl
            border
            border-gray-200
            flex
            items-center
            justify-center
            hover:bg-black
            hover:text-white
            duration-300"
          >

            <Bell size={18} />

          </button>

          {/* Avatar */}

          <button
            className="
            w-11
            h-11
            rounded-xl
            border
            border-gray-200
            flex
            items-center
            justify-center
            hover:bg-black
            hover:text-white
            duration-300"
          >

            <UserCircle2 size={20} />

          </button>

        </div>

      </div>

    </header>
  );
};

export default Topbar;