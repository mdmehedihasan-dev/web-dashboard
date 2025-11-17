import ANIMATION from "/animation.gif";
const Hero = () => {
  return (
    <div className="container px-5 mx-auto md:px-0">
      <div className="grid items-center gap-10 my-5 grid-col-1 md:grid-cols-2">
        <div
          className="uppercase"
          aosType="zoom-in"
          aosDuration="2000"
          aosDelay="500"
        >
          <h1
            className="text-[28px] md:text-left text-center md:text-[40px] font-bold"
            data-aos="fade-right"
          >
            jouw lading,{" "}
            <span className="text-primary">onze netwerk -</span>
          </h1>
          <div className="flex flex-col items-center justify-center gap-2 mt-4 md:justify-start md:flex-row md:mt-0">
            <h1
              className="md:text-[40px] text-[26px] font-bold text-primary"
              data-aos="fade-left"
            >
              <span className="text-black">samen naar de</span> juiste
              bestemming
            </h1>
          </div>
        </div>
        <div className="mb-5" data-aos="fade-left">
          <img src={ANIMATION} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
