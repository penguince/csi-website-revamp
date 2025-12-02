import type React from "react";
import { useState } from "react";

interface SidebarLink {
	name: string;
	href: string;
}

interface SidebarSubmenu {
	name: string;
	links: SidebarLink[];
}

interface SidebarSection {
	title: string;
	links?: SidebarLink[];
	submenu?: SidebarSubmenu;
}

interface SidebarProps {
	sections: SidebarSection[];
	className?: string;
	defaultExpandedSubmenu?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
	sections,
	className = "",
	defaultExpandedSubmenu,
}) => {
	const [expandedSubmenus, setExpandedSubmenus] = useState<string[]>(
		defaultExpandedSubmenu ? [defaultExpandedSubmenu] : [],
	);

	const toggleSubmenu = (submenuName: string) => {
		setExpandedSubmenus((prev) =>
			prev.includes(submenuName)
				? prev.filter((item) => item !== submenuName)
				: [...prev, submenuName],
		);
	};

	return (
		<nav
			className={`w-full lg:w-64 flex flex-col gap-4 lg:sticky lg:top-8 lg:self-start ${className}`}
			aria-label="Navigation menu"
		>
			{sections.map((section, index) => (
				<div
					key={index}
					className="w-full bg-white border border-gray-300 shadow-md overflow-hidden"
				>
					<div className="p-4 md:p-6 flex flex-col gap-4">
						{/* Section Header */}
						<div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-300">
							<h2 className="font-bold text-sm md:text-base uppercase text-blue-600">
								{section.title}
							</h2>
						</div>

						{/* Section Links */}
						<div className="flex flex-col gap-3">
							{section.links?.map((link, linkIndex) => (
								<a
									key={linkIndex}
									href={link.href}
									className="font-bold text-sm text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 px-2 py-1 transition"
								>
									{link.name}
								</a>
							))}

							{/* Submenu Support */}
							{section.submenu && (
								<div className="flex flex-col gap-2">
									<button
										onClick={() => toggleSubmenu(section.submenu!.name)}
										className="flex items-center justify-between font-bold text-sm text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 px-2 py-1 transition"
										aria-expanded={expandedSubmenus.includes(
											section.submenu.name,
										)}
										aria-controls={`submenu-${section.submenu.name}`}
									>
										<span>{section.submenu.name}</span>
										<svg
											className={`w-4 h-4 transition-transform ${
												expandedSubmenus.includes(section.submenu.name)
													? "rotate-180"
													: ""
											}`}
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</button>

									{expandedSubmenus.includes(section.submenu.name) && (
										<div
											id={`submenu-${section.submenu.name}`}
											className="pl-4 flex flex-col gap-2 border-l-2 border-gray-300"
										>
											{section.submenu.links.map((item, submenuIndex) => (
												<a
													key={submenuIndex}
													href={item.href}
													className="font-bold text-sm text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 px-2 py-1 transition"
												>
													{item.name}
												</a>
											))}
										</div>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</nav>
	);
};

export default Sidebar;
