import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

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
		<footer
			className="bg-[#333] border-t-[7px] border-csi-blue mt-auto"
			role="contentinfo"
		>
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">
					{/* College Info */}
					<div>
						<img
							src="/csi-logo-white.png"
							alt="College of Staten Island"
							className="h-16 mb-4"
							onError={(e) => {
								e.currentTarget.style.display = "none";
							}}
						/>
						<div className="space-y-2 text-sm">
							<p className="font-semibold">
								Transportation: Directions, Parking
							</p>
							<address className="not-italic">
								<p>2800 Victory Blvd</p>
								<p>Staten Island, NY 10314</p>
							</address>
							<p>
								<a
									href="tel:718-982-2000"
									className="hover:text-white transition-colors"
								>
									718.982.2000
								</a>
							</p>
						</div>
					</div>

					{/* Connect With Us */}
					<div>
						<h3 className="text-sm font-bold border-b border-[#222] pb-2 mb-4">
							Connect With Us
						</h3>
						<ul className="space-y-2 text-sm">
							{connectLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-white transition-colors"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3 className="text-sm font-bold border-b border-[#222] pb-2 mb-4">
							Legal
						</h3>
						<ul className="space-y-2 text-sm">
							{legalLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-white transition-colors"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			{/* Sub Footer */}
			<div className="bg-[#2e2e2e] border-t border-[#444]">
				<div className="max-w-7xl mx-auto px-4 py-5">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						{/* Copyright */}
						<p className="text-gray-300 text-xs">
							Copyright © {currentYear} - Department of Computer Science,
							College of Staten Island
						</p>

						{/* Social Media Icons */}
						<div className="flex space-x-4">
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<a
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${social.name} (opens in new tab)`}
										className="text-gray-300 hover:text-white transition-colors"
									>
										<Icon className="h-5 w-5" aria-hidden="true" />
									</a>
								);
							})}
						</div>
					</div>

					{/* Accessibility and Sitemap Links */}
					<div className="mt-4 flex justify-center space-x-8 text-xs">
						<a
							href="/sitemap"
							className="text-gray-300 hover:text-white transition-colors"
						>
							Sitemap
						</a>
						<a
							href="/text-to-speech"
							className="text-gray-300 hover:text-white transition-colors"
						>
							Text To Speech
						</a>
						<span className="text-gray-300" aria-hidden="true">|</span>
						<p className="text-gray-300">Copyright</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
