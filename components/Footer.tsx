'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-indigo-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Company Info - Professional Liquid Glass Card */}
          <div className="lg:col-span-1 group relative">
            <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-xl shadow-lg overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Professional animated border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/50 to-blue-600/50 p-[1px]">
                  <div className="w-full h-full bg-slate-800/30 backdrop-blur-sm rounded-2xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <Link href="/" className="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://static.readdy.ai/image/6e1ff6b59c27db2948859c378f70deb3/4efe4c048c260ea7b9655b0997a51784.jfif" 
                      alt="ByteSecAI Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-pacifico text-2xl text-slate-100 group-hover:text-white transition-colors duration-300">ByteSecAI</span>
                </Link>
                
                <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors duration-300">
                  Pioneering the future of cybersecurity through artificial intelligence. Protecting your digital assets with cutting-edge AI-powered solutions.
                </p>
                
                <div className="flex space-x-3">
                  <a href="https://www.linkedin.com/in/alula-seyoum" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 border border-slate-600/30">
                    <i className="ri-linkedin-line text-lg"></i>
                  </a>
                  <a href="https://x.com/ByteSecAi1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 border border-slate-600/30">
                    <i className="ri-twitter-x-line text-lg"></i>
                  </a>
                  <a href="https://bsky.app/profile/bytesecai.bsky.social" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 border border-slate-600/30">
                    <i className="ri-bluesky-line text-lg"></i>
                  </a>
                  <a href="https://www.reddit.com/user/ByteSecAi/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 border border-slate-600/30">
                    <i className="ri-reddit-line text-lg"></i>
                  </a>
                </div>

                {/* Professional animation indicator */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-left"></div>
              </div>
            </div>
          </div>

          {/* Quick Links - Professional Liquid Glass Card */}
          <div className="group relative">
            <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-xl shadow-lg overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Professional animated border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/50 to-purple-600/50 p-[1px]">
                  <div className="w-full h-full bg-slate-800/30 backdrop-blur-sm rounded-2xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <i className="ri-links-line text-white text-sm"></i>
                  </div>
                  <h3 className="text-slate-100 group-hover:text-white font-bold text-lg transition-colors duration-300">Quick Links</h3>
                </div>
                
                <div className="space-y-3">
                  <Link href="/" className="flex items-center space-x-3 p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-all duration-300 group/link">
                    <i className="ri-home-line text-sm group-hover/link:scale-110 transition-transform duration-300"></i>
                    <span>Home</span>
                  </Link>
                  <Link href="/about" className="flex items-center space-x-3 p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-all duration-300 group/link">
                    <i className="ri-information-line text-sm group-hover/link:scale-110 transition-transform duration-300"></i>
                    <span>About</span>
                  </Link>
                  <Link href="/services" className="flex items-center space-x-3 p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-all duration-300 group/link">
                    <i className="ri-service-line text-sm group-hover/link:scale-110 transition-transform duration-300"></i>
                    <span>Services</span>
                  </Link>
                  <Link href="/contact" className="flex items-center space-x-3 p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-all duration-300 group/link">
                    <i className="ri-mail-line text-sm group-hover/link:scale-110 transition-transform duration-300"></i>
                    <span>Contact</span>
                  </Link>
                  <Link href="/unsubscribe" className="flex items-center space-x-3 p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-all duration-300 group/link">
                    <i className="ri-uninstall-line text-sm group-hover/link:scale-110 transition-transform duration-300"></i>
                    <span>Unsubscribe</span>
                  </Link>
                </div>

                {/* Professional animation indicator */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-left"></div>
              </div>
            </div>
          </div>

          {/* Contact - Professional Liquid Glass Card */}
          <div className="group relative">
            <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-xl shadow-lg overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Professional animated border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/50 to-indigo-600/50 p-[1px]">
                  <div className="w-full h-full bg-slate-800/30 backdrop-blur-sm rounded-2xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <i className="ri-customer-service-2-line text-white text-sm"></i>
                  </div>
                  <h3 className="text-slate-100 group-hover:text-white font-bold text-lg transition-colors duration-300">Contact</h3>
                </div>
                
                <div className="space-y-3">
                  <a href="mailto:info@bytesecai.com" className="flex items-center space-x-3 p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-all duration-300 group/link">
                    <i className="ri-mail-line text-sm group-hover/link:scale-110 transition-transform duration-300"></i>
                    <span>info@bytesecai.com</span>
                  </a>
                  <a href="tel:9294546596" className="flex items-center space-x-3 p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-all duration-300 group/link">
                    <i className="ri-phone-line text-sm group-hover/link:scale-110 transition-transform duration-300"></i>
                    <span>(929) 454-6596</span>
                  </a>
                  <a href="https://www.linkedin.com/in/alula-gebreegziabher-883150203/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-all duration-300 group/link">
                    <i className="ri-linkedin-line text-sm group-hover/link:scale-110 transition-transform duration-300"></i>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

                {/* Professional animation indicator */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-left"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Professional Liquid Glass */}
        <div className="group relative">
          <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 ease-out hover:shadow-lg shadow-md overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-slate-400 group-hover:text-slate-300 text-sm font-medium transition-colors duration-300">
                  © 2025 ByteSecAI. All rights reserved.
                </div>
                <div className="text-slate-400 group-hover:text-slate-300 text-sm font-medium transition-colors duration-300">
                  Founded by Alula Seyoum
                </div>
              </div>
              <div className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed transition-colors duration-300">
                ByteSecAI provides cybersecurity consulting and AI-powered security solutions. This website and our services are designed to help organizations improve their security posture. Individual results may vary based on implementation and adherence to recommended security practices.
              </div>

              {/* Professional animation indicator */}
              <div className="w-32 h-0.5 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full mx-auto transform transition-all duration-500 opacity-30 group-hover:opacity-60 group-hover:w-full origin-center"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}