import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/admin.jpg'; 

const Hero = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative overflow-hidden">
      
    
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <p className="inline-block px-4 py-1 border border-gray-400 rounded-full text-sm font-medium">
          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
          Available for Projects
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Hi I Am Mukesh Chaudhary <br />
          <span className="text-blue-300">Welcome To My Portfolio</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-blue-400 text-black px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-blue-500 transition">
            Start Project <ArrowRight size={18} />
          </button>
          <button className="border border-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-white hover:text-black transition">
            View Portfolio <ArrowRight size={18} />
          </button>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4 text-sm font-medium">
          <a className="bg-[#0e76a8] px-4 py-2 rounded-md" href="https://www.linkedin.com/in/mukesh-chaudhary-403286312/">LinkedIn</a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <img
          src={heroImage}
          alt="Hero"
          className="w-72 sm:w-96 rounded-xl z-10"
        />        
      </div>
    </section>
  );
};

export default Hero;
