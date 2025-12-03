"use client";

import {
    Facebook,
    Instagram,
    Linkedin,
    MapPin,
    Phone,
    Twitter,
    Youtube,
} from "lucide-react";

const Footer = () => {
	const socialLinks = [
		{
			name: "Facebook",
			icon: Facebook,
			url: "https://www.facebook.com/CSICOMPSCIENCE",
		},
		{ name: "Twitter", icon: Twitter, url: "https://twitter.com/csicompsci" },
		{
			name: "YouTube",
			icon: Youtube,
			url: "https://www.youtube.com/user/CSIComputerScience",
		},
		{
			name: "Instagram",
			icon: Instagram,
			url: "https://www.instagram.com/csi_cs/",
		},
		{
			name: "LinkedIn",
			icon: Linkedin,
			url: "https://www.linkedin.com/school/college-of-staten-island/",
		},
	];

	return (
		<footer className="bg-gray-700 mt-auto w-full" role="contentinfo">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12">
				{/* Main Footer Content */}
				<div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8">
					{/* Department Contact Information */}
					<div className="flex-1">
						<h3 className="text-blue-300 font-bold text-lg mb-4">
							Department of Computer Science
						</h3>
						<div className="flex flex-col gap-3 text-white">
							{/* Address */}
							<div className="flex items-start gap-3">
								<MapPin
									className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5"
									aria-hidden="true"
								/>
								<address className="not-italic text-sm md:text-base leading-relaxed">
									2800 Victory Boulevard, 1N-215
									<br />
									Staten Island, New York 10314
								</address>
							</div>

							{/* Phone */}
							<div className="flex items-center gap-3">
								<Phone
									className="w-5 h-5 text-blue-300 flex-shrink-0"
									aria-hidden="true"
								/>
								<a
									href="tel:718-982-2850"
									className="text-sm md:text-base hover:text-blue-300 transition-all duration-300 ease-in-out hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1"
								>
									Phone: 718.982-2850
								</a>
							</div>

							{/* Fax */}
							<div className="flex items-center gap-3">
								<Phone
									className="w-5 h-5 text-blue-300 flex-shrink-0"
									aria-hidden="true"
								/>
								<p className="text-sm md:text-base">Fax: 718.982-2856</p>
							</div>
						</div>
					</div>

					{/* Social Media Links */}
					<div className="flex-shrink-0">
						<h3 className="text-blue-300 font-bold text-lg mb-4">
							Connect With Us
						</h3>
						<div className="flex gap-3">
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<a
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Visit ${social.name}`}
										className="w-11 h-11 p-2.5 flex items-center justify-center hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded transition-all duration-300 ease-in-out transform hover:scale-110"
									>
										<Icon className="w-6 h-6 text-white" aria-hidden="true" />
									</a>
								);
							})}
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-white/20 pt-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						{/* CSI Logo */}
						<div className="flex items-center gap-4">
							<div className="w-12 h-auto">
								<img
									src="/csi-logo-white.png"
									alt="College of Staten Island Logo"
									className="w-full h-auto object-contain"
									onError={(e) => {
										e.currentTarget.style.display = "none";
									}}
								/>
							</div>
							<div className="w-12 h-auto">
								<img
									src="/cuny-logo-white.png"
									alt="CUNY Logo"
									className="w-full h-auto object-contain"
									onError={(e) => {
										e.currentTarget.style.display = "none";
									}}
								/>
							</div>
						</div>

						{/* Footer Links */}
						<div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm">
							<a
								href="https://www.csi.cuny.edu/accessibility"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-blue-300 transition-all duration-300 ease-in-out hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1"
							>
								Accessibility
							</a>
							<span className="text-white/30" aria-hidden="true">
								•
							</span>
							<a
								href="https://www.csi.cuny.edu/policies"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-blue-300 transition-all duration-300 ease-in-out hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1"
							>
								Policies
							</a>
							<span className="text-white/30" aria-hidden="true">
								•
							</span>
							<a
								href="https://www.csi.cuny.edu/non-discrimination"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-blue-300 transition-all duration-300 ease-in-out hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1"
							>
								Non-Discrimination
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
