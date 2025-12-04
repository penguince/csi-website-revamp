import { Picture } from "../components/Picture";

// --- Types ---
interface ResourceLink {
	label: string;
	href: string;
}

interface ResourceSectionProps {
	title: string;
	links: ResourceLink[];
}

// --- Data ---
const studentSpotlights: ResourceLink[] = [
	{
		label:
			'CS student team won the "Women in Tech" tech incubator competition!',
		href: "https://www.businesswire.com/news/home/20240510262696/en/Standard-Chartered-celebrates-Women-in-Tech-Incubator-Competition-winners-and-10-Year-partnership-anniversary-with-Zahn-Innovation-Center-at-City-College-of-New-York",
	},
	{
		label: "First-Ever Game Jam Event Showcases Talent of CS Students",
		href: "https://csitoday.com/2024/02/first-ever-game-jam-event-showcases-talent-of-csis-computer-science-students/",
	},
	{
		label:
			"CSI Computer Science Students Offered Full-Time Positions After Summer Internship",
		href: "https://csitoday.com/2022/10/csi-computer-science-students-offered-full-time-positions-after-summer-internship/",
	},
	{
		label:
			"For Recent Grad Eric Benedetto, Remote Learning Was Perfect For Pot-Bellied Pigs",
		href: "https://csitoday.com/2022/06/for-recent-grad-eric-benedetto-remote-learning-was-perfect-for-pot-bellied-pigs/",
	},
	{
		label:
			"Summer Of Success: Computer Science Grads Ready To Embark On Careers In The Field",
		href: "https://csitoday.com/2022/06/summer-of-success-computer-science-grads-ready-to-embark-on-careers-in-the-field/",
	},
	{
		label: "Lowe's Laying Pipeline For CS Students",
		href: "https://csitoday.com/2022/05/lowes-laying-pipeline-for-csi-students/",
	},
	{
		label:
			"The CS Department earned the recognition with the virtual work experiences",
		href: "https://csitoday.com/2022/05/forage-names-csi-a-top-50-college-nationwide-for-experiential-learning/",
	},
	{
		label: "CSI Today Talks Features CS Graduating Senior Praise Adejunmobi",
		href: "https://csitoday.com/2022/05/csi-today-talks-features-graduating-senior-praise-adejunmobi/",
	},
	{
		label:
			"Computer Science Grad Megan Mcnamee Lands Pair Of Internships In Gaming",
		href: "https://csitoday.com/2022/03/computer-science-grad-megan-mcnamee-lands-pair-of-internships-in-gaming/",
	},
	{
		label:
			"Two CS students Mohammed Othman and Ramiz Faragalla highlighted in Developforgood newsletter",
		href: "https://developforgood.substack.com/p/develop-for-good-newsletter-july",
	},
	{
		label:
			"Omar Barragan CS graduate featured on the New York Jobs CEO Council's 2021 Annual Report",
		href: "https://nyjobsceocouncil.org/annual-report-2021/",
	},
	{
		label: '"Hack: CSI" Puts Computer Science Students in Competitive Arena',
		href: "https://csitoday.com/2021/09/hack-csi-puts-computer-science-students-in-competitive-arena/",
	},
	{
		label:
			"CodePath Club Provides New Grounds for Computer Science Student Exploration",
		href: "https://csitoday.com/2021/10/codepath-provides-new-grounds-for-computer-science-student-exploration/",
	},
	{
		label: "TTP Post-Internship Ceremony",
		href: "https://drive.google.com/file/d/1pntPW1g2SsdO6T2N6rOILKzFJ6NzxmEB/view",
	},
	{
		label:
			"CSI team won the first place at CUNY-IBM Watson Social Impact Challenge",
		href: "https://blogs.baruch.cuny.edu/ibmwatson2019/",
	},
];

