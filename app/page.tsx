'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CoreCapabilities from '../components/CoreCapabilities';
import AboutSection from '../components/AboutSection';
import FoundingPrinciples from '../components/FoundingPrinciples';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

import ChatInterface from '../components/ChatInterface';
import NewsletterModal from '../components/NewsletterModal';

export default function Home() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  // Show newsletter modal after 5 seconds, but only if user hasn't dismissed it before
  useEffect(() => {
    const dismissed = localStorage.getItem('bs_news_dismissed');
    if (dismissed !== '1') {
      const timer = setTimeout(() => {
        setShowNewsletterModal(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChatMessage = (message: string) => {
    // Webhook integration point - replace with your actual webhook URL
    console.log('Chat message sent:', message);
    
    // Example webhook call (uncomment and modify as needed):
    // fetch('YOUR_WEBHOOK_URL_HERE', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message, timestamp: new Date().toISOString() })
    // });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <CoreCapabilities />
        <AboutSection />
        <FoundingPrinciples />
        <ServicesSection />
        <WhyChooseSection />
        <ContactSection />
        <Footer />
      </div>
      
      {/* Chat Interface */}
      <ChatInterface 
        onSendMessage={handleChatMessage}
        webhookUrl="https://eokgok9tk0dhuxq.m.pipedream.net"
      />

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={showNewsletterModal}
        onClose={() => setShowNewsletterModal(false)}
      />
    </div>
  );
}