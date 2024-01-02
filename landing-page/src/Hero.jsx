const Hero = () => {
  return (
    <>
      <section className="showcase lg:h-[600px] h-[400px] rounded-bl-[7rem]">
        <div className="overlay lg:h-[600px] px-5 flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-white-text mb-5 mt-10">
            A modern publishing platform
          </h1>
          <p className="text-white-text">
            Grow your audience and build your online brand
          </p>
          <ul className="flex items-center">
            <li className="mx-1 my-5">
              <button className="bg-white py-2 px-4 rounded-full text-cta-light-red-text font-bold">
                Start for free
              </button>
            </li>
            <li className="mx-1 my-5">
              <button className="bg-cta-light-red-text text-white font-bold border border-white rounded-full py-2 px-4">
                Learn More
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
