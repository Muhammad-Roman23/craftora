import {
  Search,
  Pencil,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { subscribeCategories, deleteCategory,
  updateCategory, } from "../../firebase/categoryService";


const CategoryList = () => {

    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
const [editId, setEditId] = useState("");
const [editName, setEditName] = useState("");

useEffect(() => {
  const unsubscribe = subscribeCategories((data) => {
    setCategories(data);
  });

  return () => unsubscribe();
}, []);

const handleEdit = (category) => {
  setEditId(category.id);
  setEditName(category.name);
  setIsOpen(true);
};
const handleUpdate = async (e) => {
  e.preventDefault();

  if (!editName.trim()) return;

  try {
    await updateCategory(editId, editName);

    setIsOpen(false);
    setEditId("");
    setEditName("");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};



// Delete Category 

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this category?"
  );

  if (!confirmDelete) return;

  try {
    await deleteCategory(id);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};


  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Category List
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all available Category.
        </p>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl border p-4">

        <div className="flex items-center border rounded-xl px-4 h-12">

          <Search size={18} />

          <input
            placeholder="Search Category..."
            className="ml-3 w-full outline-none"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-3xl border overflow-x-auto">

        <table className="w-full min-w-[700px]">

       <thead className="bg-gray-50">
  <tr>
    <th className="text-left px-6 py-4">Category</th>

    <th className="text-center">
      Products
    </th>

    <th className="text-center">
      Created Date
    </th>

    <th className="text-center">
      Action
    </th>
  </tr>
</thead>
<tbody>
  {categories.map((item) => (
    <tr
      key={item.id}
      className="border-t hover:bg-gray-50"
    >
      <td className="px-6 py-5 font-semibold">
        {item.name}
      </td>

      <td className="text-center">
       <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium">
  0
</span>
      </td>

   <td className="text-center text-gray-500">
  {item.createdAt
    ? item.createdAt.toDate().toLocaleDateString("en-GB")
    : "-"}
</td>

      <td>
        <div className="flex justify-center gap-3">
       <button
  onClick={() => handleEdit(item)}
  className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-black hover:text-white transition"
>
  <Pencil size={18} />
</button>

         <button
  onClick={() => handleDelete(item.id)}
  className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-red-500 hover:text-white transition"
>
  <Trash2 size={18} />
</button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

        </table>

        {isOpen && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-6 w-[400px]">

      <h2 className="text-xl font-bold mb-5">
        Edit Category
      </h2>

      <form onSubmit={handleUpdate} className="space-y-5">

        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className="w-full border rounded-xl h-12 px-4 outline-none"
        />

        <div className="flex justify-end gap-3">

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-5 h-11 rounded-xl border"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-5 h-11 rounded-xl bg-black text-white"
          >
            Update
          </button>

        </div>

      </form>

    </div>
  </div>
)}

      </div>

    </div>
  );
};

export default CategoryList ;