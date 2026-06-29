const DashboardCard = ({ title, value }) => {
  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-5
        sm:p-6
        transition
        hover:shadow-lg
      "
    >
      <p className="text-sm sm:text-base text-gray-500">
        {title}
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
};

export default DashboardCard;