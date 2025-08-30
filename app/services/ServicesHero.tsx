
'use client';

export default function ServicesHero() {
  return (
    <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden">
      {/* Liquid Glass Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Comprehensive%20cybersecurity%20services%20dashboard%20with%20multiple%20security%20solutions%20displayed%2C%20AI-powered%20threat%20detection%20interface%2C%20security%20automation%20workflows%2C%20risk%20assessment%20tools%2C%20data%20protection%20platform%2C%20security%20integration%20ecosystem%2C%20modern%20security%20operations%20center%2C%20no%20humans%2C%20professional%20corporate%20atmosphere%2C%20blue%20and%20cyan%20color%20scheme&width=1200&height=600&seq=services-hero-comprehensive&orientation=landscape')`
        }}
      ></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-32 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Liquid Glass Hero Card */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/40 p-10 shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden">
            {/* Professional Accent */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-slate-400/60 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Compact Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-slate-600/30 group-hover:scale-105 transition-transform duration-300">
                <i className="ri-service-line text-slate-300 text-xl"></i>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight tracking-tight">
                Our Services
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                Comprehensive AI-powered cybersecurity solutions designed to protect your business from evolving digital threats
              </p>
              
              {/* Compact Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8 max-w-sm mx-auto">
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">6</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">24/7</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">AI</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Powered</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-200 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg border border-slate-600/30">
                  Explore Services
                </button>
                <button className="px-6 py-3 border border-slate-600/50 hover:border-slate-500/60 text-slate-400 hover:text-slate-300 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
