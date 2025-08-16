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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DevOps Engineer with a passion for automation and cloud technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a dedicated DevOps Engineer with extensive experience in designing and implementing 
              robust CI/CD pipelines, managing cloud infrastructure, and optimizing deployment processes. 
              My expertise spans across multiple cloud platforms, containerization technologies, and 
              infrastructure as code tools.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in the power of automation to transform software delivery, reduce manual errors, 
              and enable teams to focus on innovation. My approach combines technical excellence with 
              collaborative teamwork to deliver reliable, scalable solutions that drive business success.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not optimizing infrastructure or debugging deployment pipelines, you can find me 
              exploring new technologies, contributing to open-source projects, or sharing knowledge 
              with the DevOps community.
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
                className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-6 text-center card-hover"
              >
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

