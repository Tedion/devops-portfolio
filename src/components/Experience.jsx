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
        company: 'Government Digital Transformation Project',
        location: 'Ethiopia · Government',
        period: 'July 2025 - Present',
        description: `Leading DevOps implementation for Ethiopian Agricultural Transformation Institute (ATI), the Ministry of Women and Social Affairs (MoWSA), and the Ethiopian Disaster Risk Management Commission (EDRMC), aimed at leveraging digital solutions to transform lives across the country.

Through these partnerships, OpenG2P is supporting G2P systems as part of Ethiopia's Fayda ID–enabled digital transformation journey.

ATI × OpenG2P
Implementing a robust, interoperable farmer profile and a comprehensive database of uniquely identified smallholder farmers and farm information. The farmer registry will enable effective digital agriculture services by multiple stakeholders and will be introduced as an open-source platform, allowing private and public entities to collaborate and offer services with farmers' consent.

MoWSA × OpenG2P
Implementing a feature-rich, robust social registry; efficient benefits management and delivery system; enabling secure data exchange between MoWSA and other departments; and facilitating digital cash transfers—supporting national objectives of poverty alleviation, transparent and equitable access, and sustainable livelihoods.

EDRMC × OpenG2P
Implementing an efficient Program and Beneficiary Management System to enable better data collection and management, deliver benefits, and monitor performance for disaster response (e.g., droughts, floods), including support for internally displaced persons (IDPs).`,
        achievements: [
          'Architected dual-infrastructure across Ethio Telecom cloud and MoWSA on-premises; ATI tele-cloud and on-premises; and EDRMC tele-cloud',
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
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in DevOps and cloud engineering, building scalable solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-800"></div>

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
                  <div className="bg-gray-900 rounded-xl p-6 card-hover border border-gray-800">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-primary-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center text-gray-300 mb-2">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                      {exp.location && (
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    )}

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
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
                              className="px-2 py-1 bg-gray-800 text-gray-200 rounded text-xs font-medium"
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

