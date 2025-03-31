import { FaRobot, FaFileAlt, FaMagic, FaCloudUploadAlt } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -top-48 -left-48 blur-3xl"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full -bottom-48 -right-48 blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI-Powered Resume Generator
          </h1>
          <p className="text-xl mt-6 text-gray-300 leading-relaxed">
            Transform your career story into a stunning resume with cutting-edge AI
          </p>
          <button className="mt-8 px-8 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-100">Features</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <FeatureCard icon={<FaRobot />} title="AI-Generated Content" desc="Professional resume content crafted by advanced AI algorithms." />
          <FeatureCard icon={<FaFileAlt />} title="Multiple Templates" desc="Sleek, modern templates designed for every profession." />
          <FeatureCard icon={<FaMagic />} title="One-Click Editing" desc="Intuitive customization at your fingertips." />
          <FeatureCard icon={<FaCloudUploadAlt />} title="Cloud Save" desc="Securely store and access your resume anytime." />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-800/50 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-100">How It Works</h2>
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 px-4 max-w-5xl mx-auto">
          <StepCard step="1" title="Upload Your Info" desc="Input your details or upload your current resume." />
          <StepCard step="2" title="AI Enhancement" desc="Our AI optimizes and styles your resume perfectly." />
          <StepCard step="3" title="Download & Share" desc="Export in multiple formats with ease." />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <h2 className="text-4xl font-bold text-gray-100">Ready to Elevate Your Resume?</h2>
        <button className="mt-8 px-8 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
          Start Now
        </button>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg text-center flex flex-col items-center border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
      <div className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors">{icon}</div>
      <h3 className="text-xl font-semibold mt-4 text-gray-100">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="bg-gray-800/30 p-6 rounded-xl shadow-lg text-center border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
      <div className="text-4xl font-bold text-purple-400">{step}</div>
      <h3 className="text-xl font-semibold mt-4 text-gray-100">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{desc}</p>
    </div>
  );
}