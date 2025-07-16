
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold mb-4">Start a Project</h3>
          <p className="text-gray-400 mb-6">Let's create your next big idea.</p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Get in Touch
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Web Development</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">App Development</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">AI Integration</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Video Editing</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Tools</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">HTML, CSS, Raect And Tailwind CSS</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Different Libary</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">AI Prompt</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Connect</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M16.364 9.364a1 1 0 01.707 1.707L12 16.586l-5.071-5.071a1 1 0 111.414-1.414L12 13.586l3.536-3.536a1 1 0 01.707-.293z" clipRule="evenodd" />
              </svg>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">LinkedIn</a>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14H9v-5h2v5zm4 0h-2v-5h2v5zM9 8h2V6H9v2zm4 0h2V6h-2v2z" clipRule="evenodd" />
              </svg>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Schedule a Call</a>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 100-16 8 8 0 000 16zM10.293 7.293a1 1 0 011.414 0L12 8.586l.293-.293a1 1 0 111.414 1.414L13.414 10l.293.293a1 1 0 11-1.414 1.414L12 11.414l-.293.293a1 1 0 01-1.414-1.414L10.586 10l-.293-.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Awwwards</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>&copy; 2025 Marc Friedman. All rights reserved.</p>
      </div>
    </footer>

    </div>
  )
}

export default Footer
