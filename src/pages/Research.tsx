"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import Slide from "../components/Slide";

const facultyData = [
	{
		id: 1,
		title: "Computational Vision and Machine Learning",
		professor: "Prof. Sos Agaian",
		description:
			"Computational Vision and Machine Learning, Big and Small Data Analytics, Multimodal Biometric and Digital Forensics, Information Processing and Fusion. Applications in Healthcare, Biomedical Data Mining, Object Recognition, Finance, Signal Processing, Computer-Aided Food Quality Inspection, 3D Imaging Sensors, Computational Photography, Multimedia Security.",
		image:
			"https://placehold.co/600x400/9ec0af/1e293b?text=Computational+Vision",
	},
	{
		id: 2,
		title: "High-Performance Computing and Scientific Computing",
		professor: "Prof. Louis Petingi",
		description:
			"NSF REU grant focused on Computational Methods in High Performance Computing and Their Applications to Computational Sciences. Research areas include parallel computing, distributed algorithms, scientific simulations, and optimization techniques for complex computational problems.",
		image: "https://placehold.co/600x400/9ec0af/1e293b?text=HPC+Research",
	},
	{
		id: 3,
		title: "Cybersecurity and Network Security",
		professor: "Prof. Xiaowen Zhang",
		description:
			"Google CyberFirst grant recipient focusing on cybersecurity education and research. Areas include network security, cryptography, secure protocols, threat detection, vulnerability analysis, and cybersecurity training programs for undergraduate students.",
		image: "https://placehold.co/600x400/9ec0af/1e293b?text=Cybersecurity",
	},
	{
		id: 4,
		title: "Bioinformatics and Computational Biology",
		professor: "Prof. S. Alapati",
		description:
			"Academia Europaea member specializing in computational biology and bioinformatics. Research includes genomic analysis, protein structure prediction, systems biology, and applications of machine learning to biological data processing and interpretation.",
		image: "https://placehold.co/600x400/9ec0af/1e293b?text=Bioinformatics",
	},
	{
		id: 5,
		title: "Data Science and Big Data Analytics",
		professor: "Prof. Sarah Zelikovitz",
		description:
			"Dolphin Award recipient for Outstanding Teaching. Research focuses on data mining, knowledge discovery, big data analytics, information retrieval, and practical applications of data science in real-world domains including healthcare and finance.",
		image: "https://placehold.co/600x400/9ec0af/1e293b?text=Data+Science",
	},
	{
		id: 6,
		title: "Systems Biology and Bioengineering",
		professor: "Prof. Louis Preilig",
		description:
			"Award-winning researcher in systems biology and bioengineering. Best paper recipient at the 2022 International Conference of Systems Biology and Bioengineering. Research includes biological system modeling, synthetic biology, and computational biomedical applications.",
		image: "https://placehold.co/600x400/9ec0af/1e293b?text=Systems+Biology",
	},
	{
		id: 7,
		title: "Game Development and Graphics",
		professor: "Prof. Alexei Sourin",
		description:
			"Research in computer graphics, 3D visualization, virtual reality, game development technologies, and interactive computing. Focus on real-time rendering, shader optimization, and immersive user experiences.",
		image: "https://placehold.co/600x400/9ec0af/1e293b?text=Game+Development",
	},
	{
		id: 8,
		title: "Software Engineering and Development",
		professor: "Prof. Diana Inkpen",
		description:
			"Research in software engineering practices, agile development, code quality analysis, and software testing methodologies. Applications include DevOps practices, continuous integration, and software architecture patterns.",
		image:
			"https://placehold.co/600x400/9ec0af/1e293b?text=Software+Engineering",
	},
];

const covidProjects = [
	{
		id: 1,
		title: "COVID-19 Segmentation Research",
		description:
			"Prof. Sos Agaian is working with a team of researchers from Algeria and Thailand on fighting against the COVID-19 pandemic using advanced imaging and computational techniques.",
		linkText: "Project instruction video",
		linkHref: "#",
	},
	{
		id: 2,
		title: "Lung Segmentation Analysis",
		description:
			"Automatic COVID-19 lung infected region segmentation and measurement using CT-scan images. Advanced machine learning algorithms for precise identification and quantification of infected areas.",
		linkText: "Project instruction video",
		linkHref: "#",
	},
	{
		id: 3,
		title: "Deep Learning for Diagnosis",
		description:
			"Neural network models trained on thousands of medical images to assist in rapid and accurate COVID-19 diagnosis from radiological images, supporting clinical decision-making.",
		linkText: "View research paper",
		linkHref: "#",
	},
];

