'use client';

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 transition-colors duration-300">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Don&apos;t wait for a security breach to happen. Our experts are ready to assess your current security posture and recommend the best solutions for your organization.
          </p>
        </div>
        
        {/* Service Features - Non-card inline items (mirrors home section minimal style) */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {/* Free Consultation */}
          <div className="group flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
              <i className="ri-phone-line text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">Free Consultation</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors mt-1">Get expert advice tailored to your business needs</p>
            </div>
          </div>

          {/* Quick Assessment */}
          <div className="group flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
              <i className="ri-shield-check-line text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">Quick Assessment</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors mt-1">Rapid evaluation of your security vulnerabilities</p>
            </div>
          </div>

          {/* Fast Deployment */}
          <div className="group flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
              <i className="ri-rocket-line text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">Fast Deployment</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors mt-1">Get protected within 24-48 hours</p>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60 whitespace-nowrap cursor-pointer text-lg">
            Schedule Free Consultation
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 whitespace-nowrap cursor-pointer text-lg font-semibold hover:scale-105">
            Get Instant Quote
          </button>
        </div>
        
        {/* Contact Information - Following Home Section Liquid Glass Design */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {/* Phone Contact */}
          <div className="group relative">
            <div className="relative bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600/20 hover:border-slate-500/40 transition-all duration-500 ease-out hover:transform hover:scale-[1.02] hover:shadow-xl shadow-lg overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center space-x-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                <i className="ri-phone-line w-5 h-5"></i>
                <span className="font-medium">(929) 454-6596</span>
              </div>
              
              {/* Professional animation indicator */}
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-3 transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-center"></div>
            </div>
          </div>
          
          {/* Email Contact */}
          <div className="group relative">
            <div className="relative bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600/20 hover:border-slate-500/40 transition-all duration-500 ease-out hover:transform hover:scale-[1.02] hover:shadow-xl shadow-lg overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center space-x-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                <i className="ri-mail-line w-5 h-5"></i>
                <span className="font-medium">info@bytesecai.com</span>
              </div>
              
              {/* Professional animation indicator */}
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mx-auto mt-3 transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-center"></div>
            </div>
          </div>
          
          {/* Support Contact */}
          <div className="group relative">
            <div className="relative bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600/20 hover:border-slate-500/40 transition-all duration-500 ease-out hover:transform hover:scale-[1.02] hover:shadow-xl shadow-lg overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center space-x-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                <i className="ri-time-line w-5 h-5"></i>
                <span className="font-medium">24/7 Emergency Support</span>
              </div>
              
              {/* Professional animation indicator */}
              <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mt-3 transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

