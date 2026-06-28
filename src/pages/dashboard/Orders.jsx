import {
  Search,
  Eye,
  Truck,
  CheckCircle2,
} from "lucide-react";

const orders = [
  {
    id: "#1001",
    customer: "John Smith",
    product: "Rose Lamp",
    amount: "$120",
    payment: "Paid",
    status: "Delivered",
    date: "20 Jun 2026",
  },
  {
    id: "#1002",
    customer: "Emma Watson",
    product: "Tulip Lamp",
    amount: "$95",
    payment: "Pending",
    status: "Processing",
    date: "21 Jun 2026",
  },
  {
    id: "#1003",
    customer: "Michael",
    product: "Lily Lamp",
    amount: "$140",
    payment: "Paid",
    status: "Shipped",
    date: "22 Jun 2026",
  },
  {
    id: "#1004",
    customer: "Sophia",
    product: "Sunflower Lamp",
    amount: "$180",
    payment: "Paid",
    status: "Delivered",
    date: "23 Jun 2026",
  },
];

const Orders = () => {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold">
            Orders
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all customer orders.
          </p>
        </div>

      </div>

      {/* Search */}

      <div className="bg-white border rounded-2xl p-4">

        <div className="flex items-center border rounded-xl px-4 h-12">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search Orders..."
            className="w-full ml-3 outline-none"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="min-w-[1100px] w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left px-6 py-4">
                  Order ID
                </th>

                <th className="text-left">
                  Customer
                </th>

                <th className="text-left">
                  Product
                </th>

                <th className="text-left">
                  Amount
                </th>

                <th className="text-left">
                  Payment
                </th>

                <th className="text-left">
                  Status
                </th>

                <th className="text-left">
                  Date
                </th>

                <th className="text-center">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-5 font-semibold">
                    {order.id}
                  </td>

                  <td>
                    {order.customer}
                  </td>

                  <td>
                    {order.product}
                  </td>

                  <td>
                    {order.amount}
                  </td>

                  {/* Payment */}

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.payment === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.payment}
                    </span>

                  </td>

                  {/* Status */}

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>

                  </td>

                  <td>
                    {order.date}
                  </td>

                  {/* Actions */}

                  <td>

                    <div className="flex justify-center gap-3">

                      <button
                        className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-black hover:text-white transition"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-black hover:text-white transition"
                      >
                        <Truck size={18} />
                      </button>

                      <button
                        className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-green-600 hover:text-white transition"
                      >
                        <CheckCircle2 size={18} />
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

export default Orders;