const studentResearchData = [
	{
		id: 1,
		title: "CSC 01 Presentation",
		student: "Konstantin Novichenko",
		description: "Research presentation on Computer Science topics.",
		link: "https://www.cs.csi.cuny.edu/poster/Konstantin-Novichenko-CSC-01-Presentation-RESUBMISSION.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
	{
		id: 2,
		title: "CSC 05 Poster",
		student: "Jacob Chen",
		description: "Research poster presentation.",
		link: "https://www.cs.csi.cuny.edu/poster/Jacob-Chen-CSC-05-Poster.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
	{
		id: 3,
		title: "CSC 04 Poster",
		student: "Alan Eappen",
		description: "Research poster presentation.",
		link: "https://www.cs.csi.cuny.edu/poster/Alan-Eappen-CSC-04-Poster.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
	{
		id: 4,
		title: "CSC 03 Presentation",
		student: "Jasper Caballero",
		description: "Research presentation.",
		link: "https://www.cs.csi.cuny.edu/poster/Jasper-Caballero-CSC-03-Presentation.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
	{
		id: 5,
		title: "CSC 02 Poster",
		student: "Victoria Fischer",
		description: "Research poster presentation.",
		link: "https://www.cs.csi.cuny.edu/poster/Victoria-Fischer-CSC-02-Poster.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
	{
		id: 6,
		title: "CSC 06 Poster",
		student: "Chukwurado Umeaka",
		description: "Research poster presentation.",
		link: "https://www.cs.csi.cuny.edu/poster/Chukwurado-Umeaka-CSC-06-Poster.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
	{
		id: 7,
		title: "IEEE Sarnoff 2016 Poster",
		student: "Student Researcher",
		description: "Poster presented at IEEE Sarnoff 2016.",
		link: "https://www.cs.csi.cuny.edu/poster/poster_IEEE_Sarnoff2016.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
	{
		id: 8,
		title: "Rainbow Tables Poster",
		student: "McMahon",
		description: "Research on Rainbow Tables.",
		link: "https://www.cs.csi.cuny.edu/poster/McMahon_Rainbow_Tables_Poster.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
	{
		id: 9,
		title: "QR Code Poster",
		student: "Student Researcher",
		description: "Research on QR Codes.",
		link: "https://www.cs.csi.cuny.edu/poster/poster_QRCode.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
	{
		id: 10,
		title: "CSI URC17 Poster",
		student: "Sidhartha Mishra",
		description: "Poster presented at CSI URC17.",
		link: "https://www.cs.csi.cuny.edu/poster/Sidhartha_Mishra_Poster_CSI_URC17.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
	{
		id: 11,
		title: "Filesystem Research",
		student: "Ahmed",
		description: "Research on filesystems.",
		link: "https://www.cs.csi.cuny.edu/poster/poster_ahmed_filesystem.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
	{
		id: 12,
		title: "Wireless Bypassing Research",
		student: "Ahmed",
		description: "Research on wireless bypassing.",
		link: "https://www.cs.csi.cuny.edu/poster/poster_ahmed_wireless_bypassing.pdf",
		image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Student+Research",
	},
];

const Research = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [expandedSections, setExpandedSections] = useState<number[]>([]);

	const filteredFaculty = useMemo(() => {
		return facultyData.filter(
			(item) =>
				item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.professor.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.description.toLowerCase().includes(searchQuery.toLowerCase()),
		);
	}, [searchQuery]);

	const toggleSection = (id: number) => {
		setExpandedSections((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
		);
	};

	return (
		<div className="w-full bg-white overflow-x-hidden">
			<div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-12">
				{/* --- LEFT SIDEBAR --- */}
				<Sidebar
					className="lg:order-1"
					sections={[
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

				{/* --- MAIN CONTENT AREA --- */}
				<main className="w-full lg:flex-1 flex flex-col gap-8 md:gap-12 lg:order-2 overflow-x-hidden">
					{/* 1. COVID-19 Highlight Section */}
					<Slide>
						<section aria-label="Recent COVID-19 Research">
							<h2 className="text-gray-950 font-semibold text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 leading-tight tracking-tight text-balance">
								Recent Research on COVID-19
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-hidden">
								{covidProjects.map((project) => (
									<article
										key={project.id}
										className="relative border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition focus-within:ring-2 focus-within:ring-blue-600"
									>
										<div className="bg-white p-4 md:p-6 h-full flex flex-col">
											<h3 className="font-bold text-lg md:text-xl text-gray-950 mb-3 line-clamp-2">
												{project.title}
											</h3>
											<div className="bg-gray-50 p-4 mt-auto border-t border-gray-200 overflow-hidden">
												<p className="text-sm md:text-base text-gray-800 leading-relaxed">
													{project.description}
												</p>
												<a
													href={project.linkHref}
													className="text-blue-600 font-bold text-sm underline hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 mt-3 block transition truncate"
												>
													{project.linkText}
												</a>
											</div>
										</div>
									</article>
								))}
							</div>
						</section>
					</Slide>

					<hr className="border-t-2 border-gray-300" />

					{/* 2. Faculty Research Section */}
					<Slide delay={0.1}>
						<section
							aria-label="Faculty Research"
							className="overflow-x-hidden"
						>
							<div className="flex flex-col gap-4 md:gap-6 mb-6 overflow-x-hidden">
								<h2 className="text-gray-950 font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-balance">
									Faculty Research
								</h2>

								<div className="w-full flex items-center gap-3 py-2 px-4 md:px-6 bg-white border-2 border-gray-300 focus-within:ring-2 focus-within:ring-blue-600 overflow-hidden">
									<Search
										className="w-5 h-5 text-gray-600 flex-shrink-0"
										aria-hidden="true"
									/>
									<input
										type="text"
										placeholder="Search faculty research"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className="flex-grow font-normal text-base text-gray-950 outline-none bg-transparent min-w-0"
										aria-label="Search faculty research by name, title, or description"
									/>
								</div>
								<p className="text-sm text-gray-600" aria-live="polite">
									{filteredFaculty.length} research area
									{filteredFaculty.length !== 1 ? "s" : ""} found
								</p>
							</div>

							<div
								className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-hidden"
								style={{ gridTemplateRows: "auto" }}
							>
								{filteredFaculty.map((item) => (
									<article
										key={item.id}
										className="bg-white border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 grid"
										style={{ gridTemplateRows: "subgrid", gridRow: "span 2" }}
									>
										<div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-200">
											<img
												src={item.image || "/placeholder.svg"}
												alt={`${item.title} research`}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="p-4 md:p-6 flex flex-col gap-4 h-full min-w-0">
											<div>
												<h3 className="text-gray-950 font-semibold text-lg md:text-xl lg:text-2xl leading-tight tracking-tight break-words">
													{item.title}
												</h3>
												<p className="text-gray-800 font-bold italic text-base md:text-lg mt-1 truncate">
													{item.professor}
												</p>
											</div>
											{/* LOGIC CHANGED HERE: Conditionally apply line-clamp based on expandedSections state */}
											<p
												className={`text-gray-800 text-sm md:text-base leading-relaxed flex-grow ${
													expandedSections.includes(item.id)
														? ""
														: "line-clamp-3"
												}`}
											>
												{item.description}
											</p>

											{/* LOGIC CHANGED HERE: Changed <a> to <button> and added onClick */}
											<button
												onClick={() => toggleSection(item.id)}
												className="text-blue-600 underline text-sm md:text-base hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition whitespace-nowrap text-left w-fit"
											>
												{expandedSections.includes(item.id)
													? "Read less <"
													: "Read more >"}
											</button>
										</div>
									</article>
								))}
							</div>
							{filteredFaculty.length === 0 && (
								<div className="text-center py-8">
									<p className="text-gray-800 text-base">
										No research items match your search.
									</p>
								</div>
							)}
						</section>
					</Slide>

					<hr className="border-t-2 border-gray-300" />

					{/* 3. Student Research Section */}
					<Slide delay={0.15}>
						<section
							aria-label="Student Research"
							className="py-6 md:py-8 overflow-x-hidden"
						>
							<div className="flex flex-col gap-4 md:gap-6 mb-6 overflow-x-hidden">
								<h2 className="text-gray-950 font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-balance">
									Student Research
								</h2>
							</div>

							<div
								className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-hidden"
								style={{ gridTemplateRows: "auto" }}
							>
								{studentResearchData.map((item) => (
									<article
										key={item.id}
										className="bg-white border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 grid"
										style={{ gridTemplateRows: "subgrid", gridRow: "span 2" }}
									>
										<div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-200">
											<img
												src={item.image || "/placeholder.svg"}
												alt={`${item.title} research`}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="p-4 md:p-6 flex flex-col gap-4 h-full min-w-0">
											<div>
												<h3 className="text-gray-950 font-semibold text-lg md:text-xl lg:text-2xl leading-tight tracking-tight break-words">
													{item.title}
												</h3>
												<p className="text-gray-800 font-bold italic text-base md:text-lg mt-1 truncate">
													{item.student}
												</p>
											</div>
											<p className="text-gray-800 text-sm md:text-base leading-relaxed flex-grow">
												{item.description}
											</p>
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 underline text-sm md:text-base hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition whitespace-nowrap text-left w-fit"
											>
												View Poster &gt;
											</a>
										</div>
									</article>
								))}
							</div>
						</section>
					</Slide>
				</main>
			</div>
		</div>
	);
};

export default Research;
