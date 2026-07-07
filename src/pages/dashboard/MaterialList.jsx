import {
  Search,
  Pencil,
  Trash2,
} from "lucide-react";

const materials = [
  {
    id: 1,
    name: "Wood",
    stock: 120,
    unitPrice: 150,
      purchaseDate: "07 Jul 2026",
  },
  {
    id: 2,
    name: "Glue",
    stock: 35,
    unitPrice: 80,
      purchaseDate: "07 Jul 2026",
  },
  {
    id: 3,
    name: "Artificial Flower",
    stock: 200,
    unitPrice: 45,
      purchaseDate: "07 Jul 2026",
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

        <table className="w-full min-w-[700px] ">

     <thead className="bg-gray-50">

<tr>

<th className="text-left px-6 py-4">
Material
</th>

<th className="px-4">

    Available Stock

</th>

<th className="text-center px-4">
Unit Price
</th>

<th className="text-center px-4">
Inventory Value
</th>

<th className="text-center px-4">
  Purchase Date
</th>

<th className="text-center px-4">
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



<td className="px-6 py-5">
  <div className="text-center">
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold
        ${
          item.stock < 10
            ? "bg-red-100 text-red-600"
            : item.stock > 40
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
    >
      {item.stock}
    </span>
  </div>
</td>



<td className="text-center font-medium">

Rs. {item.unitPrice}

</td>

<td className="text-center font-semibold text-green-600">

Rs. {(item.stock * item.unitPrice).toLocaleString()}

</td>
<td className="text-center">
  {item.purchaseDate}
</td>

<td>

<div className="flex justify-center gap-3">

<button className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-black hover:text-white transition">

<Pencil size={18} />

</button>

<button className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-red-500 hover:text-white transition">

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