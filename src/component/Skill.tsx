import { CheckCheck, Code } from 'lucide-react';
import Project from './Project';

const Skill = () => {
  return (
    <div>
      <section className="bg-black text-white py-20 px-6 md:px-24 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Front End Design Expertise</h2>
      <p className="text-gray-400 text-lg mb-10">
        <span className="font-semibold text-white">Delivering measurable results</span> through HTML, CSS, Tailwind CSS and React and Knowledge of Modern Ai technical Excellence
      </p>

      <div className="bg-[#1a1a1a] border border-blue-400/30 rounded-lg p-6 md:p-10 max-w-4xl mx-auto shadow-lg">
        <div className="flex items-center justify-between text-sm text-white mb-4">
          <div className="flex items-center gap-2 font-semibold">
            <Code size={18} />
            <span>Coding in Progress...</span>
          </div>
          <span className="text-blue-300 font-semibold">100%</span>
        </div>

        <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden mb-6">
          <div className="h-full bg-blue-400 w-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-[#252525] p-4 rounded-md">
            <h3 className="font-semibold flex items-center gap-2 mb-2 text-white/80">
              🎯 Design Phase
            </h3>
            <ul className="text-blue-300 space-y-2">
              <li><CheckCheck size={16} className="inline mr-2" />User Research</li>
              <li><CheckCheck size={16} className="inline mr-2" />Responsive UI Design</li>
              <li><CheckCheck size={16} className="inline mr-2" />Different Libery</li>
            </ul>
          </div>

          <div className="bg-[#252525] p-4 rounded-md border border-blue-300/20">
            <h3 className="font-semibold flex items-center gap-2 mb-2 text-white/80">
              💻 Development Phase
            </h3>
            <ul className="text-blue-300 space-y-2">
              <li><CheckCheck size={16} className="inline mr-2" />Frontend</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-blue-200 font-medium">
          Project Successfully Completed! 🎉
        </p>
      </div>
    </section>
      <div>
        <Project/>
      </div>
    </div>
  )
}

export default Skill
