import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  const avatarUrl = (
    import.meta.env.VITE_AVATAR_URL ||
    'https://api.dicebear.com/7.x/notionists/svg?seed=DevOpsEngineer&backgroundColor=0b1220&backgroundType=gradientLinear&radius=50'
  )

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Open to Remote Opportunities
              </div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              >
                Hi, I'm{' '}
                <span className="gradient-text">Teddy Abera</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl lg:text-3xl font-medium text-gray-300"
              >
                DevOps Engineer & Cloud Architect
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-300 max-w-2xl leading-relaxed"
              >
                Passionate about automating infrastructure, optimizing CI/CD pipelines, 
                and building scalable cloud solutions. I specialize in AWS, Kubernetes, 
                Docker, and modern DevOps practices to help teams deliver faster and more reliably.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary inline-flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </button>
              <a
                href="https://docs.google.com/document/d/1LCKshjc6qhh0v4ZMrlcLvtqtSM_Vq9kw/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex space-x-6"
            >
              <a 
                href="https://github.com/Tedion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/teddy-abera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:tedionabera@gmail.com"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center animate-float">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img
                    src={avatarUrl}
                    alt="Profile avatar"
                    className="w-48 h-48 drop-shadow-md object-cover"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = 'https://api.dicebear.com/7.x/notionists/svg?seed=DevOpsEngineer&backgroundColor=0b1220&backgroundType=gradientLinear&radius=50' }}
                  />
                </div>
              </div>
              
              {/* Clean avatar focus (removed floating/tool icons) */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="text-gray-300 hover:text-primary-400 transition-colors duration-300 animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

