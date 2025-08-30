
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterName, setNewsletterName] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState(''); // Store submitted email for success display
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setContactError(''); // Clear any previous errors

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setContactError(result.error || 'Submission failed. Please try again.');
        // Clear error after 5 seconds
        setTimeout(() => setContactError(''), 5000);
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setContactError('Network error. Please check your connection and try again.');
      // Clear error after 5 seconds
      setTimeout(() => setContactError(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);
    setNewsletterError(''); // Clear any previous errors

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail, name: newsletterName }),
      });

      const result = await response.json();

      if (response.ok) {
        // Store the email temporarily for display in success state
        setSubmittedEmail(newsletterEmail);
        
        setIsNewsletterSubmitted(true);
        
        // Clear the form inputs
        setNewsletterEmail('');
        setNewsletterName('');
        
        // Reset success message after 8 seconds to allow users to see the transformation
        setTimeout(() => {
          setIsNewsletterSubmitted(false);
          setSubmittedEmail(''); // Clear the stored email
        }, 8000);
      } else {
        // Handle specific error cases
        if (result.error === 'Email already subscribed') {
          setNewsletterError('You\'re already subscribed to our newsletter! 🎉');
        } else {
          setNewsletterError(result.error || 'Subscription failed. Please try again.');
        }
        // Clear error after 5 seconds
        setTimeout(() => setNewsletterError(''), 5000);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setNewsletterError('Network error. Please check your connection and try again.');
      // Clear error after 5 seconds
      setTimeout(() => setNewsletterError(''), 5000);
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4 sm:mb-6 transition-colors duration-300 px-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-4 sm:mb-6 transition-colors duration-300 px-4">
            Get in touch with our cybersecurity experts and discover how ByteSecAI can protect your organization
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-slate-700/60 backdrop-blur-sm text-slate-200 font-medium rounded-xl hover:bg-slate-600/60 transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg"
          >
            <span>Visit Full Contact Page</span>
            <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="space-y-8">
            {/* Newsletter Subscription - ENLARGED and with DYNAMIC COLOR TRANSFORMATION */}
            <div className="relative">
              <div 
                className={`relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border transition-all duration-1000 overflow-hidden min-h-[400px] flex flex-col justify-center ${
                  isNewsletterSubmitted 
                    ? 'border-slate-600/60 hover:border-slate-500/80' 
                    : 'border-slate-700/40 hover:border-slate-600/60'
                }`}
              >
                {isNewsletterSubmitted ? (
                  // SUCCESS STATE - GREEN CELEBRATION
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                      <i className="ri-check-line text-white text-4xl"></i>
                    </div>
                    <h3 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-6 transition-all duration-1000">
                      🎉 Successfully Subscribed!
                    </h3>
                    <p className="text-green-600 dark:text-green-300 text-xl mb-8 transition-all duration-1000">
                      Welcome to the ByteSecAI family! Check your email for confirmation.
                    </p>
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-6 border border-green-200 dark:border-green-700 mb-8">
                      <p className="text-green-700 dark:text-green-300 text-base">
                        💌 Confirmation email sent to: <span className="font-semibold">{submittedEmail}</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-green-500 dark:text-green-400">
                      <i className="ri-shield-check-line text-2xl"></i>
                      <span className="text-base">Your cybersecurity journey starts now!</span>
                    </div>
                  </div>
                ) : (
                  // NORMAL STATE - PROFESSIONAL STYLING
                  <div className="text-center py-10">
                    {/* Subtle gradient accent line */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 mx-auto mb-6"></div>
                    
                    <div className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6">
                      <i className="ri-mail-line text-slate-300 text-xl"></i>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-200 mb-4">
                      Subscribe to Our Newsletter
                    </h3>
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                      Stay updated with cybersecurity insights and solutions.
                    </p>
                    
                    <form onSubmit={handleNewsletterSubmit} className="space-y-4 mb-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={newsletterName}
                        onChange={(e) => setNewsletterName(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:border-slate-600 focus:outline-none transition-all duration-300 text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:border-slate-600 focus:outline-none transition-all duration-300 text-sm"
                      />
                      <button
                        type="submit"
                        disabled={isNewsletterSubmitting}
                        className="w-full px-6 py-3 bg-slate-700/60 backdrop-blur-sm text-slate-200 font-medium rounded-xl hover:bg-slate-600/60 transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      >
                        {isNewsletterSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 h-4 border-2 border-slate-400/30 border-t-slate-300 rounded-full animate-spin"></div>
                            <span>Subscribing...</span>
                          </div>
                        ) : (
                          <>
                            <i className="ri-send-plane-line mr-2"></i>
                            Subscribe
                          </>
                        )}
                      </button>
                    </form>
                    
                    {newsletterError && (
                      <p className="text-red-400 text-xs mb-4">{newsletterError}</p>
                    )}
                    
                    <p className="text-xs text-slate-500 mt-4">
                      No spam, unsubscribe anytime. Privacy respected.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700/40 hover:border-slate-600/60 transition-all duration-300 overflow-hidden min-h-[400px] flex flex-col">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <i className="ri-check-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 transition-colors duration-300">Message Sent Successfully!</h3>
                <p className="text-slate-300 transition-colors duration-300">Thank you for contacting ByteSecAI. Our team will get back to you within 1 hour.</p>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="text-center mb-8">
                  {/* Subtle gradient accent line */}
                  <div className="w-16 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 mx-auto mb-6"></div>
                  
                  <div className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i className="ri-message-line text-slate-300 text-xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-200 mb-4">
                    Send Us a Message
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Get in touch with our cybersecurity experts.
                  </p>
                </div>
                
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-center">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:border-slate-600 focus:outline-none transition-all duration-300 text-sm"
                      placeholder="Full Name"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:border-slate-600 focus:outline-none transition-all duration-300 text-sm"
                      placeholder="Email Address"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:border-slate-600 focus:outline-none transition-all duration-300 text-sm"
                      placeholder="Company Name (Optional)"
                    />
                  </div>

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      maxLength={500}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:border-slate-600 focus:outline-none transition-all duration-300 resize-none text-sm"
                      placeholder="Tell us about your cybersecurity needs..."
                    ></textarea>
                    <div className="text-right text-xs text-slate-500 mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-slate-700/60 backdrop-blur-sm text-slate-200 font-medium rounded-xl hover:bg-slate-600/60 transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-slate-400/30 border-t-slate-300 rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <>
                        <i className="ri-send-plane-line mr-2"></i>
                        Send Message
                      </>
                    )}
                  </button>

                  {contactError && (
                    <div className="text-center py-2 px-3 bg-red-900/20 border border-red-800/50 rounded-xl text-red-400 text-xs">
                      {contactError}
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
