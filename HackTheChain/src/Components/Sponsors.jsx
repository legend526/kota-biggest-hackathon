import React from "react";

const Sponsors = () => {
  return (
    <section className="w-full min-h-[100vh]  overflow-x-hidden">
      <div className="text-white">
        <div className="container mx-auto py-10 px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Sponsors</h1>
          <p className="text-gray-400 mt-5 text-lg sm:text-xl">
            Today, we bring you the opportunity to collaborate with us on our next endeavor.
            <a href="#" className="underline ml-1 text-white">
              Sponsor Us
            </a>
          </p>

          {/* Platinum Sponsor */}
          <div className="relative w-full max-w-screen-md mx-auto mt-8 md:mt-12 px-4 md:px-6 py-6 rounded-xl bg-[linear-gradient(182deg,_rgb(70,70,70)_-65%,_rgba(70,70,70,0.15)_98.55%)] hover:bg-[linear-gradient(rgba(53,225,255,0.4)_-50%,_rgba(58,58,58,0.15)_50%)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-[linear-gradient(rgba(53,225,255,0.4)_-6.4%,_rgba(58,58,58,0.15)_99.89%)] before:transition-opacity before:duration-500 before:ease-linear before:opacity-0 hover:before:opacity-100 backdrop-blur-0 before:bg-opacity-30  min-h-[260px]">
            <div className="flex flex-col items-center text-center gap-4">
              <h3 className="text-2xl md:text-3xl font-extrabold pt-6">Platinum Sponsor</h3>
              <div className="flex items-center justify-center">
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dkpdi1wek/image/upload/v1708786569/download__3_-removebg-preview_otfa7p.png"
                    alt="MongoDB"
                    className="h-24 sm:h-32 md:h-40 lg:h-48 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Diamond Sponsors */}
          <div className="relative w-full max-w-screen-md mx-auto mt-8 md:mt-12 px-4 md:px-6 py-6 rounded-xl bg-[linear-gradient(182deg,_rgb(70,70,70)_-65%,_rgba(70,70,70,0.15)_98.55%)] hover:bg-[linear-gradient(rgba(53,225,255,0.4)_-50%,_rgba(58,58,58,0.15)_50%)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-[linear-gradient(rgba(20,241,149,0.4)_0%,_rgba(58,58,58,0.15)_100%)] before:transition-opacity before:duration-500 before:ease-linear before:opacity-0 hover:before:opacity-100 backdrop-blur-0 before:bg-opacity-30  min-h-[260px]">
            <div className="flex flex-col items-center text-center gap-4">
              <h3 className="text-2xl md:text-3xl font-extrabold pt-6">Diamond Sponsors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-items-center">
                <a href="https://quine.sh/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702202813/HackNitr/Sponsor%20Section/jsvurmvvk3nrr4lmncy9.png"
                    alt="Quine"
                    className="h-12 sm:h-16 object-contain"
                  />
                </a>
                <a href="https://www.taipy.io/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhnkuonev/image/upload/v1708441978/Square_White_u3qnii.png"
                    alt="Taipy"
                    className="h-12 sm:h-16 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Gold Sponsor */}
          <div className="relative w-full max-w-screen-md mx-auto mt-8 md:mt-12 px-4 md:px-6 py-6 rounded-xl bg-[linear-gradient(182deg,_rgb(70,70,70)_-65%,_rgba(70,70,70,0.15)_98.55%)] hover:bg-[linear-gradient(rgba(255,63,192,0.6)_-50%,_rgba(58,58,58,0.15)_50%)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-[linear-gradient(rgba(255,63,192,0.6)_0%,_rgba(58,58,58,0.15)_100%)] before:transition-opacity before:duration-500 before:ease-linear before:opacity-0 hover:before:opacity-100 backdrop-blur-0 before:bg-opacity-30  min-h-[260px]">
            <div className="flex flex-col items-center text-center gap-4">
              <h3 className="text-2xl md:text-3xl font-extrabold pt-6">Gold Sponsor</h3>
              <div className="flex items-center justify-center">
                <a href="https://polygon.technology/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702202903/HackNitr/Sponsor%20Section/xpipftsfivsn4l1rhxot.png"
                    alt="Polygon"
                    className="h-24 sm:h-32 md:h-40 lg:h-48 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Other and Campus Sponsors */}
          <div className="flex flex-wrap gap-6 mt-10 w-full max-w-screen-md mx-auto">
            {/* Other Sponsors */}
            <div className="flex-1 p-6 rounded-xl bg-[linear-gradient(182deg,_rgb(70,70,70)_-65%,_rgba(70,70,70,0.15)_98.55%)] hover:bg-[linear-gradient(rgba(176,103,255,0.6)_-50%,rgba(58,58,58,0.15)_50%)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-[linear-gradient(rgba(176,103,255,0.6)_0%,rgba(58,58,58,0.15)_100%)] before:transition-opacity before:duration-500 before:ease-linear before:opacity-0 hover:before:opacity-100 backdrop-blur-0 before:bg-opacity-30  min-h-[260px]">
              <h4 className="text-xl md:text-2xl font-extrabold pt-6">Other Sponsors</h4>
              <div className="flex items-center justify-center mt-4">
                <a href="https://replit.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhnkuonev/image/upload/v1707708337/replit-light_mhki6f.png"
                    alt="Replit"
                    className="h-8 sm:h-10 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Campus Sponsors */}
            <div className="flex-1 p-6 rounded-xl bg-[linear-gradient(182deg,_rgb(70,70,70)_-65%,_rgba(70,70,70,0.15)_98.55%)] hover:bg-[linear-gradient(rgba(255,63,192,0.6)_-50%,rgba(58,58,58,0.15)_50%)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-[linear-gradient(rgba(255,63,192,0.6)_0%,rgba(58,58,58,0.15)_100%)] before:transition-opacity before:duration-500 before:ease-linear before:opacity-0 hover:before:opacity-100 backdrop-blur-0 before:bg-opacity-30  min-h-[260px]">
              <h4 className="text-xl md:text-2xl font-extrabold pt-6">Campus Sponsors</h4>
              <div className="flex items-center justify-center mt-4">
                <a href="https://solidityscan.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhnkuonev/image/upload/v1702277604/qoug3sk1aze8uikcseow.png"
                    alt="Solidity Scan"
                    className="h-8 sm:h-10 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
