interface FacultyCard {
	name: string;
	title: string;
	email: string;
	office: string;
	phone: string;
}

const Professors: FacultyCard[] = [
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Cong Chen2", title: "Prof", email: "test@test.com", office: "CS", phone: "917-589-6803"
	},
	{
		name: "Cong Chen3", title: "Prof", email: "test@test.com", office: "CS", phone: "917-589-6803"
	},
]

const OfficeStaff: FacultyCard[] = [
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
]

const TechnicalStaff: FacultyCard[] = [
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
	{
		name: "Professor Shuqun Zhang", title: "Distinguished Professor", email: "sos.agaian@csi.cuny.edu", office: "1N-203", phone: "718-982-2843"
	},
]

const Emeritus = [
		"Bernard Domanski", "Bernard Domanski", "Bernard Domanski",
		"Bernard Domanski", "Bernard Domanski", "Bernard Domanski",
		"Bernard Domanski", "Bernard Domanski", "Bernard Domanski",
		"Bernard Domanski", "Bernard Domanski", "Bernard Domanski",
	];

const Adjuncts = [
		"Bernard Domanski", "Bernard Domanski", "Bernard Domanski",
		"Bernard Domanski", "Bernard Domanski", "Bernard Domanski",
		"Bernard Domanski", "Bernard Domanski", "Bernard Domanski",
		"Bernard Domanski", "Bernard Domanski", "Bernard Domanski",
]


const Faculty = () => {
	return (
		<div className="w-full">
			<div className="bg-csi-gray border-b border-gray-300 py-6 px-4">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-3xl font-bold text-center bg-white py-4 px-6 rounded shadow-sm">
						Faculty
					</h1>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{/* Sidebar */}
					<aside className="lg:col-span-1">
						<div className="bg-csi-gray p-6 rounded-lg sticky top-24">
							<h2 className="text-xl font-bold mb-6 mt-4">DEGREES</h2>
							<nav aria-label="Degrees navigation">
								<ul className="space-y-2">
									<li>
										<a
											href="#aas"
											className="block p-3 hover:bg-gray-200 border-l-4 border-transparent hover:border-csi-blue transition-all"
										>
											AAS in Computer Technology
										</a>
									</li>
									<li>
										<a
											href="#bs-cs"
											className="block p-3 hover:bg-gray-200 border-l-4 border-transparent hover:border-csi-blue transition-all"
										>
											BS in Computer Science
										</a>
									</li>
									<li>
										<a
											href="#bs-csmath"
											className="block p-3 hover:bg-gray-200 border-l-4 border-transparent hover:border-csi-blue transition-all"
										>
											BS in Computer Science-Mathematics
										</a>
									</li>
									<li>
										<a
											href="#minor"
											className="block p-3 hover:bg-gray-200 border-l-4 border-transparent hover:border-csi-blue transition-all"
										>
											Computer Science Minor
										</a>
									</li>
									<li>
										<a
											href="#cybersec"
											className="block p-3 hover:bg-gray-200 border-l-4 border-transparent hover:border-csi-blue transition-all"
										>
											Cyber Security Minor
										</a>
									</li>
									<li>
										<a
											href="#datascience"
											className="block p-3 hover:bg-gray-200 border-l-4 border-transparent hover:border-csi-blue transition-all"
										>
											Data Science Minor
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</aside>

					{/* Main Content Area */}
					<div className="lg:col-span-3 space-y-12">
						{/* Computer Science professors section */}
						<section>
							<h2 className="text-3xl font-bold mb-8">
								Professors
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								{Professors.map((professor, index) => (
									<div
										key={index}
										className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row"
									>
										<div className="bg-gray-200 w-full sm:w-32 h-32 sm:h-auto shrink-0 flex items-center justify-center">
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
											<h3 className="text-lg font-bold mb-2">{professor.name}</h3>
											<p className="text-xs text-gray-500 ">{professor.title}</p>
											<p className="text-xs text-gray-500">Email: {professor.email}</p>
											<p className="text-xs text-gray-500">Office: {professor.office}</p>
											<p className="text-xs text-gray-500">Phone: {professor.phone}</p>
					
										</div>
									</div>
								))}
							</div>
						</section>

						<hr className="border-t border-[#53626e] my-8" />

						{/* Emeritus Section */}
						<section id="bs-cs">
							<h3 className="text-2xl font-bold mb-4">Emeritus</h3>
							<div className="bg-white p-6">
								<ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
									{Emeritus.map((spec, index) => (
										<li key={index} className="flex items-start">
											<span className="text-gray-700">{spec}</span>
										</li>
									))}
								</ul>
							</div>
						</section>

						<hr className="border-t border-[#53626e] my-8" />

						{/* Adjuncts Section */}
						<section id="bs-cs">
							<h3 className="text-2xl font-bold mb-4">Adjuncts</h3>
							<div className="bg-white p-6">
								<ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
									{Adjuncts.map((spec, index) => (
										<li key={index} className="flex items-start">
											<span className="text-gray-700">{spec}</span>
										</li>
									))}
								</ul>
							</div>
						</section>

						<hr className="border-t border-[#53626e] my-8" />

						{/* Office Staff Section */}
						<section>
							<h2 className="text-3xl font-bold mb-8">
								Office Staff
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								{OfficeStaff.map((professor, index) => (
									<div
										key={index}
										className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row"
									>
										<div className="bg-gray-200 w-full sm:w-32 h-32 sm:h-auto shrink-0 flex items-center justify-center">
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
											<h3 className="text-lg font-bold mb-2">{professor.name}</h3>
											<p className="text-xs text-gray-500 ">{professor.title}</p>
											<p className="text-xs text-gray-500">Email: {professor.email}</p>
											<p className="text-xs text-gray-500">Office: {professor.office}</p>
											<p className="text-xs text-gray-500">Phone: {professor.phone}</p>
					
										</div>
									</div>
								))}
							</div>
						</section>

						<hr className="border-t border-[#53626e] my-8" />

						{/* Technical Staff Section */}
						<section>
							<h2 className="text-3xl font-bold mb-8">
								Technical Staff
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								{TechnicalStaff.map((professor, index) => (
									<div
										key={index}
										className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row"
									>
										<div className="bg-gray-200 w-full sm:w-32 h-32 sm:h-auto shrink-0 flex items-center justify-center">
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
											<h3 className="text-lg font-bold mb-2">{professor.name}</h3>
											<p className="text-xs text-gray-500 ">{professor.title}</p>
											<p className="text-xs text-gray-500">Email: {professor.email}</p>
											<p className="text-xs text-gray-500">Office: {professor.office}</p>
											<p className="text-xs text-gray-500">Phone: {professor.phone}</p>
					
										</div>
									</div>
								))}
							</div>
						</section>
						
						<hr className="border-t border-[#53626e] my-8" />


					</div>
				</div>
			</div>
		</div>
	);
};

export default Faculty;
