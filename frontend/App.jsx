import React, { useState, useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Mock articles data (since we can't fetch from Strapi in preview)
  const articles = [
    {
      id: 1,
      title: "Palo Alto Firewall: Complete Beginner’s Setup Guide (2025)",
      excerpt: "Step-by-step configuration for Palo Alto NGFW including App-ID, User-ID, and security policies.",
      category: "Firewalls",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: "https://placehold.co/600x400/1e3a8a/ffffff?text=Palo+Alto+Firewall",
      author: "Alex Chen",
      tags: ["Palo Alto", "NGFW", "Configuration"]
    },
    {
      id: 2,
      title: "Zscaler ZIA vs ZPA: What’s the Difference?",
      excerpt: "Understanding Zscaler's Internet Access versus Private Access for Zero Trust Network Architecture.",
      category: "Secure Web Gateway",
      date: "May 14, 2025",
      readTime: "6 min read",
      image: "https://placehold.co/600x400/dc2626/ffffff?text=Zscaler+ZIA+vs+ZPA",
      author: "Priya Sharma",
      tags: ["Zscaler", "Zero Trust", "Proxy"]
    },
    {
      id: 3,
      title: "F5 BIG-IP Load Balancer: iRule Examples for Security Engineers",
      excerpt: "Practical iRule scripts for SSL offloading, persistence, and WAF integration on F5 BIG-IP platforms.",
      category: "Load Balancing",
      date: "May 13, 2025",
      readTime: "10 min read",
      image: "https://placehold.co/600x400/059669/ffffff?text=F5+BIG-IP+iRules",
      author: "Marcus Johnson",
      tags: ["F5", "iRules", "Load Balancer"]
    },
    {
      id: 4,
      title: "Zero Trust Architecture: Step-by-Step Implementation Guide",
      excerpt: "Building a comprehensive Zero Trust framework using Zscaler, Palo Alto Prisma, and identity providers.",
      category: "Zero Trust",
      date: "May 12, 2025",
      readTime: "12 min read",
      image: "https://placehold.co/600x400/7c3aed/ffffff?text=Zero+Trust+Architecture",
      author: "Sarah Williams",
      tags: ["Zero Trust", "ZTNA", "Security Framework"]
    },
    {
      id: 5,
      title: "Splunk vs Microsoft Sentinel: Which SIEM is Right for You?",
      excerpt: "Comparing features, pricing, and use cases for Splunk Enterprise Security and Microsoft Sentinel.",
      category: "SIEM & SOAR",
      date: "May 11, 2025",
      readTime: "9 min read",
      image: "https://placehold.co/600x400/ea580c/ffffff?text=Splunk+vs+Sentinel",
      author: "David Kim",
      tags: ["Splunk", "Sentinel", "SIEM"]
    },
    {
      id: 6,
      title: "Top 5 Network Security Tools Every Enterprise Needs in 2025",
      excerpt: "Essential security tools including Palo Alto, Zscaler, F5, CrowdStrike, and Tenable for modern enterprises.",
      category: "News & Updates",
      date: "May 10, 2025",
      readTime: "7 min read",
      image: "https://placehold.co/600x400/0891b2/ffffff?text=Top+Security+Tools",
      author: "Emily Rodriguez",
      tags: ["Tools", "Enterprise", "2025"]
    }
  ];

  // Filter articles based on active category
  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  // Navigation categories
  const categories = [
    "All",
    "Firewalls",
    "Secure Web Gateway",
    "Load Balancing",
    "Zero Trust",
    "Cloud Security",
    "SIEM & SOAR",
    "Endpoint Security",
    "Vulnerability Mgmt",
    "Network Monitoring",
    "How-To Guides",
    "Comparisons",
    "News & Updates"
  ];

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-red-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white">SecTechHub</h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-blue-200 transition">Home</a>
              <a href="#" className="text-white hover:text-blue-200 transition">Firewalls</a>
              <a href="#" className="text-white hover:text-blue-200 transition">Zscaler</a>
              <a href="#" className="text-white hover:text-blue-200 transition">F5</a>
              <a href="#" className="text-white hover:text-blue-200 transition">Zero Trust</a>
              <a href="#" className="text-white hover:text-blue-200 transition">Guides</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-blue-800 text-white hover:bg-blue-700 transition"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
              <div className="relative hidden sm:block">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-2 rounded-full bg-blue-800 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-blue-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <button className="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Trusted Source for Enterprise Network Security</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">In-depth guides, product comparisons, and architecture diagrams for Palo Alto, Zscaler, F5, and other enterprise security solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-semibold transition">
              View All Guides
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Get Weekly Network Security Briefings</h3>
              <p className="text-gray-600 dark:text-gray-300">Stay updated with the latest in enterprise security, product updates, and expert guides.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-medium">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{article.author}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{article.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                      Read More →
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Quick Access */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Enterprise Security Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Palo Alto", color: "bg-red-600", icon: "🔥" },
              { name: "Zscaler", color: "bg-blue-600", icon: "🌐" },
              { name: "F5", color: "bg-green-600", icon: "⚖️" },
              { name: "Fortinet", color: "bg-yellow-600", icon: "🛡️" },
              { name: "Cisco", color: "bg-gray-600", icon: "☁️" },
              { name: "Splunk", color: "bg-orange-600", icon: "📊" }
            ].map((vendor, index) => (
              <div 
                key={index}
                className={`${vendor.color} rounded-xl p-6 text-white text-center hover:scale-105 transition cursor-pointer`}
              >
                <div className="text-3xl mb-3">{vendor.icon}</div>
                <h3 className="font-bold text-lg">{vendor.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-red-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">SecTechHub</h3>
              </div>
              <p className="text-gray-400 mb-4">Your comprehensive resource for enterprise network security technologies and best practices.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">FB</a>
                <a href="#" className="text-gray-400 hover:text-white transition">TW</a>
                <a href="#" className="text-gray-400 hover:text-white transition">LI</a>
                <a href="#" className="text-gray-400 hover:text-white transition">YT</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Palo Alto Firewalls</a></li>
                <li><a href="#" className="hover:text-white transition">Zscaler ZIA/ZPA</a></li>
                <li><a href="#" className="hover:text-white transition">F5 BIG-IP</a></li>
                <li><a href="#" className="hover:text-white transition">Splunk SIEM</a></li>
                <li><a href="#" className="hover:text-white transition">CrowdStrike EDR</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">How-To Guides</a></li>
                <li><a href="#" className="hover:text-white transition">Architecture Diagrams</a></li>
                <li><a href="#" className="hover:text-white transition">Configuration Snippets</a></li>
                <li><a href="#" className="hover:text-white transition">Comparison Tables</a></li>
                <li><a href="#" className="hover:text-white transition">Lab Exercises</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SecTechHub. All rights reserved. This site is for educational purposes only.</p>
            <p className="mt-2 text-sm">Palo Alto, Zscaler, F5 and other product names are trademarks of their respective companies.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
