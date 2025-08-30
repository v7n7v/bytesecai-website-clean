'use client';

const principles = [
  {
    id: 'innovation',
    icon: 'ri-lightbulb-line',
    title: 'Innovation First',
    description: 'We believe in pushing the boundaries of what\'s possible in cybersecurity through cutting-edge AI technology.',
    detail: 'Every solution we build starts with asking "How can we do this better?" We\'re not just following trends—we\'re creating the future of cybersecurity.',
    color: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    id: 'trust',
    icon: 'ri-shield-check-line',
    title: 'Trust Through Transparency',
    description: 'Security isn\'t just about technology—it\'s about building unshakeable trust through complete transparency.',
    detail: 'We believe our clients deserve to understand exactly how we protect them. No black boxes, no hidden processes—just clear, honest security.',
    color: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10'
  },
  {
    id: 'excellence',
    icon: 'ri-star-line',
    title: 'Relentless Excellence',
    description: 'We don\'t settle for "good enough" when it comes to protecting what matters most to our clients.',
    detail: 'Excellence isn\'t a destination—it\'s our daily commitment. Every line of code, every security protocol, every client interaction reflects our pursuit of perfection.',
    color: 'from-purple-500 to-indigo-500',
    bgGradient: 'from-purple-500/10 to-indigo-500/10'
  },
  {
    id: 'empowerment',
    icon: 'ri-team-line',
    title: 'Client Empowerment',
    description: 'We don\'t just protect—we educate and empower our clients to make informed security decisions.',
    detail: 'True security comes from understanding. We ensure our clients aren\'t just protected, but equipped with the knowledge to stay secure.',
    color: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10'
  },
  {
    id: 'responsibility',
    icon: 'ri-earth-line',
    title: 'Ethical Responsibility',
    description: 'With great power comes great responsibility. We use AI to protect, never to exploit or harm.',
    detail: 'We\'re committed to using our AI capabilities ethically, protecting privacy, and contributing to a safer digital world for everyone.',
    color: 'from-green-500 to-lime-500',
    bgGradient: 'from-green-500/10 to-lime-500/10'
  },
  {
    id: 'agility',
    icon: 'ri-flashlight-line',
    title: 'Adaptive Agility',
    description: 'In cybersecurity, standing still means falling behind. We evolve as fast as the threats we fight.',
    detail: 'Our agile approach ensures we\'re always one step ahead, adapting to new threats and technologies with speed and precision.',
    color: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/10 to-rose-500/10'
  }
];

export default function FoundingPrinciples() {

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl mb-8 shadow-lg border border-slate-600/30">
            <i className="ri-compass-3-line text-slate-200 text-2xl"></i>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
            Our Founding Principles
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            These core values guide every decision we make, every solution we build, 
            and every relationship we forge. They are the foundation of who we are.
          </p>
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute top-40 left-20 w-48 h-48 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/15 to-indigo-600/15 rounded-full blur-2xl animate-pulse delay-1000"></div>

        {/* Elegant Principles List - No Cards */}
        <div className="space-y-16">
          {principles.map((principle, index) => (
            <div
              key={principle.id}
              className="group relative"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="flex items-start space-x-8 group">
                {/* Professional Icon */}
                <div className={`
                  w-16 h-16 bg-gradient-to-r ${principle.color.replace('500', '500/20')} backdrop-blur-sm rounded-2xl 
                  flex items-center justify-center flex-shrink-0 
                  border ${principle.color.replace('from-', 'border-').replace(' to-', '/30 group-hover:border-').replace('500', '500/50')}
                  group-hover:scale-110 transition-transform duration-300 shadow-lg
                `}>
                  <i className={`${principle.icon} text-2xl`} style={{
                    background: `linear-gradient(135deg, ${principle.color.includes('blue') ? '#06b6d4, #3b82f6' : 
                      principle.color.includes('emerald') ? '#10b981, #14b8a6' :
                      principle.color.includes('purple') ? '#8b5cf6, #6366f1' :
                      principle.color.includes('orange') ? '#f97316, #ef4444' :
                      principle.color.includes('green') ? '#22c55e, #84cc16' :
                      '#ec4899, #f43f5e'})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}></i>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 mb-6">
                    {principle.description}
                  </p>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {principle.detail}
                  </p>
                  
                  {/* Elegant underline animation */}
                  <div className={`
                    w-24 h-0.5 bg-gradient-to-r ${principle.color} rounded-full mt-6
                    transform transition-all duration-500 opacity-50 
                    group-hover:opacity-100 group-hover:w-32 origin-left
                  `}></div>
                </div>

                {/* Subtle floating elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-4 right-8 w-1 h-1 bg-white rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-4 left-20 w-0.5 h-0.5 bg-slate-300 rounded-full transition-all duration-1000 delay-200 opacity-0 group-hover:opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
