import Phones from "./assets/images/illustration-phones.svg";
import Circles from "./assets/images/bg-pattern-circles.svg";

const State = () => {
  return (
    <>
      <section className="z-10 md:grid md:grid-cols-2 relative px-5 py-10 text-white text-center bg-very-dark-gray-blue rounded-tr-[7rem] rounded-bl-[7rem] mb-[50px] mt-[100px] ml-0 mr-0 md:text-left xl:px-52 ">
        <div>
          <div>
            <img
              src={Circles}
              alt=""
              className="absolute state-img circles top-[-10%] w-[500px]"
            />
          </div>
          <div>
            <img
              src={Phones}
              alt=""
              className="absolute top-[-20%] w-[500px] state-img"
            />
          </div>
        </div>
        <div className="pt-80 px-5 md:py-20">
          <h2 className="text-center text-3xl mb-5 lg:text-4xl 2xl:text-4xl text-white md:text-left">
            State of the Art Infrastructure{" "}
          </h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>
    </>
  );
};

export default State;
