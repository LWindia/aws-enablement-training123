import React, { useState } from 'react';
import { User, Building, Phone, Mail, MessageSquare, Linkedin, Instagram, Globe, Send, CheckCircle, X, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  collegeCompany: string;
  contactNo: string;
  emailId: string;
  currentCity: string;
  source: string;
  reference: string;
  profession: string;
  experience: string;
  currentRole: string;
  expectations: string;
  availability: string;
  additionalInfo: string;
}

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    collegeCompany: '',
    contactNo: '',
    emailId: '',
    currentCity: '',
    source: '',
    reference: '',
    profession: '',
    experience: '',
    currentRole: '',
    expectations: '',
    availability: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return false;
    }
    if (!formData.collegeCompany.trim()) {
      setError('Please enter your college or company name');
      return false;
    }
    if (!formData.contactNo.trim()) {
      setError('Please enter your contact number');
      return false;
    }
    if (!formData.emailId.trim()) {
      setError('Please enter your email address');
      return false;
    }
    if (!formData.currentCity.trim()) {
      setError('Please enter your current city');
      return false;
    }
    if (!formData.source) {
      setError('Please select how you came to know about this training');
      return false;
    }
    if (!formData.profession) {
      setError('Please select your profession');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Create form data for Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('collegeCompany', formData.collegeCompany.trim());
      formDataToSend.append('contactNo', formData.contactNo.trim());
      formDataToSend.append('emailId', formData.emailId.trim());
      formDataToSend.append('currentCity', formData.currentCity.trim());
      formDataToSend.append('source', formData.source);
      formDataToSend.append('reference', formData.reference.trim());
      formDataToSend.append('profession', formData.profession);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('currentRole', formData.currentRole.trim());
      formDataToSend.append('expectations', formData.expectations.trim());
      formDataToSend.append('additionalInfo', formData.additionalInfo.trim());

      await fetch('https://script.google.com/macros/s/AKfycbylveDRgObPi5n86imIzWAXL-7GcPvv_nCKSrhye7r_O9oI5dppyp32LCIkAnmIag3V/exec', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors', // Required for Google Apps Script
      });

      // Since we're using no-cors, we can't read the response
      // We'll assume success if no error is thrown
      setIsSubmitted(true);
      setFormData({
        name: '',
        collegeCompany: '',
        contactNo: '',
        emailId: '',
        currentCity: '',
        source: '',
        reference: '',
        profession: '',
        experience: '',
        currentRole: '',
        expectations: '',
        availability: '',
        additionalInfo: ''
      });
      
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Something went wrong. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setIsSubmitted(false);
      setError('');
      setFormData({
        name: '',
        collegeCompany: '',
        contactNo: '',
        emailId: '',
        currentCity: '',
        source: '',
        reference: '',
        profession: '',
        experience: '',
        currentRole: '',
        expectations: '',
        availability: '',
        additionalInfo: ''
      });
    }
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for registering for the free AWS training. We have shared the confirmation email on your mail ID.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm font-medium">
              Please check your email and follow the mandatory steps mentioned in the confirmation email.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Register for
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Free AWS Training
            </span>
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <p className="text-gray-600 mb-8">
          Join Vimal Daga's comprehensive AWS Cloud Enablement Training program. 
          Learn from India's most celebrated cloud architect - completely free!
          <br />
          <span className="font-semibold text-orange-600">Training starts on 9th Sept 2025</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline h-4 w-4 mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Building className="inline h-4 w-4 mr-2" />
                College / Company *
              </label>
              <input
                type="text"
                name="collegeCompany"
                value={formData.collegeCompany}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Your college or company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="inline h-4 w-4 mr-2" />
                Contact Number *
              </label>
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline h-4 w-4 mr-2" />
                Email ID *
              </label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-2" />
                Current City *
              </label>
              <input
                type="text"
                name="currentCity"
                value={formData.currentCity}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Your current city"
              />
            </div>
          </div>

          {/* Source of Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="inline h-4 w-4 mr-2" />
              How did you come to know about this training? *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
                { value: 'linkedin', label: 'LinkedIn', icon: Linkedin },
                { value: 'instagram', label: 'Instagram', icon: Instagram },
                { value: 'other', label: 'Other', icon: Globe }
              ].map((option) => (
                <label key={option.value} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="source"
                    value={option.value}
                    checked={formData.source === option.value}
                    onChange={handleInputChange}
                    required
                    className="mr-2"
                  />
                  <option.icon className="h-4 w-4 mr-2" />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          {/* Reference */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline h-4 w-4 mr-2" />
              Reference (if any)
            </label>
            <input
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Who referred you to this training? (optional)"
            />
          </div>

          {/* Professional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Are you a Student or Professional? *
              </label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Select your profession</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="fresher">Fresher</option>
                <option value="entrepreneur">Entrepreneur</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience (if professional)
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Role/Position
              </label>
              <input
                type="text"
                name="currentRole"
                value={formData.currentRole}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="e.g., Software Engineer, Student, etc."
              />
            </div>
          </div>

          {/* Expectations and Additional Info */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What do you expect from this training?
            </label>
            <textarea
              name="expectations"
              value={formData.expectations}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Share your expectations and goals..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Any additional information you'd like to share..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Register for Free Training
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="text-center text-red-600 bg-red-50 p-4 rounded-lg">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm; 