const internshipsJobsScholarships: ResourceLink[] = [
	{
		label: "Scholarships for CS Students",
		href: "http://www.cs.csi.cuny.edu/content/ComputerScholarships.pdf",
	},
	{
		label: "Scholarships for Women in CS",
		href: "https://www.computerscience.org/scholarships-women/",
	},
	{
		label: "Internship and Job Opportunities (Handshake)",
		href: "https://andreahabib.github.io/RSS_Menu/",
	},
	{
		label: "Internship Prep Book for CS Students",
		href: "https://andrea-atef.gitbook.io/internship-handbook/",
	},
	{
		label: "Virtual Work Experiences for CS Students",
		href: "https://enterprise.theforage.com/landing/CUNY%20College%20of%20Staten%20Island/W2hMDdhcqPytgs3Nk/CUNY%20CSI%20Computer%20Science",
	},
	{
		label: "NYC Tech Resources for Jobs & Internships",
		href: "http://www.cs.csi.cuny.edu/content/NYC-Tech-Resources.pdf",
	},
	{
		label: "CUNY Internship Program",
		href: "http://www2.cuny.edu/employment/student-jobs/internships/",
	},
	{
		label: "Explore Careers In Computer Science",
		href: "http://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm#tab-8",
	},
	{
		label: "Center For Career & Professional Development",
		href: "http://www.csi.cuny.edu/career/",
	},
	{
		label: "CUNY Institute for Software Design and Development (CISDD)",
		href: "https://www.cisdd.org/",
	},
];

const campusResources: ResourceLink[] = [
	{
		label: "Student Life/CLUE Program",
		href: "http://www.csi.cuny.edu/CLUE/clue.html",
	},
	{ label: "Accessibility", href: "http://www.csi.cuny.edu/csa/" },
	{ label: "Counseling Center", href: "http://www.csi.cuny.edu/counseling/" },
	{ label: "Registrar", href: "http://www.csi.cuny.edu/registrar/" },
	{ label: "Financial Aid", href: "http://www.csi.cuny.edu/finaid/" },
	{ label: "Bursar/Student Accounts", href: "http://www.csi.cuny.edu/bursar/" },
	{
		label: "Student Technology Help Desk",
		href: "http://www.csi.cuny.edu/studenthelpdesk/",
	},
];

const specialPrograms: ResourceLink[] = [
	{ label: "ASAP", href: "http://www.csi.cuny.edu/asap/" },
	{ label: "CSTEP", href: "http://www.csi.cuny.edu/step_cstep/cstep/" },
	{ label: "SEEK", href: "http://www.csi.cuny.edu/seek/" },
	{ label: "Macaulay Honors", href: "http://www.csi.cuny.edu/honorscollege/" },
	{
		label: "Verrazano School",
		href: "http://www.csi.cuny.edu/verrazanoschool/",
	},
];

const tutoring: ResourceLink[] = [
	{
		label: "Computer Science Tutoring Schedule",
		href: "http://www.cs.csi.cuny.edu/content/tutoring.pdf",
	},
	{
		label: "Office of Academic Support",
		href: "https://www.csi.cuny.edu/students/academic-assistance/office-academic-support",
	},
];

const cuny2xTech: ResourceLink[] = [
	{ label: "About CUNY 2X", href: "cuny2x.html" },
	{
		label: "Benefits of Joining CUNY 2X",
		href: "content/CUNY2Xtechbrochure.pdf",
	},
	{ label: "TTP Residency", href: "https://www.csitechincubator.com/ttp" },
	{
		label: "Virtual Work Experiences for CLUE credits",
		href: "https://www.theforage.com/landing/CSI/ieq6zkDE2ockAywvS/CLUE",
	},
];

const softwareSupport: ResourceLink[] = [
	{ label: "Linux", href: "http://www.csdept.csi.cuny.edu/~linux/" },
	{ label: "Microsoft Imagine", href: "microsoft-imagine.html" },
	{ label: "Software Setup", href: "setup.html" },
];

const aboutDepartment: ResourceLink[] = [
	{ label: "Computer Science Fact Sheet", href: "content/CSFactSheet.pdf" },
	{ label: "Computer Science Info Session PPT", href: "content/CSInfoSe.pdf" },
	{
		label: "Computer Science Info Session Video",
		href: "https://youtu.be/eWv7kxEdcPo",
	},
	{
		label: "Lab Tours Video",
		href: "https://www.dropbox.com/sh/qcsc2hbfykmlohb/AACxIDUGvWHBeHuy-O65Xmqla?dl=0",
	},
];

// --- Helper function to generate valid HTML IDs ---
const generateId = (text: string): string => {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
};

// --- Sub-Components ---

