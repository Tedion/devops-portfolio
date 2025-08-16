import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Cloud, Container, Shield, BarChart3 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Cloud Infrastructure Platform',
      description: 'Designed and implemented a multi-cloud infrastructure solution using Terraform, spanning AWS, Azure, and GCP with automated failover capabilities and cost optimization.',
      icon: Cloud,
      technologies: ['Terraform', 'AWS', 'Azure', 'GCP', 'Python'],
      features: [
        'Auto-scaling across multiple cloud providers',
        'Cost optimization with 40% reduction',
        'Disaster recovery automation',
        'Infrastructure monitoring and alerting'
      ],
      github: '#',
      demo: '#',
      image: '🏗️'
    },
    {
      title: 'Kubernetes CI/CD Pipeline',
      description: 'Built a complete CI/CD pipeline using GitHub Actions, deploying microservices to Kubernetes with automated testing, security scanning, and progressive deployments.',
      icon: Container,
      technologies: ['Kubernetes', 'GitHub Actions', 'Docker', 'Helm', 'ArgoCD'],
      features: [
        'Automated security scanning',
        'Blue-green deployments',
        'Rollback mechanisms',
        'Multi-environment promotion'
      ],
      github: '#',
      demo: '#',
      image: '🚀'
    },
    {
      title: 'Monitoring & Observability Stack',
      description: 'Implemented comprehensive monitoring solution using Prometheus, Grafana, and ELK stack for real-time application and infrastructure monitoring with custom dashboards.',
      icon: BarChart3,
      technologies: ['Prometheus', 'Grafana', 'Elasticsearch', 'Kibana', 'AlertManager'],
      features: [
        'Real-time metrics and logging',
        'Custom alerting rules',
        'Performance dashboards',
        'SLA monitoring and reporting'
      ],
      github: '#',
      demo: '#',
      image: '📊'
    },
    {
      title: 'Secure Infrastructure Automation',
      description: 'Developed secure infrastructure automation with Ansible, implementing security best practices, compliance scanning, and automated remediation for enterprise environments.',
      icon: Shield,
      technologies: ['Ansible', 'AWS Config', 'Security Hub', 'Compliance', 'Python'],
      features: [
        'Automated compliance checking',
        'Security hardening playbooks',
        'Vulnerability remediation',
        'Audit trail and reporting'
      ],
      github: '#',
      demo: '#',
      image: '🔒'
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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Some of my recent DevOps implementations and infrastructure solutions
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
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{project.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
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
          <p className="text-lg text-gray-600 mb-6">
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

