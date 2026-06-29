import {
  LayoutDashboard,
  Package,
  Boxes,
  ShoppingCart,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [productOpen, setProductOpen] = useState(false);

  const [materialOpen, setMaterialOpen] = useState(false);

  return (
    <>
      {/* Mobile Button */}

      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-5 left-5 lg:hidden bg-black text-white p-3 rounded-xl z-50"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
        fixed
        top-0
        left-0
        h-screen
        w-72
        bg-white
        border-r
        border-gray-200
        z-50
        transition-all
        duration-300

        ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
        `}
      >
        <div className="flex items-center justify-between p-6 border-b">
<Link to={"/"} >
          <h2 className="text-2xl font-bold">
            🌸 FlowerLamp
          </h2>
</Link>

          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden"
          >
            <X />
          </button>

        </div>

        <div className="p-5 space-y-2">

          {/* Dashboard */}
          <Link to={"/admin"} >

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100">

            <LayoutDashboard size={20} />

            Dashboard

          </button>
          </Link>

          {/* Products */}

          <button
            onClick={() => setProductOpen(!productOpen)}
            className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-gray-100"
          >

            <div className="flex gap-3 items-center">

              <Package size={20} />

              Products

            </div>

            <ChevronDown
              className={`duration-300 ${
                productOpen ? "rotate-180" : ""
              }`}
            />

          </button>

          {productOpen && (
            <div className="ml-10 flex flex-col gap-2">
<Link to={"products/add"} >
              <button className="text-left py-2 hover:text-black text-gray-500">
                Add Product
              </button>
</Link>

<Link to={"products"} >

              <button className="text-left py-2 hover:text-black text-gray-500">
                Product List
              </button>
</Link>

            </div>
          )}

          {/* Material */}

          <button
            onClick={() => setMaterialOpen(!materialOpen)}
            className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-gray-100"
          >

            <div className="flex gap-3 items-center">

              <Boxes size={20} />

              Materials

            </div>

            <ChevronDown
              className={`duration-300 ${
                materialOpen ? "rotate-180" : ""
              }`}
            />

          </button>

          {materialOpen && (
            <div className="ml-10 flex flex-col gap-2">
<Link to={"materials/add"} >
              <button className="text-left py-2 hover:text-black text-gray-500">
                Add Material
              </button>
</Link>

<Link to={"materials"} >
              <button className="text-left py-2 hover:text-black text-gray-500">
                Material List
              </button>
</Link>

            </div>
          )}

          {/* Orders */}
<Link to={"orders"} >
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100">

            <ShoppingCart size={20} />

            Orders

          </button>
</Link>

        </div>

        {/* Logout */}

        <div className="absolute bottom-5 left-0 w-full px-5">

          <button className="w-full bg-black text-white rounded-xl py-3 flex justify-center gap-2">

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;