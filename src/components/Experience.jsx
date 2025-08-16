import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Backend/DevOps Engineer',
      company: 'Centriweb - Remote, Auckland, New Zealand',
      location: 'Remote · Auckland, NZ',
      period: 'June 2025 - Present',
      description: 'Delivering backend and DevOps solutions supporting scalable, cloud-based applications for international clients.',
      achievements: [
        'Implementing infrastructure automation with Terraform for consistent and auditable deployments',
        'Streamlining CI/CD pipelines and deployment strategies to accelerate release cycles',
        'Monitoring and maintaining cloud resources for performance, reliability, and cost-efficiency',
        'Driving continuous improvement by integrating additional DevOps tools to optimize workflows'
      ],
      technologies: ['Terraform', 'CI/CD', 'Cloud', 'Automation']
    },
    {
      title: 'OpenG2P Platform DevOps Engineer',
      company: 'Atlas Computer Technology - Government Digital Transformation Project',
      location: 'Ethiopia · Government',
      period: 'August 2025 - Present',
      description: "Leading DevOps implementation for Ethiopia's national OpenG2P platform for the Ministry of Women & Social Affairs.",
      achievements: [
        'Architected dual-infrastructure: Ethio Telecom cloud (7 VMs) and MOWSA on-premise (6 VMs), 85% completion',
        'Deployed enterprise Kubernetes clusters using RKE2 with Rancher, Istio service mesh, and Keycloak SSO',
        'Configured HA infrastructure with Hardware RAID 1+0, XCP-ng hypervisor, and WireGuard VPN',
        'Implementing beneficiary data migration from ODK to OpenG2P for social protection programs'
      ],
      technologies: ['RKE2', 'Rancher', 'Istio', 'Keycloak', 'XCP-ng', 'WireGuard']
    },
    {
      title: 'Senior DevOps Engineer (Cloud & Platform Team)',
      company: 'Exponent.ch - Remote Contract',
      location: 'Remote',
      period: 'April 2025 - June 2025',
      description: 'Architected scalable cloud-native infrastructure and deployment pipelines for AI/ML workloads.',
      achievements: [
        'Built RKE2 Kubernetes clusters with Terraform/Terragrunt; 40% faster deployments',
        'Managed NVIDIA GPU-enabled clusters for n8n, Langfuse, LibreChat, ClickHouse',
        'Streamlined Helm-based deployments with shared-stacks across 5+ environments',
        'Integrated Teleport for secure, identity-aware cluster access; reduced incidents by 60%',
        'Designed observability with Prometheus, Grafana, and Mimir for 99.9% visibility',
        'Led secret injection automation via Lade and 1Password (zero-trust)'
      ],
      technologies: ['RKE2', 'Terraform', 'Terragrunt', 'Helm', 'Teleport', 'Prometheus', 'Grafana', 'Mimir']
    },
    {
      title: 'DevOps Engineer',
      company: 'Atlas Computer Technology',
      location: 'Ethiopia',
      period: 'February 2023 - June 2025',
      description: 'Delivered enterprise DevOps for mobile banking platforms serving 1M+ users across 6 banks.',
      achievements: [
        'Containerized mobile banking with Docker and Kubernetes; 99.95% uptime with Nginx, ActiveMQ, WildFly, MySQL',
        'Hybrid cloud with Proxmox and AWS; optimized costs by 35%',
        'Centralized logging with ELK processing 10TB+ daily logs; real-time analytics and alerting',
        'Built Jenkins CI/CD for Maven-based Java apps; reduced deployments from 4 hours to 15 minutes'
      ],
      technologies: ['Docker', 'Kubernetes', 'Nginx', 'ActiveMQ', 'WildFly', 'MySQL', 'Proxmox', 'AWS', 'ELK', 'Jenkins']
    },
    {
      title: 'Junior DevOps Engineer',
      company: 'Atlas Computer Technology',
      location: 'Ethiopia',
      period: 'September 2021 - January 2023',
      description: 'Supported on-prem cloud infrastructure and banking solutions in UAT and production.',
      achievements: [
        'Managed Proxmox virtualization supporting 50+ VMs for banking applications',
        'Deployed and tested USSD and mobile banking solutions in UAT with 100% functional compliance',
        'Implemented security policies and monitoring with Zabbix, Grafana, and ELK',
        'Collaborated with development teams to reduce production issues by 70% through robust testing'
      ],
      technologies: ['Proxmox', 'Zabbix', 'Grafana', 'ELK']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in DevOps and cloud engineering, building scalable solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-primary-600 mb-2">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                      {exp.location && (
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                    )}

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

