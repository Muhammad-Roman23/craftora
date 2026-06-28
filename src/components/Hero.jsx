const Hero = () => {
  return (
    <section className="bg-white">

      <div
        className="
        max-w-7xl
        mx-auto
        px-5
        md:px-8
        py-16
        lg:py-28

        grid
        lg:grid-cols-2
        gap-16
        items-center"
      >

        {/* Left */}

        <div>

          <span
            className="
            inline-block
            border
            border-gray-300
            rounded-full
            px-4
            py-2
            text-sm
            mb-6"
          >
            Premium Handmade Collection
          </span>

          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-bold
            leading-tight"
          >
            Elegant
            <br />
            Flower Lamps
            <br />
            For Modern Homes
          </h1>

          <p
            className="
            text-gray-600
            mt-8
            leading-8
            max-w-xl"
          >
            Discover handcrafted flower lamps designed
            to transform your home into a warm,
            luxurious and peaceful living space.
            Every piece is carefully made with love
            and premium quality materials.
          </p>

          <button
            className="
            mt-10
            bg-black
            text-white
            px-8
            py-4
            rounded-full
            hover:bg-gray-800
            duration-300"
          >
            Explore Collection
          </button>

        </div>

        {/* Right */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900"
            alt=""
            className="
            w-full
            rounded-[40px]
            shadow-xl
            object-cover"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;