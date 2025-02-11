const Sponsors = () => {
  return (
    <section className="w-full min-h-[100vh]  overflow-x-hidden">
      <div className="text-white">
        <div className="container mx-auto py-10 px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-6xl font-bold text-white newfont">Sponsors</h1>
          <p className="text-gray-400 mt-5 text-lg sm:text-xl">
            Today, we bring you the opportunity to collaborate with us on our next endeavor.
            <a href="#" className="underline ml-1 text-white">
              Sponsor Us
            </a>
          </p>

          {/* Platinum Sponsor */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-8 px-4">
            <div className="max-w-6xl px-6 container text-center space-y-8">
              <h2 className="mt-6 newfont" style={{ fontSize: '40px', color: 'silver', fontWeight: 'bold' }}>Platinum</h2>
              <div className="w-full border rounded-sm min-h-[100px] flex items-center justify-center p-5 hover:bg-[linear-gradient(rgba(53,225,255,0.4)_-50%,_rgba(58,58,58,0.15)_50%)]">
                <ul className="grid sm:grid-rows-2 gap-10 md:gap-10 items-center relative">
                  <li className="flex items-center justify-center md:px-10">
                    <img className="h-20" src="./partners/DEVFOLIO.webp" alt="Devfolio Logo" />
                  </li>
                  <li className="flex items-center justify-center md:px-10">
                    <img className="h-20" src="./partners/POLYGON.webp" alt="Polygon Logo" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Diamond */}
            <div className="max-w-6xl px-6 h-6xl container text-center space-y-8">
              <h2 className="mt-6 newfont" style={{ fontSize: '40px', color: '#009c9e', fontWeight: 'bold' }}>Diamond</h2>
              <div className="w-full border rounded-sm min-h-[100px] flex items-center justify-center p-10 hover:bg-[linear-gradient(rgba(176,103,255,0.6)_-50%,rgba(58,58,58,0.15)_50%)]">
                <ul className="grid sm:grid-rows-1 gap-10 md:gap-10 items-center relative">
                  <li className="flex items-center justify-center md:px-10">
                    <img src="./partners/replit.png" alt="Replit Logo" />
                  </li>
                  <li className="flex items-center justify-center md:px-10">
                    <img src="./partners/solona.png" alt="Solana Logo" />
                  </li>
                  <li className="flex items-center justify-center md:px-10">
                    <img src="./partners/ethIndia.png" alt="eth Logo" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Gold */}
            <div className="max-w-6xl px-6 container text-center space-y-8">
              <h2 className="mt-6 newfont" style={{ fontSize: '40px', color: '#ccac00', fontWeight: 'bold' }}>Gold</h2>
              <div className="w-full border rounded-sm min-h-[100px] items-center justify-center p-10 hover:bg-[linear-gradient(rgba(255,63,192,0.6)_-50%,_rgba(58,58,58,0.15)_50%)]">
                <ul className="grid grid-rows-1 gap-10 md:gap-10 items-center relative">
                  <li className="flex items-center justify-center md:px-10">
                    <a href="https://beeceptor.com" target="_blank" rel="noopener noreferrer">
                      <img src="./partners/beeceptor-logo-horizontal.png" alt="Beeceptor Logo" />
                    </a>
                  </li>
                  <li className="flex items-center justify-center md:px-10">
                    <img src="./partners/Leading Learners White Logo Full Text PNG.png" alt="Leading Learners Logo" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Other and Campus Sponsors */}
          <div className="flex flex-wrap gap-6 mt-10 w-full max-w-screen-md mx-auto">
            {/* Other Sponsors */}
            <section id="other-sponsors" className="relative section">
              {/* <div className="bg-purple opacity-20 top-[10%] left-[50px] absolute w-[300px] rounded-full blur-3xl aspect-square"></div> */}
              {/* <div className="bg-purple opacity-20 bottom-[10%] -right-[80px] absolute w-[300px] rounded-full blur-3xl aspect-square"></div> */}
              <div className="max-w-6xl container space-y-8 flex flex-col justify-center items-center">
                <div className="max-w-lg container space-y-4">
                  <h2 className="mt-6 newfont" style={{ fontSize: '40px', fontWeight: 'bold' }}>Other Sponsors</h2>
                </div>
                <div className="w-full border rounded-sm min-h-[100px] flex items-center justify-center p-10 hover:bg-[linear-gradient(rgba(176,103,255,0.6)_-50%,rgba(58,58,58,0.15)_50%)]">
                  <ul className="grid sm:grid-cols-3 gap-10 md:gap-10 items-center relative">
                    <li className="flex items-center justify-center md:px-10">
                      <a href="https://www.taskade.com" target="_blank" rel="noopener noreferrer">
                        <img src="./partners/taskade.png" alt="Taskade Logo" />
                      </a>
                    </li>
                    <li className="flex items-center justify-center md:px-10">
                      <img src="./partners/InterviewBuddy.png" alt="InterviewBuddy Logo" />
                    </li>
                    <li className="flex items-center justify-center md:px-10">
                      <img src="./partners/ECHO3D.png" alt="ECHO3D Logo" />
                    </li>
                    <li className="flex items-center justify-center md:px-10">
                      <img src="./partners/axure.png" alt="Axure Logo" />
                    </li>
                    <li className="flex items-center justify-center md:px-10">
                      <img src="./partners/wolfram-language-logo.png" alt="Wolfram Logo" />
                    </li>
                    <li className="flex items-center justify-center md:px-10">
                      <img src="./partners/verbwire.svg" alt="Verbwire Logo" />
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Campus Sponsors */}
            <section className="relative overflow-hidden">
              {/* <div className="bg-purple opacity-20 top-[10%] left-[50px] absolute w-[300px] rounded-full blur-3xl aspect-square"></div> */}
              {/* <div className="bg-purple opacity-20 bottom-[10%] -right-[80px] absolute w-[300px] rounded-full blur-3xl aspect-square"></div> */}
              <div className="max-w-6xl container text-center space-y-8 flex flex-col justify-center items-center">
                <div className="max-w-lg container space-y-4">
                  <h2 className="text-4xl font-bold newfont">
                    Campus Partners
                  </h2>
                </div>
                <div className="w-full border rounded-sm min-h-[100px] flex items-center justify-center p-6 hover:bg-[linear-gradient(rgba(255,63,192,0.6)_-50%,rgba(58,58,58,0.15)_50%)]">
                  <ul className="grid sm:grid-cols-3 gap-10 md:gap-20 items-center relative overflow-x-hidden">
                    <li className="flex items-center justify-center md:px-10">
                      <a href="https://gdsc.community.dev/rajasthan-technical-university-kota/" target="_blank" rel="noopener noreferrer">
                        <img src="./partners/rtu image.jpg" alt="GDSC RTU Kota" />
                      </a>
                    </li>
                    <li className="flex items-center justify-center md:px-10">
                      <img src="./partners/amity.png" alt="Cyber Security Amity" />
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
