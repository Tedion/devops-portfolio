import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'Tech Innovations Ltd.',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Led the transformation of legacy infrastructure to cloud-native solutions, reducing deployment time by 80% and improving system reliability to 99.9% uptime.',
      achievements: [
        'Architected and implemented Kubernetes-based microservices platform serving 1M+ users',
        'Designed CI/CD pipelines serving 50+ development teams with automated testing and deployment',
        'Established comprehensive monitoring and observability practices reducing MTTR by 70%',
        'Mentored junior engineers and led DevOps best practices adoption across organization'
      ],
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus']
    },
    {
      title: 'DevOps Engineer',
      company: 'Cloud Solutions Pro',
      location: 'San Francisco, CA',
      period: '2020 - 2022',
      description: 'Specialized in AWS cloud migrations and infrastructure automation, helping clients reduce infrastructure costs by 40% while improving performance and scalability.',
      achievements: [
        'Successfully migrated 20+ applications to AWS cloud with zero downtime',
        'Implemented Infrastructure as Code using Terraform, managing 500+ resources',
        'Built automated backup and disaster recovery solutions for enterprise clients',
        'Reduced operational costs by implementing auto-scaling and resource optimization'
      ],
      technologies: ['AWS', 'Terraform', 'Ansible', 'Jenkins', 'Docker']
    },
    {
      title: 'System Administrator',
      company: 'Enterprise Corp',
      location: 'New York, NY',
      period: '2018 - 2020',
      description: 'Managed hybrid infrastructure environments and began automation initiatives that laid the foundation for DevOps transformation.',
      achievements: [
        'Maintained 100+ servers across multiple data centers with 99.5% uptime',
        'Implemented configuration management with Ansible, reducing manual tasks by 60%',
        'Established backup and monitoring procedures for critical business applications',
        'Led security hardening initiatives and compliance audits'
      ],
      technologies: ['Linux', 'VMware', 'Ansible', 'Nagios', 'Bash']
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
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

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

