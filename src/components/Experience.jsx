import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
	const experiences = [
		{
			date: 'June 2025 - Present',
			title: 'Backend/DevOps Engineer',
			company: 'Centriweb - Remote, Auckland, New Zealand',
			achievements: [
				'Delivering backend and DevOps solutions supporting scalable, cloud-based applications for international clients',
				'Implementing infrastructure automation with Terraform, ensuring consistent, auditable, and repeatable cloud deployments',
				'Collaborating cross-functionally to streamline CI/CD pipelines and deployment strategies, accelerating release cycles',
				'Monitoring and maintaining cloud resources for performance, reliability, and cost-efficiency using industry best practices',
				'Driving continuous improvement initiatives, integrating additional DevOps tools to optimize workflow and system resilience'
			]
		},
		{
			date: 'August 2025 - Present',
			title: 'OpenG2P Platform DevOps Engineer',
			company: 'Atlas Computer Technology - Government Digital Transformation Project',
			achievements: [
				"Leading DevOps implementation for Ethiopia's national OpenG2P (Open Government to Person) platform serving Ministry of Women & Social Affairs",
				'Architected dual-infrastructure deployment: Ethio Telecom cloud (7 VMs) and MOWSA on-premise (6 VMs) with 85% completion rate',
				'Deployed enterprise Kubernetes clusters using RKE2 with Rancher management, Istio service mesh, and Keycloak identity management',
				'Configured high-availability infrastructure with Hardware RAID 1+0, XCP-ng hypervisor, and WireGuard VPN for secure remote access',
				'Implementing comprehensive beneficiary data migration from ODK platform to OpenG2P, supporting Ethiopia\'s social protection programs'
			]
		},
		{
			date: 'April 2025 - June 2025',
			title: 'Senior DevOps Engineer (Cloud & Platform Team)',
			company: 'Exponent.ch - Remote Contract',
			achievements: [
				'Architected scalable cloud-native infrastructure with RKE2 Kubernetes clusters using Terraform and Terragrunt, achieving 40% faster deployment times',
				'Deployed and managed NVIDIA GPU-enabled RKE2 Kubernetes clusters supporting AI/ML workloads including n8n, Langfuse, LibreChat, and ClickHouse',
				'Streamlined application deployment pipelines using Helm with modularized shared-stacks, enabling rapid rollout across 5+ environments',
				'Integrated Teleport for secure, identity-aware access to Kubernetes clusters, enhancing compliance and reducing security incidents by 60%',
				'Designed full-stack observability layer with Prometheus, Grafana, and Mimir, achieving 99.9% system visibility and proactive issue detection',
				'Led secret injection automation via Lade and 1Password, implementing zero-trust security principles across infrastructure'
			]
		},
		{
			date: 'February 2023 - June 2025',
			title: 'DevOps Engineer',
			company: 'Atlas Computer Technology',
			achievements: [
				'Containerized mobile banking applications with Docker and Kubernetes, serving 1M+ active users across 6 major Ethiopian banks',
				'Configured high-availability mobile banking infrastructure with Nginx, ActiveMQ, WildFly, and MySQL, achieving 99.95% uptime',
				'Managed hybrid cloud infrastructure using Proxmox and AWS, optimizing costs by 35% while maintaining enterprise performance',
				'Integrated ELK stack for centralized logging, processing 10TB+ daily logs with real-time analytics and alerting',
				'Built enterprise CI/CD pipelines with Jenkins for Maven-based Java applications, reducing deployment time from 4 hours to 15 minutes'
			]
		},
		{
			date: 'September 2021 - January 2023',
			title: 'Junior DevOps Engineer',
			company: 'Atlas Computer Technology',
			achievements: [
				'Managed on-premise cloud infrastructure using Proxmox virtualization, supporting 50+ virtual machines for banking applications',
				'Deployed and tested USSD and mobile banking solutions in UAT environments, ensuring 100% functional compliance before production',
				'Implemented comprehensive security policies and monitoring with Zabbix, Grafana, and ELK stack, establishing baseline security posture',
				'Collaborated with development teams to ensure application readiness, reducing production issues by 70% through robust testing'
			]
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
					<h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
					<p className="text-xl text-gray-600">
						Building mission-critical infrastructure across Ethiopia's financial and government sectors
					</p>
				</motion.div>

				<div className="relative max-w-4xl mx-auto">
					{/* Timeline Line */}
					<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>

					<div className="space-y-8">
						{experiences.map((job, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="relative ml-20"
							>
								<div className="absolute -left-14 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
								<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
									<div className="text-orange-500 text-sm font-semibold mb-2 uppercase tracking-wider">{job.date}</div>
									<h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
									<div className="text-primary-600 font-semibold mb-4">{job.company}</div>
									<ul className="space-y-3">
										{job.achievements.map((achievement, i) => (
											<li key={i} className="flex items-start gap-3">
												<span className="mt-2 w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
												<span className="text-gray-700 leading-relaxed text-sm">{achievement}</span>
											</li>
										))}
									</ul>
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

