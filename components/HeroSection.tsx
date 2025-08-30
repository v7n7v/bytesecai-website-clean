
'use client';

import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Create magical floating particles
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
    }> = [];
    
    // Create magical particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.5 + 0.1,
        life: Math.random() * 100 + 50
      });
    }
    
    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        
        if (particle.life <= 0) {
          particle.life = Math.random() * 100 + 50;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Magical Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ zIndex: 1 }}
      />
      
      {/* Floating Geometric Shapes - Magical and Beautiful */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating hexagon with magical glow */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/20 rotate-12 hero-float hero-pulse-glow">
          <div className="w-full h-full border border-cyan-400/30 rotate-45"></div>
          <div className="absolute inset-0 w-full h-full border border-cyan-300/20 rotate-90 animate-pulse"></div>
        </div>
        
        {/* Floating circles with magical trails */}
        <div className="absolute top-40 right-20 w-20 h-20 border border-blue-500/30 rounded-full hero-float" style={{animationDelay: '0.5s'}}>
          <div className="absolute inset-0 w-full h-full border border-blue-400/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-cyan-400/30 rounded-full hero-float" style={{animationDelay: '1s'}}>
          <div className="absolute inset-0 w-full h-full border border-cyan-300/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Morphing blob with magical colors */}
        <div className="absolute top-1/6 right-1/8 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hero-morph">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hero-morph" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Floating tech elements with magical effects */}
        <div className="absolute top-1/6 left-1/4 w-8 h-8 border border-cyan-400/30 rounded-full hero-tech-float">
          <div className="absolute inset-0 w-full h-full bg-cyan-400/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border border-blue-400/30 rounded-full hero-tech-float" style={{animationDelay: '1s'}}>
          <div className="absolute inset-0 w-full h-full bg-blue-400/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Additional magical floating elements */}
        <div className="absolute top-1/3 left-1/6 w-12 h-12 border border-purple-500/20 rotate-45 hero-float" style={{animationDelay: '1.5s'}}>
          <div className="w-full h-full border border-purple-400/30 rotate-90"></div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/6 w-10 h-10 border border-green-500/20 rounded-full hero-float" style={{animationDelay: '2s'}}>
          <div className="absolute inset-0 w-full h-full border border-green-400/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Magical diamond */}
        <div className="absolute top-1/2 left-1/8 w-16 h-16 border border-cyan-500/20 rotate-45 hero-float" style={{animationDelay: '2.5s'}}>
          <div className="w-full h-full border border-cyan-400/30 rotate-90"></div>
          <div className="absolute inset-0 w-full h-full border border-cyan-300/20 rotate-45"></div>
        </div>
        
        {/* Floating star */}
        <div className="absolute bottom-1/6 left-1/3 w-14 h-14 hero-float" style={{animationDelay: '3s'}}>
          <div className="w-full h-full text-cyan-400/30 text-2xl flex items-center justify-center">
            <i className="ri-star-line"></i>
          </div>
        </div>
      </div>

      {/* Sophisticated Data Visualization - Enhanced with magical effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Security Dashboard */}
        <div className="absolute top-1/8 right-1/10 w-48 h-32 opacity-15">
          <div className="w-full h-full border border-cyan-500/30 rounded-lg bg-slate-800/20 backdrop-blur-sm">
            {/* Chart Bars */}
            <div className="flex items-end justify-around h-20 p-4">
              {[60, 80, 45, 90, 75, 85].map((height, index) => (
                <div
                  key={index}
                  className="w-3 bg-gradient-to-t from-cyan-500/40 to-blue-600/40 rounded-t-sm animate-pulse"
                  style={{
                    height: `${height}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
            {/* Chart Labels */}
            <div className="flex justify-around text-xs text-cyan-400/40 px-2">
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
            </div>
          </div>
        </div>

        {/* Animated Network Graph */}
        <div className="absolute bottom-1/8 left-1/10 w-40 h-40 opacity-15">
          <div className="w-full h-full border border-blue-500/30 rounded-lg bg-slate-800/20 backdrop-blur-sm p-4">
            {/* Network Nodes */}
            <div className="relative w-full h-full">
              {[
                { x: '20%', y: '20%', color: 'bg-cyan-400/40' },
                { x: '80%', y: '30%', color: 'bg-blue-400/40' },
                { x: '40%', y: '70%', color: 'bg-purple-400/40' },
                { x: '70%', y: '80%', color: 'bg-green-400/40' }
              ].map((node, index) => (
                <div
                  key={index}
                  className={`absolute w-3 h-3 ${node.color} rounded-full animate-pulse`}
                  style={{
                    left: node.x,
                    top: node.y,
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              ))}
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <line x1="20%" y1="20%" x2="80%" y2="30%" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1" className="animate-pulse" />
                <line x1="80%" y1="30%" x2="40%" y2="70%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '0.2s'}} />
                <line x1="40%" y1="70%" x2="70%" y2="80%" stroke="rgba(147, 51, 234, 0.2)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '0.4s'}} />
              </svg>
            </div>
          </div>
        </div>

        {/* Animated Threat Detection */}
        <div className="absolute top-1/8 left-1/4 transform -translate-x-1/2 w-32 h-24 opacity-15">
          <div className="w-full h-full border border-green-500/30 rounded-lg bg-slate-800/20 backdrop-blur-sm p-3">
            {/* Threat Level Indicator */}
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-400/40 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400/50">Threat Level</span>
            </div>
            {/* Threat Bars */}
            <div className="space-y-1">
              {[30, 60, 45, 80].map((level, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-16 h-1.5 bg-slate-600/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-400/40 to-cyan-400/40 rounded-full animate-pulse"
                      style={{
                        width: `${level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400/40">{level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Orbs - Enhanced with magical effects */}
      <div className="absolute top-1/8 left-1/8 w-48 h-48 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-2xl animate-pulse hero-gradient-shift">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="absolute bottom-1/8 right-1/8 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-purple-600/15 rounded-full blur-2xl animate-pulse hero-gradient-shift" style={{animationDelay: '1s'}}>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Additional magical gradient orbs */}
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse hero-gradient-shift" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse hero-gradient-shift" style={{animationDelay: '1.5s'}}></div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        {/* Animated Badge */}
        <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 border border-cyan-500/40 rounded-full text-cyan-400 text-sm transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
          <span className="font-medium">Next-Gen AI Security Startup</span>
        </div>

        {/* Main Headline */}
        <h1 className={`mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight transition-all duration-1000 delay-300 hero-neon-pulse ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent hero-gradient-shift">
            Securing Tomorrow
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse hero-shimmer">
            with AI-Powered
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent hero-gradient-shift">
            Cybersecurity
          </span>
          <span className="inline-block w-1 h-16 bg-gradient-to-b from-cyan-400 to-blue-600 ml-4 animate-pulse hero-wave"></span>
        </h1>

        {/* Description */}
        <p className={`mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 px-4 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          We're building the future of cybersecurity with artificial intelligence. Join us in revolutionizing how organizations protect their digital assets with innovative, AI-driven security solutions.
        </p>

        {/* CTA Buttons */}
        <div className={`mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60">
            <span className="flex items-center">
              Get Started
              <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
            </span>
          </button>
          
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-400/40 text-gray-300 rounded-full text-base sm:text-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
            <span className="flex items-center justify-center">
              Learn More
              <i className="ri-external-link-line ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
            </span>
          </button>
          
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-500/60 text-green-400 rounded-full text-base sm:text-lg font-semibold hover:border-green-400 hover:text-green-300 transition-all duration-300 hover:scale-105">
            <span className="flex items-center justify-center">
              Stay Updated
              <i className="ri-notification-3-line ml-2 group-hover:scale-110 transition-transform duration-300"></i>
            </span>
          </button>
        </div>

        {/* Floating Tech Icons */}
        <div className={`mt-12 sm:mt-16 flex justify-center space-x-4 sm:space-x-6 md:space-x-8 px-4 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {[
            { icon: 'ri-shield-check-line', color: 'text-cyan-400' },
            { icon: 'ri-brain-line', color: 'text-blue-400' },
            { icon: 'ri-lock-line', color: 'text-purple-400' },
            { icon: 'ri-eye-line', color: 'text-green-400' },
            { icon: 'ri-cpu-line', color: 'text-cyan-400' }
          ].map((tech, index) => (
            <div
              key={index}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${tech.color} opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 hero-tech-float hover:hero-neon-pulse flex items-center justify-center`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <i className={`${tech.icon} text-lg sm:text-xl md:text-2xl`}></i>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{marginLeft: '60px'}}>
        <div className="w-6 h-10 border-2 border-gray-400/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-gray-400 text-sm mt-2 text-center">Scroll to explore</p>
      </div>

      {/* Bottom Left Logo */}
      <div className="absolute bottom-8 left-8 w-12 h-12 border border-white/30 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">N</span>
      </div>

      {/* Bottom Right AI Icon */}
      <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
        <i className="ri-ai-generate text-white text-xl"></i>
      </div>
    </section>
  );
}
