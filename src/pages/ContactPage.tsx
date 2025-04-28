import React, { useState } from 'react';
import ContentSection from '../components/ContentSection';
import { Mail, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div>
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </div>
      
      <ContentSection title="Get in Touch">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">We Value Your Feedback</h3>
            <p className="mb-6">
              Whether you have a question about our educational content, suggestions for improvement, or want to report an issue, we're here to help. Complete the form, and we'll respond as soon as possible.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-blue-700 mr-3" />
                <h4 className="font-medium">Alternatively, Email Us Directly</h4>
              </div>
              <p className="text-gray-700">
                For general inquiries: <a href="mailto:info@forexeducate.com" className="text-blue-700 hover:underline">info@forexeducate.com</a>
              </p>
              <p className="text-gray-700">
                For content suggestions: <a href="mailto:content@forexeducate.com" className="text-blue-700 hover:underline">content@forexeducate.com</a>
              </p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              {submitSuccess && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <p className="text-green-700">Thanks for reaching out! We've received your message and will get back to you soon.</p>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-red-700">{submitError}</p>
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="content">Content Suggestion</option>
                  <option value="feedback">Feedback</option>
                  <option value="issue">Report an Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default ContactPage;