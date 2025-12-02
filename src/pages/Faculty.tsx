"use client"

import Sidebar from "../components/Sidebar";

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

	return (
		<div className="w-full bg-white flex flex-col gap-6 md:gap-8 lg:gap-10">
			{/* Main Content Container */}
			<div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-[100px] py-8 md:py-12">
				{/* Left Sidebar - Responsive Navigation */}
			<Sidebar
				className="order-2 lg:order-1"
				defaultExpandedSubmenu="BS in Computer Science"
				sections={[
					{
						title: "Degrees",
						links: [
							{ name: "AAS in Computer Technology", href: "#aas" },
							{ name: "BS in Computer Science", href: "#bs-cs" },
							{ name: "BS in Computer Science-Mathematics", href: "#bs-csmath" },
							{ name: "BS in Information Systems and Informatics", href: "#bs-is" },
							{ name: "Computer Science Minor", href: "#minor" },
							{ name: "Cyber Security Minor", href: "#cybersec" },
							{ name: "Data Science Minor", href: "#datascience" },
							{ name: "Computational Linguistics Minor", href: "#compling" },
						],
						submenu: {
							name: "BS in Computer Science",
							links: [
								{ name: "Specializations", href: "#specializations" },
								{ name: "Graduation with Honors", href: "#honors" },
								{ name: "Career Milestones", href: "#milestones" },
							],
						},
					},
					{
						title: "BS/MS Accelerated",
						links: [
							{ name: "Double Counting Policy", href: "#double-counting" },
						],
					},
					{
						title: "ABET Accreditation",
						links: [
							{ name: "Program Educational Objectives", href: "#objectives" },
							{ name: "Student Outcomes", href: "#outcomes" },
							{ name: "BS Program Enrollment", href: "#enrollment" },
						],
					},
				]}
			/>

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
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" style={{ gridTemplateRows: 'auto' }}>
								{Professors.map((professor, index) => (
									<div
										key={index}
										className="bg-white overflow-hidden grid grid-cols-[auto_1fr] gap-0 focus-within:ring-2 focus-within:ring-inset focus-within:ring-csi-blue"
										role="article"
										aria-label={`${professor.name} faculty card`}
										style={{ gridTemplateRows: 'subgrid', gridRow: 'span 1' }}
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
														className="text-[#2d88de] hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2d88de]"
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
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" style={{ gridTemplateRows: 'auto' }}>
								{OfficeStaff.map((professor, index) => (
									<div
										key={index}
										className="bg-white overflow-hidden grid grid-cols-[auto_1fr] gap-0 focus-within:ring-2 focus-within:ring-inset focus-within:ring-csi-blue"
										role="article"
										aria-label={`${professor.name} faculty card`}
										style={{ gridTemplateRows: 'subgrid', gridRow: 'span 1' }}
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
														className="text-[#2d88de] hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2d88de]"
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
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" style={{ gridTemplateRows: 'auto' }}>
								{TechnicalStaff.map((professor, index) => (
									<div
										key={index}
										className="bg-white overflow-hidden grid grid-cols-[auto_1fr] gap-0 focus-within:ring-2 focus-within:ring-inset focus-within:ring-csi-blue"
										role="article"
										aria-label={`${professor.name} faculty card`}
										style={{ gridTemplateRows: 'subgrid', gridRow: 'span 1' }}
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
														className="text-[#2d88de] hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2d88de]"
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
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
													className="text-csi-blue hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
