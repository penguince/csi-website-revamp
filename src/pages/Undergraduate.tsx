"use client";

import { useState } from "react";

const Undergraduate = () => {
	const [expandedMenus, setExpandedMenus] = useState<string[]>(["bs-cs"]);

	const sidebarDegrees = [
		{ name: "AAS in Computer Technology", href: "#aas" },
		{ name: "BS in Computer Science", href: "#bs-cs", hasSubmenu: true },
		{ name: "BS in Computer Science-Mathematics", href: "#bs-csmath" },
		{ name: "BS in Information Systems and Informatics", href: "#bs-isi" },
		{ name: "Computer Science Minor", href: "#minor" },
		{ name: "Cyber Security Minor", href: "#cybersec" },
		{ name: "Data Science Minor", href: "#datascience" },
		{ name: "Computational Linguistics Minor", href: "#complang" },
	];

	const bsSubmenu = [
		{ name: "Specializations", href: "#specializations" },
		{ name: "Graduation with Honors", href: "#honors" },
		{ name: "Career Milestones", href: "#milestones" },
	];

	const toggleMenu = (id: string) => {
		setExpandedMenus((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
		);
	};

	return (
		<div className="w-full bg-white flex flex-col gap-6 md:gap-8 lg:gap-10">
			{/* Main Content Container */}
			<div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-[100px] py-8 md:py-12">
				{/* Left Sidebar - Responsive Navigation */}
				<nav
					className="w-full lg:w-64 flex flex-col gap-4 order-2 lg:order-1"
					aria-label="Navigation menu"
				>
					{/* Degrees Panel */}
					<div className="w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
						<div className="p-4 md:p-6 flex flex-col gap-4">
							{/* Degrees Header */}
							<div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-300">
								<h2 className="font-bold text-sm md:text-base uppercase text-blue-600">
									Degrees
								</h2>
							</div>

							{/* Degree List */}
							<div className="flex flex-col gap-3">
								{sidebarDegrees.map((degree) => (
									<div key={degree.href} className="flex flex-col gap-3">
										<a
											href={degree.href}
											className="font-bold text-sm leading-relaxed text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1 transition"
										>
											{degree.name}
										</a>

										{/* Submenu for BS in Computer Science */}
										{degree.hasSubmenu && (
											<div className="flex flex-col gap-2">
												<button
													onClick={() => toggleMenu("bs-cs")}
													className="text-left font-bold text-sm text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-2 py-1 flex items-center justify-between"
													aria-expanded={expandedMenus.includes("bs-cs")}
													aria-label="Toggle BS Computer Science submenu"
												>
													<span></span>
													<svg
														className={`w-4 h-4 transition-transform ${expandedMenus.includes("bs-cs") ? "rotate-180" : ""}`}
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M19 14l-7 7m0 0l-7-7m7 7V3"
														/>
													</svg>
												</button>

												{expandedMenus.includes("bs-cs") && (
													<div className="pl-4 flex flex-col gap-2 border-l-2 border-gray-300">
														{bsSubmenu.map((item) => (
															<a
																key={item.href}
																href={item.href}
																className="font-bold text-sm text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-2 py-1 transition"
															>
																{item.name}
															</a>
														))}
													</div>
												)}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>

					{/* BS/MS Accelerated Panel */}
					<div className="w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
						<div className="p-4 md:p-6 flex flex-col gap-4">
							<div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-300">
								<h2 className="font-bold text-sm md:text-base uppercase text-blue-600">
									BS/MS Accelerated
								</h2>
							</div>
							<a
								href="#double-counting"
								className="font-bold text-sm text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-2 py-1 transition"
							>
								Double Counting Policy
							</a>
						</div>
					</div>

					{/* ABET Accreditation Panel */}
					<div className="w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
						<div className="p-4 md:p-6 flex flex-col gap-4">
							<div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-300">
								<h2 className="font-bold text-sm md:text-base uppercase text-blue-600">
									ABET Accreditation
								</h2>
							</div>
							<div className="flex flex-col gap-3">
								<a
									href="#objectives"
									className="font-bold text-sm text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-2 py-1 transition"
								>
									Program Educational Objectives
								</a>
								<a
									href="#outcomes"
									className="font-bold text-sm text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-2 py-1 transition"
								>
									Student Outcomes
								</a>
								<a
									href="#enrollment"
									className="font-bold text-sm text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-2 py-1 transition"
								>
									BS Program Enrollment
								</a>
							</div>
						</div>
					</div>
				</nav>

				{/* Right Content - Main Content Area */}
				<main className="w-full lg:flex-1 flex flex-col gap-6 md:gap-8 order-1 lg:order-2">
					{/* Advisement Section */}
					<section
						aria-label="Advisement"
						className="flex flex-col gap-4 pb-6 border-b border-gray-300"
					>
						<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-950">
							Advisement
						</h2>

						<div className="flex flex-col gap-3">
							<div className="flex gap-3">
								<span className="text-gray-700" aria-hidden="true">
									・
								</span>
								<p className="text-base leading-relaxed text-gray-800">
									If your declared major is AAS Computer Technology, BS in
									Computer Science, or BS in Computer Science-Mathematics, you
									can find out who is your advisor on CUNYFirst. Please use the
									CS FlowChart for self-advisement.
								</p>
							</div>

							<div className="flex gap-3">
								<span className="text-gray-700" aria-hidden="true">
									・
								</span>
								<p className="text-base leading-relaxed text-gray-800">
									If your declared major or intended major is BS in Information
									Systems and Informatics (ISI), please contact the ISI
									coordinator, Prof. Louis Petingi or Prof. Soon Chun.
								</p>
							</div>

							<div className="flex gap-3">
								<span className="text-gray-700" aria-hidden="true">
									・
								</span>
								<p className="text-base leading-relaxed text-gray-800">
									<a
										href="#degreeworks"
										className="underline text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
									>
										Sign in to DegreeWorks
									</a>{" "}
									here to see what courses you can take to fulfill the degree
									requirements and track your academic progress.
								</p>
							</div>

							<div className="flex gap-3">
								<span className="text-gray-700" aria-hidden="true">
									・
								</span>
								<p className="text-base leading-relaxed text-gray-800">
									<a
										href="#catalog"
										className="underline text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
									>
										View Undergraduate Catalog
									</a>
								</p>
							</div>
						</div>
					</section>

					{/* Transfer Students Section */}
					<section
						aria-label="Transfer Students"
						className="flex flex-col gap-4 pb-6 border-b border-gray-300"
					>
						<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-950">
							Transfer Students
						</h2>

						<div className="flex flex-col gap-3">
							<div className="flex gap-3">
								<span className="text-gray-700" aria-hidden="true">
									・
								</span>
								<p className="text-base leading-relaxed text-gray-800">
									If you completed computer science coursework at another
									accredited college, and these credits did not convert to
									anything in the computer science catalog here (i.e. they show
									as CSC BKT credits in your CUNYfirst course history), you may
									request these credits be evaluated. Please complete the
									transfer credit evaluation. Include a copy of your transcript
									from the institution at which you completed the course, and
									either the course description (from that college's catalog) or
									syllabus. Submit these to 1N-215, or contact the department
									Chair.
								</p>
							</div>

							<div className="flex gap-3">
								<span className="text-gray-700" aria-hidden="true">
									・
								</span>
								<p className="text-base leading-relaxed text-gray-800">
									<a
										href="#transfer-form"
										className="underline text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
									>
										Transfer Credit Evaluation Form
									</a>{" "}
									Download
								</p>
							</div>
						</div>
					</section>

					{/* Tutoring Section */}
					<section
						aria-label="Tutoring"
						className="flex flex-col gap-4 pb-6 border-b border-gray-300"
					>
						<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-950">
							Tutoring
						</h2>

						<div className="flex flex-col gap-3">
							<div className="flex gap-3">
								<span className="text-gray-700" aria-hidden="true">
									・
								</span>
								<p className="text-base leading-relaxed text-gray-800">
									<a
										href="#tutoring-schedule"
										className="underline text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
									>
										Computer Science Tutoring Schedule
									</a>
								</p>
							</div>

							<div className="flex gap-3">
								<span className="text-gray-700" aria-hidden="true">
									・
								</span>
								<p className="text-base leading-relaxed text-gray-800">
									<a
										href="#academic-support"
										className="underline text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
									>
										Office of Academic Support
									</a>
								</p>
							</div>
						</div>
					</section>

					{/* AAS Section */}
					<section
						id="aas"
						aria-label="AAS Degree Program"
						className="flex flex-col gap-4"
					>
						<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-950">
							Associate in Applied Science (AAS) in Computer Technology
						</h2>

						<div className="flex flex-col gap-3">
							<div className="flex gap-3">
								<span className="text-gray-700" aria-hidden="true">
									・
								</span>
								<p className="text-base leading-relaxed text-gray-800">
									<a
										href="#sample-plan"
										className="underline text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
									>
										Sample 2-year plan
									</a>
									{" | "}
									<a
										href="#flowchart"
										className="underline text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
									>
										Prerequisite Flowchart
									</a>
									{" | "}
									<a
										href="#requirements"
										className="underline text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
									>
										Degree Requirements
									</a>
								</p>
							</div>

							<div className="flex gap-3">
								<span className="text-gray-700" aria-hidden="true">
									・
								</span>
								<p className="text-base leading-relaxed text-gray-800">
									<a
										href="#checklist-prog"
										className="underline text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
									>
										Degree checklist (Programming Sequence)
									</a>
									{" | "}
									<a
										href="#checklist-info"
										className="underline text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
									>
										Degree checklist (Information Science Sequence)
									</a>
								</p>
							</div>

							<div className="flex gap-3">
								<span className="text-gray-700" aria-hidden="true">
									・
								</span>
								<p className="text-base leading-relaxed text-gray-800">
									The Computer Science Department offers a Computer Technology
									program that focuses on general applications programming.
									Students can choose either the programming sequence or
									information science sequence. Students seeking a Bachelor's
									degree in Computer Science should consult the requirements for
									the BS in Computer Science or the BS in Computer
									Science/Mathematics.
								</p>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Undergraduate;
