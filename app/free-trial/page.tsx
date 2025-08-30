import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function FreeTrialPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-900">
        {/* Liquid Glass Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://api.readyy.ai/v1/image?query=AI-powered%20cybersecurity%20dashboard%20with%20real-time%20threat%20monitoring%2C%20futuristic%20security%20operations%20center%2C%20blue%20and%20cyan%20neon%20lights%2C%20professional%20corporate%20atmosphere%2C%20no%20humans')] bg-cover bg-center opacity-20"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Professional Hero Card */}
          <div className="group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/40 p-10 shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden max-w-4xl mx-auto">
            {/* Professional Accent */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-slate-400/60 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Compact Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-slate-600/30 group-hover:scale-105 transition-transform duration-300">
                <i className="ri-rocket-line text-slate-300 text-xl"></i>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight tracking-tight">
                Start Your Free Trial Today
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Experience ByteSecAI's cutting-edge cybersecurity solutions with a 30-day free trial. No credit card required, full access to all features.
              </p>
              
              {/* Trial Benefits */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">30 Days</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">Full Access</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">All Features</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-300">No CC</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Required</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="/coming-soon"
                  className="px-8 py-4 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60 inline-flex items-center justify-center"
                >
                  Start Free Trial
                </Link>
                <Link 
                  href="/coming-soon"
                  className="px-8 py-4 border border-slate-600/50 hover:border-slate-500/60 text-slate-400 hover:text-slate-300 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm inline-flex items-center justify-center"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What's Included in Your Free Trial
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get full access to all ByteSecAI cybersecurity features and experience the power of AI-driven threat protection.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Threat Detection */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-brain-line text-cyan-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    AI Threat Detection
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    Advanced machine learning algorithms that detect and neutralize threats in real-time, with 99.8% accuracy.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Automation */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-robot-line text-blue-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    Security Automation
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    Automated incident response and security workflows that reduce manual tasks by 80% and response time by 90%.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-shield-check-line text-emerald-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    Data Protection
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    End-to-end encryption, data loss prevention, and compliance tools to protect your sensitive information.
                  </p>
                </div>
              </div>
            </div>

            {/* 24/7 Monitoring */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-eye-line text-orange-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    24/7 Monitoring
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    Round-the-clock security monitoring with instant alerts and rapid response to any security incidents.
                  </p>
                </div>
              </div>
            </div>

            {/* Expert Support */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-rose-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-customer-service-line text-pink-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    Expert Support
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    Access to our cybersecurity experts for setup assistance, best practices, and technical guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="group relative">
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-dashboard-line text-indigo-400 text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
                    Analytics Dashboard
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    Comprehensive security analytics and reporting to track threats, performance, and compliance metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Getting started with ByteSecAI is simple and takes just a few minutes. Here's how it works:
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-slate-700/60 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border border-slate-600/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-slate-300">1</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-slate-600/30 md:hidden"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Sign Up</h3>
              <p className="text-slate-400 leading-relaxed">
                Create your account with just your email and company information. No credit card required.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-slate-700/60 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border border-slate-600/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-slate-300">2</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-slate-600/30 md:hidden"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Quick Setup</h3>
              <p className="text-slate-400 leading-relaxed">
                Our guided setup wizard helps you configure your security preferences in under 10 minutes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-slate-700/60 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border border-slate-600/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-slate-300">3</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Start Protecting</h3>
              <p className="text-slate-400 leading-relaxed">
                Your systems are now protected with AI-powered cybersecurity. Monitor and manage from your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Future of Cybersecurity?
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Join thousands of organizations that trust ByteSecAI to protect their digital assets. Start your free trial today and see the difference AI-powered security makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/coming-soon"
              className="px-10 py-5 bg-slate-700/60 backdrop-blur-sm text-slate-200 rounded-xl font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-[1.02] shadow-lg hover:bg-slate-600/60 text-lg inline-flex items-center justify-center"
            >
              Start Free Trial Now
            </Link>
            <Link 
              href="/coming-soon"
              className="px-10 py-5 border border-slate-600/50 hover:border-slate-500/60 text-slate-400 hover:text-slate-300 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm text-lg inline-flex items-center justify-center"
            >
              Contact Sales Team
            </Link>
          </div>
          
          <p className="text-sm text-slate-500 mt-6">
            No credit card required • 30-day free trial • Full access to all features
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about our free trial
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/40">
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                What happens after my free trial ends?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                After your 30-day free trial, you can choose to continue with one of our paid plans. We'll send you reminders before the trial ends, and you can upgrade at any time during the trial period.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/40">
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Can I cancel my trial at any time?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Absolutely! You can cancel your free trial at any time with no questions asked. Your account will remain active until the end of the trial period.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/40">
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                Do I need technical expertise to use ByteSecAI?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                No technical expertise required! Our platform is designed to be user-friendly with guided setup wizards and intuitive dashboards. Our support team is also available to help with any questions.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/40">
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                What if I need help during my trial?
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We provide full support during your free trial, including setup assistance, best practices guidance, and technical support. Our team is here to ensure you get the most out of ByteSecAI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
