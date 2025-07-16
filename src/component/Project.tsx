const Project = () => {
  return (
    <div>
        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 pt-40">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-12">
          Focusing On Responsive Website with better UI Experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-start">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5.055M19 11H21.055M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Real Estate</h3>
              <p className="text-gray-400">
                <span className="font-bold text-blue-300">Fully Responsive Real Esate web</span> For better Experience<span className="font-bold text-blue-300"> And Modern Design</span>.
              </p>
            </div>
            <ul className="text-gray-400 space-y-2 mb-6 flex-grow">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Using React, Tailwind Css
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Mobile-first responsive design
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Conversion-optimized layouts
              </li>
            </ul>
            <a href="#" className="text-blue-400 hover:text-blue-500 font-semibold flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-start">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-400">
                <span className="font-bold text-blue-300">User-centered designs</span> that increase
                engagement by <span className="font-bold text-blue-300">38%</span> and reduce bounce rates
                by <span className="font-bold text-blue-300">40%</span>.
              </p>
            </div>
            <ul className="text-gray-400 space-y-2 mb-6 flex-grow">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Data-driven design decisions
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Intuitive user journeys
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                A/B tested interfaces
              </li>
            </ul>
            <a href="#" className="text-blue-400 hover:text-blue-500 font-semibold flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-start">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3m0 0l3-3m-3 3v4m6 1h2a2 2 0 002-2v-3.793a2 2 0 00-.586-1.414L19 4.586A2 2 0 0017.586 4H10a2 2 0 00-2 2v7.586a2 2 0 00.586 1.414l2.793 2.793A2 2 0 0015 20h2"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">SaaS Development</h3>
              <p className="text-gray-400">
                <span className="font-bold text-blue-300">End-to-end SaaS solutions</span> that reduce
                operational costs by <span className="font-bold text-blue-300">25%</span> and scale with your
                business.
              </p>
            </div>
            <ul className="text-gray-400 space-y-2 mb-6 flex-grow">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Scalable architecture
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                99.9% uptime guarantee
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Secure data handling
              </li>
            </ul>
            <a href="#" className="text-blue-400 hover:text-blue-500 font-semibold flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Project
