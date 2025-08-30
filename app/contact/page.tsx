import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        {/* Liquid Glass Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230ea5e9" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
        }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Professional Hero Card */}
          <div className="group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/40 p-10 shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden max-w-4xl mx-auto">
            {/* Professional Accent */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-slate-400/60 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Compact Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-slate-600/30 group-hover:scale-105 transition-transform duration-300">
                <i className="ri-message-3-line text-slate-300 text-xl"></i>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight tracking-tight">
                Let's Connect & Secure
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your cybersecurity posture? We're here to help you succeed with expert consultation and support.
              </p>
              
              {/* Compact Contact Options */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-sm mx-auto">
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">24/7</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">Free</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Consult</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">Expert</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Team</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-200 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg border border-slate-600/30">
                  Get In Touch
                </button>
                <button className="px-6 py-3 border border-slate-600/50 hover:border-slate-500/60 text-slate-400 hover:text-slate-300 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
      {/* Additional Contact Info */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Choose the method that works best for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Direct Contact */}
            <div className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #06b6d4, transparent, #06b6d4)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-8 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-mail-line text-white text-2xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 leading-tight">Direct Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">
                    Send us a direct message for immediate assistance
                  </p>
                  <a 
                    href="mailto:info@bytesecai.com" 
                    className="inline-flex items-center text-cyan-600 dark:text-cyan-400 font-semibold hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>info@bytesecai.com</span>
                    <i className="ri-arrow-right-line ml-2 transition-transform duration-300"></i>
                  </a>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </div>

            {/* Consultation Booking */}
            <div className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #10b981, transparent, #10b981)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-8 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-calendar-check-line text-white text-2xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 leading-tight">Free Consultation</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">
                    Book a free 30-minute security assessment call
                  </p>
                  <a 
                    href="tel:9294546596" 
                    className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>Call (929) 454-6596</span>
                    <i className="ri-phone-line ml-2 transition-transform duration-300"></i>
                  </a>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-4 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </div>

            {/* Emergency Support */}
            <div className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #ef4444, transparent, #ef4444)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-8 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-shield-check-line text-white text-2xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 leading-tight">Security Emergency?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">
                    Immediate response for critical security incidents
                  </p>
                  <a 
                    href="tel:9294546596" 
                    className="inline-flex items-center text-red-600 dark:text-red-400 font-semibold hover:text-red-700 dark:hover:text-red-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>Call (929) 454-6596</span>
                    <i className="ri-phone-line ml-2 transition-transform duration-300"></i>
                  </a>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-red-500 to-pink-600 rounded-full mt-4 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Hub */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Cybersecurity Community
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay connected with the latest security insights, threat updates, and industry trends. 
              Follow us across all platforms for comprehensive cybersecurity knowledge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/alula-gebreegziabher-883150203/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700/50 hover:border-blue-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #3b82f6, transparent, #3b82f6)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-6 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-linkedin-fill text-white text-xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">LinkedIn</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                    Professional insights & networking
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span>Follow Us</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mt-3 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/bytesecai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700/50 hover:border-gray-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-gray-500/25 dark:hover:shadow-gray-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(75, 85, 99, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #4b5563, transparent, #4b5563)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-6 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-black to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-twitter-x-fill text-white text-xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-400 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-500">X (Twitter)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                    Real-time security updates
                  </p>
                  <div className="flex items-center text-black dark:text-gray-300 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span>Follow Us</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-black to-gray-800 rounded-full mt-3 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-gray-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </a>

            {/* Reddit */}
            <a 
              href="https://reddit.com/r/bytesecai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700/50 hover:border-orange-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-orange-500/25 dark:hover:shadow-orange-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #f97316, transparent, #f97316)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-6 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-reddit-fill text-white text-xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-500">Reddit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                    Community discussions & Q&A
                  </p>
                  <div className="flex items-center text-orange-600 dark:text-orange-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span>Join Community</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-3 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-orange-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </a>

            {/* Bluesky */}
            <a 
              href="https://bsky.app/profile/bytesecai.bsky.social" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700/50 hover:border-sky-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #0ea5e9, transparent, #0ea5e9)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-6 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-cloud-line text-white text-xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500">Bluesky</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                    Decentralized social platform
                  </p>
                  <div className="flex items-center text-sky-600 dark:text-sky-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span>Follow Us</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mt-3 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-sky-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </a>
          </div>
        </div>
      </section>



      {/* Contact Stats */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Support Available
              </div>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                &lt; 1hr
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Response Time
              </div>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Satisfaction
              </div>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                Free
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Consultation
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
