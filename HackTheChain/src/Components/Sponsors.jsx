import React from "react";

const Sponsors = () => {
  return (
    <section className="w-full min-h-[100vh] overflow-x-hidden">
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
          <div className="relative w-full max-w-screen-md mx-auto mt-8 md:mt-12 px-4 md:px-6 py-6 h-full rounded-xl shadow-lg ring-1 ring-black/5 bg-white/20 backdrop-blur-xl border-0 border-yellow-400 group relative p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center gap-4">
              <h3 className="text-2xl md:text-3xl font-extrabold pt-6">Platinum Sponsor</h3>
              <div className="flex items-center justify-center">
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dkpdi1wek/image/upload/v1708786569/download__3_-removebg-preview_otfa7p.png"
                    alt="MongoDB"
                    className="h-16 sm:h-24 md:h-28 lg:h-32 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Diamond Sponsors */}
          <div className="relative w-full max-w-screen-md mx-auto mt-8 md:mt-12 px-4 md:px-6 py-6 h-full rounded-xl shadow-lg ring-1 ring-black/5 bg-white/20 backdrop-blur-xl border-0 border-yellow-400 group relative p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center gap-4">
              <h3 className="text-2xl md:text-3xl font-extrabold pt-6">Diamond Sponsors</h3>
              <div className="flex gap-4 items-center justify-center">
                <a href="https://quine.sh/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702202813/HackNitr/Sponsor%20Section/jsvurmvvk3nrr4lmncy9.png"
                    alt="Quine"
                    className="h-8 sm:h-12 object-contain"
                  />
                </a>
                <a href="https://www.taipy.io/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhnkuonev/image/upload/v1708441978/Square_White_u3qnii.png"
                    alt="Taipy"
                    className="h-8 sm:h-12 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Gold Sponsor */}
          <div className="relative w-full max-w-screen-md mx-auto mt-8 md:mt-12 px-4 md:px-6 py-6 h-full rounded-xl shadow-lg ring-1 ring-black/5 bg-white/20 backdrop-blur-xl border-0 border-yellow-400 group relative p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center gap-4">
              <h3 className="text-2xl md:text-3xl font-extrabold pt-6">Gold Sponsor</h3>
              <div className="flex items-center justify-center">
                <a href="https://polygon.technology/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702202903/HackNitr/Sponsor%20Section/xpipftsfivsn4l1rhxot.png"
                    alt="Polygon"
                    className="h-16 sm:h-24 md:h-28 lg:h-32 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Other and Campus Sponsors */}
          <div className="flex gap-6 mt-10 w-full max-w-screen-md mx-auto justify-center flex-wrap">
            {/* Other Sponsors */}
            <div className="flex-none p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-xl shadow-lg ring-1 ring-black/5 bg-white/20 backdrop-blur-xl border-0 border-yellow-400 group relative p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl min-h-[260px]">
              <h4 className="text-xl md:text-2xl font-extrabold pt-6">Other Sponsors</h4>
              <div className="flex items-center justify-center mt-4">
                <a href="https://replit.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhnkuonev/image/upload/v1707708337/replit-light_mhki6f.png"
                    alt="Replit"
                    className="h-4 sm:h-6 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Campus Sponsors */}
            <div className="flex-none p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-xl shadow-lg ring-1 ring-black/5 bg-white/20 backdrop-blur-xl border-0 border-yellow-400 group relative p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl min-h-[260px]">
              <h4 className="text-xl md:text-2xl font-extrabold pt-6">Campus Sponsors</h4>
              <div className="flex items-center justify-center mt-4">
                <a href="https://solidityscan.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhnkuonev/image/upload/v1702277604/qoug3sk1aze8uikcseow.png"
                    alt="Solidity Scan"
                    className="h-4 sm:h-6 object-contain"
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
