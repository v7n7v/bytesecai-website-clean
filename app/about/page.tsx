'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 transition-colors duration-300">
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          {/* Floating gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-full text-cyan-400 text-sm font-medium shadow-lg mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                <i className="ri-building-line text-white text-sm"></i>
              </div>
              About ByteSecAI
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-slate-100 leading-tight mb-8">
              Redefining{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Cybersecurity
              </span>{' '}
              Through AI
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-12">
              We are a cutting-edge cybersecurity startup dedicated to democratizing enterprise-level protection through artificial intelligence. Our mission is to make advanced security accessible to organizations of all sizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#our-story" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg font-semibold">
                <span>Our Story</span>
                <i className="ri-arrow-down-line ml-3 text-lg"></i>
              </a>
              <a href="#contact" className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-2xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 font-semibold">
                <span>Get In Touch</span>
                <i className="ri-arrow-right-line ml-3 text-lg"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
                    Our Journey to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                      Innovation
                    </span>
                  </h2>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Founded with a vision to bridge the gap between advanced cybersecurity and accessibility, ByteSecAI emerged from the recognition that small and medium businesses deserve the same level of protection as large enterprises.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                      <i className="ri-lightbulb-line text-cyan-400 text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-slate-100 font-bold text-lg mb-2">The Problem We Saw</h3>
                      <p className="text-slate-400 leading-relaxed">Traditional cybersecurity solutions were complex, expensive, and required specialized expertise that many organizations couldn&apos;t afford.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <i className="ri-rocket-line text-blue-400 text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-slate-100 font-bold text-lg mb-2">Our Solution</h3>
                      <p className="text-slate-400 leading-relaxed">We harness the power of artificial intelligence to create intelligent, automated security solutions that adapt and learn from threats in real-time.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-indigo-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                      <i className="ri-shield-check-line text-purple-400 text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-slate-100 font-bold text-lg mb-2">Our Impact</h3>
                      <p className="text-slate-400 leading-relaxed">Today, we&apos;re helping organizations worldwide stay protected with enterprise-grade security that&apos;s both powerful and accessible.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl animate-pulse"></div>
                <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/40 shadow-2xl">
                  <div className="text-center space-y-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
                      <i className="ri-shield-star-line text-white text-5xl"></i>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-100 mb-4">Our Mission</h3>
                      <p className="text-lg text-slate-300 leading-relaxed">
                        To democratize cybersecurity by making AI-powered protection accessible to every organization, regardless of size or technical expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
                Meet Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Leadership
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Driven by passion, guided by expertise, and united in our mission to revolutionize cybersecurity.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12 justify-center max-w-2xl mx-auto">
              <div className="group relative">
                <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.02] hover:shadow-2xl shadow-lg overflow-hidden text-center">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Professional animated border glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px]">
                      <div className="w-full h-full bg-slate-800/40 backdrop-blur-sm rounded-2xl"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-8">
                    <div className="relative inline-block">
                      <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 mx-auto flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
                        <i className="ri-user-line text-white text-6xl"></i>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl border-4 border-slate-900 flex items-center justify-center shadow-lg">
                        <i className="ri-check-line text-white text-lg"></i>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-slate-100 group-hover:text-white transition-colors duration-300 mb-2">Alula Seyoum</h3>
                      <p className="text-cyan-400 font-semibold text-lg mb-6">Founder & CEO</p>
                      
                      <div className="space-y-6">
                        <p className="text-lg text-slate-300 group-hover:text-slate-200 leading-relaxed transition-colors duration-300">
                          With over 5 years of experience in cybersecurity and a passion for AI innovation, Alula founded ByteSecAI to bridge the gap between advanced security technology and practical business needs.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 group-hover:bg-slate-600/50 transition-all duration-300">
                            <div className="text-2xl font-bold text-cyan-400">5+</div>
                            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Years in Security</div>
                          </div>
                          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 group-hover:bg-slate-600/50 transition-all duration-300">
                            <div className="text-2xl font-bold text-cyan-400">100%</div>
                            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Client Focus</div>
                          </div>
                        </div>

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

                    {/* Professional animation indicator */}
                    <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-center"></div>
                  </div>

                  {/* Subtle floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    <div className="absolute top-8 right-12 w-1 h-1 bg-white rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-12 left-12 w-0.5 h-0.5 bg-slate-300 rounded-full transition-all duration-1000 delay-200 opacity-0 group-hover:opacity-30 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-16 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
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
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-message-line text-white text-3xl"></i>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-slate-100 group-hover:text-white mb-6 transition-colors duration-300">
                    Ready to Work With Us?
                  </h2>
                                      <p className="text-xl text-slate-300 group-hover:text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                    Let&apos;s discuss how ByteSecAI can help secure your organization&apos;s future. Get in touch with our team today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg font-semibold">
                      <span>Contact Us</span>
                      <i className="ri-arrow-right-line ml-3 text-lg"></i>
                    </Link>
                    <Link href="/services" className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-2xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 font-semibold">
                      <span>Our Services</span>
                      <i className="ri-service-line ml-3 text-lg"></i>
                    </Link>
                  </div>

                  {/* Professional animation indicator */}
                  <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-12 transform transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-full origin-center"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}