// Unified services data structure
export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  shortDesc: string;
  color: string;
  heroImage: string;
  benefitsImage: string;
  featuresImage: string;
  features: ServiceFeature[];
  benefits: string[];
}

export const servicesData: Service[] = [
  {
    id: 'ai-threat-detection',
    icon: 'ri-brain-line',
    title: 'AI-Powered Threat Detection',
    subtitle: 'Next-Generation Cybersecurity Intelligence',
    description: 'Our AI-powered threat detection system represents the pinnacle of cybersecurity innovation, utilizing advanced machine learning algorithms and neural networks to identify, analyze, and neutralize threats in real-time with unprecedented accuracy.',
    shortDesc: 'Real-time AI threat detection with 99.9% accuracy',
    color: 'from-cyan-500 to-blue-600',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    benefitsImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    featuresImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    features: [
      {
        icon: 'ri-cpu-line',
        title: 'Neural Network Processing',
        description: 'Advanced deep learning models that continuously evolve to detect new threat patterns'
      },
      {
        icon: 'ri-eye-line',
        title: 'Real-Time Monitoring',
        description: 'Continuous surveillance of network traffic, user behavior, and system activities'
      },
      {
        icon: 'ri-shield-flash-line',
        title: 'Zero-Day Protection',
        description: 'Identify and block previously unknown threats before they can cause damage'
      },
      {
        icon: 'ri-robot-line',
        title: 'Automated Response',
        description: 'Immediate threat containment and mitigation without human intervention'
      }
    ],
    benefits: [
      'Reduce false positives by 95%',
      'Detect threats 10x faster than traditional methods',
      'Block 99.9% of known and unknown threats',
      'Save 80% on security operation costs'
    ]
  },
  {
    id: 'cybersecurity-consulting',
    icon: 'ri-shield-user-line',
    title: 'Cybersecurity Consulting',
    subtitle: 'Expert Strategic Security Guidance',
    description: 'Our world-class cybersecurity consultants bring decades of experience to help organizations build robust security frameworks, achieve compliance, and develop comprehensive security strategies that align with business objectives.',
    shortDesc: 'Expert security consulting and compliance guidance',
    color: 'from-purple-500 to-indigo-600',
    heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    benefitsImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    featuresImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    features: [
      {
        icon: 'ri-search-line',
        title: 'Security Assessments',
        description: 'Comprehensive evaluation of your current security posture and vulnerabilities'
      },
      {
        icon: 'ri-file-shield-line',
        title: 'Compliance Guidance',
        description: 'Expert guidance on regulatory requirements and industry standards'
      },
      {
        icon: 'ri-roadmap-line',
        title: 'Strategic Planning',
        description: 'Develop long-term security roadmap aligned with business goals'
      },
      {
        icon: 'ri-team-line',
        title: 'Team Training',
        description: 'Educate your staff on best practices and security awareness'
      }
    ],
    benefits: [
      'Reduce security incidents by 85%',
      'Achieve compliance faster',
      'Optimize security investments',
      'Build internal expertise'
    ]
  },
  {
    id: 'security-automation',
    icon: 'ri-settings-3-line',
    title: 'Security Automation',
    subtitle: 'Intelligent Automated Security Operations',
    description: 'Transform your security operations with intelligent automation that handles routine tasks, accelerates incident response, and ensures consistent security policies across your entire infrastructure.',
    shortDesc: 'Automated incident response and workflow optimization',
    color: 'from-green-500 to-emerald-600',
    heroImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    benefitsImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    featuresImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    features: [
      {
        icon: 'ri-flashlight-line',
        title: 'Incident Response',
        description: 'Automated threat containment and response workflows'
      },
      {
        icon: 'ri-flow-chart-line',
        title: 'Workflow Orchestration',
        description: 'Intelligent automation of complex security processes'
      },
      {
        icon: 'ri-notification-line',
        title: 'Alert Management',
        description: 'Smart filtering and prioritization of security alerts'
      },
      {
        icon: 'ri-file-chart-line',
        title: 'Automated Reporting',
        description: 'Generate comprehensive security reports automatically'
      }
    ],
    benefits: [
      'Reduce response time by 90%',
      'Automate 80% of routine tasks',
      'Improve accuracy and consistency',
      'Scale security operations efficiently'
    ]
  },
  {
    id: 'risk-assessment',
    icon: 'ri-line-chart-line',
    title: 'Risk Assessment',
    subtitle: 'Comprehensive Security Risk Analysis',
    description: 'Our comprehensive risk assessment services provide deep insights into your security vulnerabilities, threat landscape, and potential impact scenarios, enabling informed decision-making and strategic security investments.',
    shortDesc: 'Complete vulnerability and threat analysis',
    color: 'from-orange-500 to-red-600',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    benefitsImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    featuresImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    features: [
      {
        icon: 'ri-search-eye-line',
        title: 'Vulnerability Scanning',
        description: 'Comprehensive scanning of systems, networks, and applications'
      },
      {
        icon: 'ri-bar-chart-line',
        title: 'Threat Analysis',
        description: 'Advanced analysis of current and emerging threat landscapes'
      },
      {
        icon: 'ri-calculator-line',
        title: 'Risk Scoring',
        description: 'Quantitative risk assessment with impact and probability analysis'
      },
      {
        icon: 'ri-shield-check-line',
        title: 'Remediation Planning',
        description: 'Strategic roadmap for addressing identified vulnerabilities'
      }
    ],
    benefits: [
      'Identify 95% of security vulnerabilities',
      'Prioritize security investments effectively',
      'Meet compliance requirements',
      'Reduce security breach probability'
    ]
  },
  {
    id: 'security-integration',
    icon: 'ri-plug-line',
    title: 'Security Integration',
    subtitle: 'Seamless Security Ecosystem Integration',
    description: 'Our security integration services ensure that your new security solutions work harmoniously with existing infrastructure, creating a unified and efficient security ecosystem that maximizes protection while minimizing complexity.',
    shortDesc: 'Seamless integration with existing infrastructure',
    color: 'from-pink-500 to-rose-600',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    benefitsImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    featuresImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    features: [
      {
        icon: 'ri-link-line',
        title: 'API Integration',
        description: 'Seamless integration with existing security tools and platforms'
      },
      {
        icon: 'ri-settings-4-line',
        title: 'System Compatibility',
        description: 'Ensure compatibility across different operating systems and platforms'
      },
      {
        icon: 'ri-database-line',
        title: 'Data Migration',
        description: 'Secure migration of security data and configurations'
      },
      {
        icon: 'ri-test-tube-line',
        title: 'Testing & Validation',
        description: 'Comprehensive testing to ensure integration success'
      }
    ],
    benefits: [
      'Reduce integration time by 70%',
      'Minimize system downtime',
      'Ensure seamless operation',
      'Maximize security ROI'
    ]
  },
  {
    id: 'data-protection',
    icon: 'ri-lock-line',
    title: 'Data Protection',
    subtitle: 'Enterprise-Grade Data Security',
    description: 'Our comprehensive data protection solutions provide enterprise-grade encryption, data loss prevention, and privacy controls to safeguard your most valuable information assets against unauthorized access and data breaches.',
    shortDesc: 'Enterprise-grade encryption and data security',
    color: 'from-violet-500 to-purple-600',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    benefitsImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    featuresImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    features: [
      {
        icon: 'ri-key-line',
        title: 'Encryption Management',
        description: 'Advanced encryption algorithms and key management systems'
      },
      {
        icon: 'ri-shield-cross-line',
        title: 'Data Loss Prevention',
        description: 'Comprehensive DLP policies and monitoring systems'
      },
      {
        icon: 'ri-user-settings-line',
        title: 'Access Controls',
        description: 'Granular access controls and user authentication'
      },
      {
        icon: 'ri-eye-off-line',
        title: 'Privacy Protection',
        description: 'Ensure compliance with data privacy regulations'
      }
    ],
    benefits: [
      'Protect 100% of sensitive data',
      'Meet regulatory compliance requirements',
      'Prevent data breaches effectively',
      'Build customer trust and confidence'
    ]
  }
];

// Helper function to get service by ID
export function getServiceById(id: string): Service | undefined {
  return servicesData.find(service => service.id === id);
}

// Helper function to get all service IDs
export function getAllServiceIds(): string[] {
  return servicesData.map(service => service.id);
}
