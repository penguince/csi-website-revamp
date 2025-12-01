// --- Types ---
interface CourseLink {
	label: string;
	href: string;
}

interface CourseCategoryProps {
	title: string;
	links: CourseLink[];
	description?: string;
}

interface PhDCategoryProps {
	title: string;
	links: CourseLink[];
}

// --- Undergraduate Courses Data ---
const undergradCourses: CourseLink[] = [
	{ label: "CSC 102 Computers for Today", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626441" },
	{ label: "CSC 115 Introduction to Computer Technology", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626511" },
	{ label: "CSC 117 Computer Technology Lab", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1208961" },
	{ label: "CSC 119 Computer Technology Concepts", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1186771" },
	{ label: "CSC 126 Introduction to Computer Science", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626561" },
	{ label: "CSC 135 Introduction to Information Systems", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0621232" },
	{ label: "CSC 140 Computational Problem Solving in Python", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1209211" },
	{ label: "CSC 211 Intermediate Programming", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626631" },
	{ label: "CSC 215 Assistive Technology for Universal Applications", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1186881" },
	{ label: "CSC 220 Computer Organization", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626651" },
	{ label: "CSC 221 Networking and Security", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1545761" },
	{ label: "CSC 223 Cybersecurity Fundamentals", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626661" },
	{ label: "CSC 225 Introduction to Web Development and the Internet", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626681" },
	{ label: "CSC 226 Web Database Applications", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626691" },
	{ label: "CSC 227 Introductory Computer Game Programming", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626701" },
	{ label: "CSC 228 Discrete Mathematical Structures for Computer Science", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626711" },
	{ label: "CSC 229 Introduction to High Performance Computing", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1087091" },
	{ label: "CSC 235 Robotic Explorations", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1238371" },
	{ label: "CSC 245 Introduction to Data Science", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1504171" },
	{ label: "CSC 250 Serious Game Development", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1522221" },
	{ label: "CSC 270 Introduction to Scientific Computing", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626781" },
	{ label: "CSC 305 Operating Systems Programming Laboratory", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1209231" },
	{ label: "CSC 315 Introduction to Database Systems", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1300971" },
	{ label: "CSC 326 Data Structures", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626831" },
	{ label: "CSC 330 Object-Oriented Software Design", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626851" },
	{ label: "CSC 332 Operating Systems I", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626871" },
	{ label: "CSC 346 Digital Systems Design", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626921" },
	{ label: "CSC 347 Digital Systems Design Laboratory", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626931" },
	{ label: "CSC 382 Analysis of Algorithms", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0626991" },
	{ label: "CSC 401 Virtual and Augmented Reality", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1572991" },
	{ label: "CSC 412 Machine Learning and Knowledge Discovery", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1471021" },
	{ label: "CSC 420 Concepts of Programming Languages", href: "http://csicuny.smartcatalogiq.com/current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-420" },
	{ label: "CSC 421 Internet Data Communications", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627051" },
	{ label: "CSC 424 Advanced Database Management Systems", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627061" },
	{ label: "CSC 425 Shared Memory Parallel Computing", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1371751" },
	{ label: "CSC 426 Applied Cryptography", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1371611" },
	{ label: "CSC 427 Advanced Computer Game Programming", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627071" },
	{ label: "CSC 429 Advanced High Performance Computing", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1090481" },
	{ label: "CSC 430 Software Engineering", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627081" },
	{ label: "CSC 435 Advanced Data Communications", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627111" },
	{ label: "CSC 436 Modern Web Development", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1522231" },
	{ label: "CSC 438 Mobile Application Development", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1186111" },
	{ label: "CSC 446 Computer Architecture", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627131" },
	{ label: "CSC 450 Honors Workshop", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627141" },
	{ label: "CSC 455 Neuromorphic Computing", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1553381" },
	{ label: "CSC 462 Microcontrollers", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0643652" },
	{ label: "CSC 470 Introductory Computer Graphics", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627181" },
	{ label: "CSC 475 Image Processing in Computer Science", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627191" },
	{ label: "CSC 480 Artificial Intelligence", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627201" },
	{ label: "CSC 482 Discrete Simulation", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627211" },
	{ label: "CSC 484 Theory of Computation", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627221" },
	{ label: "CSC 490 Seminar in Computer Science", href: "https://csi-undergraduate.catalog.cuny.edu/courses/0627231" },
	// ISI Courses
	{ label: "ISI 205 Data Communications and IT Infrastructure", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1303251" },
	{ label: "ISI 300 Information Structures for Business", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1300991" },
	{ label: "ISI 315 Information Security and Risk Management", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1303261" },
	{ label: "ISI 334 Business Intelligence and Analytics", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1303291" },
	{ label: "ISI 352 Introduction to Systems Analysis", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1303271" },
	{ label: "ISI 364 Enterprise Computing Strategies", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1300961" },
	{ label: "ISI 374 Information Systems Project Management", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1301001" },
	{ label: "ISI 490 Project in Information Systems and Informatics", href: "https://csi-undergraduate.catalog.cuny.edu/courses/1301011" },
];

// --- Graduate Courses Data ---
const graduateCourses: CourseLink[] = [
	{ label: "CSC 704 Special Topics Course: Technology-Infused Curriculum Development and Instruction", href: "https://csi-graduate.catalog.cuny.edu/courses/0627711" },
	{ label: "CSC 706 Computer Graphics", href: "https://csi-graduate.catalog.cuny.edu/courses/0627731" },
	{ label: "CSC 710 Software Engineering", href: "https://csi-graduate.catalog.cuny.edu/courses/0627761" },
	{ label: "CSC 711 An Introduction to Computational Thinking for Teachers", href: "https://csi-graduate.catalog.cuny.edu/courses/1299601" },
	{ label: "CSC 714 Software Systems Analysis Design", href: "https://csi-graduate.catalog.cuny.edu/courses/0627791" },
	{ label: "CSC 715 Database Theory", href: "https://csi-graduate.catalog.cuny.edu/courses/0627801" },
	{ label: "CSC 716 Advanced Operating Systems", href: "https://csi-graduate.catalog.cuny.edu/courses/0627811" },
	{ label: "CSC 724 Formal Language Theory", href: "https://csi-graduate.catalog.cuny.edu/courses/0627871" },
	{ label: "CSC 725 Computer Vision", href: "https://csi-graduate.catalog.cuny.edu/courses/1485221" },
	{ label: "CSC 727 Algorithms and Information Structures", href: "https://csi-graduate.catalog.cuny.edu/courses/0627881" },
	{ label: "CSC 731 Artificial Intelligence and Knowledge Engineering", href: "https://csi-graduate.catalog.cuny.edu/courses/0627891" },
	{ label: "CSC 732 Pattern Recognition and Neural Networks", href: "https://csi-graduate.catalog.cuny.edu/courses/0627901" },
	{ label: "CSC 733 Natural Language Processing", href: "https://csi-graduate.catalog.cuny.edu/courses/0627911" },
	{ label: "CSC 735 Machine Learning and Data Mining", href: "https://csi-graduate.catalog.cuny.edu/courses/0627921" },
	{ label: "CSC 740 Computer System Design", href: "https://csi-graduate.catalog.cuny.edu/courses/0627931" },
	{ label: "CSC 741 Digital Image Processing", href: "https://csi-graduate.catalog.cuny.edu/courses/0627941" },
	{ label: "CSC 747 Digital Signal Processing", href: "https://csi-graduate.catalog.cuny.edu/courses/0627971" },
	{ label: "CSC 754 Topics in System Simulation", href: "https://csi-graduate.catalog.cuny.edu/courses/0628011" },
	{ label: "CSC 756 Network Security", href: "https://csi-graduate.catalog.cuny.edu/courses/0628031" },
	{ label: "CSC 757 Telecommunication Networks", href: "https://csi-graduate.catalog.cuny.edu/courses/0628041" },
	{ label: "CSC 759 Graduate Research Laboratory", href: "https://csi-graduate.catalog.cuny.edu/courses/0628061" },
	{ label: "CSC 762 Fundamentals of Wireless Communications", href: "https://csi-graduate.catalog.cuny.edu/courses/0628081" },
	{ label: "CSC 767 Neural Networks and Deep Learning", href: "https://csi-graduate.catalog.cuny.edu/courses/1371761" },
	{ label: "CSC 768 Cryptography", href: "https://csi-graduate.catalog.cuny.edu/courses/1371771" },
	{ label: "CSC 769 Graph-Based Analysis for Big Data in Social Networks", href: "https://csi-graduate.catalog.cuny.edu/courses/1372531" },
	{ label: "CSC 770 Parallel Computing", href: "https://csi-graduate.catalog.cuny.edu/courses/0628111" },
];

const undergradDescription =
	"CSC 102 is a general introductory course in computers. This course is not credited toward the major. CSC 115 fulfills the scientific analysis requirements. CSC 126 is the introductory course in the AAS in Computer Technology and the BS in Computer Science program. CSC 126 is a general introductory course in computer science for engineering students and others with similar needs.";

const graduateDescription =
	"CSC 704 is for Teachers on Sabbatical program and CSC 711 is for Education MS program. These courses are not credited toward the MS degree.";

// --- Ph.D. Course Categories ---
const phdCategories: PhDCategoryProps[] = [
	{
		title: "Data Science",
		links: [
			{ label: "Big Data Analytics", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/big_data_analytics.pdf" },
			{ label: "Data Mining", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/data_mining.pdf" },
			{ label: "Data Visualization", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/data_visualization.pdf" },
			{ label: "Data Base Management Systems", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/database_systems.pdf" },
		],
	},
	{
		title: "Machine Learning, Modeling and Optimization",
		links: [
			{ label: "Machine Learning", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/machine_learning.pdf" },
			{ label: "Machine Learning in Quantitative Finance", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/machine_learning_quantitative_finance.pdf" },
			{ label: "Graphical Models", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/graphical_models.pdf" },
			{ label: "Quickest Detection of Abrupt Changes", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/quickest_detection.pdf" },
			{ label: "Modeling and Simulation", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/modeling_simulation.pdf" },
			{ label: "Stochastic Optimization", href: "https://www.gc.cuny.edu/Page-Elements/Academics-Research-Centers-Initiatives/Doctoral-Programs/Computer-Science/Course-Listings/Fall-2017/Stochastic-Optimization" },
		],
	},
	{
		title: "Theory",
		links: [
			{ label: "Advanced Data Structures", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/advanced_data_structures.pdf" },
			{ label: "Algorithms for Big Data", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/algorithms_big_data.pdf" },
			{ label: "Artificial Intelligence", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/artificial_intelligence.pdf" },
			{ label: "Combinatorial Algorithms", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/combinatorial_algorithms.pdf" },
		],
	},
	{
		title: "Computing",
		links: [
			{ label: "Parallel Scientific Computing", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/parallel_scientific_computing.pdf" },
			{ label: "Programming Massively Parallel Systems", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/programming_massively_parallel.pdf" },
		],
	},
	{
		title: "Text Data",
		links: [
			{ label: "Natural Language Processing", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/natural_language_processing.pdf" },
			{ label: "Text Mining", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/text-mining.pdf" },
			{ label: "Pattern Matching", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/pattern_matching.pdf" },
			{ label: "Web Information Retrieval and Data Mining", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/Web_Information_Retrieval_And_Data_Mining.pdf" },
		],
	},
	{
		title: "Visual Data",
		links: [
			{ label: "Computer Vision and Image Processing", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/computer_vision_image_processing.pdf" },
			{ label: "3D Photography", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/3D-Photography.pdf" },
			{ label: "Vision, Brain, and Assistive Technologies", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/vision_brain_assistive.pdf" },
		],
	},
	{
		title: "Social and Cultural",
		links: [
			{ label: "Social Network Analysis", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/graph_social_network_analysis.pdf" },
			{ label: "Social and Cultural Computing", href: "https://www.gc.cuny.edu/CUNY_GC/media/Computer-Science/Courses/social_cultural_computing.pdf" },
		],
	},
];

// --- Helper function to generate valid HTML IDs ---
const generateId = (text: string): string => {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
};

// --- Accessible link color with WCAG AA compliant contrast (4.87:1 against white) ---
const LINK_COLOR_CLASS = "text-csi-link";

// --- Course Category Component ---
const CourseCategory = ({ title, links, description }: CourseCategoryProps) => {
	const headingId = `heading-${generateId(title)}`;
	const mid = Math.ceil(links.length / 2);
	const leftCol = links.slice(0, mid);
	const rightCol = links.slice(mid);

	return (
		<section className="mb-12" aria-labelledby={headingId}>
			<h2 id={headingId} className="text-2xl font-bold text-gray-800 mb-6">
				{title}
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mb-6">
				<ul
					className={`space-y-2 list-disc pl-5 ${LINK_COLOR_CLASS}`}
					role="list"
				>
					{leftCol.map((link, idx) => (
						<li key={`left-${idx}`}>
							<a
								href={link.href}
								className="text-sm hover:underline leading-relaxed focus:outline-none focus-visible:ring-2 focus-visible:ring-csi-focus focus-visible:ring-offset-1 rounded px-0.5"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
				<ul
					className={`space-y-2 list-disc pl-5 ${LINK_COLOR_CLASS}`}
					role="list"
				>
					{rightCol.map((link, idx) => (
						<li key={`right-${idx}`}>
							<a
								href={link.href}
								className="text-sm hover:underline leading-relaxed focus:outline-none focus-visible:ring-2 focus-visible:ring-csi-focus focus-visible:ring-offset-1 rounded px-0.5"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>

			{description && (
				<p className="text-sm text-gray-700 leading-relaxed">{description}</p>
			)}
		</section>
	);
};

// --- PhD Course Section Component ---
const PhDCourseSection = () => {
	const mid = Math.ceil(phdCategories.length / 2);
	const leftCategories = phdCategories.slice(0, mid);
	const rightCategories = phdCategories.slice(mid);

	return (
		<section className="mb-12" aria-labelledby="heading-phd-courses">
			<h2
				id="heading-phd-courses"
				className="text-2xl font-bold text-gray-800 mb-6"
			>
				Ph.D. Courses
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
				{/* Left Column Group */}
				<div className="space-y-8">
					{leftCategories.map((category, categoryIdx) => (
						<div key={`left-category-${categoryIdx}`}>
							<h3 className="font-bold text-sm text-gray-800 mb-2">
								{category.title}
							</h3>
							<ul
								className={`space-y-1 list-disc pl-5 ${LINK_COLOR_CLASS}`}
								role="list"
							>
								{category.links.map((link, linkIdx) => (
									<li key={`left-${categoryIdx}-${linkIdx}`}>
										<a
											href={link.href}
											className="text-xs hover:underline leading-relaxed focus:outline-none focus-visible:ring-2 focus-visible:ring-csi-focus focus-visible:ring-offset-1 rounded px-0.5"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Right Column Group */}
				<div className="space-y-8">
					{rightCategories.map((category, categoryIdx) => (
						<div key={`right-category-${categoryIdx}`}>
							<h3 className="font-bold text-sm text-gray-800 mb-2">
								{category.title}
							</h3>
							<ul
								className={`space-y-1 list-disc pl-5 ${LINK_COLOR_CLASS}`}
								role="list"
							>
								{category.links.map((link, linkIdx) => (
									<li key={`right-${categoryIdx}-${linkIdx}`}>
										<a
											href={link.href}
											className="text-xs hover:underline leading-relaxed focus:outline-none focus-visible:ring-2 focus-visible:ring-csi-focus focus-visible:ring-offset-1 rounded px-0.5"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

// --- Main Courses Page Component ---
const Courses = () => {
	return (
		<main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 bg-white min-h-screen">
			{/* Screen reader only heading for page context */}
			<h1 className="sr-only">Course Catalog</h1>

			{/* Quick Links */}
			<div className="mb-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
				<a
					href="https://globalsearch.cuny.edu/CFGlobalSearchTool/search.jsp"
					className="text-csi-link font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-csi-focus rounded"
					target="_blank"
					rel="noopener noreferrer"
				>
					Computer Science Course Schedule
					<span className="sr-only"> (opens in new tab)</span>
				</a>
				<a
					href="content/overtally.pdf"
					className="text-csi-link font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-csi-focus rounded"
				>
					Waitlist and Overtally Policy
				</a>
			</div>

			<CourseCategory
				title="Undergraduate Courses"
				links={undergradCourses}
				description={undergradDescription}
			/>

			<hr className="my-8 border-gray-200" />

			<CourseCategory
				title="Graduate Courses"
				links={graduateCourses}
				description={graduateDescription}
			/>

			<hr className="my-8 border-gray-200" />

			<PhDCourseSection />
		</main>
	);
};

export default Courses;
