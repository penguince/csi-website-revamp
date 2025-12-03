"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";

const newsItemsData = [
	{
		id: 1,
		title:
			"Congratulations to Prof. Louis Petingi for receiving the NSF REU grant on Computational Methods in High Performance Computing and Their Applications to Computational Sciences!",
		description:
			"Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
		date: "January 2024",
	},
	{
		id: 2,
		title:
			"Congratulations to Prof. Xiaowen Zhang for receiving the Google CyberFirst grant!",
		date: "January 2024",
	},
	{
		id: 3,
		title:
			"Congratulations to our BS student Maxim Voynovich for receiving the Best Presentation Award at the LaGuardia CRISP Symposium! Maxim's project was named Implementing...",
		date: "November 2023",
	},
	{
		id: 4,
		title:
			"Congratulations to Professor Sarah Zelikovitz for receiving the Dolphin Award for Outstanding Teaching!!",
		date: "October 2023",
	},
	{
		id: 5,
		title:
			"Congratulations to Prof. Louis Preilig for receiving the best paper award in the 2022 International Conference of Systems Biology and Bioengineering, London, July 2022!",
		date: "July 2022",
	},
	{
		id: 6,
		title:
			"Congratulations to Prof S. Alapati for being elected as a new Academia Europaea (AE) member!!!",
		date: "June 2022",
	},
];

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
		{ name: "M.S. in Computer Science", href: "/graduate" },
		{ name: "Ph.D. in Computer Science", href: "/graduate" },
	];

	const [searchQuery, setSearchQuery] = useState("");
	const [expandedItems, setExpandedItems] = useState<number[]>([1]);

	const filteredNews = useMemo(() => {
		return newsItemsData.filter(
			(item) =>
				item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				(item.description &&
					item.description.toLowerCase().includes(searchQuery.toLowerCase())),
		);
	}, [searchQuery]);

	const toggleExpanded = (id: number) => {
		setExpandedItems((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
		);
	};

	return (
		<div className="w-full bg-white">
			{/* Hero Section */}
			<section
				className="w-full min-h-screen md:min-h-[651px] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center px-4 py-12 md:py-0"
				aria-label="Undergraduate Programs Hero Section"
			>
				<div className="w-full flex flex-col items-center justify-center">
					<div className="max-w-2xl mx-auto flex flex-col items-center gap-8 md:gap-10 text-center">
						<div className="w-full flex flex-col gap-4">
							<h1 className="font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-950 text-balance">
								Undergraduate Programs
							</h1>
							<p className="font-normal text-base md:text-lg leading-relaxed text-gray-800 text-balance">
								Follow us on an inward-bound journey into the world of computer
								science and raise them until to explore the art.
							</p>
						</div>
						<button
							className="flex items-center justify-center py-3 px-6 md:px-8 w-full md:w-auto bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 text-white  font-semibold transition"
							aria-label="Learn More about Undergraduate Programs"
						>
							Learn More
						</button>
					</div>
				</div>
			</section>

			{/* About Us Section */}
			<Slide>
			<section
				className="w-full bg-white flex justify-center items-center py-12 md:py-20 px-4 md:px-8 lg:px-[100px]"
				aria-label="About Us"
			>
				<div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
					{/* Left Column - Text */}
					<div className="w-full lg:flex-1 flex flex-col gap-4">
						<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-gray-950 text-balance">
							About Us
						</h2>
						<p className="font-normal text-base md:text-lg leading-relaxed text-gray-800">
							The Computer Science Department offers programs that prepare
							students for careers in computer science and/or for continued
							study in the discipline at the graduate level. The major provides
							a broad background in computer science and includes courses in
							programming, computer organization, information systems, software
							engineering and various areas of computer hardware. We are
							committed to offering courses that stay current with changing
							technologies. All as a Computer Science degree is accredited.
						</p>
					</div>

					{/* Right Column - Image */}
					<div className="w-full lg:flex-1 h-64 md:h-80 lg:h-96 bg-gray-200  flex items-center justify-center">
						<svg
							className="w-24 md:w-32 h-24 md:h-32 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-label="Placeholder image"
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
			</section>
			</Slide>

			{/* Contact Information Section */}
			<Slide delay={0.1}>
			<section
				className="w-full bg-white flex justify-center items-center py-12 md:py-20 px-4 md:px-8 lg:px-[100px]"
				aria-label="Contact Information"
			>
				<div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
					{/* Right Column - Contact Info */}
					<div className="w-full lg:flex-1 flex flex-col gap-4">
						<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-gray-950 text-balance">
							Contact Information
						</h2>

						{/* Contact Details */}
						<address className="flex flex-col gap-4 not-italic">
							<div>
								<p className="font-bold text-xl md:text-2xl text-gray-950">
									Professor Shuqun Zhang
								</p>
								<p className="font-normal italic text-base text-gray-800">
									Chairperson of the Department
								</p>
							</div>

							<div>
								<p className="font-normal text-base md:text-lg text-gray-800">
									2800 Victory Blvd, 1N-215, Staten Island, New York 10314
								</p>
							</div>

							<div className="flex flex-col gap-1">
								<p className="font-normal text-base text-gray-800">
									Phone:{" "}
									<a
										href="tel:718-982-2850"
										className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-800"
									>
										718.982-2850
									</a>
								</p>
								<p className="font-normal text-base text-gray-800">
									Fax: 718.982-2856
								</p>
							</div>
						</address>
					</div>

					{/* Left Column - Image */}
					<div className="w-full lg:flex-1 h-64 md:h-80 lg:h-96 bg-gray-200  flex items-center justify-center">
						<svg
							className="w-24 md:w-32 h-24 md:h-32 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-label="Placeholder image"
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
			</section>
			</Slide>

			{/* Computer Science Degrees Section */}
			<Slide delay={0.15}>
			<section
				className="w-full bg-white flex justify-center items-center py-12 md:py-20 px-4 md:px-8 lg:px-10"
				aria-label="Computer Science Degree Programs"
			>
				<div className="w-full max-w-7xl flex flex-col items-center gap-8 md:gap-12">
					{/* Header Section */}
					<div className="w-full flex flex-col items-center gap-3 text-center">
						<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-gray-950 text-balance">
							Computer Science Degrees
						</h2>

						{/* Degree Links - Navigation */}
						<nav className="w-full" aria-label="Available degree programs">
							<div className="w-full flex flex-wrap justify-center items-center gap-2 md:gap-3">
								{degreeLinks.map((link, index) => (
									<div key={index} className="flex items-center gap-2">
										<Link
											to={link.href}
											className="font-normal text-sm md:text-base leading-relaxed text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 px-1"
										>
											{link.name}
										</Link>
										{index < degreeLinks.length - 1 && (
											<span
												className="font-normal text-sm md:text-base text-gray-700"
												aria-hidden="true"
											>
												・
											</span>
										)}
									</div>
								))}
							</div>
						</nav>
					</div>

					{/* Cards Container */}
					<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						{/* Card 1 */}
						<article className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
							<div className="w-full h-48 md:h-56 bg-gray-200 flex items-center justify-center">
								<svg
									className="w-20 md:w-24 h-20 md:h-24 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-label="Placeholder image"
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
							<div className="p-4 md:p-6 flex flex-col gap-2">
								<h3 className="font-semibold text-xl md:text-2xl leading-tight text-gray-950">
									BS Specializations
								</h3>
								<p className="font-normal text-base text-gray-800">
									Game Development
									<br />
									Bioinformatics and Security
									<br />
									High-Performance Computing Data Science
								</p>
							</div>
						</article>

						{/* Card 2 */}
						<article className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
							<div className="w-full h-48 md:h-56 bg-gray-200 flex items-center justify-center">
								<svg
									className="w-20 md:w-24 h-20 md:h-24 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-label="Placeholder image"
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
							<div className="p-4 md:p-6 flex flex-col gap-2">
								<h3 className="font-semibold text-xl md:text-2xl leading-tight text-gray-950">
									BS Specializations
								</h3>
								<p className="font-normal text-base text-gray-800">
									Game Development
									<br />
									Bioinformatics and Security
									<br />
									High-Performance Computing Data Science
								</p>
							</div>
						</article>

						{/* Card 3 */}
						<article className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 md:col-span-2 lg:col-span-1">
							<div className="w-full h-48 md:h-56 bg-gray-200 flex items-center justify-center">
								<svg
									className="w-20 md:w-24 h-20 md:h-24 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-label="Placeholder image"
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
							<div className="p-4 md:p-6 flex flex-col gap-2">
								<h3 className="font-semibold text-xl md:text-2xl leading-tight text-gray-950">
									BS Specializations
								</h3>
								<p className="font-normal text-base text-gray-800">
									Game Development
									<br />
									Bioinformatics and Security
									<br />
									High-Performance Computing Data Science
								</p>
							</div>
						</article>
					</div>
				</div>
			</section>
			</Slide>

			{/* News Section */}
			<Slide delay={0.2}>
			<section
				className="w-full bg-white py-12 md:py-20 px-4 md:px-8 lg:px-10"
				aria-label="Latest News"
			>
				<div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-8 md:gap-12">
					{/* Header */}
					<div className="w-full flex flex-col items-center gap-3 text-center">
						<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-gray-950 text-balance">
							News
						</h2>
						<p className="font-normal text-lg md:text-xl leading-relaxed text-gray-800 text-balance">
							Stay up to date with achievements, breakthroughs in computer
							science, and latest research
						</p>
					</div>

					{/* Content */}
					<div className="w-full flex flex-col items-center gap-6 md:gap-8">
						{/* Search Bar */}
						<div className="w-full flex items-center gap-3 py-2 px-4 md:px-6 bg-white border-2 border-gray-600  focus-within:ring-2 focus-within:ring-blue-600">
							<Search
								className="w-5 h-5 text-gray-600 flex-shrink-0"
								aria-hidden="true"
							/>
							<input
								type="text"
								placeholder="Search your question"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="flex-grow font-normal text-base leading-relaxed text-gray-950 outline-none bg-transparent"
								aria-label="Search news articles"
							/>
						</div>

						{/* Accordion */}
						<div
							className="w-full flex flex-col"
							role="region"
							aria-label="News articles"
						>
							{filteredNews.map((item) => (
								<article
									key={item.id}
									className="w-full flex flex-col border-b border-gray-600"
								>
									<div className="flex items-start gap-3 py-4">
										<div className="flex-grow flex flex-col gap-2">
											<h3 className="font-semibold text-lg md:text-xl leading-tight text-blue-700 text-balance">
												{item.title}
											</h3>
											{expandedItems.includes(item.id) && item.description && (
												<>
													<p className="font-normal text-base leading-relaxed text-gray-800">
														{item.description}
													</p>
													<p className="font-bold text-base md:text-lg leading-relaxed text-gray-700">
														{item.date}
													</p>
												</>
											)}
											{!expandedItems.includes(item.id) && (
												<p className="font-normal text-sm text-gray-700">
													{item.date}
												</p>
											)}
										</div>
										<button
											onClick={() => toggleExpanded(item.id)}
											className="w-6 h-6 flex-shrink-0 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
											aria-label={
												expandedItems.includes(item.id)
													? `Collapse article: ${item.title}`
													: `Expand article: ${item.title}`
											}
											aria-expanded={expandedItems.includes(item.id)}
										>
											<svg
												className="w-6 h-6 text-gray-900"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d={
														expandedItems.includes(item.id)
															? "M4.5 15.75l7.5-7.5 7.5 7.5"
															: "M19.5 8.25l-7.5 7.5-7.5-7.5"
													}
												/>
											</svg>
										</button>
									</div>
								</article>
							))}
							{filteredNews.length === 0 && (
								<div className="w-full py-8 text-center">
									<p className="font-normal text-base text-gray-800">
										No news items match your search.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
			</Slide>
		</div>
	);
};

export default Home;
