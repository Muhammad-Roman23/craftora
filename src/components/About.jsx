const About = () => {
  return (
    <section className="bg-[#fafafa]">

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

        {/* Image */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
            alt=""
            className="
            rounded-[40px]
            shadow-lg"
          />

        </div>

        {/* Content */}

        <div>

          <span
            className="
            text-sm
            border
            border-gray-300
            rounded-full
            px-4
            py-2
            inline-block
            mb-6"
          >
            About Us
          </span>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            leading-tight"
          >
            Designed To Make
            Every Home Feel
            More Beautiful.
          </h2>

          <p
            className="
            text-gray-600
            leading-8
            mt-8"
          >
            At FlowerLamp, we believe lighting is more
            than illumination—it's an experience.
            Every handcrafted flower lamp combines
            modern elegance with artistic craftsmanship,
            creating timeless pieces that brighten your
            home with warmth, beauty and personality.
          </p>

          {/* Features */}

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="border rounded-2xl p-5 bg-white">
              <h4 className="font-semibold text-lg">
                Premium Quality
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                Carefully crafted using durable materials.
              </p>
            </div>

            <div className="border rounded-2xl p-5 bg-white">
              <h4 className="font-semibold text-lg">
                Handmade
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                Every lamp is uniquely handcrafted.
              </p>
            </div>

            <div className="border rounded-2xl p-5 bg-white">
              <h4 className="font-semibold text-lg">
                Elegant Design
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                Minimal design for modern interiors.
              </p>
            </div>

            <div className="border rounded-2xl p-5 bg-white">
              <h4 className="font-semibold text-lg">
                Eco Friendly
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                Sustainable materials with lasting quality.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;