'use client';

import { useState, useEffect } from 'react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState(''); // Store submitted email for success display
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check if user has already dismissed the modal
  useEffect(() => {
    const dismissed = localStorage.getItem('bs_news_dismissed');
    if (dismissed === '1' && isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setSubmittedEmail(email.trim()); // Store the submitted email
        // Store dismissal flag
        localStorage.setItem('bs_news_dismissed', '1');
        
        // Keep success state for 6 seconds to show the beautiful transformation
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setEmail('');
          setSubmittedEmail(''); // Clear the stored email
        }, 6000);
      } else {
        console.error('Newsletter subscription error:', result.error);
        // Handle error but don't close modal
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      // Handle error but don't close modal
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    localStorage.setItem('bs_news_dismissed', '1');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div 
        className={`relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full shadow-2xl border transition-all duration-1000 overflow-hidden ${
          isSubmitted 
            ? 'border-slate-700/40 hover:border-slate-600/60' 
            : 'border-slate-700/40 hover:border-slate-600/60'
        }`}
      >
        {isSubmitted ? (
          // SUCCESS STATE - GREEN CELEBRATION
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <i className="ri-check-line text-white text-4xl"></i>
            </div>
            <h3 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-6 transition-all duration-1000">
              🎉 Welcome to ByteSecAI!
            </h3>
            <p className="text-green-600 dark:text-green-300 text-xl mb-8 transition-all duration-1000">
              You're now part of our cybersecurity community!
            </p>
            <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-6 border border-green-200 dark:border-green-700 mb-8">
              <p className="text-green-700 dark:text-green-300 text-base">
                💌 Check your email for confirmation: <span className="font-semibold">{submittedEmail}</span>
              </p>
            </div>
            <div className="flex items-center justify-center space-x-3 text-green-500 dark:text-green-400 mb-8">
              <i className="ri-shield-check-line text-2xl"></i>
              <span className="text-base">Your cybersecurity journey starts now!</span>
            </div>
            <button
              onClick={handleClose}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              🚀 Let's Go!
            </button>
          </div>
        ) : (
          // NORMAL STATE - PROFESSIONAL STYLING
          <div className="text-center">
            {/* Subtle gradient accent line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 mx-auto mb-6"></div>
            
            <div className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-mail-line text-slate-300 text-xl"></i>
            </div>
            
            <h3 className="text-xl font-semibold text-slate-200 mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Get cybersecurity insights delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:border-slate-600 focus:outline-none transition-all duration-300 text-sm"
                placeholder="Enter your email"
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-slate-700/60 backdrop-blur-sm text-slate-200 font-medium rounded-xl hover:bg-slate-600/60 transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? (
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
            
            <button
              onClick={handleClose}
              className="mt-4 text-slate-500 hover:text-slate-400 transition-colors text-xs"
            >
              Maybe later
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
