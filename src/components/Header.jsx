import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          🌸 FlowerLamp
        </h1>

        {/* Login */}
<Link to={"/login"} >
        <button
          className="flex items-center gap-2 cursor-pointer
          border border-black
          rounded-full
          px-5 py-3
          hover:bg-black
          hover:text-white
          duration-300"
        >
          <LogIn size={18} />
          Login
        </button>
</Link>


      </div>
    </header>
  );
};

export default Header;