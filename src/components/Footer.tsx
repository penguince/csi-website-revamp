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
import CunyLogo from "./CunyLogo";

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
			<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
				{/* Main Content - Logo & Contact Info */}
				<div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 mb-8">
					{/* Left: Logo */}
					<div className="flex flex-col gap-4">
						<div className="w-64 md:w-[345px] h-auto">
							<img
								src="/csi_logo_foot.png"
								alt="College of Staten Island - Department of Computer Science"
								className="w-full h-auto object-contain"
								onError={(e) => {
									e.currentTarget.style.display = "none";
								}}
							/>
						</div>
						<p className="text-white/60 text-xs md:text-sm">
							© {new Date().getFullYear()} College of Staten Island
						</p>
					</div>

					{/* Right: Contact Information */}
					<div className="flex flex-col gap-4">
						<h3 className="text-blue-300 font-bold text-lg md:text-xl">
							Contact Us
						</h3>
						<address className="not-italic text-white text-sm md:text-base flex flex-col gap-3">
							<div className="flex items-start gap-3">
								<MapPin
									className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5"
									aria-hidden="true"
								/>
								<span className="leading-relaxed">
									2800 Victory Boulevard, 1N-215
									<br />
									Staten Island, New York 10314
								</span>
							</div>
							<div className="flex items-center gap-3">
								<Phone
									className="w-5 h-5 text-blue-300 flex-shrink-0"
									aria-hidden="true"
								/>
								<a
									href="tel:718-982-2850"
									className="hover:text-blue-300 transition-all duration-300 ease-in-out hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1"
								>
									Phone: 718.982-2850
								</a>
							</div>
							<div className="flex items-center gap-3">
								<Phone
									className="w-5 h-5 text-blue-300 flex-shrink-0"
									aria-hidden="true"
								/>
								<span>Fax: 718.982-2856</span>
							</div>
						</address>
					</div>
				</div>

				{/* Bottom Bar - Legal Links & Social Media */}
				<div className="border-t border-white/20 pt-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-6">
						{/* Left: Legal Links */}
						<nav
							className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm"
							aria-label="Legal and Policy Links"
						>
							<a
								href="https://www.csi.cuny.edu/accessibility"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-blue-300 transition-all duration-300 ease-in-out hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1"
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
								className="text-white hover:text-blue-300 transition-all duration-300 ease-in-out hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1"
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
								className="text-white hover:text-blue-300 transition-all duration-300 ease-in-out hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1"
							>
								Non-Discrimination
							</a>
							<span className="text-white/30" aria-hidden="true">
								•
							</span>
							<a
								href="https://www.cuny.edu/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Visit CUNY website"
								className="inline-block transition-opacity duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 rounded"
							>
								<CunyLogo />
							</a>
						</nav>

						{/* Right: Social Media */}
						<div className="flex gap-3 flex-wrap justify-center md:justify-end">
							<span className="sr-only">Connect With Us</span>
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<a
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Visit ${social.name}`}
										className="w-11 h-11 p-2.5 flex items-center justify-center hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 rounded transition-all duration-300 ease-in-out transform hover:scale-110"
									>
										<Icon className="w-6 h-6 text-white" aria-hidden="true" />
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
