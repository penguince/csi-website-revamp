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
	const connectLinks = [
		{ name: "Contact Admissions", url: "https://www.csi.cuny.edu/admissions" },
		{
			name: "Contact Human Resources",
			url: "https://www.csi.cuny.edu/human-resources",
		},
		{
			name: "Campus Directory",
			url: "https://www.csi.cuny.edu/campus-directory",
		},
		{ name: "News", url: "https://www.csi.cuny.edu/news" },
		{
			name: "Events / Submit an Event",
			url: "https://www.csi.cuny.edu/events",
		},
		{ name: "Library", url: "https://library.csi.cuny.edu" },
		{ name: "Campus Map", url: "https://www.csi.cuny.edu/campus-map" },
		{ name: "Careers at CSI", url: "https://www.csi.cuny.edu/careers" },
	];

	const legalLinks = [
		{
			name: "Consumer Information for Prospective & Current Students",
			url: "https://www.csi.cuny.edu/consumer-information",
		},
		{
			name: "Policies, Procedures & Governance",
			url: "https://www.csi.cuny.edu/policies",
		},
		{
			name: "Notice of Non-Discrimination",
			url: "https://www.csi.cuny.edu/non-discrimination",
		},
		{
			name: "Reporting Alleged Fraud, Abuse or Misconduct",
			url: "https://www.csi.cuny.edu/reporting",
		},
		{
			name: "EEO/AA Is Enough Combating Sexual Misconduct",
			url: "https://www.csi.cuny.edu/sexual-misconduct",
		},
	];

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
			<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12 lg:py-16">
				{/* Main Content Container - responsive flex direction and gap */}
				<div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 mb-8 md:mb-10">
					<div className="flex flex-col gap-6 md:gap-8 w-full lg:w-auto lg:flex-shrink-0">
						{/* Logo Container - responsive sizing */}
						<div className="w-32 h-auto md:w-40 md:h-auto">
							<img
								src="/csi-logo-white.png"
								alt="College of Staten Island Logo"
								className="w-full h-auto object-contain"
								onError={(e) => {
									e.currentTarget.style.display = "none";
								}}
							/>
						</div>

						{/* Contact Info List - responsive with proper touch targets */}
						<div className="flex flex-col gap-4">
							{/* Address 1 */}
							<div className="flex items-start gap-3 py-2 min-h-11">
								<MapPin
									className="w-5 h-5 md:w-6 md:h-6 text-blue-300 flex-shrink-0 mt-0.5"
									aria-hidden="true"
								/>
								<p className="text-white text-sm md:text-base leading-relaxed">
									Transportation: Directions, Parking
								</p>
							</div>

							{/* Address 2 */}
							<div className="flex items-start gap-3 py-2 min-h-12">
								<MapPin
									className="w-5 h-5 md:w-6 md:h-6 text-blue-300 flex-shrink-0 mt-0.5"
									aria-hidden="true"
								/>
								<address className="not-italic text-white text-sm md:text-base leading-relaxed">
									2800 Victory Blvd
									<br />
									Staten Island, NY 10314
								</address>
							</div>

							{/* Phone */}
							<div className="flex items-start gap-3 py-2 min-h-11">
								<Phone
									className="w-5 h-5 md:w-6 md:h-6 text-blue-300 flex-shrink-0 mt-0.5"
									aria-hidden="true"
								/>
								<a
									href="tel:718-982-2000"
									className="text-white text-sm md:text-base leading-relaxed hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1 transition-colors"
								>
									718.982.2000
								</a>
							</div>
						</div>

						{/* CUNY Logo */}
						<div className="w-12 h-auto md:w-16 md:h-auto">
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

					<div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-16 w-full lg:flex-1">
						{/* Connect With Us Column */}
						<div className="flex flex-col w-full sm:flex-1">
							<h3 className="text-blue-300 font-bold text-base md:text-lg leading-6 pb-4 md:pb-6">
								Connect With Us
							</h3>
							<ul className="flex flex-col gap-2">
								{connectLinks.map((link) => (
									<li key={link.name}>
										<a
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-white text-sm md:text-base leading-relaxed hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1 inline-block transition-colors"
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Legal Column */}
						<div className="flex flex-col w-full sm:flex-1">
							<h3 className="text-blue-300 font-bold text-base md:text-lg leading-6 pb-4 md:pb-6">
								Legal
							</h3>
							<ul className="flex flex-col gap-2">
								{legalLinks.map((link) => (
									<li key={link.name}>
										<a
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-white text-sm md:text-base leading-relaxed hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1 inline-block transition-colors"
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className="border-t border-white/20 pt-6 md:pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
						{/* Left Links - responsive wrapping */}
						<div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6">
							<a
								href="/sitemap"
								className="text-white text-sm md:text-base leading-relaxed hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1 transition-colors"
							>
								Sitemap
							</a>
							<span className="text-white/30" aria-hidden="true">
								•
							</span>
							<a
								href="/text-to-speech"
								className="text-white text-sm md:text-base leading-relaxed hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1 transition-colors"
							>
								Text To Speech
							</a>
							<span className="text-white/30" aria-hidden="true">
								•
							</span>
							<a
								href="/accessibility"
								className="text-white text-sm md:text-base leading-relaxed hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded px-1 transition-colors"
							>
								Accessibility
							</a>
						</div>

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
										className="w-11 h-11 p-2.5 flex items-center justify-center hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-700 rounded transition-colors"
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
