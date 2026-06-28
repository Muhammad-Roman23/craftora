import {
  Search,
  Pencil,
  Trash2,
} from "lucide-react";

const materials = [
  {
    id: 1,
    name: "Wood",
    description: "Premium Wooden Material",
  },
  {
    id: 2,
    name: "Glass",
    description: "Crystal Glass",
  },
  {
    id: 3,
    name: "Metal",
    description: "Steel Material",
  },
];

const MaterialList = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Material List
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all available materials.
        </p>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl border p-4">

        <div className="flex items-center border rounded-xl px-4 h-12">

          <Search size={18} />

          <input
            placeholder="Search Material..."
            className="ml-3 w-full outline-none"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-3xl border overflow-x-auto">

        <table className="w-full min-w-[700px]">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left px-6 py-4">
                Name
              </th>

              <th className="text-left">
                Description
              </th>

              <th className="text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {materials.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="px-6 py-5 font-semibold">
                  {item.name}
                </td>

                <td>
                  {item.description}
                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-black hover:text-white">

                      <Pencil size={18} />

                    </button>

                    <button className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-red-500 hover:text-white">

                      <Trash2 size={18} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default MaterialList;