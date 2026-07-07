import { useState } from "react";
import { Boxes } from "lucide-react";

const AddMaterial = () => {

  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  const totalValue =
    (Number(stock) || 0) * (Number(price) || 0);

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-3xl font-bold">
          Add Material
        </h1>

        <p className="text-gray-500 mt-2">
          Create a new material for your products.
        </p>

      </div>

      {/* Form */}

      <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8">

        <form className="space-y-6">

          {/* Material Name */}

          <div>

            <label className="block mb-2 font-medium">
              Material Name
            </label>

            <div className="flex items-center border rounded-xl px-4 h-14 gap-3">

              <Boxes size={18} />

              <input
                type="text"
                placeholder="Wood"
                className="w-full outline-none"
              />

            </div>

          </div>

          {/* Stock & Price */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Stock Quantity
              </label>

              <input
                type="number"
                min="0"
                placeholder="10"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full h-14 border rounded-xl px-4 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Unit Price
              </label>

              <input
                type="number"
                min="0"
                placeholder="100"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full h-14 border rounded-xl px-4 outline-none"
              />

            </div>

          </div>

          {/* Total & Date */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Total Value
              </label>

              <input
                type="text"
                value={totalValue}
                readOnly
                className="w-full h-14 border rounded-xl px-4 bg-gray-100 text-gray-700 outline-none cursor-not-allowed"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Purchase Date
              </label>

              <input
                type="date"
                className="w-full h-14 border rounded-xl px-4 outline-none"
              />

            </div>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="
              w-full
              md:w-auto
              px-8
              h-12
              rounded-xl
              bg-black
              text-white
              hover:bg-gray-800
              transition
            "
          >
            Save Material
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddMaterial;