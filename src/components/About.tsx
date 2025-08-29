import React, { useRef, useEffect, useState } from 'react';
import { Target, Users, BookOpen, Award } from 'lucide-react';

const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const features = [
    {
      icon: Target,
      title: 'Career-Oriented Training',
      description: 'Structured curriculum designed to meet industry demands and boost career prospects in cloud computing.'
    },
    {
      icon: BookOpen,
      title: 'Real-World Projects',
      description: 'Hands-on experience with live AWS projects that mirror actual enterprise scenarios and challenges.'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Direct guidance from industry veterans with 23+ years of experience in cloud technologies.'
    },
    {
      icon: Award,
      title: 'Government Alignment',
      description: 'Curriculum aligned with India\'s Cloud First Policy and digital transformation initiatives.'
    }
  ];

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current && !isVideoVisible) {
          setIsVideoVisible(true);
          // Ensure video is loaded before trying to play
          if (videoRef.current.readyState >= 2) {
            videoRef.current.play().catch(error => {
              console.log('Autoplay prevented:', error);
            });
          } else {
            videoRef.current.addEventListener('loadeddata', () => {
              videoRef.current?.play().catch(error => {
                console.log('Autoplay prevented:', error);
              });
            }, { once: true });
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [isVideoVisible]);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Career with
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              AWS Cloud Mastery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who have accelerated their careers through our comprehensive 
            AWS Cloud Enablement Training program, designed to support India's digital transformation journey.
            <br />
            <span className="font-semibold text-orange-600 mt-2 inline-block">Training starts on 9th Sept 2025</span>
            <br />
            <span className="font-semibold text-green-600 mt-2 inline-block text-lg">100% FREE TRAINING - NO COST INVOLVED!</span>
          </p>
        </div>

        {/* Video and Features Section */}
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Video Section */}
          <div className="order-2 lg:order-1 w-full">
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:rotate-1 group w-full" 
                 style={{ 
                   boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                   transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)',
                   transition: 'all 0.5s ease-in-out',
                   height: '500px'
                 }}>
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                poster="/certificates/Vimal Sir's .jpg"
              >
                <source src="/certificates/IMG_3457.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Features Section */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our AWS Training Program?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">10,000+ Success Stories</h4>
                <p className="text-gray-600">Join a community of successful professionals who have transformed their careers</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Industry Recognition</h4>
                <p className="text-gray-600">Curriculum aligned with industry standards and government policies</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Career-Focused</h4>
                <p className="text-gray-600">Designed to accelerate your career growth in cloud computing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;