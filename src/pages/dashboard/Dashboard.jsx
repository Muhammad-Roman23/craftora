import DashboardCard from "../../components/dashboard/DashboardCard";

const Dashboard = () => {

  const cards = [

    {
      title: "Total Products",
      value: "120"
    },

    {
      title: "Materials",
      value: "35"
    },

    {
      title: "Pending Orders",
      value: "18"
    },

    {
      title: "Completed",
      value: "350"
    }

  ];

  return (

    <>

    <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-4
    gap-4
    lg:gap-6
  "
>
  {cards.map((item, index) => (
    <DashboardCard
      key={index}
      title={item.title}
      value={item.value}
    />
  ))}
</div>

      {/* Recent Orders */}

      <div
        className="
        mt-10
        bg-white
        rounded-3xl
        border
        border-gray-200
        p-6"
      >

        <h2 className="text-2xl font-semibold mb-6">
          Recent Orders
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px]">

            <thead>

              <tr className="border-b">

                <th className="text-left py-4">
                  Order
                </th>

                <th className="text-left">
                  Customer
                </th>

                <th className="text-left">
                  Amount
                </th>

                <th className="text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-5">
                  #1001
                </td>

                <td>
                  John Smith
                </td>

                <td>
                  $120
                </td>

                <td>

                  <span
                    className="
                    bg-green-100
                    text-green-700
                    px-3
                    py-1
                    rounded-full
                    text-sm"
                  >

                    Completed

                  </span>

                </td>

              </tr>

              <tr className="border-b">

                <td className="py-5">
                  #1002
                </td>

                <td>
                  Emma
                </td>

                <td>
                  $90
                </td>

                <td>

                  <span
                    className="
                    bg-yellow-100
                    text-yellow-700
                    px-3
                    py-1
                    rounded-full
                    text-sm"
                  >

                    Pending

                  </span>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </>

  );
};

export default Dashboard;