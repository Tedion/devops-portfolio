import React from 'react'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/Tedion',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://linkedin.com/in/teddy-abera',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      url: 'https://twitter.com/teddy_abera',
      label: 'Twitter'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform mb-4"
            >
              Teddy Abera
            </button>
            <p className="text-gray-400 mb-4 max-w-md">
              DevOps Engineer passionate about building reliable, scalable infrastructure 
              and helping teams deliver software faster and more securely.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                <a 
                  href="mailto:teddy.abera@example.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  teddy.abera@example.com
                </a>
              </p>
              <p>Available for Remote Work</p>
              <p>
                <a
                  href="#contact"
                  onClick={() => scrollToSection('#contact')}
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  Let's connect →
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
            <span>© {currentYear} Teddy Abera. Made with</span>
            <Heart className="text-red-500 mx-1" size={16} />
            <span>and lots of ☕</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            <span>Built with React, Tailwind CSS & Framer Motion</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  )
}

export default Footer

