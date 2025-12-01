interface FacultyCard {
	name: string;
	title: string;
	email: string;
	office: string;
	phone: string;
}

const Professors: FacultyCard[] = [
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
];

const OfficeStaff: FacultyCard[] = [
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
];

const TechnicalStaff: FacultyCard[] = [
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
	{
		name: "Professor Shuqun Zhang",
		title: "Distinguished Professor",
		email: "sos.agaian@csi.cuny.edu",
		office: "1N-203",
		phone: "718-982-2843",
	},
];

const Emeritus = [
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
];

const Adjuncts = [
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
	"Bernard Domanski",
];

const Faculty = () => {
	return (
		<main className="w-full" id="main-content">
			{/* Skip to main content link for keyboard users */}
			<a
				href="#faculty-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-csi-blue focus:text-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
			>
				Skip to faculty content
			</a>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-12" id="faculty-content">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{/* Sidebar */}
					<aside
						className="lg:col-span-1 space-y-6"
						role="navigation"
						aria-label="Faculty navigation"
					>
						{/* DEGREES Section */}
						<section className="bg-white border border-gray-300 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
							<h2 className="text-lg font-bold p-4 pb-2 text-csi-blue">
								DEGREES
							</h2>
							<hr className="border-gray-300 mx-4" />
							<nav aria-label="Degrees navigation" className="p-4 pt-3">
								<ul className="space-y-3">
									<li>
										<a
											href="#aas"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											AAS in Computer Technology
										</a>
									</li>
									<li>
										<a
											href="#bs-cs"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											BS in Computer Science
										</a>
										<ul className="ml-4 mt-2 space-y-2">
											<li>
												<a
													href="#specializations"
													className="block text-gray-900 hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
												>
													Specializations
												</a>
											</li>
											<li>
												<a
													href="#honors"
													className="block text-gray-900 hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
												>
													Graduation with Honors
												</a>
											</li>
											<li>
												<a
													href="#milestones"
													className="block text-gray-900 hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
												>
													Career Milestones
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a
											href="#bs-csmath"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											BS in Computer Science-Mathematics
										</a>
									</li>
									<li>
										<a
											href="#bs-is"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											BS in Information Systems and Informatics
										</a>
									</li>
									<li>
										<a
											href="#minor"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											Computer Science Minor
										</a>
									</li>
									<li>
										<a
											href="#cybersec"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											Cyber Security Minor
										</a>
									</li>
									<li>
										<a
											href="#datascience"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											Data Science Minor
										</a>
									</li>
									<li>
										<a
											href="#compling"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											Computational Linguistics Minor
										</a>
									</li>
								</ul>
							</nav>
						</section>

						{/* BS/MS ACCELERATED Section */}
						<section className="bg-white border border-gray-300 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
							<h2 className="text-lg font-bold p-4 pb-2 text-csi-blue">
								BS/MS ACCELERATED
							</h2>
							<hr className="border-gray-300 mx-4" />
							<nav
								aria-label="BS/MS Accelerated navigation"
								className="p-4 pt-3"
							>
								<ul className="space-y-3">
									<li>
										<a
											href="#double-counting"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											Double Counting Policy
										</a>
									</li>
								</ul>
							</nav>
						</section>

						{/* ABET ACCREDITATION Section */}
						<section className="bg-white border border-gray-300 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
							<h2 className="text-lg font-bold p-4 pb-2 text-csi-blue">
								ABET ACCREDITATION
							</h2>
							<hr className="border-gray-300 mx-4" />
							<nav
								aria-label="ABET Accreditation navigation"
								className="p-4 pt-3"
							>
								<ul className="space-y-3">
									<li>
										<a
											href="#objectives"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											Program Educational Objectives
										</a>
									</li>
									<li>
										<a
											href="#outcomes"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											Student Outcomes
										</a>
									</li>
									<li>
										<a
											href="#enrollment"
											className="block text-gray-900 hover:bg-[#f1f1f1] font-medium focus:outline-none focus:ring-2 focus:ring-csi-blue focus:bg-[#f1f1f1] rounded px-2 py-1"
										>
											BS Program Enrollment
										</a>
									</li>
								</ul>
							</nav>
						</section>
					</aside>

					{/* Main Content Area */}
					<div className="lg:col-span-3 space-y-12">
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
										className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row focus-within:ring-2 focus-within:ring-csi-blue"
										role="article"
										aria-label={`${professor.name} faculty card`}
									>
										<div
											className="bg-csi-gray w-full sm:w-32 h-32 sm:h-auto shrink-0 flex items-center justify-center"
											aria-hidden="true"
										>
											<svg
												className="w-16 h-16 text-gray-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div className="p-4 flex flex-col justify-center space-y-0.5">
											<h3 className="text-lg font-bold text-[#2f4f4f] mb-2">
												{professor.name}
											</h3>
											<p className="text-xs text-[#53626e]">
												{professor.title}
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Email:</span>{" "}
												<a
													href={`mailto:${professor.email}`}
													className="text-csi-blue hover:underline focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
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
													className="text-csi-blue hover:underline focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
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
										className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row focus-within:ring-2 focus-within:ring-csi-blue"
										role="article"
										aria-label={`${professor.name} faculty card`}
									>
										<div
											className="bg-csi-gray w-full sm:w-32 h-32 sm:h-auto shrink-0 flex items-center justify-center"
											aria-hidden="true"
										>
											<svg
												className="w-16 h-16 text-gray-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div className="p-4 flex flex-col justify-center space-y-0.5">
											<h3 className="text-lg font-bold text-[#2f4f4f] mb-2">
												{professor.name}
											</h3>
											<p className="text-xs text-[#53626e]">
												{professor.title}
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Email:</span>{" "}
												<a
													href={`mailto:${professor.email}`}
													className="text-csi-blue hover:underline focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
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
													className="text-csi-blue hover:underline focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
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
										className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row focus-within:ring-2 focus-within:ring-csi-blue"
										role="article"
										aria-label={`${professor.name} faculty card`}
									>
										<div
											className="bg-csi-gray w-full sm:w-32 h-32 sm:h-auto shrink-0 flex items-center justify-center"
											aria-hidden="true"
										>
											<svg
												className="w-16 h-16 text-gray-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div className="p-4 flex flex-col justify-center space-y-0.5">
											<h3 className="text-lg font-bold text-[#2f4f4f] mb-2">
												{professor.name}
											</h3>
											<p className="text-xs text-[#53626e]">
												{professor.title}
											</p>
											<p className="text-xs text-[#53626e]">
												<span className="font-medium">Email:</span>{" "}
												<a
													href={`mailto:${professor.email}`}
													className="text-csi-blue hover:underline focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
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
													className="text-csi-blue hover:underline focus:outline-none focus:ring-2 focus:ring-csi-blue rounded"
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
					</div>
				</div>
			</div>
		</main>
	);
};

export default Faculty;
