import {
  Search,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300",
    name: "Rose Lamp",
    category: "Rose",
    price: "$120",
    stock: 25,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300",
    name: "Tulip Lamp",
    category: "Tulip",
    price: "$95",
    stock: 15,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300",
    name: "Lily Lamp",
    category: "Lily",
    price: "$140",
    stock: 40,
  },
];

const ProductList = () => {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between gap-5 md:items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Product List
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your products.
          </p>

        </div>

        <button className="bg-black text-white px-6 h-12 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">

          <Plus size={18} />

          Add Product

        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl border border-gray-200 p-4">

        <div className="flex items-center border rounded-xl px-4 h-12">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search Product..."
            className="w-full ml-3 outline-none"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="min-w-[850px] w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left px-6 py-4">
                  Image
                </th>

                <th className="text-left">
                  Product
                </th>

                <th className="text-left">
                  Category
                </th>

                <th className="text-left">
                  Price
                </th>

                <th className="text-left">
                  Stock
                </th>

                <th className="text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {products.map((item) => (

                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="px-6 py-4">

                    <img
                      src={item.image}
                      alt=""
                      className="w-16 h-16 rounded-xl object-cover"
                    />

                  </td>

                  <td className="font-semibold">

                    {item.name}

                  </td>

                  <td>

                    {item.category}

                  </td>

                  <td>

                    {item.price}

                  </td>

                  <td>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                      {item.stock}

                    </span>

                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button className="w-10 h-10 rounded-lg border flex justify-center items-center hover:bg-black hover:text-white transition">

                        <Pencil size={18} />

                      </button>

                      <button className="w-10 h-10 rounded-lg border flex justify-center items-center hover:bg-red-500 hover:text-white transition">

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

    </div>
  );
};

export default ProductList;