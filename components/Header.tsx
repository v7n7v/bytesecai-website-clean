'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showGetStartedDropdown, setShowGetStartedDropdown] = useState(false);
  const searchDropdownRef = useRef<HTMLDivElement>(null);
  const getStartedDropdownRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const getStartedTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchDropdownMouseEnter = () => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
      searchTimeoutRef.current = null;
    }
    setShowSearchDropdown(true);
  };

  const handleSearchDropdownMouseLeave = () => {
    searchTimeoutRef.current = setTimeout(() => {
      setShowSearchDropdown(false);
    }, 800); // 800ms delay before hiding
  };

  const handleGetStartedDropdownMouseEnter = () => {
    if (getStartedTimeoutRef.current) {
      clearTimeout(getStartedTimeoutRef.current);
      getStartedTimeoutRef.current = null;
    }
    setShowGetStartedDropdown(true);
  };

  const handleGetStartedDropdownMouseLeave = () => {
    getStartedTimeoutRef.current = setTimeout(() => {
      setShowGetStartedDropdown(false);
    }, 800); // 800ms delay before hiding
  };

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl shadow-slate-900/20' 
        : 'bg-transparent'
    }`}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Morphing Blob */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-xl animate-pulse opacity-60 hero-morph"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-80 hero-float"></div>
        <div className="absolute top-8 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-60 hero-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-6 left-1/2 w-4 h-4 bg-purple-400 rounded-full opacity-70 hero-float" style={{animationDelay: '2s'}}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-2 right-1/4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-40 hero-pulse-glow"></div>
        <div className="absolute top-12 left-1/3 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-50 hero-pulse-glow" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo Section with Enhanced Effects */}
          <Link href="/" className="flex items-center space-x-3 group relative">
            {/* Glowing Background for Logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-125"></div>
            
            {/* Logo Container with Liquid Glass Effect */}
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
              <img 
                src="https://static.readdy.ai/image/6e1ff6b59c27db2948859c378f70deb3/4efe4c048c260ea7b9655b0997a51784.jfif" 
                alt="ByteSecAI Logo" 
                className="w-full h-full object-cover"
              />
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hero-shimmer"></div>
            </div>
            
            {/* Company Name with Neon Effect */}
            <div className="relative">
              <span className="font-pacifico text-2xl text-white group-hover:text-cyan-300 transition-colors duration-500 hero-neon-pulse">
                ByteSecAI
              </span>
              {/* Text Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></div>
            </div>
          </Link>

          {/* Navigation with Liquid Glass Cards */}
          <nav className="hidden lg:flex items-center space-x-2">
            {[
              { href: '/', label: 'Home', icon: 'ri-home-4-line' },
              { href: '/services', label: 'Services', icon: 'ri-shield-check-line' },
              { href: '/why-choose-us', label: 'Why Choose Us', icon: 'ri-star-line' },
              { href: '/contact', label: 'Contact', icon: 'ri-message-3-line' }
            ].map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="group relative px-3 py-2 rounded-xl transition-all duration-500 hover:scale-105"
              >
                {/* Liquid Glass Background */}
                <div className="absolute inset-0 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-cyan-400/50 group-hover:bg-slate-800/50"></div>
                
                {/* Content */}
                <div className="relative flex items-center space-x-2 text-slate-300 group-hover:text-cyan-300 transition-colors duration-500">
                  <i className={`${item.icon} text-base`}></i>
                  <span className="font-semibold text-sm whitespace-nowrap">{item.label}</span>
                </div>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500 group-hover:w-full origin-center transform -translate-x-1/2"></div>
              </Link>
            ))}
          </nav>

          {/* Right Section with Enhanced CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* About Link with Floating Effect */}
            <Link 
              href="#about" 
              className="group relative px-3 py-2 rounded-xl transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-purple-400/50 group-hover:bg-slate-800/50"></div>
              <div className="relative flex items-center space-x-2 text-slate-300 group-hover:text-purple-300 transition-colors duration-500">
                <i className="ri-user-star-line text-base"></i>
                <span className="font-semibold text-sm whitespace-nowrap">About</span>
              </div>
              <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-500 group-hover:w-full origin-center transform -translate-x-1/2"></div>
            </Link>

            {/* Search Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleSearchDropdownMouseEnter}
              onMouseLeave={handleSearchDropdownMouseLeave}
            >
              {/* Search Trigger Button */}
              <button className="group relative px-3 py-2 rounded-xl transition-all duration-500 hover:scale-105">
                {/* Liquid Glass Background */}
                <div className="absolute inset-0 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-emerald-400/50 group-hover:bg-slate-800/50"></div>
                
                {/* Content */}
                <div className="relative flex items-center space-x-2 text-slate-300 group-hover:text-emerald-300 transition-colors duration-500">
                  <i className="ri-search-line text-base"></i>
                  <span className="font-semibold text-sm whitespace-nowrap">Search</span>
                  <i className="ri-arrow-down-s-line text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                </div>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-500 group-hover:w-full origin-center transform -translate-x-1/2"></div>
              </button>

              {/* Search Dropdown Card */}
              <div 
                ref={searchDropdownRef}
                className={`absolute top-full right-0 mt-3 w-80 transition-all duration-700 ease-out transform ${
                  showSearchDropdown 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                }`}
              >
                {/* Dropdown Background with Liquid Glass Effect */}
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-slate-900/50 overflow-hidden">
                  {/* Floating Elements Inside Dropdown */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-teal-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content Container */}
                  <div className="relative z-10 p-6">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">Search ByteSecAI</h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Search Input */}
                    <div className="relative mb-6">
                      <input 
                        type="text" 
                        placeholder="Search services, features, or help..."
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                      />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <i className="ri-search-line text-white text-sm"></i>
                      </button>
                    </div>
                    
                    {/* Footer */}
                    <div className="text-center">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-4"></div>
                      <p className="text-xs text-slate-400">Press Ctrl+K for quick search</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Get Started Button with Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleGetStartedDropdownMouseEnter}
              onMouseLeave={handleGetStartedDropdownMouseLeave}
            >
              <button 
                onClick={handleGetStarted}
                className="group relative px-6 py-3 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500 hero-gradient-shift"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Button Content */}
                <div className="relative flex items-center space-x-2 text-white font-bold text-sm whitespace-nowrap">
                  <i className="ri-rocket-line text-base group-hover:animate-bounce"></i>
                  <span>Get Started</span>
                  <i className="ri-arrow-down-s-line text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                </div>
                
                {/* Glowing Border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 blur-sm"></div>
                </div>
              </button>

              {/* Get Started Dropdown Card */}
              <div 
                ref={getStartedDropdownRef}
                className={`absolute top-full right-0 mt-3 w-64 transition-all duration-700 ease-out transform ${
                  showGetStartedDropdown 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                }`}
              >
                {/* Dropdown Background with Liquid Glass Effect */}
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-slate-900/50 overflow-hidden">
                  {/* Floating Elements Inside Dropdown */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content Container */}
                  <div className="relative z-10 p-6">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">Get Started</h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-3">
                      <Link
                        href="/free-trial"
                        className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <i className="ri-gift-line text-white text-lg"></i>
                        </div>
                        <div>
                          <p className="text-white font-semibold group-hover:text-emerald-300 transition-colors duration-300">Free Trial</p>
                          <p className="text-slate-400 text-sm">Start your cybersecurity journey</p>
                        </div>
                      </Link>

                      <Link
                        href="/coming-soon"
                        className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <i className="ri-user-add-line text-white text-lg"></i>
                        </div>
                        <div>
                          <p className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">Create Account</p>
                          <p className="text-slate-400 text-sm">Join ByteSecAI community</p>
                        </div>
                      </Link>

                      <Link
                        href="/coming-soon"
                        className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <i className="ri-price-tag-3-line text-white text-lg"></i>
                        </div>
                        <div>
                          <p className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">Pricing</p>
                          <p className="text-slate-400 text-sm">View our plans</p>
                        </div>
                      </Link>

                      <Link
                        href="/coming-soon"
                        className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <i className="ri-handshake-line text-white text-lg"></i>
                        </div>
                        <div>
                          <p className="text-white font-semibold group-hover:text-orange-300 transition-colors duration-300">Partner Login</p>
                          <p className="text-slate-400 text-sm">Access partner portal</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button with Enhanced Effects */}
          <button 
            className="lg:hidden relative group p-3 rounded-xl transition-all duration-500 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Liquid Glass Background */}
            <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-cyan-400/50"></div>
            
            {/* Icon */}
            <div className="relative text-white transition-colors duration-300 group-hover:text-cyan-300">
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 transition-all duration-500 animate-fadeIn">
            {/* Mobile Menu Background */}
            <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 shadow-2xl shadow-slate-900/50">
              {/* Floating Elements in Mobile Menu */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              
              <div className="flex flex-col space-y-5">
                {[
                  { href: '/', label: 'Home', icon: 'ri-home-4-line' },
                  { href: '/services', label: 'Services', icon: 'ri-shield-check-line' },
                  { href: '/why-choose-us', label: 'Why Choose Us', icon: 'ri-star-line' },
                  { href: '/contact', label: 'Contact', icon: 'ri-message-3-line' },
                  { href: '#about', label: 'About', icon: 'ri-user-star-line' }
                ].map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="group flex items-center space-x-4 px-5 py-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className={`${item.icon} text-xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300`}></i>
                    <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-semibold">{item.label}</span>
                  </Link>
                ))}
                
                {/* Mobile Get Started Button */}
                <button 
                  onClick={() => {
                    handleGetStarted();
                    setIsMenuOpen(false);
                  }}
                  className="group relative w-full px-8 py-4 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <i className="ri-rocket-line text-xl group-hover:animate-bounce"></i>
                    <span>Get Started</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}