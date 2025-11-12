const Undergraduate = () => {
	const degrees = [
		{
			title: "AAS in Computer Technology",
			description:
				"A two-year program focused on general applications programming of information science sequences.",
			link: "https://www.csi.cuny.edu/academics-and-research/college-catalog",
		},
		{
			title: "BS in Computer Science",
			description:
				"Students seeking a Bachelor's degree in Computer Science should consult the Computer Science/Mathematics Department.",
			link: "https://www.csi.cuny.edu/academics-and-research/college-catalog",
		},
		{
			title: "BS in Computer Science-Mathematics",
			description:
				"An interdisciplinary degree combining computer science and mathematics curricula.",
			link: "https://www.csi.cuny.edu/academics-and-research/college-catalog",
		},
	];

	const specializations = [
		"Game Development",
		"Bioinformatics and Security",
		"High-Performance Computing Data Science",
	];

	return (
		<div className="w-full">
			{/* Page Header */}
			<div className="bg-csi-gray border-b border-gray-300 py-6 px-4">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-3xl font-bold text-center bg-white py-4 px-6 rounded shadow-sm">
						Undergraduate Programs
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
						{/* Computer Science Degrees Section */}
						<section>
							<h2 className="text-3xl font-bold mb-8">
								Computer Science Degrees
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
								{degrees.map((degree, index) => (
									<div
										key={index}
										className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
									>
										<div className="bg-gray-200 h-48 flex items-center justify-center">
											<svg
												className="w-24 h-24 text-gray-400"
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
										<div className="p-6">
											<h3 className="text-xl font-bold mb-3">{degree.title}</h3>
											<a
												href={degree.link}
												className="text-csi-blue hover:underline text-sm"
											>
												View Program →
											</a>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* BS Specializations Section */}
						<section id="bs-cs">
							<h3 className="text-2xl font-bold mb-4">BS Specializations</h3>
							<div className="bg-white p-6 rounded-lg border border-gray-200">
								<ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
									{specializations.map((spec, index) => (
										<li key={index} className="flex items-start">
											<span className="text-csi-blue mr-2">•</span>
											<span className="text-gray-700">{spec}</span>
										</li>
									))}
								</ul>
							</div>
						</section>

						{/* Advisement Section */}
						<section>
							<h2 className="text-3xl font-bold mb-6">Advisement</h2>
							<div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
								<div>
									<p className="text-gray-700 mb-4">
										If your declared major is AAS Computer Technology, BS in
										Computer Science, or BS in Computer Science–Mathematics, and
										you need advisement, please contact the{" "}
										<a
											href="https://www.csi.cuny.edu"
											className="text-csi-blue hover:underline"
										>
											CS flow chart for self-advisement
										</a>
										.
									</p>
								</div>

								<div>
									<p className="text-gray-700 mb-4">
										If your declared major or intended major is BS in
										Information Systems and Informatics (ISI), please contact
										the{" "}
										<a
											href="mailto:prof.louis.preilig@csi.cuny.edu"
											className="text-csi-blue hover:underline"
										>
											ISI coordinator, Prof. Louis Preilig
										</a>{" "}
										or{" "}
										<a
											href="mailto:prof.soon.chun@csi.cuny.edu"
											className="text-csi-blue hover:underline"
										>
											Prof. Soon Chun
										</a>
										.
									</p>
								</div>

								<div>
									<p className="text-gray-700 mb-4">
										Sign in to{" "}
										<a
											href="https://degreeWorks.cuny.edu"
											className="text-csi-blue hover:underline"
										>
											DegreeWorks
										</a>{" "}
										here to see what courses you can take to fulfill the degree
										requirements and track your academic progress.
									</p>
								</div>

								<div>
									<p className="text-gray-700">
										View{" "}
										<a
											href="https://www.csi.cuny.edu/academics-and-research/college-catalog"
											className="text-csi-blue hover:underline"
										>
											Undergraduate Catalog
										</a>
									</p>
								</div>
							</div>
						</section>

						{/* Transfer Students Section */}
						<section>
							<h2 className="text-3xl font-bold mb-6">Transfer Students</h2>
							<div className="bg-white p-6 rounded-lg border border-gray-200">
								<p className="text-gray-700 mb-4">
									If you completed computer science coursework at another
									accredited college, and these credits did not convert to
									anything in the computer science catalog here (i.e. they show
									as CSC BKT credits in your CUNYFirst course history), you may
									request these credits be evaluated. Please complete the{" "}
									<a href="#" className="text-csi-blue hover:underline">
										transfer credit evaluation form
									</a>
									. Include a copy of your transcript from the institution at
									which you completed the course, and either the course
									description from that institution's online catalog or syllabus
									submit these to the{" "}
									<a href="#" className="text-csi-blue hover:underline">
										CSC
									</a>
									, or contact the department chair.
								</p>
								<p className="text-gray-700">
									<strong>Transfer Credit Evaluation Form Download</strong>
								</p>
							</div>
						</section>

						{/* Tutoring Section */}
						<section>
							<h2 className="text-3xl font-bold mb-6">Tutoring</h2>
							<div className="bg-white p-6 rounded-lg border border-gray-200">
								<ul className="list-disc list-inside space-y-2 text-gray-700">
									<li>
										<a href="#" className="text-csi-blue hover:underline">
											Computer Science Tutoring Schedule
										</a>
									</li>
									<li>
										<a href="#" className="text-csi-blue hover:underline">
											Office of Academic Support
										</a>
									</li>
								</ul>
							</div>
						</section>

						{/* AAS Details Section */}
						<section id="aas" className="scroll-mt-24">
							<h2 className="text-3xl font-bold mb-6">
								Associate in Applied Science (AAS) in Computer Technology
							</h2>
							<div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
									<a href="#" className="text-csi-blue hover:underline">
										Sample 2-year plan
									</a>
									<a href="#" className="text-csi-blue hover:underline">
										Prerequisite Flowchart
									</a>
									<a href="#" className="text-csi-blue hover:underline">
										Degree Requirements
									</a>
								</div>
								<div className="space-y-4">
									<p className="text-gray-700">
										<a href="#" className="text-csi-blue hover:underline">
											Degree checklist(Programming Sequence)
										</a>{" "}
										|{" "}
										<a href="#" className="text-csi-blue hover:underline">
											Degree checklist(Information Science Sequence)
										</a>
									</p>
									<p className="text-gray-700">
										The Computer Science offers a Computer Technology program
										that focuses on general applications programming of
										information science sequences. Students seeking a degree in
										Computer Science should consult the Computer
										Science/Mathematics.
									</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Undergraduate;
