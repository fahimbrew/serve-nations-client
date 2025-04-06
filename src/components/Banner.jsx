const Banner = () => {
  return (
    <div className="carousel w-full rounded-xl overflow-hidden">
      {/* Slide 1 */}
      <div
        id="slide1"
        className="carousel-item relative w-full h-[400px] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white"
      >
        <div className="flex items-center justify-center w-full text-center px-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Empower Your Skills
            </h2>
            <p className="text-base md:text-lg">
              Add your services and get connected with real customers.
            </p>
          </div>
        </div>
        <a
          href="#slide3"
          className="btn btn-circle absolute left-5 top-1/2 transform -translate-y-1/2"
        >
          ❮
        </a>
        <a
          href="#slide2"
          className="btn btn-circle absolute right-5 top-1/2 transform -translate-y-1/2"
        >
          ❯
        </a>
      </div>

      {/* Slide 2 */}
      <div
        id="slide2"
        className="carousel-item relative w-full h-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
      >
        <div className="flex items-center justify-center w-full text-center px-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Book With Confidence
            </h2>
            <p className="text-base md:text-lg">
              Browse services from trusted providers in your area.
            </p>
          </div>
        </div>
        <a
          href="#slide1"
          className="btn btn-circle absolute left-5 top-1/2 transform -translate-y-1/2"
        >
          ❮
        </a>
        <a
          href="#slide3"
          className="btn btn-circle absolute right-5 top-1/2 transform -translate-y-1/2"
        >
          ❯
        </a>
      </div>

      {/* Slide 3 */}
      <div
        id="slide3"
        className="carousel-item relative w-full h-[400px] bg-gradient-to-r from-green-400 via-teal-500 to-indigo-600 text-white"
      >
        <div className="flex items-center justify-center w-full text-center px-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Manage Your Services
            </h2>
            <p className="text-base md:text-lg">
              Track bookings and update service statuses in one place.
            </p>
          </div>
        </div>
        <a
          href="#slide2"
          className="btn btn-circle absolute left-5 top-1/2 transform -translate-y-1/2"
        >
          ❮
        </a>
        <a
          href="#slide1"
          className="btn btn-circle absolute right-5 top-1/2 transform -translate-y-1/2"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default Banner;
