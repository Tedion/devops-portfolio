import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Container, GitBranch, Server, BarChart3, Terminal } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Container,
      title: 'Containerization',
      skills: ['Docker', 'Kubernetes', 'Helm', 'OpenShift'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GitBranch,
      title: 'CI/CD',
      skills: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Azure DevOps'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Observability',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'DataDog'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Terminal,
      title: 'Programming & Scripting',
      skills: ['Python', 'Bash', 'Go', 'JavaScript'],
      color: 'from-teal-500 to-blue-500'
    }
  ]

  const certifications = [
    {
      title: 'Advanced Kubernetes',
      issuer: 'LinkedIn Learning',
      issued: 'Apr 2025',
      expires: '',
      credentialId: 'bce78c6a65350da61f9bcfd9c1eb5fb8d3c3575a9ea7437a86f10d7a33d42cd5',
      skills: ['Kubernetes']
    },
    {
      title: 'Advanced Terraform',
      issuer: 'LinkedIn Learning',
      issued: 'Mar 2025',
      expires: 'May 2028',
      credentialId: 'ec8d3f2289c0ae7ff0fe9fb42af32ddd11e878d2c79e683c1cbfd528519063b2',
      skills: ['Terraform']
    },
    {
      title: 'Build a CI/CD Pipeline',
      issuer: 'LinkedIn Learning',
      issued: 'Mar 2025',
      expires: '',
      credentialId: '',
      skills: ['DevOps', 'Continuous Integration & Delivery (CI/CD)']
    },
    {
      title: 'DevOps Foundations: Site Reliability Engineering',
      issuer: 'LinkedIn Learning',
      issued: 'Mar 2025',
      expires: 'Jun 2030',
      credentialId: 'a77552ad4a325ad0aa7faa39b1809040c404f62bbc38a1be220c3e3716a9c72a',
      skills: ['DevOps', 'Site Reliability Engineering (SRE)']
    },
    {
      title: 'Running Kubernetes on AWS (EKS)',
      issuer: 'LinkedIn Learning',
      issued: 'Mar 2025',
      expires: 'Aug 2028',
      credentialId: '4611efa804745b3ee9437d355f00a1e264cc3e368f5c192cdb8a9825ee9439f9',
      skills: ['Kubernetes', 'Amazon EKS', 'AWS']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I work with to build and maintain robust infrastructure
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} rounded-lg p-3 mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c) => (
              <div key={c.title + c.issued} className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-left">
                <div className="text-primary-600 text-sm font-semibold mb-1">{c.issuer}</div>
                <h4 className="font-semibold text-gray-900">{c.title}</h4>
                <div className="text-gray-600 text-sm mt-1">
                  Issued {c.issued}{c.expires ? ` · Expires ${c.expires}` : ''}
                </div>
                {c.credentialId && (
                  <div className="text-xs text-gray-500 mt-2 break-all">
                    Credential ID: {c.credentialId}
                  </div>
                )}
                {c.skills && c.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {c.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium">{s}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

