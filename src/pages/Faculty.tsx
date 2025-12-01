"use client"

import { useState } from "react"

interface FacultyCard {
	name: string;
	title: string;
	email: string;
	office: string;
	phone: string;
	image?: string;
	link?: string;
}

const Professors: FacultyCard[] = [
	{
		name: "Sos Agaian", 
		title: "Distinguished Professor", 
		email: "sos.agaian@csi.cuny.edu", 
		office: "1N-203", 
		phone: "718-982-2843",
		image: "/sos.jpg"
	},
	{
		name: "Tatiana Anderson", 
		title: "Lecturer", 
		email: "tatiana.anderson@csi.cuny.edu", 
		office: "1N-210", 
		phone: "718-982-2850"
	},
	{
		name: "Cong Chen", 
		title: "Doctoral Lecturer", 
		email: "cong.chen@csi.cuny.edu", 
		office: "4N-206", 
		phone: "718-982-2975"
	},
	{
		name: "Kennedy Edemacu", 
		title: "Assistant Professor	", 
		email: "Kennedy.Edemacu@csi.cuny.edu", 
		office: "1N-208", 
		phone: "718-982-3273"
	},
	{
		name: "Feng Gu", 
		title: "Professor", 
		email: "feng.gu@csi.cuny.edu", 
		office: "1N-201", 
		phone: "718-982-2847",
		image: "/feng.jpg"
	},
	{
		name: "Yumei Huo", 
		title: "Professor", 
		email: "yumei.huo@csi.cuny.edu", 
		office: "1N-202", 
		phone: "718-982-2841"
	},
	{
		name: "Ali Mohamed", 
		title: "Lecturer", 
		email: "Ali.Mohamed@csi.cuny.edu", 
		office: "1N-210", 
		phone: "718-982-2850"
	},
	{
		name: "Louis Petingi", 
		title: "Professor", 
		email: "louis.petingi@csi.cuny.edu", 
		office: "1N-211", 
		phone: "718-982-2844",
		image: "/louis.jpg"
	},
	{
		name: "Jun Rao", 
		title: "Doctoral Lecturer", 
		email: "Jun.Rao@csi.cuny.edu", 
		office: "5N-220", 
		phone: "718-982-2854"
	},
	{
		name: "Ping Shi", 
		title: "Lecturer", 
		email: "Ping.Shi@csi.cuny.edu", 
		office: "1N-210", 
		phone: "718-982-2850"
	},
	{
		name: "Sarah Zelikovitz", 
		title: "Professor", 
		email: "sarah.zelikovitz@csi.cuny.edu", 
		office: "1N-212", 
		phone: "718-982-2849"
	},
	{
		name: "Shuqun Zhang", 
		title: "Professor, Chairperson", 
		email: "shuqun.zhang@csi.cuny.edu", 
		office: "1N-204", 
		phone: "718-982-2852",
		image: "/shuqun.jpg"
	},
	{
		name: "Tianxiao Zhang", 
		title: "Assistant Professor", 
		email: "tianxiao.zhang@csi.cuny.edu", 
		office: "1N-205", 
		phone: "718-982-3288",
		image: "/tianxiao.jpg"
	},
	{
		name: "Xiaowen Zhang", 
		title: "Professor", 
		email: "xiaowen.zhang@csi.cuny.edu", 
		office: "1N-213", 
		phone: "718-982-3262",
		image: "/xiaowen.jpg"
	},
	{
		name: "Zhangyan Zhang", 
		title: "Professor", 
		email: "zhanyang.zhang@csi.cuny.edu", 
		office: "1N-206", 
		phone: "718-982-3175",
		image: "/zhanyang.jpg"
	}
]

const OfficeStaff: FacultyCard[] = [
	{
		name: "Joanne Morris",
		title: "CUNY Administrative Assistant",
		email: "joanne.morris@csi.cuny.edu",
		office: "1N-215",
		phone: "718-982-2850"
	},
	{
		name: "Laurie Guido",
		title: "College Assistant",
		email: "laurie.guido@csi.cuny.edu",
		office: "1N-215",
		phone: "718-982-2850"
	},
	{
		name: "Kristi Brescia",
		title: "Academic Advisor",
		email: "Kristi.Brescia@csi.cuny.edu",
		office: "1N-209",
		phone: "718-982-2842"
	},
	{
		name: "Fred Loweff",
		title: "CUNY 2X Manager",
		email: "Fred.Loweff@csi.cuny.edu",
		office: "1N-214",
		phone: "718-982-3178"
	}
]