// Reusable List Component for Accessibility & Consistency
const ResourceList = ({ items }: { items: ResourceLink[] }) => (
	<ul className="space-y-2 list-disc pl-5 marker:text-gray-600" role="list">
		{items.map((item, idx) => (
			<li key={idx}>
				<a
					href={item.href}
					className="text-[#2d88de] text-sm hover:underline leading-relaxed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d88de] focus-visible:ring-offset-1 px-0.5 transition-colors"
					{...(item.href.startsWith("http") && {
						target: "_blank",
						rel: "noopener noreferrer",
					})}
				>
					{item.label}
					{item.href.startsWith("http") && (
						<span className="sr-only"> (opens in new tab)</span>
					)}
				</a>
			</li>
		))}
	</ul>
);

const SectionBlock = ({ title, links }: ResourceSectionProps) => {
	const headingId = `heading-${generateId(title)}`;
	return (
		<section aria-labelledby={headingId}>
			<h2 id={headingId} className="text-2xl font-bold text-gray-800 mb-4">
				{title}
			</h2>
			<ResourceList items={links} />
		</section>
	);
};

// --- Main Page Component ---
const Resources = () => {
	return (
		<main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 bg-white min-h-screen">
			<h1 className="sr-only">Student Resources</h1>

			{/* Top Section: Student Spotlights & Image */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
				{/* Left: Student Spotlights Links */}
				<section aria-labelledby="heading-student-spotlights">
					<h2
						id="heading-student-spotlights"
						className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
					>
						Student Spotlights 🌟
					</h2>
					<ol className="list-decimal pl-5 space-y-1 marker:text-gray-600">
						{studentSpotlights.map((spotlight, idx) => (
							<li key={idx} className="pl-1">
								<a
									href={spotlight.href}
									className="block text-[#2d88de] text-sm leading-relaxed hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d88de] focus-visible:ring-offset-1 px-0.5 py-0.5 line-clamp-2"
									target="_blank"
									rel="noopener noreferrer"
									title={spotlight.label}
								>
									{spotlight.label}
									<span className="sr-only"> (opens in new tab)</span>
								</a>
							</li>
						))}
					</ol>
				</section>

				{/* Right: Student Spotlights Image */}
			<div className="w-full h-fit overflow-hidden rounded-lg border border-gray-200 order-first lg:order-last">
				<Picture
					src="/GameJam2024.jpg"
					alt="Student spotlight highlights - CSI Computer Science students"
					variant={`cover`}
					loading="lazy"
					className="bg-gray-100 w-full h-full object-cover"
				/>
			</div>
			</div>

			{/* REU Section */}
			<section
				aria-labelledby="heading-reu"
				className="mb-12 lg:mb-16 max-w-5xl"
			>
				<h2 id="heading-reu" className="text-2xl font-bold text-gray-800 mb-4">
					Research Experiences for Undergraduates (REU)
				</h2>
				<p className="text-sm text-gray-700 leading-relaxed">
					We are excited to host this unique{" "}
					<a
						href="https://www.csi.cuny.edu/academics-and-research/departments-programs/computer-science/research-experiences-undergraduates-reu"
						className="text-[#2d88de] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d88de] focus-visible:ring-offset-1 px-0.5"
						target="_blank"
						rel="noopener noreferrer"
					>
						Research Experiences for Undergraduates (REU)
						<span className="sr-only"> (opens in new tab)</span>
					</a>{" "}
					Site at the CSI in collaboration with Hunter College. This REU Site
					will give students a great opportunity to tackle challenging and
					practical projects requiring parallelism, with the technical support
					from The CUNY High Performance Computing Center (HPCC), while learning
					theoretical concepts and programming techniques (e.g., heuristics,
					exact methods of evaluation) in different research areas of
					computational sciences.
				</p>
			</section>

			{/* Grid Section: Resources */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-10 lg:gap-y-12 mb-12">
				<SectionBlock
					title="Internships, Jobs, Scholarships"
					links={internshipsJobsScholarships}
				/>

				<SectionBlock title="Campus Resources" links={campusResources} />

				<SectionBlock title="Special Programs" links={specialPrograms} />

				<SectionBlock title="Tutoring" links={tutoring} />

				<SectionBlock title="CUNY 2X Tech" links={cuny2xTech} />

				<SectionBlock title="Software Support" links={softwareSupport} />
			</div>

			{/* Bottom Section: About */}
			<div className="mb-8">
				<SectionBlock title="About the CS Department" links={aboutDepartment} />
			</div>
		</main>
	);
};

export default Resources;
