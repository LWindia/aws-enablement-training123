import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  content: string;
  achievement: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Cloud Solutions Architect',
      company: 'Tech Mahindra',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      content: 'Vimal Sir\'s training transformed my career completely. The practical approach and real-world projects gave me the confidence to work on enterprise-level AWS implementations. Within 3 months of completion, I got promoted to Cloud Architect role.',
      achievement: '300% Salary Increase'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'DevOps Engineer',
      company: 'Infosys',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      content: 'The depth of knowledge and hands-on experience I gained is unmatched. Vimal Sir\'s mentorship style is unique - he doesn\'t just teach AWS services, but how to think architecturally. This training is a game-changer for any tech professional.',
      achievement: 'AWS Certified Solutions Architect'
    },
    {
      id: 3,
      name: 'Anita Patel',
      role: 'Senior Software Engineer',
      company: 'Wipro',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      content: 'Coming from a traditional IT background, I was hesitant about cloud technologies. Vimal Sir made the transition smooth with his structured approach. The capstone project gave me real confidence to handle production workloads.',
      achievement: 'Lead Cloud Migration Project'
    },
    {
      id: 4,
      name: 'Arjun Singh',
      role: 'Cloud Consultant',
      company: 'Accenture',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      content: 'The best investment I made in my career. The training quality is world-class and the community support is amazing. Vimal Sir\'s approach of making education accessible to all is truly inspiring.',
      achievement: 'Started Own Cloud Consulting Firm'
    },
    {
      id: 5,
      name: 'Kavitha Reddy',
      role: 'Solutions Architect',
      company: 'Amazon',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      content: 'This training helped me land my dream job at Amazon. The curriculum is perfectly aligned with industry requirements and the practical knowledge is invaluable. Grateful to Vimal Sir for his guidance.',
      achievement: 'Joined Amazon AWS Team'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Success Stories from
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Our Alumni
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AWS training has transformed careers and lives of thousands of professionals across India
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <Quote className="h-16 w-16 text-orange-400 opacity-50" />
            </div>

            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-6">
                "{currentTestimonial.content}"
              </p>
              
              <div className="flex items-center justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-400"
                />
                <div>
                  <h4 className="text-xl font-semibold">{currentTestimonial.name}</h4>
                  <p className="text-gray-300">{currentTestimonial.role}</p>
                  <p className="text-orange-400 font-medium">{currentTestimonial.company}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full">
                <span className="font-semibold text-sm">
                  🎉 {currentTestimonial.achievement}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50 group"
            >
              <ArrowLeft className="h-6 w-6 text-gray-600 group-hover:text-orange-500" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-orange-500 w-8' 
                      : 'bg-gray-300 hover:bg-orange-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50 group"
            >
              <ArrowRight className="h-6 w-6 text-gray-600 group-hover:text-orange-500" />
            </button>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Career Growth</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">200%</div>
            <div className="text-sm text-gray-600">Avg Salary Increase</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
            <div className="text-sm text-gray-600">Job Switch Rate</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Student Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;