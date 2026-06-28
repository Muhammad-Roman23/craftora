import {
  ImagePlus,
  Package,
  DollarSign,
  Layers,
  Boxes,
  FileText,
} from "lucide-react";

const AddProduct = () => {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          Add Product
        </h1>

        <p className="text-gray-500 mt-2">
          Fill in the product information below.
        </p>
      </div>

      {/* Form */}

      <div className="bg-white rounded-3xl border border-gray-200 p-6 lg:p-8">

        <form className="grid lg:grid-cols-2 gap-6">

          {/* Product Name */}

          <div>

            <label className="font-medium mb-2 block">
              Product Name
            </label>

            <div className="border rounded-xl h-14 px-4 flex items-center gap-3">

              <Package size={18} />

              <input
                type="text"
                placeholder="Flower Lamp"
                className="w-full outline-none"
              />

            </div>

          </div>

          {/* Price */}

          <div>

            <label className="font-medium mb-2 block">
              Price
            </label>

            <div className="border rounded-xl h-14 px-4 flex items-center gap-3">

              <DollarSign size={18} />

              <input
                type="number"
                placeholder="250"
                className="w-full outline-none"
              />

            </div>

          </div>

          {/* Category */}

          <div>

            <label className="font-medium mb-2 block">
              Category
            </label>

            <div className="border rounded-xl h-14 px-4 flex items-center gap-3">

              <Layers size={18} />

              <select className="w-full outline-none bg-transparent">

                <option>Choose Category</option>

                <option>Rose</option>

                <option>Lily</option>

                <option>Tulip</option>

              </select>

            </div>

          </div>

          {/* Material */}

          <div>

            <label className="font-medium mb-2 block">
              Material
            </label>

            <div className="border rounded-xl h-14 px-4 flex items-center gap-3">

              <Boxes size={18} />

              <select className="w-full outline-none bg-transparent">

                <option>Select Material</option>

                <option>Wood</option>

                <option>Glass</option>

                <option>Plastic</option>

              </select>

            </div>

          </div>

          {/* Description */}

          <div className="lg:col-span-2">

            <label className="font-medium mb-2 block">
              Description
            </label>

            <div className="border rounded-xl p-4 flex gap-3">

              <FileText size={18} className="mt-1" />

              <textarea
                rows="6"
                placeholder="Write description..."
                className="w-full outline-none resize-none"
              ></textarea>

            </div>

          </div>

          {/* Upload */}

          <div className="lg:col-span-2">

            <label className="font-medium mb-2 block">
              Product Image
            </label>

            <label className="border-2 border-dashed rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">

              <ImagePlus size={50} />

              <h3 className="font-semibold mt-4">
                Click to Upload Image
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                PNG, JPG or WEBP
              </p>

              <input
                type="file"
                hidden
              />

            </label>

          </div>

          {/* Button */}

          <div className="lg:col-span-2">

            <button
              className="
              w-full
              h-14
              rounded-xl
              bg-black
              text-white
              hover:bg-gray-800
              transition"
            >
              Add Product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddProduct;