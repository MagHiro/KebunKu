import "./landingpage.css";

export default function Home1() {
  return (
    <>
      {/* <div className="hero-logo1"></div>
      <div className="hero-logo"></div> */}
      <div className="hero-logo font-display">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex px-6 md:px-0">
            <div className="hidden md:flex md:w-1/2"></div>
            <div className="flex w-full md:w-1/2 justify-center">
              <div className="max-w-xl w-full flex flex-col gap-y-12 md:gap-y-3 pt-11 pb-10 md:py-40">
                <h1 style={{filter: 'drop-shadow(4px 3px 9px black)'}} className="text-white text-left text-[2rem] md:text-[2rem] font-bold max-w-[30rem] leading-tight w-full">
                  Selling the price of the plant without take it away from the
                  ground
                </h1>
                <span className="text-white text-left font-display text-base max-w-[30rem] w-full">
                  Diam neque et amet nullam. Pellentesque nisl consequat mauris
                  amet euismod adipiscing proin. Nunc diam eleifend in eu sit.
                  Duis habitant urna vitae aliquet eleifend at turpis.
                </span>
                <button className="bg-primary text-white py-4 md:py-2 px-4 text-sm rounded-md font-bold items-center transition duration-200 hover:bg-teal-600 sm:w-full sm:max-w-[10.5rem]">
                  Cari Tahu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
