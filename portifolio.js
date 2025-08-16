import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hi! I\'m Teddy Abera. How can I help you with DevOps solutions?' }
  ]);
  const [messageInput, setMessageInput] = useState('');

  // Technology icons as inline SVGs for reliability
  const TechIcon = ({ type, className = "w-6 h-6" }) => {
    const icons = {
      docker: (
        <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m0 2.715h2.12a.186.186 0 00.184-.185V9.006a.186.186 0 00-.185-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887a.186.186 0 00.186.186m-2.928 0h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H2.208a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185"/>
        </svg>
      ),
      kubernetes: (
        <svg className={className} viewBox="0 0 24 24" fill="#326CE5">
          <path d="M12.204 8.044c-.033-.013-.073-.013-.106 0L9.07 9.252c-.036.015-.063.043-.074.08l-.946 3.493c-.012.045.003.093.038.124l2.65 2.419c.03.028.071.041.112.041.041 0 .082-.013.112-.041l2.65-2.42c.035-.03.05-.078.038-.123l-.946-3.493c-.011-.037-.038-.065-.074-.08l-3.028-1.208z"/>
        </svg>
      ),
      aws: (
        <svg className={className} viewBox="0 0 24 24" fill="#FF9900">
          <path d="M6.763 10.036c0-.296.032-.535.088-.71.064-.176.144-.368.256-.576a.8.8 0 01.112-.16c.048-.064.080-.1.080-.14a.36.36 0 00-.16-.24l-.528-.352a.405.405 0 00-.448-.064c-.336.176-.617.44-.842.784-.226.345-.336.744-.336 1.201 0 .721.144 1.28.424 1.671.288.4.704.592 1.247.592.177 0 .368-.032.569-.08.2-.064.4-.144.585-.256.088-.048.152-.112.177-.176.032-.064.048-.144.048-.24v-.753c0-.304-.064-.535-.2-.7-.128-.167-.352-.256-.672-.256-.144 0-.296.016-.457.064-.16.032-.32.08-.48.144z"/>
        </svg>
      ),
      terraform: (
        <svg className={className} viewBox="0 0 24 24" fill="#7B42BC">
          <path d="M8.991 3.885L14.43 6.89v6.01l-5.439-3.005v-6.01zM15.57 6.89l5.439-3.005v6.01l-5.439 3.005V6.89zM8.991 16.115l5.439 3.005v6.01l-5.439-3.005v-6.01zM2.412 9.885l5.439 3.005v6.01l-5.439-3.005v-6.01z"/>
        </svg>
      ),
      jenkins: (
        <svg className={className} viewBox="0 0 24 24" fill="#D33833">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      prometheus: (
        <svg className={className} viewBox="0 0 24 24" fill="#E6522C">
          <path d="M12 2L1.5 8v8L12 22l10.5-6V8L12 2z"/>
        </svg>
      ),
      grafana: (
        <svg className={className} viewBox="0 0 24 24" fill="#F46800">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      azure: (
        <svg className={className} viewBox="0 0 24 24" fill="#0078D4">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      ansible: (
        <svg className={className} viewBox="0 0 24 24" fill="#EE0000">
          <path d="M12 2l10 20H2L12 2zm0 3.84L5.65 19h12.7L12 5.84z"/>
        </svg>
      ),
      nginx: (
        <svg className={className} viewBox="0 0 24 24" fill="#009639">
          <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
        </svg>
      ),
      mysql: (
        <svg className={className} viewBox="0 0 24 24" fill="#4479A1">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      ),
      postgresql: (
        <svg className={className} viewBox="0 0 24 24" fill="#336791">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      ),
      gitlab: (
        <svg className={className} viewBox="0 0 24 24" fill="#FC6D26">
          <path d="M12 22L2 9h4l6 13 6-13h4L12 22z"/>
        </svg>
      ),
      github: (
        <svg className={className} viewBox="0 0 24 24" fill="#181717">
          <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.479C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"/>
        </svg>
      ),
      elasticsearch: (
        <svg className={className} viewBox="0 0 24 24" fill="#005571">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      )
    };
    
    return icons[type] || <div className={className}></div>;
  };

  // Chat functionality
  const sendMessage = () => {
    if (!messageInput.trim()) return;
    
    const newMessages = [...chatMessages, { type: 'user', message: messageInput }];
    setChatMessages(newMessages);
    setMessageInput('');
    
    // Auto-reply logic
    setTimeout(() => {
      let reply = "Thanks for your message! I'll get back to you soon. Feel free to reach me directly at tedionabera@gmail.com";
      
      if (messageInput.toLowerCase().includes('kubernetes') || messageInput.toLowerCase().includes('k8s')) {
        reply = "Great! I have 4+ years of experience with Kubernetes and RKE2. I've deployed container orchestration for major Ethiopian banks and government projects. I can help with K8s migrations, scaling, and DevOps implementations.";
      } else if (messageInput.toLowerCase().includes('bank') || messageInput.toLowerCase().includes('finance')) {
        reply = "Perfect! I specialize in banking infrastructure and have worked with 6+ Ethiopian banks including ZamZam, Shabelle, and Rammis. I understand Islamic banking principles and can help with financial sector DevOps and compliance.";
      } else if (messageInput.toLowerCase().includes('aws') || messageInput.toLowerCase().includes('cloud')) {
        reply = "Excellent! I'm AWS experienced and have deployed cloud-native solutions for banking and government. I can assist with your cloud infrastructure, migrations, and cost optimization.";
      } else if (messageInput.toLowerCase().includes('hire') || messageInput.toLowerCase().includes('project') || messageInput.toLowerCase().includes('work')) {
        reply = "I'm available for DevOps consulting, banking infrastructure, and government digital transformation projects! Let's discuss your requirements. You can reach me at tedionabera@gmail.com or through my Upwork profile.";
      } else if (messageInput.toLowerCase().includes('terraform') || messageInput.toLowerCase().includes('iac')) {
        reply = "I have 3+ years with Terraform and Terragrunt! I've used Infrastructure as Code for major banking deployments and government projects. I can help with IaC best practices and implementations.";
      } else if (messageInput.toLowerCase().includes('government') || messageInput.toLowerCase().includes('openg2p')) {
        reply = "I'm currently leading the OpenG2P platform implementation for Ethiopia's Ministry of Women & Social Affairs. I have experience with government-scale infrastructure and compliance requirements.";
      }
      
      setChatMessages(prev => [...prev, { type: 'bot', message: reply }]);
    }, 1000);
  };

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              💻 Teddy Abera
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.home ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Senior DevOps Engineer
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Teddy Abera Danamo
              </h1>
              <p className="text-xl text-blue-400 mb-6 font-semibold">
                Banking Infrastructure Specialist & Government Cloud Architect
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Transforming Ethiopian financial sector and government services through enterprise-scale DevOps implementations. 
                Specialized in Kubernetes orchestration, Islamic banking infrastructure, OpenG2P platforms, and high-availability 
                systems serving 1M+ customers.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105"
                >
                  🚀 View Projects
                </a>
                <a
                  href="https://linkedin.com/in/teddy-abera"
                  target="_blank"
                  className="border border-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~0135faffc8553a04b7"
                  target="_blank"
                  className="border border-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
                >
                  💎 Upwork Profile
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { number: "8+", label: "Major Projects" },
                  { number: "80%", label: "Deployment Time Reduction" },
                  { number: "99.9%", label: "System Uptime" },
                  { number: "1M+", label: "Users Served" }
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700 hover:border-blue-500 transition-all">
                    <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Sphere */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center animate-pulse">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-75 animate-spin" style={{animationDuration: '20s'}}></div>
                <div className="relative grid grid-cols-3 gap-4 z-10">
                  {['docker', 'kubernetes', 'aws', 'terraform', 'jenkins', 'prometheus', 'grafana', 'ansible', 'azure'].map((tech, index) => (
                    <div key={tech} className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
                      <TechIcon type={tech} className="w-8 h-8" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive skill set covering enterprise DevOps, cloud infrastructure, and financial sector compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Container Orchestration */}
            <div className={`bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all transform ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex items-center gap-3 mb-6">
                <TechIcon type="kubernetes" className="w-8 h-8" />
                <h3 className="text-xl font-bold">Container Orchestration</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Kubernetes (RKE2)", level: 95, icon: "kubernetes", experience: "Expert - 4 years" },
                  { name: "Docker & Registry", level: 98, icon: "docker", experience: "Expert - 5 years" },
                  { name: "Helm Charts", level: 90, icon: "kubernetes", experience: "Advanced - 3 years" }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-blue-500/5 rounded-lg hover:bg-blue-500/10 transition-all">
                    <TechIcon type={skill.icon} className="w-6 h-6" />
                    <div className="flex-1">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-gray-400">{skill.experience}</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Platforms */}
            <div className={`bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all transform ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: '200ms'}}>
              <div className="flex items-center gap-3 mb-6">
                <TechIcon type="aws" className="w-8 h-8" />
                <h3 className="text-xl font-bold">Cloud Platforms</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Amazon Web Services", level: 92, icon: "aws", experience: "Expert - 4 years" },
                  { name: "Microsoft Azure", level: 85, icon: "azure", experience: "Advanced - 3 years" },
                  { name: "OpenShift & OpenStack", level: 75, icon: "kubernetes", experience: "Intermediate - 2 years" }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-blue-500/5 rounded-lg hover:bg-blue-500/10 transition-all">
                    <TechIcon type={skill.icon} className="w-6 h-6" />
                    <div className="flex-1">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-gray-400">{skill.experience}</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CI/CD & Automation */}
            <div className={`bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all transform ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: '400ms'}}>
              <div className="flex items-center gap-3 mb-6">
                <TechIcon type="jenkins" className="w-8 h-8" />
                <h3 className="text-xl font-bold">CI/CD & Automation</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Jenkins Pipelines", level: 94, icon: "jenkins", experience: "Expert - 4 years" },
                  { name: "GitLab CI/CD", level: 88, icon: "gitlab", experience: "Advanced - 3 years" },
                  { name: "GitHub Actions", level: 82, icon: "github", experience: "Advanced - 2 years" }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-blue-500/5 rounded-lg hover:bg-blue-500/10 transition-all">
                    <TechIcon type={skill.icon} className="w-6 h-6" />
                    <div className="flex-1">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-gray-400">{skill.experience}</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure as Code */}
            <div className={`bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all transform ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: '600ms'}}>
              <div className="flex items-center gap-3 mb-6">
                <TechIcon type="terraform" className="w-8 h-8" />
                <h3 className="text-xl font-bold">Infrastructure as Code</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Terraform & Terragrunt", level: 91, icon: "terraform", experience: "Expert - 3 years" },
                  { name: "Ansible Automation", level: 87, icon: "ansible", experience: "Advanced - 3 years" },
                  { name: "OpenTofu", level: 70, icon: "terraform", experience: "Intermediate - 1 year" }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-blue-500/5 rounded-lg hover:bg-blue-500/10 transition-all">
                    <TechIcon type={skill.icon} className="w-6 h-6" />
                    <div className="flex-1">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-gray-400">{skill.experience}</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monitoring & Observability */}
            <div className={`bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all transform ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: '800ms'}}>
              <div className="flex items-center gap-3 mb-6">
                <TechIcon type="prometheus" className="w-8 h-8" />
                <h3 className="text-xl font-bold">Monitoring & Observability</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Prometheus & AlertManager", level: 93, icon: "prometheus", experience: "Expert - 4 years" },
                  { name: "Grafana Dashboards", level: 95, icon: "grafana", experience: "Expert - 4 years" },
                  { name: "ELK Stack", level: 86, icon: "elasticsearch", experience: "Advanced - 3 years" }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-blue-500/5 rounded-lg hover:bg-blue-500/10 transition-all">
                    <TechIcon type={skill.icon} className="w-6 h-6" />
                    <div className="flex-1">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-gray-400">{skill.experience}</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security & Databases */}
            <div className={`bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all transform ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: '1000ms'}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">🔒</div>
                <h3 className="text-xl font-bold">Security & Databases</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "HashiCorp Vault", level: 84, icon: "terraform", experience: "Advanced - 2 years" },
                  { name: "Keycloak SSO", level: 89, icon: "kubernetes", experience: "Advanced - 3 years" },
                  { name: "PostgreSQL & MySQL", level: 88, icon: "postgresql", experience: "Advanced - 4 years" }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-blue-500/5 rounded-lg hover:bg-blue-500/10 transition-all">
                    <TechIcon type={skill.icon} className="w-6 h-6" />
                    <div className="flex-1">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-gray-400">{skill.experience}</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-300">
              Building mission-critical infrastructure across Ethiopia's financial and government sectors
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-600"></div>
              
              {[
                {
                  date: "June 2025 - Present",
                  title: "Backend/DevOps Engineer",
                  company: "Centriweb - Remote, Auckland, New Zealand",
                  achievements: [
                    "Delivering backend and DevOps solutions supporting scalable, cloud-based applications for international clients",
                    "Implementing infrastructure automation with Terraform, ensuring consistent, auditable, and repeatable cloud deployments",
                    "Collaborating cross-functionally to streamline CI/CD pipelines and deployment strategies, accelerating release cycles",
                    "Monitoring and maintaining cloud resources for performance, reliability, and cost-efficiency using industry best practices",
                    "Driving continuous improvement initiatives, integrating additional DevOps tools to optimize workflow and system resilience"
                  ]
                },
                {
                  date: "August 2025 - Present",
                  title: "OpenG2P Platform DevOps Engineer",
                  company: "Atlas Computer Technology - Government Digital Transformation Project",
                  achievements: [
                    "Leading DevOps implementation for Ethiopia's national OpenG2P (Open Government to Person) platform serving Ministry of Women & Social Affairs",
                    "Architected dual-infrastructure deployment: Ethio Telecom cloud (7 VMs) and MOWSA on-premise (6 VMs) with 85% completion rate",
                    "Deployed enterprise Kubernetes clusters using RKE2 with Rancher management, Istio service mesh, and Keycloak identity management",
                    "Configured high-availability infrastructure with Hardware RAID 1+0, XCP-ng hypervisor, and WireGuard VPN for secure remote access",
                    "Implementing comprehensive beneficiary data migration from ODK platform to OpenG2P, supporting Ethiopia's social protection programs"
                  ]
                },
                {
                  date: "April 2025 - June 2025",
                  title: "Senior DevOps Engineer (Cloud & Platform Team)",
                  company: "Exponent.ch - Remote Contract",
                  achievements: [
                    "Architected scalable cloud-native infrastructure with RKE2 Kubernetes clusters using Terraform and Terragrunt, achieving 40% faster deployment times",
                    "Deployed and managed NVIDIA GPU-enabled RKE2 Kubernetes clusters supporting AI/ML workloads including n8n, Langfuse, LibreChat, and ClickHouse",
                    "Streamlined application deployment pipelines using Helm with modularized shared-stacks, enabling rapid rollout across 5+ environments",
                    "Integrated Teleport for secure, identity-aware access to Kubernetes clusters, enhancing compliance and reducing security incidents by 60%",
                    "Designed full-stack observability layer with Prometheus, Grafana, and Mimir, achieving 99.9% system visibility and proactive issue detection",
                    "Led secret injection automation via Lade and 1Password, implementing zero-trust security principles across infrastructure"
                  ]
                },
                {
                  date: "February 2023 - June 2025",
                  title: "DevOps Engineer",
                  company: "Atlas Computer Technology",
                  achievements: [
                    "Containerized mobile banking applications with Docker and Kubernetes, serving 1M+ active users across 6 major Ethiopian banks",
                    "Configured high-availability mobile banking infrastructure with Nginx, ActiveMQ, WildFly, and MySQL, achieving 99.95% uptime",
                    "Managed hybrid cloud infrastructure using Proxmox and AWS, optimizing costs by 35% while maintaining enterprise performance",
                    "Integrated ELK stack for centralized logging, processing 10TB+ daily logs with real-time analytics and alerting",
                    "Built enterprise CI/CD pipelines with Jenkins for Maven-based Java applications, reducing deployment time from 4 hours to 15 minutes"
                  ]
                },
                {
                  date: "September 2021 - January 2023",
                  title: "Junior DevOps Engineer",
                  company: "Atlas Computer Technology",
                  achievements: [
                    "Managed on-premise cloud infrastructure using Proxmox virtualization, supporting 50+ virtual machines for banking applications",
                    "Deployed and tested USSD and mobile banking solutions in UAT environments, ensuring 100% functional compliance before production",
                    "Implemented comprehensive security policies and monitoring with Zabbix, Grafana, and ELK stack, establishing baseline security posture",
                    "Collaborated with development teams to ensure application readiness, reducing production issues by 70% through robust testing"
                  ]
                }
              ].map((job, index) => (
                <div key={index} className={`relative mb-12 ml-20 transform transition-all duration-700 ${isVisible.experience ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{transitionDelay: `${index * 300}ms`}}>
                  <div className="absolute -left-14 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
                    <div className="text-orange-400 text-sm font-semibold mb-2 uppercase tracking-wider">{job.date}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{job.title}</h3>
                    <div className="text-blue-400 font-semibold mb-4">{job.company}</div>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-green-400 mt-1 text-sm">▸</span>
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">
              Enterprise-scale infrastructure powering Ethiopia's banking ecosystem and government services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "OpenG2P National Social Protection Platform",
                type: "Government Digital Transformation",
                description: "Spearheading Ethiopia's national OpenG2P implementation for Ministry of Women & Social Affairs. Architecting dual-location infrastructure with Ethio Telecom cloud and on-premise deployment, serving beneficiary management for national social protection programs.",
                metrics: [
                  { value: "13 VMs", label: "Infrastructure Scale" },
                  { value: "85%", label: "Platform Completion" }
                ],
                tech: [
                  { name: "Kubernetes RKE2", icon: "kubernetes" },
                  { name: "Rancher", icon: "kubernetes" },
                  { name: "Istio Mesh", icon: "kubernetes" },
                  { name: "Keycloak", icon: "kubernetes" },
                  { name: "XCP-ng", icon: "kubernetes" }
                ],
                link: "#contact",
                bankEmoji: "🏛️"
              },
              {
                title: "Shabelle Bank USSD & Mobile Platform",
                type: "Islamic Banking Infrastructure",
                description: "Engineered comprehensive banking infrastructure for Shabelle Bank's digital transformation, serving Ethiopia's Somali region with Islamic banking principles. Deployed containerized USSD services and mobile banking platform supporting 500M+ ETB transactions.",
                metrics: [
                  { value: "1M+", label: "Active Users" },
                  { value: "99.8%", label: "System Uptime" }
                ],
                tech: [
                  { name: "Docker", icon: "docker" },
                  { name: "Kubernetes", icon: "kubernetes" },
                  { name: "Jenkins", icon: "jenkins" },
                  { name: "Nginx", icon: "nginx" },
                  { name: "Keycloak SSO", icon: "kubernetes" }
                ],
                link: "https://shabellebank.com/ussd/",
                bankEmoji: "🏛️"
              },
              {
                title: "ZamZam Bank Digital Banking Platform",
                type: "First Full-Fledged Interest-Free Bank",
                description: "Architected Ethiopia's most advanced Islamic banking infrastructure with ZamZam Digital mobile app and comprehensive USSD services. Implemented enterprise-grade security and compliance for 1.683 billion ETB in capital operations.",
                metrics: [
                  { value: "24/7", label: "Service Availability" },
                  { value: "50K ETB", label: "Daily Transfer Limit" }
                ],
                tech: [
                  { name: "Kubernetes", icon: "kubernetes" },
                  { name: "Terraform", icon: "terraform" },
                  { name: "Prometheus", icon: "prometheus" },
                  { name: "Grafana", icon: "grafana" },
                  { name: "Vault", icon: "terraform" }
                ],
                link: "https://zamzambank.com/mobile-bank/",
                bankEmoji: "🌙"
              },
              {
                title: "Rammis Bank Core Banking System",
                type: "Next-Generation Islamic Banking",
                description: "Deployed cutting-edge iMAL core banking system by Azentio Software in record 30-day implementation. Built cloud-native architecture supporting comprehensive Islamic banking operations with AAOIFI certification compliance.",
                metrics: [
                  { value: "30 Days", label: "Implementation Time" },
                  { value: "100%", label: "AAOIFI Compliance" }
                ],
                tech: [
                  { name: "Docker", icon: "docker" },
                  { name: "AWS Cloud", icon: "aws" },
                  { name: "Jenkins", icon: "jenkins" },
                  { name: "ELK Stack", icon: "elasticsearch" },
                  { name: "Keycloak", icon: "kubernetes" }
                ],
                link: "https://play.google.com/store/apps/details?id=et.rammis_omini&hl=en",
                bankEmoji: "⭐"
              },
              {
                title: "Ministry of Revenue Ethiopia Tax Portal",
                type: "Government Infrastructure Project",
                description: "Leading DevOps implementation for Ethiopia's national tax payment portal featuring clustered applications with enterprise security compliance. Collaborating with INSA for government-grade security standards and audit requirements.",
                metrics: [
                  { value: "National", label: "Scale Deployment" },
                  { value: "INSA", label: "Security Certified" }
                ],
                tech: [
                  { name: "Kubernetes", icon: "kubernetes" },
                  { name: "Ansible", icon: "ansible" },
                  { name: "GitLab CI/CD", icon: "gitlab" },
                  { name: "Vault", icon: "terraform" },
                  { name: "PostgreSQL", icon: "postgresql" }
                ],
                link: "#contact",
                bankEmoji: "🏛️"
              },
              {
                title: "Siinqee Bank Digital Transformation",
                type: "Mobile Banking Excellence",
                description: "Spearheaded complete DevOps transformation for Siinqee Bank's mobile banking platform with focus on high availability and performance optimization. Implemented enterprise CI/CD pipelines reducing deployment time by 85%.",
                metrics: [
                  { value: "85%", label: "Deployment Reduction" },
                  { value: "99.9%", label: "Service Uptime" }
                ],
                tech: [
                  { name: "Docker", icon: "docker" },
                  { name: "Kubernetes", icon: "kubernetes" },
                  { name: "Jenkins", icon: "jenkins" },
                  { name: "WildFly", icon: "jenkins" },
                  { name: "Keycloak", icon: "kubernetes" }
                ],
                link: "https://siinqeebank.com",
                bankEmoji: "🤝"
              }
            ].map((project, index) => (
              <div key={index} className={`bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all transform hover:scale-105 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: `${index * 200}ms`}}>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <div className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-3">
                        {project.type}
                      </div>
                    </div>
                    <div className="text-4xl ml-4 bg-white/10 rounded-lg p-2">{project.bankEmoji}</div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="bg-blue-500/10 p-3 rounded-lg text-center border border-blue-500/20">
                        <div className="text-xl font-bold text-green-400">{metric.value}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                        <TechIcon type={tech.icon} className="w-4 h-4" />
                        {tech.name}
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 text-white"
                  >
                    🔗 {project.link === "#contact" ? "Classified Project" : "View Project"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <p className="text-xl text-gray-300">
              Continuously advancing expertise with industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "kubernetes", title: "Advanced Kubernetes", provider: "LinkedIn Learning", date: "April 2025" },
              { icon: "terraform", title: "Advanced Terraform", provider: "LinkedIn Learning", date: "March 2025" },
              { icon: "jenkins", title: "Build a CI/CD Pipeline", provider: "LinkedIn Learning", date: "March 2025" },
              { icon: "prometheus", title: "DevOps Foundations: SRE", provider: "LinkedIn Learning", date: "March 2025" },
              { icon: "aws", title: "Running Kubernetes on AWS (EKS)", provider: "LinkedIn Learning", date: "March 2025" },
              { icon: "jenkins", title: "Linux Fundamentals Bootcamp", provider: "Professional Certification", date: "Completed" }
            ].map((cert, index) => (
              <div key={index} className={`bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all text-center ${isVisible.certifications ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: `${index * 200}ms`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TechIcon type={cert.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{cert.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{cert.provider}</p>
                <div className="text-orange-400 text-sm font-semibold">{cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss enterprise DevOps solutions, banking infrastructure, and government digital transformation
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              I'm passionate about transforming financial technology and government services through innovative DevOps practices. Whether you're looking to modernize banking infrastructure, implement enterprise Kubernetes solutions, deploy OpenG2P platforms, or build high-availability systems, let's collaborate to create exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📧", title: "Email", value: "tedionabera@gmail.com", link: "mailto:tedionabera@gmail.com" },
              { icon: "📱", title: "Phone", value: "+251 910 161 555", link: "tel:+251910161555" },
              { icon: "💼", title: "LinkedIn", value: "linkedin.com/in/teddy-abera", link: "https://linkedin.com/in/teddy-abera" },
              { icon: "💎", title: "Upwork", value: "Top Rated DevOps Expert", link: "https://www.upwork.com/freelancers/~0135faffc8553a04b7" },
              { icon: "🔧", title: "GitHub", value: "github.com/teddyabera", link: "https://github.com/teddyabera" },
              { icon: "📍", title: "Location", value: "Addis Ababa, Ethiopia", link: "#" }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-white">{contact.title}</h4>
                <p className="text-gray-300 break-words">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Teddy Abera Danamo. Engineered with modern web technologies and deployed using enterprise DevOps best practices. 
            Transforming Ethiopia's financial landscape and government services, one deployment at a time.
          </p>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl w-80 h-96 mb-4 flex flex-col">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-t-xl">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-white">💬 Chat with Teddy</h3>
                <button 
                  onClick={() => setChatOpen(false)}
                  className="text-white/80 hover:text-white text-xl"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-700 text-gray-200'
                  }`}>
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about DevOps, Kubernetes, Banking, Government..."
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
        
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center text-2xl"
        >
          💬
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
