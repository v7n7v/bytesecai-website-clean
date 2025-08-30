import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-900">
        {/* Liquid Glass Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://api.readyy.ai/v1/image?query=AI-powered%20cybersecurity%20dashboard%20with%20real-time%20threat%20monitoring%2C%20futuristic%20security%20operations%20center%2C%20blue%20and%20cyan%20neon%20lights%2C%20professional%20corporate%20atmosphere%2C%20no%20humans')] bg-cover bg-center opacity-20"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Professional Hero Card */}
          <div className="group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/40 p-10 shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden max-w-4xl mx-auto">
            {/* Professional Accent */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-slate-400/60 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Compact Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg border border-slate-600/30 group-hover:scale-105 transition-transform duration-300">
                <i className="ri-tools-line text-slate-300 text-3xl"></i>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight tracking-tight">
                Coming Soon
              </h1>
              
              <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                We're working hard to bring you the most advanced cybersecurity platform. Our team is putting the finishing touches on something amazing.
              </p>
              
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <p className="text-slate-500 text-sm">Development in Progress</p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="px-8 py-4 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60 inline-flex items-center justify-center"
                >
                  <i className="ri-home-line mr-2"></i>
                  Back to Home
                </Link>
                <button className="px-8 py-4 border border-slate-600/50 hover:border-slate-500/60 text-slate-400 hover:text-slate-300 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
                  Get Notified
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What We're Building
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A revolutionary cybersecurity platform that combines AI, automation, and human expertise to protect your digital assets.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered Security */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-brain-line text-cyan-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    AI-Powered Security
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    Machine learning algorithms that continuously learn and adapt to new threats, providing proactive protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Zero-Trust Architecture */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-shield-keyhole-line text-blue-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    Zero-Trust Architecture
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    Comprehensive security model that verifies every user, device, and connection before granting access.
                  </p>
                </div>
              </div>
            </div>

            {/* Real-Time Monitoring */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-eye-line text-emerald-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    Real-Time Monitoring
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    24/7 surveillance of your network with instant threat detection and automated response capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Automated Response */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-robot-line text-orange-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    Automated Response
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    Intelligent automation that responds to threats in milliseconds, reducing response time by 90%.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance & Reporting */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-rose-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-file-chart-line text-pink-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    Compliance & Reporting
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    Built-in compliance tools and comprehensive reporting for regulatory requirements and audits.
                  </p>
                </div>
              </div>
            </div>

            {/* Expert Support */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-customer-service-line text-indigo-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    Expert Support
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    24/7 access to cybersecurity experts for setup, training, and ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Development Progress
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-700/60 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-600/30">
                <i className="ri-check-line text-green-400 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Core Platform</h3>
              <p className="text-slate-400 text-sm">100% Complete</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-700/60 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-600/30">
                <i className="ri-settings-3-line text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">AI Integration</h3>
              <p className="text-slate-400 text-sm">85% Complete</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-700/60 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-600/30">
                <i className="ri-rocket-line text-cyan-400 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Launch Ready</h3>
              <p className="text-slate-400 text-sm">95% Complete</p>
            </div>
          </div>
          
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/40">
            <p className="text-slate-300 mb-4">
              We're in the final stages of development and testing. Our platform will be ready for launch very soon!
            </p>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be the First to Know
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Get notified when our platform launches and be among the first to experience the future of cybersecurity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/"
              className="px-10 py-5 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60 text-lg inline-flex items-center justify-center"
            >
              <i className="ri-home-line mr-2"></i>
              Back to Home
            </Link>
            <button className="px-10 py-5 border border-slate-600/50 hover:border-slate-500/60 text-slate-400 hover:text-slate-300 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm text-lg">
              Get Notified
            </button>
          </div>
          
          <p className="text-sm text-slate-500">
            Follow us for updates • Join our waitlist • Early access available
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
