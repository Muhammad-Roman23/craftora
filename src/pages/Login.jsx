import { Mail, Lock, ArrowRight } from "lucide-react";
import { Link,useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async (e) => {

    e.preventDefault();

    try{

        await signInWithEmailAndPassword(

            auth,

            email,

            password

        );

        navigate("/admin");

    }

    catch(error){

        alert(error.message);

    }

}

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
<form onSubmit={handleLogin}>

          {/* Email */}

          <div className="mt-5" >

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
value={email}
                onChange={(e)=>setEmail(e.target.value)}

                placeholder="Enter your email"
                className="flex-1 ml-3 outline-none bg-transparent"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="block mb-2 text-sm mt-4 font-medium">
              Password
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:border-black transition">

              <Lock
                size={20}
                className="text-gray-500"
              />

              <input
                type="password"
                value={password}

onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password"
                className="flex-1 ml-3 outline-none bg-transparent"
              />

            </div>

          </div>

          {/* Remember */}

       

          {/* Button */}

          <button
            type="submit"
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
            transition mt-5"
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