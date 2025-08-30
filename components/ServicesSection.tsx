
'use client';

import Link from 'next/link';
import { servicesData } from '../lib/servicesData';

export default function ServicesSection() {

  return (
    <section id="services" className="py-20 bg-slate-900 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
            Our Services
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive cybersecurity solutions powered by artificial intelligence to protect your business from evolving threats
          </p>
        </div>

        {/* Professional Service Cards with Liquid Glass Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Main Service Card */}
              <div className={`
                relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 
                border border-slate-700/40 hover:border-slate-600/60
                transition-all duration-500 ease-out
                hover:transform hover:scale-[1.02] hover:shadow-2xl
                shadow-lg
                overflow-hidden h-full flex flex-col
              `}>
                {/* Subtle gradient overlay */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl
                  ${service.color.includes('cyan') ? 'from-cyan-500/10 to-blue-500/10' : 
                    service.color.includes('purple') ? 'from-purple-500/10 to-indigo-500/10' :
                    service.color.includes('green') ? 'from-emerald-500/10 to-teal-500/10' :
                    service.color.includes('orange') ? 'from-orange-500/10 to-red-500/10' :
                    service.color.includes('pink') ? 'from-pink-500/10 to-rose-500/10' :
                    'from-slate-500/10 to-slate-600/10'}
                `}></div>
                
                {/* Professional animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} p-[1px]`}>
                    <div className="w-full h-full bg-slate-800/40 backdrop-blur-sm rounded-2xl"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Professional Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center mb-6
                    bg-gradient-to-r ${service.color} shadow-lg
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <i className={`${service.icon} text-white text-xl`}></i>
                  </div>

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
                    <Link 
                      href={`/services/${service.id}`}
                      className="flex items-center text-slate-300 group-hover:text-slate-100 transition-colors duration-300 cursor-pointer"
                    >
                      <span className="text-sm font-medium mr-2">Learn More</span>
                      <div className="w-8 h-8 bg-slate-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-slate-600/60 transition-all duration-300 group-hover:scale-110">
                        <i className="ri-arrow-right-line text-slate-300 text-sm group-hover:translate-x-0.5 transition-transform duration-300"></i>
                      </div>
                    </Link>
                  </div>

                  {/* Professional animation indicator */}
                  <div className={`
                    w-12 h-0.5 bg-gradient-to-r ${service.color} rounded-full mt-4
                    transform transition-all duration-500
                    opacity-50 group-hover:opacity-100 group-hover:w-full
                    origin-left
                  `}></div>
                </div>

                {/* Subtle floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute top-6 right-8 w-1 h-1 bg-white rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-0.5 h-0.5 bg-slate-300 rounded-full transition-all duration-1000 delay-200 opacity-0 group-hover:opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
