import { Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-screen bg-[#fafafa] flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg border border-gray-200 p-8 md:p-10">

        {/* Logo */}
<Link to={"/"} >
        <div className="text-center">

          <h1 className="text-3xl font-bold">
            🌸 FlowerLamp
          </h1>

          <p className="text-gray-500 mt-3">
            Admin Dashboard Login
          </p>

        </div>
</Link>

        {/* Form */}

        <form className="mt-10 space-y-6">

          {/* Email */}

          <div>

            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-black transition">

              <Mail
                size={20}
                className="text-gray-500"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 ml-3 outline-none bg-transparent"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-black transition">

              <Lock
                size={20}
                className="text-gray-500"
              />

              <input
                type="password"
                placeholder="Enter your password"
                className="flex-1 ml-3 outline-none bg-transparent"
              />

            </div>

          </div>

          {/* Remember */}

          <div className="flex items-center justify-between">

            {/* <label className="flex items-center gap-2 text-sm cursor-pointer">

              <input
                type="checkbox"
                className="w-4 h-4 accent-black"
              />

              Remember Me

            </label> */}

            {/* <button
              type="button"
              className="text-sm text-gray-500 hover:text-black transition"
            >
              Forgot?
            </button> */}

          </div>

          {/* Button */}

          <button
            className="
            w-full
            h-14
            rounded-xl
            bg-black
            text-white
            flex
            items-center
            justify-center
            gap-2
            hover:bg-gray-800
            transition"
          >

            Login

            <ArrowRight size={18} />

          </button>

        </form>

      </div>

    </section>
  );
};

export default Login;