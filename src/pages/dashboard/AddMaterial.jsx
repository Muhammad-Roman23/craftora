import { Boxes, FileText } from "lucide-react";

const AddMaterial = () => {
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

          <div>

            <label className="block mb-2 font-medium">
              Description
            </label>

            <div className="flex gap-3 border rounded-xl p-4">

              <FileText size={18} className="mt-1" />

              <textarea
                rows="5"
                placeholder="Material Description..."
                className="w-full outline-none resize-none"
              />

            </div>

          </div>

          <button
            className="
            w-full
            md:w-auto
            px-8
            h-12
            rounded-xl
            bg-black
            text-white
            hover:bg-gray-800
            transition"
          >
            Save Material
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddMaterial;