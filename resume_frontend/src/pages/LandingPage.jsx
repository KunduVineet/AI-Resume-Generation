import { FaRobot, FaFileAlt, FaMagic, FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                        Transform your Career Story into a stunning Resume with Cutting-Edge AI
                    </p>
                    <Link to="/generate-resume" className="mt-6 px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl shadow-lg transition-transform transform hover:scale-105 inline-block">
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-12 tracking-tight">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    <FeatureCard
                        icon={<FaRobot className="text-indigo-400 text-3xl" />}
                        title="AI-Generated Content"
                        desc="Professionally crafted Resume Content powered by Cutting-Edge AI Technology."
                    />
                    <FeatureCard
                        icon={<FaFileAlt className="text-indigo-400 text-3xl" />}
                        title="Multiple Templates"
                        desc="Choose from Sleek, Modern Designs Tailored for every Profession."
                    />
                    <FeatureCard
                        icon={<FaMagic className="text-indigo-400 text-3xl" />}
                        title="One-Click Editing"
                        desc="Effortlessly Customize your Resume with Intuitive Controls."
                    />
                    <FeatureCard
                        icon={<FaCloudUploadAlt className="text-indigo-400 text-3xl" />}
                        title="Cloud Save"
                        desc="Safely Store and Access your Resume Anytime, Anywhere."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-gradient-to-b from-gray-800/70 to-gray-900/95 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute w-96 h-96 bg-purple-500/25 rounded-full top-0 left-1/5 blur-3xl animate-pulse"></div>
                    <div className="absolute w-96 h-96 bg-blue-500/25 rounded-full bottom-0 right-1/5 blur-3xl animate-pulse delay-1000"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 tracking-tight">How It Works</h2>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
                        Create your Perfect Resume in Three Simple Steps
                    </p>
                    <div className="mt-16 max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                            <StepCard
                                step="1"
                                title="Upload Your Info"
                                desc="Start by Entering your Details or Uploading an Existing Resume."
                                icon={<FaCloudUploadAlt className="text-purple-400 text-3xl" />}
                            />
                            <StepCard
                                step="2"
                                title="AI Enhancement"
                                desc="Our AI Optimizes your Content for a Professional Edge."
                                icon={<FaMagic className="text-purple-400 text-3xl" />}
                            />
                            <StepCard
                                step="3"
                                title="Download & Share"
                                desc="Export your Polished Resume in Multiple Formats with Ease."
                                icon={<FaFileAlt className="text-purple-400 text-3xl" />}
                            />
                            {/* Connecting Lines - Visible on medium screens and up */}
                            <div className="hidden md:block absolute top-1/2 left-12 right-12 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent transform -translate-y-1/2"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-20 bg-gradient-to-b from-gray-900 to-gray-800">
                <h2 className="text-4xl font-bold text-gray-100">Ready to Elevate Your Resume?</h2>
                <Link to="/generate-resume" className="mt-6 px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl shadow-lg transition-transform transform hover:scale-105 inline-block">
                    Start Now
                </Link>
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

function StepCard({ step, title, desc, icon }) {
    return (
        <div className="bg-gray-800/30 p-6 rounded-xl shadow-lg text-center border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-2xl font-bold text-purple-400 border border-purple-500/50 group-hover:bg-purple-500/10 transition-colors">
                {step}
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-3xl mt-4 text-purple-400">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-100">{title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{desc}</p>
        </div>
    );
}