const TechnicalStaff: FacultyCard[] = [
	{
		name: "Chang Guo",
		title: "Senior College Lab Technician",
		email: "chang.guo@csi.cuny.edu",
		office: "1N-219",
		phone: "718-982-2857"
	},
	{
		name: "Orit D. Gruber",
		title: "Chief College Lab Technician",
		email: "orit.gruber@csi.cuny.edu",
		office: "1N-218",
		phone: "718-982-3015"
	}
]

const Emeritus = [
		"Emile Chi", "Bernard Domanski", "Natacha Gueorguieva", "Anatoliy Gordonov",
		"Susan Imberman", "Roberta Klibaner", "Michael Kress", "Herbert Schanker",
		"Miriam Tausner", "Deborah Sturm"
	];

const Adjuncts = [
		"Agman, Daniel", "Catalano, Anthony", "Al-Mashhadani, Zaid", "Hayes, Dolores",
		"Jahaj, Safet", "Hills, Amy", "Iacona, Louis", "Wong, Jonathan",
		"Kholodovsky, Michael", "Kausar, Fatma", "Weir, Rich", "Michael Deredita",
		"Lavrov, Roman", "Ciaccio, Philip", "Parziale, Jonathan", "Kapaj, Luigi",
		"Wang, Zhiqi", "Yuan, Kailie", "Lu, Jia", "Tooker, Joseph"
]


