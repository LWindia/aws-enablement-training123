import React from 'react';
import { Send, CheckCircle, GraduationCap } from 'lucide-react';
import { useRegistration } from '../contexts/RegistrationContext';

const CTA: React.FC = () => {
  const { openRegistration } = useRegistration();

  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float-1"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-float-2"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full animate-float-3"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/10 rounded-full animate-float-1"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Join the AWS-Powered
            <span className="block text-yellow-300">Cloud Movement of India</span>
          </h2>
          
          <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed">
            Transform your career with India's most comprehensive AWS Cloud training program. 
            Be part of the digital revolution that's shaping our nation's future.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Career Acceleration</h3>
              <p className="text-white/80">Fast-track your cloud career with industry-recognized skills and certifications</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
              <p className="text-white/80">Learn directly from Vimal Daga, India's most celebrated cloud architect</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Support</h3>
              <p className="text-white/80">Join a community of 50,000+ professionals with ongoing support and networking</p>
            </div>
          </div>

          {/* Urgency Indicator */}
          <div className="bg-yellow-400 text-gray-900 rounded-full px-6 py-3 inline-block mb-8 font-semibold animate-pulse">
            Starting on 9th Sept 2025 - Limited Seats Available!
          </div>

          {/* FREE Training Highlight */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full inline-block mb-8 font-semibold text-lg shadow-2xl animate-pulse">
            100% FREE TRAINING - NO COST INVOLVED!
          </div>

          {/* Main CTA Button */}
          <div className="space-y-6">
            <button
              onClick={openRegistration}
              className="group bg-white text-orange-600 px-12 py-5 rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover:bg-yellow-50"
            >
              <span className="flex items-center justify-center">
                <GraduationCap className="mr-3 h-6 w-6" />
                Enroll Now - Start Your Journey
                <Send className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
              <span className="flex items-center bg-green-500 px-4 py-2 rounded-full font-bold">
                <CheckCircle className="h-5 w-5 mr-2" />
                100% FREE Training
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Expert-Led Curriculum
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Government-Aligned Program
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;