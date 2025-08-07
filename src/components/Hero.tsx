import React from 'react';
import { ArrowRight, Play, Users, Globe, Cloud, Zap, Shield, GraduationCap, Database, HardDrive, Network, Lock, Key, Monitor, Layers, Box, Package, Truck, Globe2, Wifi, Radio, Satellite } from 'lucide-react';
import { useRegistration } from '../contexts/RegistrationContext';

const Hero: React.FC = () => {
  const { openRegistration } = useRegistration();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // AWS Service Icons array
  const awsServices = [
    { icon: Database, name: 'RDS', color: 'text-blue-400' },
    { icon: HardDrive, name: 'S3', color: 'text-green-400' },
    { icon: Network, name: 'VPC', color: 'text-purple-400' },
    { icon: Lock, name: 'IAM', color: 'text-red-400' },
    { icon: Key, name: 'KMS', color: 'text-yellow-400' },
    { icon: Monitor, name: 'CloudWatch', color: 'text-indigo-400' },
    { icon: Layers, name: 'CloudFormation', color: 'text-cyan-400' },
    { icon: Box, name: 'SQS', color: 'text-emerald-400' },
    { icon: Package, name: 'SNS', color: 'text-amber-400' },
    { icon: Truck, name: 'Route53', color: 'text-rose-400' },
    { icon: Globe2, name: 'CloudFront', color: 'text-sky-400' },
    { icon: Wifi, name: 'API Gateway', color: 'text-violet-400' },
    { icon: Radio, name: 'ECS', color: 'text-lime-400' },
    { icon: Satellite, name: 'EKS', color: 'text-teal-400' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-orange-900 pt-16 sm:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* AWS Service Icons */}
        <div className="floating-aws-services">
          {awsServices.map((service, i) => (
            <div
              key={i}
              className={`absolute animate-aws-service-float-${(i % 3) + 1} opacity-20`}
              style={{
                left: `${5 + (i * 7) % 90}%`,
                top: `${10 + (i * 8) % 80}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${8 + (i % 4) * 2}s`
              }}
            >
              <div className={`${service.color} hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* AWS Cloud Icons */}
        <div className="floating-aws-icons">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-aws-float-${(i % 3) + 1} opacity-20`}
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + i * 10}%`,
                animationDelay: `${i * 0.3}s`
              }}
            >
              <Cloud className="w-6 h-6 text-orange-400" />
            </div>
          ))}
        </div>

        {/* AWS Lightning Bolts */}
        <div className="floating-lightning">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-lightning-${(i % 2) + 1} opacity-20`}
              style={{
                left: `${20 + i * 20}%`,
                top: `${25 + i * 15}%`,
                animationDelay: `${i * 0.8}s`
              }}
            >
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
          ))}
        </div>

        {/* AWS Shield Icons */}
        <div className="floating-shields">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-shield-${(i % 2) + 1} opacity-10`}
              style={{
                left: `${60 + i * 15}%`,
                top: `${40 + i * 20}%`,
                animationDelay: `${i * 1.2}s`
              }}
            >
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
          ))}
        </div>

        {/* Cloud Layers */}
        <div className="cloud-layer-1 absolute top-20 left-0 w-full h-32 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-drift-right"></div>
        <div className="cloud-layer-2 absolute top-40 right-0 w-full h-24 bg-gradient-to-l from-transparent via-white/3 to-transparent animate-drift-left"></div>
      </div>

      {/* Marquee - Fixed positioning to not overlap navbar */}
      <div className="absolute top-16 sm:top-16 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 overflow-hidden z-40">
        <div className="marquee-container">
          <div 
            className="marquee-enhanced text-sm font-medium text-white"
            style={{
              animation: 'marquee 30s linear infinite',
              WebkitAnimation: 'marquee 30s linear infinite',
              display: 'inline-block',
              whiteSpace: 'nowrap',
              willChange: 'transform',
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              perspective: '1000px',
              WebkitPerspective: '1000px'
            }}
          >
            Supporting India's Cloud First Policy | Empowering 10,000+ Students | Government-Aligned Curriculum | AWS-Powered Nation | Supporting India's Cloud First Policy | Empowering 10,000+ Students | Government-Aligned Curriculum | AWS-Powered Nation | Supporting India's Cloud First Policy | Empowering 10,000+ Students | Government-Aligned Curriculum | AWS-Powered Nation | Supporting India's Cloud First Policy | Empowering 10,000+ Students | Government-Aligned Curriculum | AWS-Powered Nation | Supporting India's Cloud First Policy | Empowering 10,000+ Students | Government-Aligned Curriculum | AWS-Powered Nation | Supporting India's Cloud First Policy | Empowering 10,000+ Students | Government-Aligned Curriculum | AWS-Powered Nation
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-20 pb-8 sm:pb-0">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Headline */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight">
              <span className="text-white animate-fade-in-up whitespace-nowrap sm:whitespace-normal">
                Accelerate India's{' '}
              </span>
              <span className="animate-fade-in-up-delay-1 whitespace-nowrap sm:whitespace-normal" style={{
                background: 'linear-gradient(to right, #f97316, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline'
              }}>
                Digital Future
              </span>
            </h1>
            <span className="block text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 animate-fade-in-up-delay-2">
              with AWS Cloud Enablement Training
            </span>
          </div>

          {/* Subheadline */}
          <div className="animate-fade-in-up-delay-3 space-y-3 sm:space-y-4 flex flex-col items-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto whitespace-nowrap sm:whitespace-normal">
              Led by India's Tech Visionary{' '}
              <span className="font-bold" style={{
                background: 'linear-gradient(to right, #fbbf24, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Vimal Daga
              </span>
            </p>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full inline-block animate-pulse">
                <span className="font-semibold">Starting on 1st Sept 2025</span>
              </div>
              {/* FREE Training Highlight */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full inline-block animate-pulse shadow-2xl">
                <span className="font-semibold text-lg">100% FREE TRAINING</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto animate-fade-in-up-delay-4">
            {[
              { icon: Users, number: '10,000+', label: 'Students' },
              { icon: Globe, number: '20+', label: 'States' },
              { icon: Play, number: '23+', label: 'Years Exp' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex flex-col items-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <stat.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up-delay-5 max-w-4xl mx-auto">
            <button
              onClick={() => scrollToSection('about')}
              className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center w-full sm:w-auto min-w-[200px]"
            >
              Start Learning Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openRegistration}
              className="group bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center border-2 border-orange-500 hover:bg-orange-50 w-full sm:w-auto min-w-[200px]"
            >
              <GraduationCap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Enroll Now - Free
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;