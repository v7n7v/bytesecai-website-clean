
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '../../lib/servicesData';

export default function AllServices() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Comprehensive cybersecurity solutions powered by artificial intelligence to protect your business from evolving threats
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-100 dark:bg-slate-800 p-2 rounded-2xl">
          {servicesData.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === index
                  ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              <i className={`${service.icon} mr-2 w-4 h-4 inline-flex items-center justify-center`}></i>
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Display */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12 border border-gray-200 dark:border-slate-600 transition-colors duration-300">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`w-20 h-20 bg-gradient-to-r ${servicesData[activeTab].color} rounded-3xl flex items-center justify-center mb-8`}>
                <i className={`${servicesData[activeTab].icon} text-white text-3xl w-10 h-10 flex items-center justify-center`}></i>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                {servicesData[activeTab].title}
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                {servicesData[activeTab].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`/services/${servicesData[activeTab].id}`}
                  className="px-8 py-4 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60 whitespace-nowrap cursor-pointer text-center"
                >
                  Learn More Details
                </Link>
                <button className="px-8 py-4 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-300 whitespace-nowrap cursor-pointer font-semibold subtle-glow-cyan hover-glow-cyan">
                  Request Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src={servicesData[activeTab].heroImage}
                  alt={`${servicesData[activeTab].title} Dashboard`}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-slate-700 transition-colors duration-300">
                <div className="text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${servicesData[activeTab].color} bg-clip-text text-transparent`}>
                    99.9%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Service Grid with Professional Liquid Glass Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Main Service Card */}
              <Link
                href={`/services/${service.id}`}
                className={`
                  relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 
                  border border-slate-700/40 hover:border-slate-600/60
                  transition-all duration-500 ease-out
                  hover:transform hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg
                  overflow-hidden cursor-pointer block h-full
                `}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Professional animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} p-[1px]`}>
                    <div className="w-full h-full bg-slate-800/40 backdrop-blur-sm rounded-2xl"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                    <img 
                      src={service.heroImage}
                      alt={`${service.title} Service`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    
                    {/* Professional Icon */}
                    <div className={`
                      absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center
                      bg-gradient-to-r ${service.color} shadow-lg
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <i className={`${service.icon} text-white text-lg`}></i>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mb-6 leading-relaxed flex-1">
                      {service.shortDesc}
                    </p>

                    {/* CTA Section */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-300 group-hover:text-slate-100 transition-colors duration-300">
                        <span className="text-sm font-medium mr-2">Learn More</span>
                        <div className="w-8 h-8 bg-slate-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-slate-600/60 transition-all duration-300 group-hover:scale-110">
                          <i className="ri-arrow-right-line text-slate-300 text-sm group-hover:translate-x-0.5 transition-transform duration-300"></i>
                        </div>
                      </div>
                    </div>

                    {/* Professional animation indicator */}
                    <div className={`
                      w-12 h-0.5 bg-gradient-to-r ${service.color} rounded-full mt-4
                      transform transition-all duration-500
                      opacity-50 group-hover:opacity-100 group-hover:w-full
                      origin-left
                    `}></div>
                  </div>
                </div>

                {/* Subtle floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute top-6 right-8 w-1 h-1 bg-white rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-0.5 h-0.5 bg-slate-300 rounded-full transition-all duration-1000 delay-200 opacity-0 group-hover:opacity-30 animate-pulse"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
