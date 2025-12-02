import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	const topLinks = [
		{ name: "CSI", url: "https://www.csi.cuny.edu/", external: true },
		{
			name: "Calendar",
			url: "https://www.csi.cuny.edu/academics-and-research/academic-calendars-and-final-examination-schedule",
			external: true,
		},
		{
			name: "CUNYFirst",
			url: "https://home.cunyfirst.cuny.edu",
			external: true,
		},
		{
			name: "Class Schedule",
			url: "https://cunyportal.cuny.edu",
			external: true,
		},
	];

	const mainNavLinks = [
		{ name: "Home", path: "/" },
		{ name: "Undergraduate", path: "/undergraduate" },
		{ name: "Graduate", path: "/graduate" },
		{ name: "Courses", path: "/courses" },
		{ name: "Research", path: "/research" },
		{ name: "Faculty", path: "/faculty" },
		{ name: "Resources", path: "/resources" },
	];

	const isActivePath = (path: string) => {
		return location.pathname === path;
	};

	return (
		<header className="w-full">
			{/* Top Navigation Bar */}
			<div className="bg-[#53626e] border-b border-gray-300">
				<div className="max-w-7xl mx-auto px-4">
					<nav
						className="flex justify-start text-white"
						aria-label="Quick Links"
					>
						<ul className="flex space-x-6 text-sm py-2">
							{topLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.url}
										target={link.external ? "_blank" : undefined}
										rel={link.external ? "noopener noreferrer" : undefined}
										className="text-white hover:text-gray-200 transition-colors duration-200 py-1 px-1"
									>
										{link.name}
										{link.external && (
											<span className="sr-only"> (opens in new tab)</span>
										)}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>

			{/* Main Navigation */}
			<div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex justify-between items-center py-4">
						{/* Logo */}
						<Link to="/" className="flex items-center space-x-3">
							<img
								src="/csi-logo.png"
								alt="CSI Department of Computer Science"
								className="h-12 w-auto"
								onError={(e) => {
									// Fallback if image doesn't exist
									e.currentTarget.style.display = "none";
								}}
							/>
							<div className="flex flex-col">
								<span className="text-xl font-bold text-gray-800">
									Department of
								</span>
								<span className="text-xl font-bold text-csi-blue">
									Computer Science
								</span>
							</div>
						</Link>

						{/* Desktop Navigation */}
						<nav
							className="hidden lg:flex space-x-1"
							aria-label="Main Navigation"
						>
							{mainNavLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className={`px-4 py-2 text-sm font-medium transition-colors duration-200 
                    ${
											isActivePath(link.path)
												? "text-csi-blue border-t-2 border-csi-blue"
												: "text-gray-700 hover:text-csi-blue hover:bg-gray-50"
										}`}
									aria-current={isActivePath(link.path) ? "page" : undefined}
								>
									{link.name}
								</Link>
							))}
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="lg:hidden p-2  hover:bg-gray-100 transition-colors"
							aria-expanded={isMobileMenuOpen}
							aria-label="Toggle navigation menu"
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6 text-gray-700" />
							) : (
								<Menu className="h-6 w-6 text-gray-700" />
							)}
						</button>
					</div>

					{/* Mobile Navigation */}
					{isMobileMenuOpen && (
						<nav className="lg:hidden pb-4" aria-label="Mobile Navigation">
							<ul className="flex flex-col space-y-2">
								{mainNavLinks.map((link) => (
									<li key={link.path}>
										<Link
											to={link.path}
											onClick={() => setIsMobileMenuOpen(false)}
											className={`block px-4 py-3  text-sm font-medium transition-colors
                        ${
													isActivePath(link.path)
														? "bg-blue-600 text-white"
														: "text-gray-700 hover:bg-gray-100"
												}`}
											aria-current={
												isActivePath(link.path) ? "page" : undefined
											}
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