const Faculty = () => {
	const [expandedMenus, setExpandedMenus] = useState<string[]>(["bs-cs"])

	const toggleMenu = (id: string) => {
		setExpandedMenus((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
	}

	const sidebarDegrees = [
		{ name: "AAS in Computer Technology", href: "#aas" },
		{ name: "BS in Computer Science", href: "#bs-cs", hasSubmenu: true },
		{ name: "BS in Computer Science-Mathematics", href: "#bs-csmath" },
		{ name: "BS in Information Systems and Informatics", href: "#bs-is" },
		{ name: "Computer Science Minor", href: "#minor" },
		{ name: "Cyber Security Minor", href: "#cybersec" },
		{ name: "Data Science Minor", href: "#datascience" },
		{ name: "Computational Linguistics Minor", href: "#compling" },
	]

	const bsSubmenu = [
		{ name: "Specializations", href: "#specializations" },
		{ name: "Graduation with Honors", href: "#honors" },
		{ name: "Career Milestones", href: "#milestones" },
	]

	return (
		<div className="w-full bg-white flex flex-col gap-6 md:gap-8 lg:gap-10">
			{/* Main Content Container */}
			<div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-[100px] py-8 md:py-12">
				{/* Left Sidebar - Responsive Navigation */}
				<nav className="w-full lg:w-64 flex flex-col gap-4 order-2 lg:order-1" aria-label="Navigation menu">
					{/* Degrees Panel */}
					<div className="w-full bg-white shadow-lg overflow-hidden">
						<div className="p-4 md:p-6 flex flex-col gap-4">
							{/* Degrees Header */}
							<div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-300">
								<h2 className="font-bold text-sm md:text-base uppercase text-blue-600">Degrees</h2>
							</div>

							{/* Degree List */}
							<div className="flex flex-col gap-3">
								{sidebarDegrees.map((degree) => (
									<div key={degree.href} className="flex flex-col gap-3">
										{degree.hasSubmenu ? (
											<div className="flex items-center gap-2 border-b-2 border-gray-300 pb-2">
												<a
													href={degree.href}
													className="font-bold text-sm leading-relaxed text-gray-950 hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 px-2 py-1 transition flex-1"
												>
													{degree.name}
												</a>
												<button
													onClick={() => toggleMenu("bs-cs")}
													className="text-gray-950 hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-blue-600 p-2 cursor-pointer"
													aria-expanded={expandedMenus.includes("bs-cs")}
													aria-label="Toggle BS Computer Science submenu"
												>
													<svg
														className="w-4 h-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														{expandedMenus.includes("bs-cs") ? (
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth="2"
																d="M5 15l7-7 7 7"
															/>
														) : (
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth="2"
																d="M19 9l-7 7-7-7"
															/>
														)}
													</svg>
												</button>
											</div>
										) : (
											<a
												href={degree.href}
												className="font-bold text-sm leading-relaxed text-gray-950 hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 px-2 py-1 transition"
											>
												{degree.name}
											</a>
										)}

										{/* Submenu for BS in Computer Science */}
										{degree.hasSubmenu && expandedMenus.includes("bs-cs") && (
											<div className="pl-4 flex flex-col gap-2 border-l-2 border-gray-300">
												{bsSubmenu.map((item) => (
													<a
														key={item.href}
														href={item.href}
														className="font-bold text-sm text-gray-950 hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-blue-600 px-2 py-1 transition"
													>
														{item.name}
													</a>
												))}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>

					{/* BS/MS Accelerated Panel */}
					<div className="w-full bg-white shadow-lg overflow-hidden">
						<div className="p-4 md:p-6 flex flex-col gap-4">
							<div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-300">
								<h2 className="font-bold text-sm md:text-base uppercase text-blue-600">BS/MS Accelerated</h2>
							</div>
							<a
								href="#double-counting"
								className="font-bold text-sm text-gray-950 hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-blue-600 px-2 py-1 transition"
							>
								Double Counting Policy
							</a>
						</div>
					</div>

					{/* ABET Accreditation Panel */}
					<div className="w-full bg-white shadow-lg overflow-hidden">
						<div className="p-4 md:p-6 flex flex-col gap-4">
							<div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-300">
								<h2 className="font-bold text-sm md:text-base uppercase text-blue-600">ABET Accreditation</h2>
							</div>
							<div className="flex flex-col gap-3">
								<a
									href="#objectives"
									className="font-bold text-sm text-gray-950 hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-blue-600 px-2 py-1 transition"
								>
									Program Educational Objectives
								</a>
								<a
									href="#outcomes"
									className="font-bold text-sm text-gray-950 hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-blue-600 px-2 py-1 transition"
								>
									Student Outcomes
								</a>
								<a
									href="#enrollment"
									className="font-bold text-sm text-gray-950 hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-blue-600 px-2 py-1 transition"
								>
									BS Program Enrollment
								</a>
							</div>
						</div>
					</div>
				</nav>

				{/* Right Content - Main Content Area */}
				<main className="w-full lg:flex-1 flex flex-col gap-6 md:gap-8 order-1 lg:order-2">
						{/* Computer Science professors section */}
						<section aria-labelledby="professors-heading">
							<h2
								id="professors-heading"
								className="text-2xl font-bold text-[#2f4f4f] mb-4 text-center md:text-left"
							>
								Professors
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								{Professors.map((professor, index) => (
									<div
										key={index}
										className="bg-white overflow-hidden flex flex-col sm:flex-row focus-within:ring-2 focus-within:ring-csi-blue"
										role="article"
										aria-label={`${professor.name} faculty card`}
									>
										<div className="bg-csi-gray w-full sm:w-32 h-32 sm:h-auto shrink-0 flex items-center justify-center overflow-hidden">
											<img
												src={professor.image || "/avatar.png"}
												alt={professor.name}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="p-4 flex flex-col justify-center space-y-0.5">
											<h3 className="text-lg font-bold mb-2">
												{professor.link ? (
													<a
														href={professor.link}
														className="text-[#2d88de] hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2d88de] rounded"
													>
														{professor.name}
													</a>
												) : (
													<span className="text-[#2d88de] hover:underline cursor-pointer">{professor.name}</span>
												)}
											</h3>
											<p className="text-xs text-[#53626e]">
												{professor.title}
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Email:</span>{" "}
												<a
													href={`mailto:${professor.email}`}
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
													aria-label={`Email ${professor.name}`}
												>
													{professor.email}
												</a>
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Office:</span>{" "}
												{professor.office}
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Phone:</span>{" "}
												<a
													href={`tel:${professor.phone}`}
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
													aria-label={`Call ${professor.name} at ${professor.phone}`}
												>
													{professor.phone}
												</a>
											</p>
										</div>
									</div>
								))}
							</div>
						</section>

						<hr className="border-t border-[#53626e] my-8" />

						{/* Emeritus Section */}
						<section id="emeritus" aria-labelledby="emeritus-heading">
							<h2
								id="emeritus-heading"
								className="text-2xl font-bold text-[#2f4f4f] mb-4 text-center md:text-left"
							>
								Emeritus
							</h2>
							<div className="bg-white p-6 md:p-8">
								<ul
									className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-x-8 md:gap-y-6 w-full"
									role="list"
								>
									{Emeritus.map((spec, index) => (
										<li
											key={index}
											className="flex items-center justify-center md:justify-start py-1"
										>
											<span className="text-[#53626e] text-lg md:text-base font-medium">
												{spec}
											</span>
										</li>
									))}
								</ul>
							</div>
						</section>

						<hr className="border-t border-[#53626e] my-8" />

						{/* Adjuncts Section */}
						<section id="adjuncts" aria-labelledby="adjuncts-heading">
							<h2
								id="adjuncts-heading"
								className="text-2xl font-bold text-[#2f4f4f] mb-4 text-center md:text-left"
							>
								Adjuncts
							</h2>
							<div className="bg-white p-6 md:p-8">
								<ul
									className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-x-8 md:gap-y-6 w-full"
									role="list"
								>
									{Adjuncts.map((spec, index) => (
										<li
											key={index}
											className="flex items-center justify-center md:justify-start py-1"
										>
											<span className="text-[#53626e] text-lg md:text-base font-medium">
												{spec}
											</span>
										</li>
									))}
								</ul>
							</div>
						</section>

						<hr className="border-t border-[#53626e] my-8" />

						{/* Office Staff Section */}
						<section id="office-staff" aria-labelledby="office-staff-heading">
							<h2
								id="office-staff-heading"
								className="text-2xl font-bold text-[#2f4f4f] mb-4 text-center md:text-left"
							>
								Office Staff
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								{OfficeStaff.map((professor, index) => (
									<div
										key={index}
										className="bg-white overflow-hidden flex flex-col sm:flex-row focus-within:ring-2 focus-within:ring-csi-blue"
										role="article"
										aria-label={`${professor.name} faculty card`}
									>
										<div className="bg-csi-gray w-full sm:w-32 h-32 sm:h-auto shrink-0 flex items-center justify-center overflow-hidden">
											<img
												src={professor.image || "/avatar.png"}
												alt={professor.name}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="p-4 flex flex-col justify-center space-y-0.5">
											<h3 className="text-lg font-bold mb-2">
												{professor.link ? (
													<a
														href={professor.link}
														className="text-[#2d88de] hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2d88de] rounded"
													>
														{professor.name}
													</a>
												) : (
													<span className="text-[#2d88de] hover:underline cursor-pointer">{professor.name}</span>
												)}
											</h3>
											<p className="text-xs text-[#53626e]">
												{professor.title}
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Email:</span>{" "}
												<a
													href={`mailto:${professor.email}`}
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
													aria-label={`Email ${professor.name}`}
												>
													{professor.email}
												</a>
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Office:</span>{" "}
												{professor.office}
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Phone:</span>{" "}
												<a
													href={`tel:${professor.phone}`}
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
													aria-label={`Call ${professor.name} at ${professor.phone}`}
												>
													{professor.phone}
												</a>
											</p>
										</div>
									</div>
								))}
							</div>
						</section>

						<hr className="border-t border-[#53626e] my-8" />

						{/* Technical Staff Section */}
						<section
							id="technical-staff"
							aria-labelledby="technical-staff-heading"
						>
							<h2
								id="technical-staff-heading"
								className="text-2xl font-bold text-[#2f4f4f] mb-4 text-center md:text-left"
							>
								Technical Staff
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								{TechnicalStaff.map((professor, index) => (
									<div
										key={index}
										className="bg-white overflow-hidden flex flex-col sm:flex-row focus-within:ring-2 focus-within:ring-csi-blue"
										role="article"
										aria-label={`${professor.name} faculty card`}
									>
										<div className="bg-csi-gray w-full sm:w-32 h-32 sm:h-auto shrink-0 flex items-center justify-center overflow-hidden">
											<img
												src={professor.image || "/avatar.png"}
												alt={professor.name}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="p-4 flex flex-col justify-center space-y-0.5">
											<h3 className="text-lg font-bold mb-2">
												{professor.link ? (
													<a
														href={professor.link}
														className="text-[#2d88de] hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2d88de] rounded"
													>
														{professor.name}
													</a>
												) : (
													<span className="text-[#2d88de] hover:underline cursor-pointer">{professor.name}</span>
												)}
											</h3>
											<p className="text-xs text-[#53626e]">
												{professor.title}
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Email:</span>{" "}
												<a
													href={`mailto:${professor.email}`}
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
													aria-label={`Email ${professor.name}`}
												>
													{professor.email}
												</a>
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Office:</span>{" "}
												{professor.office}
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Phone:</span>{" "}
												<a
													href={`tel:${professor.phone}`}
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
													aria-label={`Call ${professor.name} at ${professor.phone}`}
												>
													{professor.phone}
												</a>
											</p>
										</div>
									</div>
								))}
							</div>
						</section>

				</main>
			</div>
		</div>
	);
};

export default Faculty;
