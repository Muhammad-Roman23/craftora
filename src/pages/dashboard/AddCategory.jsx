    import { Boxes, FileText } from "lucide-react";
    import { createCategory } from "../../firebase/categoryService";
    import { useState } from "react";

    const AddCategory = () => {


    const [name, setName] = useState("");

   const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (!name.trim()) {
      alert("Category name is required");
      return;
    }

    console.log("Submitting...");

    const result = await createCategory(name);

    console.log("Document Added:", result);

    alert("Category Added Successfully");

    setName("");

  } catch (error) {
    console.error("Firebase Error:", error);
    alert(error.message);
  }
};
    return (
        <div className="space-y-8">

        {/* Heading */}

        <div>
            <h1 className="text-3xl font-bold">
            Add Category
            </h1>

            <p className="text-gray-500 mt-2">
            Create a new Category for your products.
            </p>
        </div>

        {/* Form */}

        <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8">

            <form  onSubmit={handleSubmit} className="space-y-6">

            <div>

                <label className="block mb-2 font-medium">
                Category Name
                </label>

                <div className="flex items-center border rounded-xl px-4 h-14 gap-3">

                <Boxes size={18} />

                <input
                    type="text"
                    placeholder="Wood"
                    className="w-full outline-none"
                    value={name}
        onChange={(e)=>setName(e.target.value)}
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
                Save Category
            </button>

            </form>

        </div>

        </div>
    );
    };

    export default AddCategory;