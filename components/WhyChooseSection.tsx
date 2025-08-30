
'use client';

import Link from 'next/link';

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Why Choose ByteSecai?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Join us on our mission to revolutionize cybersecurity with AI-powered innovation
          </p>
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60 text-lg group"
            >
              <span>Get In Touch</span>
              <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
            </Link>
          </div>
        </div>

        {/* Magical Liquid Glass Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Startup Agility Card */}
          <div className="group relative" style={{ animationDelay: '0ms' }}>
            <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.02] hover:shadow-2xl shadow-lg overflow-hidden h-full flex flex-col">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Professional animated border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px]">
                  <div className="w-full h-full bg-slate-800/40 backdrop-blur-sm rounded-2xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Professional Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-rocket-line text-white text-xl"></i>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                  Startup Agility
                </h3>

                {/* Description */}
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mb-6 leading-relaxed flex-1">
                  Our lean, agile team moves fast to implement cutting-edge solutions and respond to emerging threats in real-time.
                </p>

                {/* Professional animation indicator */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-left"></div>
              </div>

              {/* Subtle floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute top-6 right-8 w-1 h-1 bg-white rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-0.5 h-0.5 bg-slate-300 rounded-full transition-all duration-1000 delay-200 opacity-0 group-hover:opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* AI-First Innovation Card */}
          <div className="group relative" style={{ animationDelay: '100ms' }}>
            <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.02] hover:shadow-2xl shadow-lg overflow-hidden h-full flex flex-col">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Professional animated border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 p-[1px]">
                  <div className="w-full h-full bg-slate-800/40 backdrop-blur-sm rounded-2xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Professional Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-brain-line text-white text-xl"></i>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                  AI-First Innovation
                </h3>

                {/* Description */}
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mb-6 leading-relaxed flex-1">
                  Built from the ground up with artificial intelligence at its core, not as an afterthought or add-on feature.
                </p>

                {/* Professional animation indicator */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-left"></div>
              </div>

              {/* Subtle floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute top-6 right-8 w-1 h-1 bg-white rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-0.5 h-0.5 bg-slate-300 rounded-full transition-all duration-1000 delay-200 opacity-0 group-hover:opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Customer-Centric Card */}
          <div className="group relative" style={{ animationDelay: '200ms' }}>
            <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.02] hover:shadow-2xl shadow-lg overflow-hidden h-full flex flex-col">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Professional animated border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 p-[1px]">
                  <div className="w-full h-full bg-slate-800/40 backdrop-blur-sm rounded-2xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Professional Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-r from-pink-500 to-rose-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-user-heart-line text-white text-xl"></i>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                  Customer-Centric
                </h3>

                {/* Description */}
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mb-6 leading-relaxed flex-1">
                  Every feature and decision is driven by real customer feedback and evolving cybersecurity needs.
                </p>

                {/* Professional animation indicator */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-left"></div>
              </div>

              {/* Subtle floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute top-6 right-8 w-1 h-1 bg-white rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-0.5 h-0.5 bg-slate-300 rounded-full transition-all duration-1000 delay-200 opacity-0 group-hover:opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Future-Ready Technology Card */}
          <div className="group relative" style={{ animationDelay: '300ms' }}>
            <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.02] hover:shadow-2xl shadow-lg overflow-hidden h-full flex flex-col">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Professional animated border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 p-[1px]">
                  <div className="w-full h-full bg-slate-800/40 backdrop-blur-sm rounded-2xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Professional Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-shield-star-line text-white text-xl"></i>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                  Future-Ready Technology
                </h3>

                {/* Description */}
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mb-6 leading-relaxed flex-1">
                  Investing in tomorrow&apos;s security challenges today, ensuring you&apos;re always one step ahead of cyber threats.
                </p>

                {/* Professional animation indicator */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-left"></div>
              </div>

              {/* Subtle floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute top-6 right-8 w-1 h-1 bg-white rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-0.5 h-0.5 bg-slate-300 rounded-full transition-all duration-1000 delay-200 opacity-0 group-hover:opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Free Consultation Section - No Card */}
        <div className="max-w-6xl mx-auto mt-24">
          {/* Background Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-600/5 to-purple-600/5 rounded-3xl blur-3xl animate-pulse"></div>
          
          <div className="relative text-center space-y-12">
            {/* Professional Icon */}
            <div className="flex items-center justify-center space-x-6 mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-cyan-500/30 shadow-lg group hover:scale-110 transition-transform duration-300">
                <i className="ri-customer-service-line text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"></i>
              </div>
              <div className="h-0.5 w-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-50"></div>
              <h3 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
                Why Choose Our Free Consultation?
              </h3>
              <div className="h-0.5 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-50"></div>
            </div>

            {/* Elegant Benefits List */}
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-search-line text-cyan-400 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors duration-300">Comprehensive Security Assessment</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Deep analysis of your current security posture and vulnerabilities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-user-settings-line text-blue-400 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors duration-300">Personalized Recommendations</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Tailored security strategies designed specifically for your organization.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-shield-check-line text-purple-400 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors duration-300">No Obligation or Hidden Costs</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Completely free consultation with transparent, honest advice.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-lightbulb-line text-emerald-400 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors duration-300">Expert Cybersecurity Insights</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Industry-leading expertise from AI-powered security professionals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-road-map-line text-orange-400 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors duration-300">Custom Security Roadmap</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Step-by-step implementation plan tailored to your needs and budget.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-rose-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-vip-crown-line text-pink-400 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors duration-300">Priority Support Access</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Fast-track access to our team when you need immediate assistance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-12 border-t border-slate-700/30 mt-16">
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get expert guidance on protecting your digital assets with our AI-powered security solutions
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60 text-lg group"
              >
                <span>Schedule Free Consultation</span>
                <i className="ri-arrow-right-line text-xl transition-transform duration-300 group-hover:translate-x-1"></i>
              </Link>
            </div>

            {/* Subtle floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-8 right-16 w-1 h-1 bg-white rounded-full transition-all duration-1000 opacity-40 animate-pulse"></div>
              <div className="absolute bottom-16 left-16 w-0.5 h-0.5 bg-slate-300 rounded-full transition-all duration-1000 delay-200 opacity-30 animate-pulse"></div>
              <div className="absolute top-1/3 left-12 w-0.5 h-0.5 bg-cyan-400 rounded-full transition-all duration-1000 delay-400 opacity-30 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-12 w-1 h-1 bg-blue-400 rounded-full transition-all duration-1000 delay-600 opacity-25 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
