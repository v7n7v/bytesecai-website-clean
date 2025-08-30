
'use client';

import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content - No Card, Pure Elegance */}
          <div className="space-y-10">
            <div className="space-y-8">
              {/* Professional Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-full text-cyan-400 text-sm font-medium shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-user-star-line text-white text-sm"></i>
                </div>
                About Our Mission
              </div>

              {/* Main Heading */}
              <h2 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight">
                Pioneering the Future of{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
                    AI Security
                  </span>
                  {/* Subtle underline animation */}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full transform scale-x-0 animate-pulse origin-left"></div>
                </span>
              </h2>

              {/* Mission Statement */}
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                At ByteSecAI, we believe that the future of cybersecurity lies in the intelligent fusion of artificial intelligence and advanced security protocols. Our mission is to create an{' '}
                <span className="text-cyan-400 font-semibold">impenetrable digital fortress</span> for businesses worldwide.
              </p>
            </div>

            {/* Core Values - Elegant List */}
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-lightbulb-line text-cyan-400 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-100 font-bold text-xl mb-3 group-hover:text-cyan-400 transition-colors duration-300">Innovation-Driven Excellence</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">Constantly evolving our AI algorithms to stay ahead of emerging cyber threats and attack vectors, ensuring our clients always have cutting-edge protection.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-shield-check-line text-blue-400 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-100 font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors duration-300">Uncompromising Trust & Security</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">Building unbreakable trust through transparent processes, industry-leading security standards, and complete accountability to our clients.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-eye-line text-purple-400 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-100 font-bold text-xl mb-3 group-hover:text-purple-400 transition-colors duration-300">Visionary Leadership</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">Led by experts who understand both the technical complexities and business implications of cybersecurity in the AI era.</p>
                </div>
              </div>
            </div>

            {/* Professional CTA */}
            <div className="pt-8">
              <a href="#contact" className="inline-flex items-center px-8 py-4 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60">
                <span>Discover Our Vision</span>
                <i className="ri-arrow-right-line ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
            </div>
          </div>

          {/* Right Visual - Professional without card */}
          <div className="relative">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl animate-pulse"></div>
            
            {/* Main Visual Container */}
            <div className="relative">
              {/* Founder Profile - Elevated Design */}
              <div className="text-center space-y-8 relative z-10">
                <div className="relative inline-block group">
                  {/* Profile Image with Professional Glow */}
                  <div className="relative">
                    <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 mx-auto flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <i className="ri-user-line text-white text-6xl"></i>
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl border-4 border-slate-900 flex items-center justify-center shadow-lg">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    {/* Floating Particles */}
                    <div className="absolute -top-4 -left-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
                    <div className="absolute -bottom-4 -right-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40 delay-500"></div>
                  </div>
                </div>

                {/* Professional Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-100 mb-2">Alula Seyoum</h3>
                    <p className="text-cyan-400 font-semibold text-lg mb-6">Founder & CEO</p>
                  </div>

                  {/* Vision Quote */}
                  <div className="relative">
                    <div className="absolute -left-6 -top-2 text-cyan-400/30 text-6xl">"</div>
                    <blockquote className="text-lg text-slate-300 leading-relaxed italic max-w-md mx-auto relative z-10">
                      Our vision is to democratize enterprise-level cybersecurity through AI, making advanced protection accessible to organizations of all sizes.
                    </blockquote>
                    <div className="absolute -right-6 -bottom-2 text-cyan-400/30 text-6xl">"</div>
                  </div>

                  {/* Professional Connection */}
                  <div className="pt-4">
                    <a 
                      href="https://www.linkedin.com/in/alula-gebreegziabher-883150203/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0077B5] to-[#004471] hover:from-[#005885] hover:to-[#003351] text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg font-medium"
                    >
                      <i className="ri-linkedin-fill text-xl"></i>
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full border border-cyan-500/20 animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-purple-500/10 to-indigo-600/10 rounded-full border border-purple-500/20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}