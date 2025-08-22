import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Cloud, Container, Shield, BarChart3 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'National OpenG2P Platform Infrastructure',
      description: 'Designed and built the core infrastructure for Ethiopia\'s national OpenG2P platform with secure, highly-available Kubernetes, SSO, and network overlays.',
      icon: Cloud,
      technologies: ['RKE2', 'Rancher', 'Istio', 'Keycloak', 'XCP-ng', 'WireGuard', 'Helm', 'Terraform'],
      features: [
        'Enterprise-grade RKE2 clusters managed with Rancher',
        'Zero-trust SSO with Keycloak and fine-grained RBAC',
        'Service mesh traffic policies and mTLS via Istio',
        'HA storage and hardware RAID for durability',
        'Secure site-to-site connectivity using WireGuard'
      ],
      github: '#',
      demo: '#',
      image: '🏛️'
    },
    {
      title: 'Enterprise SMS Gateway Backend',
      description: 'Scalable backend integrating with SMS Gateway for Android. Supports multi-device, multi-location, multi-SIM, and secure real-time webhooks with n8n.',
      icon: Cloud,
      technologies: ['Node.js', 'Express', 'MySQL', 'Axios', 'n8n', 'HMAC', 'Android Gateway', 'Docker'],
      features: [
        'Multi-device with sticky routing and auto-registration',
        'Multi-location and multi-SIM support with rotation policies',
        'Real-time webhooks to n8n with HMAC-SHA256 verification',
        'Full message lifecycle tracking and reply context preservation',
        'Secure API tokens and rate-limiting'
      ],
      github: '#',
      demo: '#',
      image: '📡'
    },
    {
      title: 'Estate Scraper – Production Setup (Hostinger-Ready)',
      description: 'Hardened end-to-end stack for estate scraping with API + Worker + Redis, proxy-ready crawlers, and n8n integration. One-click scripts for VPS setup.',
      icon: BarChart3,
      technologies: ['Express', 'Zod', 'Redis', 'Docker Compose', 'Crawlee', 'Puppeteer-stealth', 'PostgreSQL', 'n8n'],
      features: [
        'API with validation, CORS, rate limiting and job/auth tokens',
        'Worker with proxy support and bandwidth-friendly blocking',
        'Graceful shutdown of Redis/DB; health and queue status endpoints',
        'DB schema + migrations for listings and snapshots',
        'Hostinger scripts for setup, migration and end-to-end tests'
      ],
      github: '#',
      demo: '#',
      image: '🏠'
    },
    {
      title: 'USSD & Mobile Banking Platforms (Multi-Bank)',
      description: 'Delivered high-availability mobile banking for Siinqee, Hijra, Wegagen and others with secure messaging, SSO, CI/CD, and observability.',
      icon: Container,
      technologies: ['Docker', 'Kubernetes', 'Nginx', 'ActiveMQ', 'WildFly', 'MySQL', 'Keycloak', 'Jenkins', 'ELK', 'Zabbix', 'Grafana'],
      features: [
        'Reverse proxy/load balancing and secure messaging (ActiveMQ)',
        'HA deployments with autoscaling and failover',
        'Jenkins pipelines for Maven apps; minutes-not-hours releases',
        'Centralized logging + dashboards (ELK, Zabbix, Grafana)',
        'SSO via Keycloak and heartbeat-based HA'
      ],
      github: '#',
      demo: '#',
      image: '🏦'
    },
    {
      title: 'Ethiopia Tax Payment Portal (MoR)',
      description: 'Clustered tax payment platform with Kubernetes, GitLab CI, Vault secrets, and robust logging/monitoring for production operations.',
      icon: Shield,
      technologies: ['Kubernetes', 'Ansible', 'GitLab CI', 'HashiCorp Vault', 'PostgreSQL', 'Keycloak', 'ELK', 'Superset', 'Jasper'],
      features: [
        'K8s orchestration with Ansible-driven configuration',
        'Protected job submission and admin queue inspect endpoints',
        'Vault-managed secrets and secure SSO (Keycloak)',
        'ELK-based log analytics and business reporting (Superset/Jasper)',
        'End-to-end health checks and resilience policies'
      ],
      github: '#',
      demo: '#',
      image: '🧾'
    },
    {
      title: 'Mobile Banking Platform Modernization',
      description: 'Containerized Java-based mobile banking workloads and introduced CI/CD and centralized logging for enterprise financial services.',
      icon: Container,
      technologies: ['Docker', 'Kubernetes', 'Nginx', 'ActiveMQ', 'WildFly', 'MySQL', 'Jenkins', 'ELK'],
      features: [
        '99.95% uptime across critical banking services',
        'Jenkins pipelines reduced deploys from 4h to 15m',
        'Centralized logs with ELK and actionable alerts',
        'Hybrid cloud with cost optimization (~35%)'
      ],
      github: '#',
      demo: '#',
      image: '💳'
    },
    {
      title: 'Cloud-Native Platform for AI/Automation Workloads',
      description: 'Provisioned GPU-ready RKE2 clusters and standardized Helm-based deployments for internal platform teams.',
      icon: BarChart3,
      technologies: ['RKE2', 'Terraform', 'Terragrunt', 'Helm', 'Teleport', 'Prometheus', 'Grafana', 'Mimir'],
      features: [
        'GPU-enabled clusters for data and automation apps',
        'Shared Helm stacks for 5+ environments',
        'Teleport for secure, identity-aware access',
        'Observability via Prometheus/Grafana/Mimir'
      ],
      github: '#',
      demo: '#',
      image: '🤖'
    },
    {
      title: 'Beneficiary Data Migration to OpenG2P',
      description: 'Planned and implemented data migration workflows from ODK to OpenG2P with validation, auditability, and rollbacks.',
      icon: Shield,
      technologies: ['ODK', 'OpenG2P', 'Python', 'Airflow (planned)', 'PostgreSQL'],
      features: [
        'Schema mapping and transformation planning',
        'Validation and reconciliation checks',
        'Rollback strategy and audit trails',
        'Incremental migration pipelines (phased)'
      ],
      github: '#',
      demo: '#',
      image: '📥'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-olive-400 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Work that reflects real impact across government, banking, and platform engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg overflow-hidden card-hover border border-gray-800"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{project.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-olive-400 mb-2">{project.title}</h3>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="text-gray-300 hover:text-primary-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-300 hover:text-primary-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-gray-800">
                <h4 className="font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="p-6">
                <h4 className="font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <a
            href="https://github.com/Tedion"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

