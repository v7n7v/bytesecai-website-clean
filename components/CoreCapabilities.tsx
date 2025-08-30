
'use client';

import { useState } from 'react';

const capabilities = [
  {
    icon: 'ri-brain-line',
    title: 'AI-First Approach',
    description: 'Leveraging cutting-edge artificial intelligence to predict, detect, and neutralize threats before they impact your systems.',
    gradient: 'from-cyan-500 to-blue-600',
    detailedDescription: 'Our AI-First approach revolutionizes cybersecurity by deploying machine learning algorithms that continuously analyze network behavior, user patterns, and system interactions. These intelligent systems can identify anomalies that human analysts might miss, predict potential attack vectors based on historical data, and automatically implement countermeasures in real-time. The AI learns from every interaction, becoming more sophisticated and accurate with each threat encounter.',
    features: ['Predictive threat modeling', 'Behavioral analysis', 'Automated response systems', 'Continuous learning algorithms']
  },
  {
    icon: 'ri-shield-check-line',
    title: '24/7 Protection',
    description: 'Round-the-clock monitoring and protection with automated responses to ensure your digital assets are always secure.',
    gradient: 'from-blue-500 to-purple-600',
    detailedDescription: 'Cyber threats don\'t sleep, and neither do we. Our 24/7 protection system operates continuously, monitoring your infrastructure across all time zones. With automated threat detection and response capabilities, we ensure immediate action against any security incidents, even when your team is offline. Our system provides real-time alerts, automated incident response, and continuous vulnerability scanning to maintain your security posture around the clock.',
    features: ['Continuous monitoring', 'Automated incident response', 'Real-time alerts', 'Global threat intelligence']
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Real-time Analysis',
    description: 'Instant threat analysis and response with advanced machine learning algorithms processing millions of data points.',
    gradient: 'from-purple-500 to-pink-600',
    detailedDescription: 'Our real-time analysis engine processes millions of data points per second, providing instant insights into potential security threats. Using advanced machine learning algorithms, we can detect patterns and anomalies in real-time, enabling immediate response to emerging threats. The system analyzes network traffic, user behavior, system logs, and external threat feeds simultaneously, providing comprehensive security intelligence without latency.',
    features: ['Millions of data points/second', 'Instant threat detection', 'Pattern recognition', 'Zero-latency response']
  },
  {
    icon: 'ri-rocket-line',
    title: 'Future Ready',
    description: 'Stay ahead of evolving cyber threats with adaptive AI that learns and evolves with the changing security landscape.',
    gradient: 'from-pink-500 to-red-600',
    detailedDescription: 'The cybersecurity landscape is constantly evolving, and our Future Ready approach ensures you stay ahead of emerging threats. Our adaptive AI systems continuously learn from new attack patterns, evolving threats, and industry developments. We regularly update our threat intelligence, incorporate new security protocols, and enhance our AI models to address the latest cybersecurity challenges, ensuring your protection remains cutting-edge.',
    features: ['Adaptive learning systems', 'Threat intelligence updates', 'Protocol evolution', 'Continuous improvement']
  },
  {
    icon: 'ri-graduation-cap-line',
    title: 'Expert AI & Security Training',
    description: 'Comprehensive training programs combining AI expertise with cybersecurity best practices for your team.',
    gradient: 'from-green-500 to-cyan-600',
    detailedDescription: 'Knowledge is power in cybersecurity. Our comprehensive training programs combine cutting-edge AI expertise with proven cybersecurity best practices. We offer customized training modules for different skill levels, hands-on workshops with real-world scenarios, and certification programs that validate your team\'s expertise. Our training covers everything from basic security awareness to advanced AI-powered threat hunting techniques.',
    features: ['Customized training modules', 'Hands-on workshops', 'Certification programs', 'Real-world scenarios']
  },
  {
    icon: 'ri-file-check-line',
    title: 'Compliance & Governance',
    description: 'Ensure regulatory compliance with automated audit trails, policy enforcement, and comprehensive reporting frameworks.',
    gradient: 'from-orange-500 to-red-600',
    detailedDescription: 'Regulatory compliance is critical for modern businesses. Our compliance and governance solutions provide automated audit trails, policy enforcement, and comprehensive reporting frameworks that meet industry standards and regulatory requirements. We help you maintain compliance with frameworks like SOC 2, ISO 27001, GDPR, and HIPAA, while providing clear visibility into your security posture for auditors and stakeholders.',
    features: ['Automated audit trails', 'Policy enforcement', 'Regulatory frameworks', 'Stakeholder reporting']
  }
];

export default function CoreCapabilities() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Core Capabilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Discover how our AI-powered cybersecurity solutions provide comprehensive protection for your digital infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredCard === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-gray-50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full subtle-glow-cyan hover-glow-cyan ${
                expandedCard === index ? 'ring-2 ring-cyan-500/50' : ''
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${capability.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${capability.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${capability.icon} text-white text-2xl w-8 h-8 flex items-center justify-center`}></i>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {capability.description}
                  </p>

                  {/* Expanded Content */}
                  {expandedCard === index && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                        {capability.detailedDescription}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                        <ul className="space-y-1">
                          {capability.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                              <i className="ri-check-line text-cyan-500 w-3 h-3 flex items-center justify-center"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Clickable Arrow */}
                <div 
                  className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    expandedCard === index 
                      ? 'bg-cyan-500 rotate-90' 
                      : hoveredCard === index 
                        ? 'bg-cyan-500 animate-bounce' 
                        : 'bg-gray-400 hover:bg-cyan-500'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(index);
                  }}
                >
                  <i className={`ri-arrow-right-line text-white text-sm w-4 h-4 flex items-center justify-center transition-transform duration-300`}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
