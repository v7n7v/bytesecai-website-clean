import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-900">
        {/* Liquid Glass Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://api.readyy.ai/v1/image?query=Advanced%20cybersecurity%20command%20center%20with%20holographic%20displays%2C%20AI-powered%20threat%20detection%20visualization%2C%20futuristic%20security%20operations%20center%2C%20blue%20and%20cyan%20neon%20lights%2C%20no%20humans%2C%20professional%20corporate%20atmosphere')] bg-cover bg-center opacity-20"></div>
        
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
              <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-slate-600/30 group-hover:scale-105 transition-transform duration-300">
                <i className="ri-shield-star-line text-slate-300 text-xl"></i>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight tracking-tight">
                Why Choose ByteSecAI?
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Where innovation meets expertise, where passion drives protection, and where your security becomes our mission
              </p>
              
              {/* Compact Stats */}
              <div className="grid grid-cols-4 gap-4 mb-8 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">500+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">99.8%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">2M+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Blocked</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">24/7</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Monitor</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-200 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg border border-slate-600/30">
                  Start Journey
                </button>
                <button className="px-6 py-3 border border-slate-600/50 hover:border-slate-500/60 text-slate-400 hover:text-slate-300 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
                  Meet Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Vision Behind the Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every great company starts with a dream. Ours began with a cybersecurity professional's vision to democratize enterprise-grade security.
            </p>
          </div>

          {/* Professional Liquid Glass Cards */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Founder Story Card */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-10 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Professional animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px]">
                    <div className="w-full h-full bg-slate-800/40 backdrop-blur-sm rounded-2xl"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <i className="ri-user-star-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors duration-300">Alula Seyoum</h3>
                      <p className="text-cyan-400 font-semibold">Founder & CEO</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-300 group-hover:text-slate-200 leading-relaxed mb-8 transition-colors duration-300">
                    "As an aspiring cybersecurity professional, I witnessed firsthand the challenges that organizations face in protecting their digital assets. 
                    The complexity, cost, and expertise required often put enterprise-grade security out of reach for many businesses."
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/30 group-hover:bg-slate-600/50 transition-all duration-300">
                      <div className="text-2xl font-bold text-cyan-400">5+</div>
                      <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Years in Security</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/30 group-hover:bg-slate-600/50 transition-all duration-300">
                      <div className="text-2xl font-bold text-cyan-400">100%</div>
                      <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Client Focus</div>
                    </div>
                  </div>

                  {/* Professional animation indicator */}
                  <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-8 transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-center"></div>
                </div>

                {/* Subtle floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute top-8 right-12 w-1 h-1 bg-white rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-12 left-12 w-0.5 h-0.5 bg-slate-300 rounded-full transition-all duration-1000 delay-200 opacity-0 group-hover:opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Founding Principles Card */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-10 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Professional animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 p-[1px]">
                    <div className="w-full h-full bg-slate-800/40 backdrop-blur-sm rounded-2xl"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-4">
                      <i className="ri-compass-3-line text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors duration-300">Our Founding Principles</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/20 group-hover:bg-slate-600/30 transition-all duration-300">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-purple-400 text-lg"></i>
                      </div>
                      <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Democratize enterprise security</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/20 group-hover:bg-slate-600/30 transition-all duration-300">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-purple-400 text-lg"></i>
                      </div>
                      <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Innovation through AI</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/20 group-hover:bg-slate-600/30 transition-all duration-300">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-purple-400 text-lg"></i>
                      </div>
                      <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Client success first</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/20 group-hover:bg-slate-600/30 transition-all duration-300">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-purple-400 text-lg"></i>
                      </div>
                      <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Continuous learning</span>
                    </div>
                  </div>

                  {/* Professional animation indicator */}
                  <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mx-auto mt-8 transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-center"></div>
                </div>

                {/* Subtle floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute top-8 right-12 w-1 h-1 bg-white rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-12 left-12 w-0.5 h-0.5 bg-slate-300 rounded-full transition-all duration-1000 delay-200 opacity-0 group-hover:opacity-30 animate-pulse"></div>
                  <div className="absolute top-1/3 left-8 w-0.5 h-0.5 bg-purple-400 rounded-full transition-all duration-1000 delay-400 opacity-0 group-hover:opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Differentiators Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              In a world of cybersecurity giants, we bring something different: personal attention, innovative solutions, and unwavering commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Innovation Hub */}
            <div className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #06b6d4, transparent, #06b6d4)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-8 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-lightbulb-line text-white text-3xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 leading-tight">Innovation Hub</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 transition-colors duration-300 font-medium">
                    We're not just implementing security solutions; we're creating them. Our AI-powered approach combines cutting-edge technology with practical business needs.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-cyan-500"></i>
                      <span>Custom AI algorithms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-cyan-500"></i>
                      <span>Real-time threat modeling</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-cyan-500"></i>
                      <span>Predictive analytics</span>
                    </div>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-6 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </div>

            {/* Personal Touch */}
            <div className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #9333ea, transparent, #9333ea)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-8 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-heart-line text-white text-3xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 leading-tight">Personal Touch</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 transition-colors duration-300 font-medium">
                    Every client is unique, and so is our approach. We take the time to understand your business, your challenges, and your goals before crafting solutions.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-blue-500"></i>
                      <span>1-on-1 consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-blue-500"></i>
                      <span>Custom security roadmap</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-blue-500"></i>
                      <span>Dedicated support team</span>
                    </div>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-6 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </div>

            {/* Rapid Response */}
            <div className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #10b981, transparent, #10b981)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-8 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-time-line text-white text-3xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 leading-tight">Rapid Response</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 transition-colors duration-300 font-medium">
                    In cybersecurity, speed is everything. Our agile approach means we can adapt, deploy, and respond faster than traditional enterprise solutions.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-green-500"></i>
                      <span>24/7 monitoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-green-500"></i>
                      <span>Instant threat alerts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-green-500"></i>
                      <span>Automated response</span>
                    </div>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-6 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </div>

            {/* Cost Efficiency */}
            <div className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #fb923c, transparent, #fb923c)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-8 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-money-dollar-circle-line text-white text-3xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 leading-tight">Cost Efficiency</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 transition-colors duration-300 font-medium">
                    Enterprise security shouldn't break the bank. We deliver premium protection at startup-friendly prices, maximizing your security ROI.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-orange-500"></i>
                      <span>Flexible pricing tiers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-check-line text-orange-500"></i>
                      <span>No hidden costs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-orange-500"></i>
                      <span>ROI-focused solutions</span>
                    </div>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full mt-6 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </div>

            {/* Continuous Learning */}
            <div className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #9333ea, transparent, #9333ea)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-8 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-book-open-line text-white text-3xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 leading-tight">Continuous Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 transition-colors duration-300 font-medium">
                    The cybersecurity landscape evolves daily. We stay ahead of threats, trends, and technologies to keep your business protected.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-purple-500"></i>
                      <span>Threat intelligence updates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-purple-500"></i>
                      <span>Regular security training</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-purple-500"></i>
                      <span>Emerging tech adoption</span>
                    </div>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-6 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </div>

            {/* Community Focus */}
            <div className="group relative bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer hover:scale-110 overflow-hidden shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent)', filter: 'blur(1px)'}}></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #6366f1, transparent, #6366f1)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '2px'}}></div>
              <div className="p-8 relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl" style={{backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                    <i className="ri-team-line text-white text-3xl drop-shadow-lg"></i>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 leading-tight">Community Focus</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 transition-colors duration-300 font-medium">
                    We believe in building a cybersecurity community. Share knowledge, learn together, and grow stronger as a collective force against threats.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-indigo-500"></i>
                      <span>Knowledge sharing events</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-indigo-500"></i>
                      <span>Peer support networks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-indigo-500"></i>
                      <span>Collaborative learning</span>
                    </div>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mt-6 transition-all duration-700 shadow-lg" style={{filter: 'drop-shadow(0 0 8px currentColor)'}}></div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"><div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div><div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div><div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-500"></div></div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey to Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From a single cybersecurity professional's vision to a trusted partner for businesses worldwide
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>
            
            <div className="space-y-16">
              {/* Milestone 1 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
                
                <div className="w-5/12 pr-8 text-right">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border border-cyan-200 dark:border-cyan-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">The Vision</h3>
                    <p className="text-gray-600 dark:text-gray-300">A cybersecurity professional's dream to democratize enterprise security</p>
                  </div>
                </div>
                
                <div className="w-5/12 pl-8">
                  <div className="text-left">
                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">2024</div>
                    <p className="text-gray-500 dark:text-gray-400">Foundation Year</p>
                  </div>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
                
                <div className="w-5/12 pr-8 text-right">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2024</div>
                    <p className="text-gray-500 dark:text-gray-400">First Quarter</p>
                  </div>
                </div>
                
                <div className="w-5/12 pl-8">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Innovation Lab</h3>
                    <p className="text-gray-600 dark:text-gray-300">Development of AI-powered security solutions and automation tools</p>
                  </div>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
                
                <div className="w-5/12 pr-8 text-right">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border border-green-200 dark:border-green-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Client Success</h3>
                    <p className="text-gray-600 dark:text-gray-300">First successful implementations and growing client base</p>
                  </div>
                </div>
                
                <div className="w-5/12 pl-8">
                  <div className="text-left">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2024</div>
                    <p className="text-gray-500 dark:text-gray-400">Second Quarter</p>
                  </div>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
                
                <div className="w-5/12 pr-8 text-right">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">2024</div>
                    <p className="text-gray-500 dark:text-gray-400">Third Quarter</p>
                  </div>
                </div>
                
                <div className="w-5/12 pl-8">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border border-orange-200 dark:border-orange-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Expansion</h3>
                    <p className="text-gray-600 dark:text-gray-300">New service offerings and enhanced AI capabilities</p>
                  </div>
                </div>
              </div>

              {/* Future Milestone */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg animate-pulse"></div>
                
                <div className="w-5/12 pr-8 text-right">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border border-purple-200 dark:border-purple-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">The Future</h3>
                    <p className="text-gray-600 dark:text-gray-300">Becoming the leading cybersecurity partner for startups and enterprises</p>
                  </div>
                </div>
                
                <div className="w-5/12 pl-8">
                  <div className="text-left">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2025+</div>
                    <p className="text-gray-500 dark:text-gray-400">Future Vision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-16 border border-gray-200 dark:border-slate-700 shadow-2xl text-center">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the growing community of businesses that trust ByteSecAI with their cybersecurity needs. 
              Let's build a more secure future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="px-10 py-5 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60 text-xl">
                Get Started Today
              </button>
              <button className="px-10 py-5 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 hover:border-cyan-500 transition-all duration-300 text-xl font-semibold subtle-glow-cyan hover-glow-cyan">
                Schedule a Consultation
              </button>
            </div>
            
            <div className="border-t border-gray-200 dark:border-slate-700 pt-12">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Connect with us on social media</p>
              <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/alula-gebreegziabher-883150203/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300">
                  <i className="ri-reddit-fill text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300">
                  <i className="ri-discord-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
