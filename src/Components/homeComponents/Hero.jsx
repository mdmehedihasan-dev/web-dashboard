import ANIMATION from "/animation.gif";
const Hero = () => {
  return (
    <div className="container mx-auto px-5 md:px-0">
      <div className="grid grid-col-1 md:grid-cols-2 my-5 gap-10 items-center">
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
            <span className="text-[var(--primary-color)]">onze netwerk -</span>
          </h1>
          <div className="flex items-center md:justify-start justify-center gap-2 md:flex-row flex-col md:mt-0 mt-4">
            <h1
              className="md:text-[40px] text-[26px] font-bold text-[var(--primary-color)]"
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
