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
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-primary-600 text-2xl mb-2">☁️</div>
              <h4 className="font-semibold text-gray-900">AWS Solutions Architect</h4>
              <p className="text-gray-600 text-sm">Associate Level</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-primary-600 text-2xl mb-2">⚙️</div>
              <h4 className="font-semibold text-gray-900">Kubernetes Administrator</h4>
              <p className="text-gray-600 text-sm">CKA Certified</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-primary-600 text-2xl mb-2">🔧</div>
              <h4 className="font-semibold text-gray-900">Terraform Associate</h4>
              <p className="text-gray-600 text-sm">HashiCorp Certified</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

