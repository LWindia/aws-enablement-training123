import React, { useState } from 'react';
import { Award, Users, Globe, Heart, Star, BookOpen, X } from 'lucide-react';

const Trainer: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{ name: string; image: string } | null>(null);

  const achievements = [
    { icon: Award, title: 'World Record Holder', desc: 'Largest Programming Lesson' },
    { icon: Users, title: '50,000+ Students', desc: 'Mentored Globally' },
    { icon: Globe, title: 'TEDx Speaker', desc: 'International Recognition' },
    { icon: Heart, title: 'Philanthropist', desc: 'Free Education Advocate' }
  ];

  const awsCertificates = [
    // Advanced/Specialty Certificates (Most Advanced - Show First)
    { name: 'AWS Certified Advanced Networking - Specialty', image: '/certificates/AWS-10.jpg' },
    { name: 'AWS Certified Security - Specialty', image: '/certificates/AWS-9.jpg' },
    { name: 'AWS Certified Machine Learning - Specialty', image: '/certificates/AWS-11.jpg' },
    { name: 'AWS Certified Data Analytics - Specialty', image: '/certificates/AWS-7.jpg' },
    { name: 'AWS Certified Database - Specialty', image: '/certificates/AWS-8.jpg' },
    { name: 'AWS Certified Big Data - Specialty', image: '/certificates/AWS-1.jpg' },
    { name: 'AWS Certified Alexa Skill Builder - Specialty', image: '/certificates/AWS-3.jpg' },
    
    // Professional Certificates
    { name: 'AWS Certified DevOps Engineer - Professional', image: '/certificates/AWS-5.jpg' },
    
    // Associate Certificates
    { name: 'AWS Certified Solutions Architect - Associate', image: '/certificates/AWS-2.jpg' },
    { name: 'AWS Certified Solutions Architect - Associate', image: '/certificates/AWS-13.jpg' },
    { name: 'AWS Certified Developer - Associate', image: '/certificates/AWS-4.jpg' },
    { name: 'AWS Certified SysOps Administrator - Associate', image: '/certificates/AWS-6.jpg' },
  ];

  const openCertificateModal = (cert: { name: string; image: string }) => {
    setSelectedCertificate(cert);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="trainer" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Meet Your
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Visionary Mentor
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from India's most celebrated cloud architect and philanthropic tech educator
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Section */}
          <div className="text-center lg:text-left space-y-6">
            <div className="relative inline-block">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-orange-400">
                <img
                  src="/certificates/Vimal Sir's .jpg"
                  alt="Vimal Daga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 animate-pulse">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">Vimal Daga</h3>
              <p className="text-xl text-orange-600 font-semibold mb-4">
                Cloud Architect | TEDx Speaker | World Record Holder
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over 23 years of experience in technology and education, Vimal Daga has 
                dedicated his life to democratizing technology education. His philanthropic 
                approach has made quality tech education accessible to millions worldwide.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                23+ Years Experience
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                Free Education Advocate
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                Global Impact
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {achievement.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Impact */}
        <div className="grid grid-cols-1 gap-8">
          {/* Certifications - Full Width Collage */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center mb-8">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Vimal Daga's AWS Certification Mastery</h3>
            </div>
            
            {/* Certificate Collage */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {awsCertificates.map((cert, idx) => (
                <div key={idx} className="group relative">
                  <div 
                    className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                    onClick={() => openCertificateModal(cert)}
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      title={`Click to view ${cert.name}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">Click to view</p>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics - Hidden */}
          {/* <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50,000+</div>
                <div className="text-sm text-gray-700">Students Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-sm text-gray-700">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1,000+</div>
                <div className="text-sm text-gray-700">Free Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-sm text-gray-700">Recognition</div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="text-6xl text-orange-400 mb-4">"</div>
            <blockquote className="text-2xl font-light italic mb-6 max-w-4xl mx-auto">
              Education should be a fundamental right, not a privilege. My mission is to make 
              world-class technology education accessible to every passionate learner, 
              regardless of their background or financial situation.
            </blockquote>
            <div className="text-orange-400 font-semibold">- Vimal Daga</div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeCertificateModal}>
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeCertificateModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{selectedCertificate.name}</h3>
              <div className="flex justify-center">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Trainer;