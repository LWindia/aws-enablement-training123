import React, { useState, useEffect } from 'react';
import { Shield, Zap, Globe, TrendingUp } from 'lucide-react';

const CloudPolicy: React.FC = () => {
  const [counters, setCounters] = useState({
    departments: 0,
    savings: 0,
    efficiency: 0,
    security: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { departments: 50, savings: 30, efficiency: 80, security: 95 };
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const timer = setInterval(() => {
        setCounters(prev => {
          const newCounters = { ...prev };
          let allReached = true;

          Object.keys(targets).forEach(key => {
            const target = targets[key as keyof typeof targets];
            const current = prev[key as keyof typeof prev];
            if (current < target) {
              newCounters[key as keyof typeof newCounters] = Math.min(
                current + Math.ceil(target / steps),
                target
              );
              allReached = false;
            }
          });

          if (allReached) {
            clearInterval(timer);
          }

          return newCounters;
        });
      }, interval);

      return timer;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('policy');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="policy" className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            India's Cloud First Policy
            <span className="block text-orange-400 mt-2">Powering Digital Transformation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aligned with the Ministry of Electronics and IT (MeitY) initiative to accelerate 
            government digital services through cloud adoption and skill development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Policy Objectives</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  Enhanced security and data sovereignty for government services
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  Improved efficiency and reduced operational costs
                </li>
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  Scalable infrastructure for citizen-centric services
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  Accelerated digital transformation across sectors
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
              <h3 className="text-xl font-bold mb-3">Training Alignment</h3>
              <p className="text-gray-200 leading-relaxed">
                Our curriculum is specifically designed to meet the skill requirements 
                outlined in India's Cloud First Policy, ensuring participants are equipped 
                to support national digital transformation initiatives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 text-center border border-green-500/30">
              <div className="text-4xl font-bold text-green-400 mb-2">{counters.departments}+</div>
              <div className="text-sm text-gray-300">Government Departments</div>
              <div className="text-xs text-gray-400 mt-1">Adopting Cloud First</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 text-center border border-blue-500/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">{counters.savings}%</div>
              <div className="text-sm text-gray-300">Cost Savings</div>
              <div className="text-xs text-gray-400 mt-1">Through Cloud Migration</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 text-center border border-purple-500/30">
              <div className="text-4xl font-bold text-purple-400 mb-2">{counters.efficiency}%</div>
              <div className="text-sm text-gray-300">Efficiency Boost</div>
              <div className="text-xs text-gray-400 mt-1">In Service Delivery</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 text-center border border-orange-500/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">{counters.security}%</div>
              <div className="text-sm text-gray-300">Security Enhancement</div>
              <div className="text-xs text-gray-400 mt-1">With Cloud Standards</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-2xl p-8 border border-indigo-500/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Be Part of India's Cloud Revolution</h3>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Join the movement to build a digitally empowered society through cloud-first governance 
              and contribute to national development through your expertise.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Learn More About the Policy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudPolicy;