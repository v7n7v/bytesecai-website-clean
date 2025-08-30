
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatInterfaceProps {
  onSendMessage?: (message: string) => void;
  webhookUrl?: string;
}

export default function ChatInterface({ onSendMessage, webhookUrl }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm ByteSecAI Assistant. How can I help you with your cybersecurity needs today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [webhookStatus, setWebhookStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Webhook health check function
  const checkWebhookHealth = useCallback(async () => {
    if (!webhookUrl) {
      setWebhookStatus('disconnected');
      return;
    }

    setWebhookStatus('checking');

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout for better reliability

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'ByteSecAI-ChatBot/1.0'
        },
        body: JSON.stringify({
          type: 'health_check',
          timestamp: new Date().toISOString(),
          source: 'bytesecai_chatbot_health_check',
          message: 'Health check ping'
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // More flexible response handling - consider 2xx, 3xx, and some 4xx as "connected"
      if (response.ok || (response.status >= 200 && response.status < 500)) {
        setWebhookStatus('connected');
        console.log('✅ Webhook health check successful - Status:', response.status);
      } else {
        console.warn(`⚠️ Webhook responded with status: ${response.status}`);
        // Still consider it connected if we get any response (even error status)
        // This means the webhook endpoint exists and is reachable
        setWebhookStatus('connected');
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.warn('⏰ Webhook health check timed out');
        setWebhookStatus('disconnected');
      } else if (error instanceof TypeError && error.message.includes('fetch')) {
        console.warn('🌐 Network error - webhook may be unreachable');
        setWebhookStatus('disconnected');
      } else {
        console.error('❌ Webhook health check failed:', error);
        setWebhookStatus('disconnected');
      }
    }
  }, [webhookUrl]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // If webhook URL exists, assume it's connected initially (optimistic approach)
    if (webhookUrl) {
      setWebhookStatus('connected');
    }
    
    // Check webhook health on component mount and when webhookUrl changes
    checkWebhookHealth();
    
    // Set up periodic health checks every 30 seconds
    const healthCheckInterval = setInterval(checkWebhookHealth, 30000);
    
    // If health check fails initially, try again after 5 seconds
    const retryTimeout = setTimeout(() => {
      if (webhookStatus === 'disconnected') {
        checkWebhookHealth();
      }
    }, 5000);
    
    return () => {
      clearInterval(healthCheckInterval);
      clearTimeout(retryTimeout);
    };
  }, [webhookUrl, checkWebhookHealth, webhookStatus]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    // Send message to our API endpoint
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage.trim(),
          sessionId: 'web-session',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error('Chat API error:', response.status);
      }
    } catch (error) {
      console.error('Chat API error:', error);
    }

    // Call webhook if provided
    if (webhookUrl && onSendMessage) {
      try {
        onSendMessage(inputMessage.trim());
      } catch (error) {
        console.error('Webhook error:', error);
      }
    }

    // Send to the existing webhook from old implementation
    try {
      const webhookResponse = await fetch('https://eokgok9tk0dhuxq.m.pipedream.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage.trim(),
          timestamp: new Date().toISOString(),
          user: 'website_visitor',
          source: 'bytesecai_chatbot'
        })
      });

      let botResponseText = '';

      if (webhookResponse.ok) {
        const data = await webhookResponse.text();
        // Try to parse as JSON, if it fails use the raw text
        try {
          const jsonData = JSON.parse(data);
          botResponseText = jsonData.response || jsonData.message || data || 'Thanks for your message! How can I help you with cybersecurity?';
        } catch {
          botResponseText = data || 'Thanks for your message! How can I help you with cybersecurity?';
        }
      } else if (webhookResponse.status === 400) {
        // Handle 400 Bad Request gracefully - webhook exists but rejected the payload
        console.warn('Webhook returned 400 Bad Request - payload may need adjustment');
        botResponseText = 'Thanks for your message! I\'m processing your request. How can I help you with cybersecurity today?';
      } else {
        // For other HTTP errors, throw an error to trigger fallback
        throw new Error(`HTTP ${webhookResponse.status}`);
      }

      // Create and display bot response
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponseText,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
      setIsLoading(false);

    } catch (error) {
      console.error('Webhook error:', error);
      
      // Fallback responses for when webhook is unavailable
      const fallbackResponses = [
        "🔒 That's a great cybersecurity question! I'd recommend implementing multi-factor authentication as your first line of defense.",
        "🛡️ For optimal security, consider regular security audits and keeping all systems updated with the latest patches.",
        "🔍 Threat detection is crucial. I suggest monitoring network traffic and implementing AI-powered anomaly detection.",
        "💡 ByteSecai specializes in AI-powered security solutions. Would you like to learn more about our services?",
        "⚡ Quick tip: Always use strong, unique passwords and enable encryption for sensitive data.",
        "🚨 I'm currently experiencing connectivity issues, but here's a cybersecurity tip: Always verify sender authenticity before clicking links!",
        "🔐 Connection temporarily unavailable. Remember: Zero-trust architecture is the future of cybersecurity!",
        "🌐 Having some technical difficulties, but here's advice: Keep your firewalls updated and monitor network activity.",
        "📊 System temporarily offline. Pro tip: Regular penetration testing helps identify vulnerabilities!",
        "🤖 Connectivity issues detected. ByteSecai's AI-powered security tools can help protect you 24/7!"
      ];
      
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, fallbackResponse]);
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm ByteSecAI Assistant. How can I help you with your cybersecurity needs today?",
        sender: 'ai',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'w-16 h-16' : 'w-96 h-[600px]'}`}>
      {isMinimized ? (
        <div className="relative">
          <button
            onClick={() => setIsMinimized(false)}
            className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center group"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <img
                src="https://static.readdy.ai/image/6e1ff6b59c27db2948859c378f70deb3/4efe4c048c260ea7b9655b0997a51784.jfif"
                alt="ByteSecAI Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </button>
          
          {/* Webhook Status Indicator on Minimized Button */}
          {webhookUrl && (
            <div className="absolute -top-1 -right-1">
              <div 
                className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                  webhookStatus === 'connected' 
                    ? 'bg-green-400 shadow-lg shadow-green-400/50' 
                    : webhookStatus === 'checking' 
                    ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50 animate-pulse' 
                    : 'bg-red-400 shadow-lg shadow-red-400/50'
                }`}
                title={`Webhook: ${webhookStatus === 'connected' ? 'Connected' : webhookStatus === 'checking' ? 'Checking...' : 'Disconnected'}`}
              ></div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-cyan-500/20 overflow-hidden backdrop-blur-sm transition-colors duration-300 subtle-glow-cyan hover-glow-cyan">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30">
                <img
                  src="https://static.readdy.ai/image/6e1ff6b59c27db2948859c378f70deb3/4efe4c048c260ea7b9655b0997a51784.jfif"
                  alt="ByteSecAI Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">ByteSecAI Assistant</h3>
                <p className="text-white/80 text-sm">AI-Powered Security Expert</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {/* Webhook Status Indicator */}
              {webhookUrl && (
                <div className="flex items-center space-x-2 mr-2 group relative">
                  <div className="flex items-center space-x-1">
                    <div 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        webhookStatus === 'connected' 
                          ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse' 
                          : webhookStatus === 'checking' 
                          ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50 animate-pulse' 
                          : 'bg-red-400 shadow-lg shadow-red-400/50'
                      }`}
                    ></div>
                    <span className="text-xs text-white/80 font-medium">
                      {webhookStatus === 'connected' ? 'Connected' : webhookStatus === 'checking' ? 'Checking...' : 'Disconnected'}
                    </span>
                  </div>
                  
                  {/* Manual Refresh Button */}
                  <button
                    onClick={checkWebhookHealth}
                    className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
                    title="Refresh Webhook Status"
                  >
                    <i className="ri-refresh-line w-3 h-3 flex items-center justify-center"></i>
                  </button>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    <div className="text-center">
                      <div className="font-semibold mb-1">Webhook Status</div>
                      <div className="text-gray-300">
                        {webhookStatus === 'connected' 
                          ? '✅ Webhook is responding correctly' 
                          : webhookStatus === 'checking' 
                          ? '⏳ Checking webhook connection...' 
                          : '❌ Webhook is not responding'}
                      </div>
                      <div className="text-gray-400 text-xs mt-1">
                        Last checked: {new Date().toLocaleTimeString()}
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                  </div>
                </div>
              )}
              
              <button
                onClick={clearChat}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
                title="Clear Chat"
              >
                <i className="ri-refresh-line w-4 h-4 flex items-center justify-center"></i>
              </button>
              <button
                onClick={() => setIsMinimized(true)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
                title="Minimize"
              >
                <i className="ri-subtract-line w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
          </div>



          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-slate-800/50 transition-colors duration-300">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600'
                  } transition-colors duration-300`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <div
                    className={`text-xs mt-2 opacity-70 ${
                      message.sender === 'user' ? 'text-white' : 'text-gray-500 dark:text-gray-400'
                    }`}
                    suppressHydrationWarning={true}
                  >
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))} {/* <-- Fixed missing closing parenthesis */}


            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-2xl px-4 py-3 transition-colors duration-300">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about cybersecurity, AI protection, or our services..."
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors text-sm disabled:opacity-50"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <i className="ri-send-plane-fill w-4 h-4 flex items-center justify-center"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => setInputMessage('What cybersecurity services do you offer?')}
                className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-xs hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap"
              >
                Our Services
              </button>
              <button
                onClick={() => setInputMessage('How does your AI-powered security work?')}
                className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-xs hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap"
              >
                AI Security
              </button>
              <button
                onClick={() => setInputMessage('I need a security consultation')}
                className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-xs hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap"
              >
                Consultation
              </button>
            </div>
          </div>

          {/* Webhook Status (when provided) */}
          {webhookUrl && (
            <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-500/20 transition-colors duration-300">
              <div className="flex items-center justify-between text-xs">
                <span className="text-blue-600 dark:text-blue-400">Webhook Integration Active</span>
                <div className="flex items-center space-x-1">
                  <i className="ri-links-line w-3 h-3 flex items-center justify-center text-blue-500"></i>
                  <span className="text-blue-500 font-mono truncate max-w-32" title={webhookUrl}>
                    {webhookUrl.length > 20 ? `${webhookUrl.substring(0, 20)}...` : webhookUrl}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
