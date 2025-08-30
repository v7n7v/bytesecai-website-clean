
'use client';

import Link from 'next/link';
import { getServiceById } from '../../../lib/servicesData';

interface ServiceDetailProps {
  serviceId: string;
}

export default function ServiceDetail({ serviceId }: ServiceDetailProps) {
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Service Not Found</h1>
        <Link href="/services" className="text-cyan-600 hover:text-cyan-700 mt-4 inline-block">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="pt-24 pb-20 relative overflow-hidden min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/services"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors duration-300 group"
            >
              <i className="ri-arrow-left-line text-lg group-hover:-translate-x-1 transition-transform duration-300"></i>
              <span className="font-medium">Back to All Services</span>
            </Link>
          </div>
          
          {/* Main Service Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className={`w-24 h-24 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg`}>
                <i className={`${service.icon} text-white text-4xl w-12 h-12 flex items-center justify-center`}></i>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-cyan-100 mb-8">
                {service.subtitle}
              </p>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`px-8 py-4 bg-gradient-to-r ${service.color} text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer text-lg font-semibold`}>
                  Get Started Today
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-cyan-600 transition-all duration-300 whitespace-nowrap cursor-pointer text-lg font-semibold">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Key Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the powerful capabilities that make our {service.title.toLowerCase()} solution industry-leading
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {service.features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 border border-gray-200 dark:border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl subtle-glow-cyan hover-glow-cyan">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <i className={`${feature.icon} text-white text-2xl w-8 h-8 flex items-center justify-center`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Features Showcase Card */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-600 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img 
                  src={service.featuresImage || service.heroImage}
                  alt={`${service.title} Features Visualization`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Advanced {service.title} Capabilities
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  Our cutting-edge technology delivers unparalleled performance and reliability, setting new standards in the cybersecurity industry.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">
                    99.9% Accuracy
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    Real-time Processing
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                    24/7 Monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our Solution?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the advantages that set our {service.title.toLowerCase()} apart from the competition
            </p>
          </div>

          {/* Benefits Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-200 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl subtle-glow-cyan hover-glow-cyan">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="ri-check-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div className="flex-1">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Showcase Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Proven Results & Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  Join thousands of organizations worldwide who trust our {service.title.toLowerCase()} to protect their most valuable digital assets.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-2`}>
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Threat Detection Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-2`}>
                      &lt;1ms
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Response Time
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-2`}>
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Monitoring
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-2`}>
                      1000+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Clients Protected
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-80 lg:h-auto order-1 lg:order-2">
                <img 
                  src={service.benefitsImage || service.heroImage}
                  alt={`${service.title} Benefits Visualization`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your organization&apos;s security needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">$99</div>
                <div className="text-gray-600 dark:text-gray-400">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Core security features
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Basic threat detection
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Email support
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Monthly reports
                </li>
              </ul>
              <button className={`w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border-2 border-cyan-500 shadow-xl relative hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">$299</div>
                <div className="text-gray-600 dark:text-gray-400">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Advanced security features
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  AI-powered threat detection
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Priority support
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Real-time monitoring
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Custom integrations
                </li>
              </ul>
              <button className={`w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">Custom</div>
                <div className="text-gray-600 dark:text-gray-400">contact us</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Full feature suite
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  On-site deployment
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  SLA guarantees
                </li>
              </ul>
              <button className={`w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
        ></div>
        <div className={`absolute inset-0 bg-gradient-to-r ${service.color.replace('from-', 'from-').replace('to-', 'to-')}/90`}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* CTA Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations that trust ByteSecAI&apos;s {service.title.toLowerCase()} to protect their digital assets
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer text-lg font-semibold shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 whitespace-nowrap cursor-pointer text-lg font-semibold">
                Schedule Demo
              </button>
            </div>

            {/* Back to Services Link */}
            <div className="pt-8 border-t border-white/20">
              <Link 
                href="/services"
                className="inline-flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group"
              >
                <i className="ri-arrow-left-line text-lg group-hover:-translate-x-1 transition-transform duration-300"></i>
                <span className="text-lg font-medium">Back to All Services</span>
              </Link>
              <p className="text-white/60 mt-2">
                Explore our complete range of cybersecurity solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
