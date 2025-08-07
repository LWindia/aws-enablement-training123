import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Users, Award, GraduationCap, BookOpen } from 'lucide-react';
import { useRegistration } from '../contexts/RegistrationContext';

interface Module {
  id: number;
  title: string;
  duration: string;
  topics: string[];
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

const Curriculum: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const { openRegistration } = useRegistration();

  const modules: Module[] = [
    {
      id: 1,
      title: 'Introduction',
      duration: '',
      level: 'Beginner',
      description: 'Foundation concepts of cloud computing and AWS infrastructure',
      topics: [
        'Introduction',
        'What is cloud computing?',
        'Cloud computing service model?',
        'Cloud computing deployment model?',
        'Scaling in vs scaling out?',
        'High availability',
        'Fault tolerance',
        'Different types of cloud deployment models',
        'All in with cloud/cloud native',
        'Hybrid',
        'On-premises',
        'AWS services',
        'AWS infrastructure'
      ]
    },
    {
      id: 2,
      title: 'Access Management',
      duration: '',
      level: 'Beginner',
      description: 'Master identity and access management with AWS IAM and VPC',
      topics: [
        'Access control',
        'IAM overview',
        'Amazon Virtual Private Cloud (VPC)',
        'Create a custom VPC',
        'Security Group',
        'AWS CLI',
        'Implementing IAM features',
        'Password policies',
        'MFA',
        'Roles'
      ]
    },
    {
      id: 3,
      title: 'Compute',
      duration: '',
      level: 'Intermediate',
      description: 'Deploy and manage scalable compute infrastructure with EC2 and Lambda',
      topics: [
        'Launching Amazon EC2 Instances',
        'Connecting AWS Instances',
        'Access key',
        'IAM role with EC2',
        'EC2 Auto scaling',
        'Amazon Elastic Load Balancing',
        'Storage for EC2 instances',
        'Amazon EC2 pricing options',
        'AWS Lambda (plus edge)'
      ]
    },
    {
      id: 4,
      title: 'Storage',
      duration: '',
      level: 'Intermediate',
      description: 'Comprehensive storage solutions for different use cases and requirements',
      topics: [
        'Amazon EBS & Instance store',
        'Create and Attach an EBS Volume',
        'EBS Snapshots and AMIs',
        'Amazon Elastic File System (EFS)',
        'Create an Amazon EFS Filesystem',
        'Amazon Simple Storage Service (S3)',
        'Working with S3 Buckets and Objects',
        'Storage services',
        'Amazon S3',
        'Shared file systems',
        'Data migration tools'
      ]
    },
    {
      id: 5,
      title: 'Networking',
      duration: '',
      level: 'Advanced',
      description: 'Design and implement secure, scalable network architectures',
      topics: [
        'IP addressing',
        'VPC fundamentals',
        'VPC traffic security (Traffic Mirroring)',
        'IP addressing',
        'VPC endpoints',
        'VPC peering',
        'Hybrid networking',
        'AWS Transit Gateway',
        'Strategies to build a secure virtual network',
        'Hybrid networking',
        'Network peering',
        'Gateway',
        'Routing'
      ]
    },
    {
      id: 6,
      title: 'Database Services',
      duration: '',
      level: 'Intermediate',
      description: 'Master managed database services for various application needs',
      topics: [
        'Amazon Relational Database Service (RDS)',
        'Create an Amazon RDS Database',
        'Amazon DynamoDB',
        'Database services',
        'Database caching',
        'Database migration tools'
      ]
    },
    {
      id: 7,
      title: 'Monitoring & Scaling',
      duration: '',
      level: 'Intermediate',
      description: 'Implement comprehensive monitoring and optimize cloud performance',
      topics: [
        'Monitoring',
        'Alarms and events',
        'Load balancing',
        'Auto scaling'
      ]
    },
    {
      id: 8,
      title: 'Serverless',
      duration: '',
      level: 'Advanced',
      description: 'Build modern serverless applications with event-driven architecture',
      topics: [
        'What is serverless?',
        'Amazon API Gateway',
        'Amazon SQS',
        'Amazon SNS',
        'AWS Step Functions',
        'Security benefits of AWS serverless'
      ]
    },
    {
      id: 9,
      title: 'Security & Automation',
      duration: '',
      level: 'Advanced',
      description: 'Implement enterprise-grade security and automation frameworks',
      topics: [
        'Principals and identities',
        'The fundamentals of account security',
        'Security policies',
        'Managing multiple accounts',
        'AWS CloudFormation',
        'Infrastructure management (Sessions Manager/Systems Manager)'
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              AWS Curriculum
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our structured learning path covers everything from cloud fundamentals to advanced 
            solutions architecture, ensuring you become a certified AWS professional.
          </p>
        </div>

        {/* Course Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Users, value: '15+', label: 'Hands-on Labs' },
            { icon: BookOpen, value: '9', label: 'Comprehensive Modules' },
            { icon: Award, value: '1', label: 'Capstone Project' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md border border-gray-100 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Curriculum Timeline */}
        <div className="space-y-6">
          {modules.map((module) => (
            <div 
              key={module.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleModule(module.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {module.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {module.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{module.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(module.level)}`}>
                          {module.level}
                        </span>
                        {module.duration && (
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {module.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedModule === module.id ? (
                      <ChevronUp className="h-6 w-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {expandedModule === module.id && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div 
                          key={topicIndex}
                          className="flex items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learning Path CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your AWS Journey?</h3>
          <p className="text-xl text-gray-200 mb-4 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers through our comprehensive AWS training program
          </p>
          <div className="bg-yellow-400 text-gray-900 rounded-full px-6 py-3 inline-block mb-8 font-semibold animate-pulse">
            🚀 Starting on 1st Sept 2025
          </div>
          {/* FREE Training Highlight */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full inline-block mb-8 font-bold text-2xl shadow-2xl animate-pulse">
            🎓 100% FREE TRAINING - NO COST INVOLVED!
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openRegistration}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Enroll Now - FREE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;