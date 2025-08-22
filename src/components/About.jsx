import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Cloud, Settings, Users } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: Code2 },
    { label: 'Projects Deployed', value: '50+', icon: Cloud },
    { label: 'Systems Automated', value: '100+', icon: Settings },
    { label: 'Teams Supported', value: '10+', icon: Users },
  ]

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-olive-400 mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            DevOps Engineer with a passion for automation and cloud technologies — open to remote opportunities
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-2xl font-bold text-olive-400 mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              Mid-level DevOps Engineer with a strong foundation in building, automating, and securing scalable infrastructures across cloud and on-premise platforms. Experienced in containerization and orchestration with Docker and Kubernetes (RKE2); infrastructure automation with Terraform, Terragrunt, and Ansible; CI/CD pipelines using Jenkins and GitLab; network architecture and secure access with Nginx, Apache, HAProxy, and Keycloak; and monitoring/logging with Zabbix, Prometheus, Grafana, and the ELK stack. Committed to delivering robust solutions that enhance performance, security, and deployment agility in dynamic environments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              DevOps/SRE engineer specializing in Kubernetes platforms, secure networking, and high-availability
              systems across government, banking, and platform engineering. I\'ve delivered 99.95% uptime for
              mobile banking, cut deployment times from 4 hours to 15 minutes with CI/CD, and reduced infra costs
              by ~35% through hybrid cloud optimization.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My toolkit includes RKE2 with Rancher, Istio mTLS/service policies, Keycloak SSO, Jenkins/GitHub Actions,
              Terraform/Terragrunt, Prometheus/Grafana/ELK, Proxmox/XCP-ng, and WireGuard. I build enterprise-grade
              Kubernetes clusters, standardize Helm-based deployments, and implement robust observability and incident
              response practices.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Currently leading Ethiopia\'s OpenG2P initiatives with ATI, MoWSA, and EDRMC—standing up secure, scalable
              platforms for farmer registries, social registries, and benefits delivery; planning ODK → OpenG2P data
              migration with validation and auditability. Open to remote opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 text-center card-hover border border-gray-800"
              >
                <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-olive-400 mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

