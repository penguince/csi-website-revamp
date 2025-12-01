import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
	const degreeLinks = [
		{ name: "AAS in Computer Technology", href: "/undergraduate" },
		{ name: "BS in Computer Science", href: "/undergraduate" },
		{ name: "BS in Computer Science-Mathematics", href: "/undergraduate" },
		{
			name: "BS in Information Systems and Informatics",
			href: "/undergraduate",
		},
		{ name: "Computer Science Minor", href: "/undergraduate" },
		{ name: "A.A.S in Computer Science", href: "/undergraduate" },
		{ name: "Ph.D in Computer Science", href: "/graduate" },
	];

	const newsItems = [
		{
			title:
				"Congratulations to Prof. Louis Preilig for receiving the NSF REU grant on Computational Methods in High Performance Computing!",
			date: "January 2024",
			expanded: false,
		},
		{
			title:
				"Congratulations to Prof. Xiaowen Zhang for receiving the Google CyberFirst grant!",
			date: "January 2024",
			expanded: false,
		},
		{
			title:
				"Congratulations to our BS student Maxim Voynovich for receiving the Best Presentation Award at the LaGuardia CRISP Symposium! Maxim's project was named Implementing...",
			date: "November 2023",
			expanded: false,
		},
		{
			title:
				"Congratulations to Professor Sarah Zelikovitz for receiving the Dolphin Award for Outstanding Teaching!!",
			date: "October 2023",
			expanded: false,
		},
		{
			title:
				"Congratulations to Prof. Louis Preilig for receiving the best paper award in the 2022 International Conference of Systems Biology and Bioengineering, London, July 2022!",
			date: "July 2022",
			expanded: false,
		},
		{
			title:
				"Congratulations to Prof S. Alapati for being elected as a new Academia Europaea (AE) member!!!",
			date: "June 2022",
			expanded: false,
		},
	];

	return (
		<div className="w-full">
			{/* Hero Section with Image Placeholder */}
			<section className="bg-gray-200 py-16 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col items-center justify-center min-h-[300px] bg-white rounded-lg border-2 border-gray-300">
						{/* Image Placeholder Icon */}
						<div className="w-24 h-24 mb-6" aria-hidden="true">
							<svg
								className="w-full h-full text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<rect
									x="3"
									y="3"
									width="18"
									height="18"
									rx="2"
									ry="2"
									strokeWidth="2"
								/>
								<circle cx="8.5" cy="8.5" r="1.5" strokeWidth="2" />
								<path d="M21 15l-5-5L5 21" strokeWidth="2" />
							</svg>
						</div>
						<h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
							Undergraduate Programs
						</h1>
						<p className="text-gray-600 text-center max-w-2xl mb-6">
							Follow us on an inward-bound journey into the world of computer
							science and raise them until to explore the art.
						</p>
						<button className="bg-csi-blue text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
							Learn More
						</button>
						{/* Carousel Dots */}
						<div className="flex gap-2 mt-6" role="tablist" aria-label="Carousel navigation">
							<div className="w-2 h-2 rounded-full bg-gray-400" role="tab" aria-selected="false" aria-label="Slide 1"></div>
							<div className="w-2 h-2 rounded-full bg-csi-blue" role="tab" aria-selected="true" aria-label="Slide 2 (current)"></div>
							<div className="w-2 h-2 rounded-full bg-gray-400" role="tab" aria-selected="false" aria-label="Slide 3"></div>
							<div className="w-2 h-2 rounded-full bg-gray-400" role="tab" aria-selected="false" aria-label="Slide 4"></div>
							<div className="w-2 h-2 rounded-full bg-gray-400" role="tab" aria-selected="false" aria-label="Slide 5"></div>
						</div>
					</div>
				</div>
			</section>

			{/* About Us Section with Image Placeholder */}
			<section className="py-16 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
						{/* Left Column - Text */}
						<div>
							<h2 className="text-3xl font-bold mb-6">About Us</h2>
							<p className="text-gray-700 mb-4 leading-relaxed">
								The Computer Science Department offers programs that prepare
								students for careers in computer science and/or for continued
								study in the discipline at the graduate level. The major
								provides a broad background in computer science and includes
								courses in programming, computer organization, information
								systems, software engineering and various areas of computer
								hardware. We are committed to offering courses that stay current
								with changing technologies. All as a Computer Science degree is
								accredited.
							</p>
						</div>
						{/* Right Column - Image Placeholder */}
						<div className="bg-gray-100 rounded-lg p-12 flex items-center justify-center min-h-[250px]" aria-hidden="true">
							<svg
								className="w-32 h-32 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<rect
									x="3"
									y="3"
									width="18"
									height="18"
									rx="2"
									ry="2"
									strokeWidth="2"
								/>
								<circle cx="8.5" cy="8.5" r="1.5" strokeWidth="2" />
								<path d="M21 15l-5-5L5 21" strokeWidth="2" />
							</svg>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Information Section with Image Placeholder */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
						{/* Left Column - Image Placeholder */}
						<div className="bg-gray-200 rounded-lg p-12 flex items-center justify-center min-h-[300px]" aria-hidden="true">
							<svg
								className="w-32 h-32 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<rect
									x="3"
									y="3"
									width="18"
									height="18"
									rx="2"
									ry="2"
									strokeWidth="2"
								/>
								<circle cx="8.5" cy="8.5" r="1.5" strokeWidth="2" />
								<path d="M21 15l-5-5L5 21" strokeWidth="2" />
							</svg>
						</div>
						{/* Right Column - Contact Info */}
						<div>
							<h2 className="text-3xl font-bold mb-6">Contact Information</h2>
							<div className="space-y-3 text-gray-700">
								<p className="font-bold text-lg">Professor Shuqun Zhang</p>
								<p className="text-gray-600">Chairperson of the Department</p>
								<p>
									1P-215, 2800 Victory Boulevard, Staten Island, New York 10314
								</p>
								<p>
									Phone:{" "}
									<a
										href="tel:718-982-2830"
										className="text-csi-link hover:underline"
									>
										718.982.2830
									</a>
								</p>
								<p>Fax: 718.982.2849</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Computer Science Degrees Section */}
			<section className="py-16 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-8">
						Computer Science Degrees
					</h2>

					{/* Degree Links */}
					<nav className="flex flex-wrap justify-center gap-3 mb-12" aria-label="Degree programs">
						{degreeLinks.map((link, index) => (
							<Link
								key={index}
								to={link.href}
								className="text-csi-link hover:underline text-sm"
							>
								{link.name}
							</Link>
						))}
					</nav>

					{/* Degree Cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Card 1 */}
						<div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
							<div className="bg-gray-200 h-48 flex items-center justify-center">
								<svg
									className="w-24 h-24 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<rect
										x="3"
										y="3"
										width="18"
										height="18"
										rx="2"
										ry="2"
										strokeWidth="2"
									/>
									<circle cx="8.5" cy="8.5" r="1.5" strokeWidth="2" />
									<path d="M21 15l-5-5L5 21" strokeWidth="2" />
								</svg>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-4">BS Specializations</h3>
								<ul className="space-y-2 text-gray-700 text-sm">
									<li>Game Development</li>
									<li>Bioinformatics and Security</li>
									<li>High-Performance Computing Data Science</li>
								</ul>
							</div>
						</div>

						{/* Card 2 */}
						<div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
							<div className="bg-gray-200 h-48 flex items-center justify-center">
								<svg
									className="w-24 h-24 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<rect
										x="3"
										y="3"
										width="18"
										height="18"
										rx="2"
										ry="2"
										strokeWidth="2"
									/>
									<circle cx="8.5" cy="8.5" r="1.5" strokeWidth="2" />
									<path d="M21 15l-5-5L5 21" strokeWidth="2" />
								</svg>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-4">BS Specializations</h3>
								<ul className="space-y-2 text-gray-700 text-sm">
									<li>Game Development</li>
									<li>Bioinformatics and Security</li>
									<li>High-Performance Computing Data Science</li>
								</ul>
							</div>
						</div>

						{/* Card 3 */}
						<div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
							<div className="bg-gray-200 h-48 flex items-center justify-center">
								<svg
									className="w-24 h-24 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<rect
										x="3"
										y="3"
										width="18"
										height="18"
										rx="2"
										ry="2"
										strokeWidth="2"
									/>
									<circle cx="8.5" cy="8.5" r="1.5" strokeWidth="2" />
									<path d="M21 15l-5-5L5 21" strokeWidth="2" />
								</svg>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-4">BS Specializations</h3>
								<ul className="space-y-2 text-gray-700 text-sm">
									<li>Game Development</li>
									<li>Bioinformatics and Security</li>
									<li>High-Performance Computing Data Science</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* News Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-4">News</h2>
					<p className="text-center text-gray-600 mb-8">
						Sign up to date with achievements, breakthrough in computer science,
						and latest research
					</p>

					{/* Search Bar */}
					<div className="max-w-2xl mx-auto mb-8">
						<label htmlFor="news-search" className="sr-only">Search news</label>
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
							<input
								id="news-search"
								type="search"
								placeholder="Search our library"
								className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-csi-focus"
							/>
						</div>
					</div>

					{/* News Items */}
					<div className="max-w-3xl mx-auto space-y-4" role="list">
						{newsItems.map((item, index) => (
							<article
								key={index}
								className="bg-white border border-gray-200 rounded-md p-6 hover:shadow-md transition-shadow"
							>
								<div className="flex justify-between items-start">
									<div className="flex-1">
										<h3 className="text-base font-normal text-gray-800 mb-2">
											{item.title}
										</h3>
										<p className="text-sm text-gray-500">{item.date}</p>
									</div>
									<button 
										className="text-gray-500 hover:text-gray-700 ml-4 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-csi-focus"
										aria-expanded="false"
										aria-label={`Expand news item: ${item.title.substring(0, 50)}...`}
									>
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</button>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
