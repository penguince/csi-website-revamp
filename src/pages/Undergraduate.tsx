"use client";

import Sidebar from "../components/Sidebar";
import Slide from "../components/Slide";

const Undergraduate = () => {
	return (
		<div className="w-full bg-white flex flex-col gap-6 md:gap-8 lg:gap-10">
			{/* Main Content Container */}
			<div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-[100px] py-8 md:py-12 max-w-7xl mx-auto">
				{/* Left Sidebar - Responsive Navigation */}
				<Sidebar
					className="lg:order-1"
					defaultExpandedSubmenu="BS in Computer Science"
					sections={[
						{
							title: "Degrees",
							links: [
								{ name: "AAS in Computer Technology", href: "#aas" },
								{ name: "BS in Computer Science", href: "#bs-cs" },
								{
									name: "BS in Computer Science-Mathematics",
									href: "#bs-csmath",
								},
								{
									name: "BS in Information Systems and Informatics",
									href: "#bs-isi",
								},
								{ name: "Computer Science Minor", href: "#minor" },
								{ name: "Cyber Security Minor", href: "#cybersec" },
								{ name: "Data Science Minor", href: "#datascience" },
								{ name: "Computational Linguistics Minor", href: "#complang" },
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
				<main className="w-full lg:flex-1 flex flex-col gap-6 md:gap-8 lg:order-2">
					{/* Advisement Section */}
					<Slide>
						<section
							aria-label="Advisement"
							className="flex flex-col gap-4 pb-6 border-b border-gray-300"
						>
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
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
										can find out who is your advisor on CUNYFirst. Please use
										the CS FlowChart for self-advisement.
									</p>
								</div>

								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										If your declared major or intended major is BS in
										Information Systems and Informatics (ISI), please contact
										the ISI coordinator, Prof. Louis Petingi or Prof. Soon Chun.
									</p>
								</div>

								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										<a
											href="#degreeworks"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											View Undergraduate Catalog
										</a>
									</p>
								</div>
							</div>
						</section>
					</Slide>

					{/* Transfer Students Section */}
					<Slide delay={0.05}>
						<section
							aria-label="Transfer Students"
							className="flex flex-col gap-4 pb-6 border-b border-gray-300"
						>
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
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
										anything in the computer science catalog here (i.e. they
										show as CSC BKT credits in your CUNYfirst course history),
										you may request these credits be evaluated. Please complete
										the transfer credit evaluation. Include a copy of your
										transcript from the institution at which you completed the
										course, and either the course description (from that
										college's catalog) or syllabus. Submit these to 1N-215, or
										contact the department Chair.
									</p>
								</div>

								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										<a
											href="#transfer-form"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Transfer Credit Evaluation Form
										</a>{" "}
										Download
									</p>
								</div>
							</div>
						</section>
					</Slide>

					{/* Tutoring Section */}
					<Slide delay={0.1}>
						<section
							aria-label="Tutoring"
							className="flex flex-col gap-4 pb-6 border-b border-gray-300"
						>
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
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
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Office of Academic Support
										</a>
									</p>
								</div>
							</div>
						</section>
					</Slide>

					{/* AAS Section */}
					<Slide delay={0.15}>
						<section
							id="aas"
							aria-label="AAS Degree Program"
							className="flex flex-col gap-4 pb-6 border-b border-gray-300"
						>
							{/* Old site anchor: #ass */}
							<div id="ass" />
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
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
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Sample 2-year plan
										</a>
										{" | "}
										<a
											href="#flowchart"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Prerequisite Flowchart
										</a>
										{" | "}
										<a
											href="#requirements"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Degree checklist (Programming Sequence)
										</a>
										{" | "}
										<a
											href="#checklist-info"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
										degree in Computer Science should consult the requirements
										for the BS in Computer Science or the BS in Computer
										Science/Mathematics.
									</p>
								</div>
							</div>
						</section>
					</Slide>

					{/* BS in Computer Science Section */}
					<Slide delay={0.2}>
						<section
							id="bs-cs"
							aria-label="BS in Computer Science"
							className="flex flex-col gap-4 pb-6 border-b border-gray-300"
						>
							{/* Old site anchor: #bs */}
							<div id="bs" />
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
								Bachelor of Science (BS) in Computer Science
							</h2>

							<div className="flex flex-col gap-3">
								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										<a
											href="#sample-plan-bs"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Sample 4-year plan
										</a>
										{" | "}
										<a
											href="#flowchart-bs"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Prerequisite Flowchart
										</a>
										{" | "}
										<a
											href="#requirements-bs"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
										The Computer Science program offers a full four-year
										curriculum in computer science that prepares students for
										careers as computer professionals and/or for graduate study.
										The major provides a broad-based background in computer
										science and includes courses in computer software, systems,
										mathematics, and computer engineering. A student, under the
										guidance of a computer science adviser, may also select
										additional courses to pursue particular interests. Students
										interested in transferring into the program from the
										two-year Computer Technology program should consult the
										department chairperson.
									</p>
								</div>

								{/* Specializations */}
								<div id="specializations" className="flex flex-col gap-3 mt-4">
									<h3 className="font-semibold text-xl md:text-2xl text-csi-dark">
										BS in Computer Science Specializations
									</h3>
									<p className="text-base leading-relaxed text-gray-800">
										You may choose to earn specialization in one of the
										following areas. Please speak to your{" "}
										<a
											href="#"
											className="text-csi-blue hover:underline focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											advisor
										</a>{" "}
										if one of these specializations interests you so you plan to
										take the course responding to the specialization!
									</p>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
										{[
											"Game Development",
											"Bioinformatics and Security",
											"High Performance Computing Data Science",
										].map((spec, index) => (
											<div
												key={index}
												className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm flex items-center justify-center text-center font-medium text-csi-dark"
											>
												{spec}
											</div>
										))}
									</div>
								</div>

								{/* Graduation with Honors */}
								<div id="honors" className="flex flex-col gap-3 mt-4">
									<h3 className="font-semibold text-xl md:text-2xl text-csi-dark">
										Graduate with Honors
									</h3>
									<p className="text-base leading-relaxed text-gray-800">
										Students may graduate with honors in Computer Science. To
										receive honors, the student must have at least a 3.5 grade
										point average in courses taken in the major. The student
										must also complete an honors project by taking CSC 450,
										where the student works closely with a faculty member to
										define the project, carry out the research and
										investigation, and write the final report. The project must
										be approved by the department Chairperson. Students will
										receive credit through CSC 450 for their work on an honors
										project. CSC 450 cannot substitute for an elective course.
									</p>
								</div>

								{/* Career Milestones */}
								<div id="milestones" className="flex flex-col gap-3 mt-4">
									<h3 className="font-semibold text-xl md:text-2xl text-csi-dark">
										Career Milestones
									</h3>
									<div className="w-full h-48 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500">
										[Career Milestones Diagram Placeholder]
									</div>
									<p className="text-base leading-relaxed text-gray-800">
										See the{" "}
										<a
											href="#"
											className="text-csi-blue hover:underline focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Career Milestones
										</a>{" "}
										for details.
									</p>
								</div>
							</div>
						</section>
					</Slide>

					{/* BS in Computer Science-Mathematics Section */}
					<Slide delay={0.05}>
						<section
							id="bs-csmath"
							aria-label="BS in Computer Science-Mathematics"
							className="flex flex-col gap-4 pb-6 border-b border-gray-300"
						>
							{/* Old site anchor: #cs-math */}
							<div id="cs-math" />
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
								Bachelor of Science (BS) in Computer Science-Mathematics
							</h2>

							<div className="flex flex-col gap-3">
								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										<a
											href="#sample-plan-math"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Sample 4-year plan
										</a>
										{" | "}
										<a
											href="#flowchart-math"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Prerequisite Flowchart
										</a>
										{" | "}
										<a
											href="#requirements-math"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
										The Departments of Computer Science and Mathematics offer a
										joint BS degree program in Computer Science and Mathematics
										that provides a balance between these two disciplines with
										an emphasis on their applied aspects and their relationship
										to each other. Pre-Computer Science Sequence: 4 credits CSC
										126 Introduction to Computer Science (4 credits) A grade of
										C or above in CSC 126 will be required for admission to the
										Computer Science/Mathematics Baccalaureate program. Students
										will be allowed to repeat the course, if necessary.
									</p>
								</div>
							</div>
						</section>
					</Slide>

					{/* BS in Information Systems and Informatics Section */}
					<Slide delay={0.05}>
						<section
							id="bs-isi"
							aria-label="BS in Information Systems and Informatics"
							className="flex flex-col gap-4 pb-6 border-b border-gray-300"
						>
							{/* Old site anchor: #informatics */}
							<div id="informatics" />
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
								Bachelor of Science (BS) in Information Systems and Informatics
							</h2>

							<div className="flex flex-col gap-3">
								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										<a
											href="#sample-plan-isi"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Sample 4-year plan
										</a>
										{" | "}
										<a
											href="#flowchart-isi"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Prerequisite Flowchart
										</a>
										{" | "}
										<a
											href="#requirements-isi"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
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
										The program in Information Systems and Informatics (ISI),
										offered as an interdisciplinary collaboration between the
										Departments of Marketing and Computer Science, provides
										students with core business and technical competencies to
										traverse the boundary between management and computer
										information technology. Students learn to design, develop,
										and implement state-of-the-art information systems to
										support managerial decision making, statistical modeling,
										and advanced analytics. The program prepares students for
										careers as business and systems analysts, designers and
										developers; data administrators; information systems
										consultants; and managers in information technology. The
										curriculum is based upon the guidelines provided by several
										professional associations including AACSB, ABET, and ACM.
									</p>
								</div>
							</div>
						</section>
					</Slide>

					{/* Minors Section */}
					<Slide delay={0.05}>
						<section
							id="minor"
							aria-label="Computer Science Minor"
							className="flex flex-col gap-4 pb-6 border-b border-gray-300"
						>
							{/* Old site anchor: #cs-minor */}
							<div id="cs-minor" />
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
								Computer Science Minor
							</h2>
							<div className="flex flex-col gap-3">
								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										<a
											href="#requirements-minor"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Minor Requirements
										</a>
									</p>
								</div>
								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										Computer Engineering Sequence or Computer Applications
										Programming Sequence
									</p>
								</div>
							</div>
						</section>
					</Slide>

					<Slide delay={0.05}>
						<section
							id="cybersec"
							aria-label="Cyber Security Minor"
							className="flex flex-col gap-4 pb-6 border-b border-gray-300"
						>
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
								Cyber Security Minor
							</h2>
							<div className="flex flex-col gap-3">
								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										<a
											href="#requirements-cybersec"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Minor Requirements
										</a>
									</p>
								</div>
								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										The Cyber Security Minor equips students with the knowledge
										and skills to protect computer systems and networks from
										threats.
									</p>
								</div>
							</div>
						</section>
					</Slide>

					<Slide delay={0.05}>
						<section
							id="datascience"
							aria-label="Data Science Minor"
							className="flex flex-col gap-4 pb-6 border-b border-gray-300"
						>
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
								Data Science Minor
							</h2>
							<div className="flex flex-col gap-3">
								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										<a
											href="#requirements-datascience"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Minor Requirements
										</a>
									</p>
								</div>
								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										The Data Science Minor focuses on the extraction of
										knowledge and insights from data, preparing students for the
										data-driven world.
									</p>
								</div>
							</div>
						</section>
					</Slide>

					<Slide delay={0.05}>
						<section
							id="complang"
							aria-label="Computational Linguistics Minor"
							className="flex flex-col gap-4"
						>
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
								Computational Linguistics Minor
							</h2>
							<div className="flex flex-col gap-3">
								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										<a
											href="#requirements-complang"
											className="underline text-csi-blue hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-csi-blue"
										>
											Minor Requirements
										</a>
									</p>
								</div>
								<div className="flex gap-3">
									<span className="text-gray-700" aria-hidden="true">
										・
									</span>
									<p className="text-base leading-relaxed text-gray-800">
										The Computational Linguistics Minor combines computer
										science and linguistics to explore natural language
										processing and understanding.
									</p>
								</div>
							</div>
						</section>
					</Slide>

					{/* BS/MS Accelerated Section */}
					<Slide delay={0.05}>
						<section
							id="double-counting"
							aria-label="BS/MS Accelerated"
							className="flex flex-col gap-4 pb-6 border-b border-gray-300"
						>
							<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
								Computer Science Graduate Course Double-Counting Policy
							</h2>

							<div className="flex flex-col gap-4">
								<p className="text-base leading-relaxed text-gray-800">
									Undergraduate students majoring in Computer Science or
									CS/Mathematics and satisfying the following criteria may be
									granted permission to take up to three graduate courses at
									undergraduate tuition to be counted towards their bachelor’s
									degree. These courses may be used only to substitute for 400
									level Computer Science elective courses (CSC designation).
									These graduate courses will be double-counted toward their
									master’s degree. This allows students to earn both the
									bachelor’s and the master’s degrees in five years.
								</p>

								<div className="flex flex-col gap-2">
									<h3 className="font-bold text-lg text-csi-dark">Criteria:</h3>
									<ol className="list-decimal pl-5 space-y-2 text-base text-gray-800">
										<li>
											Current enrollment in bachelor’s degree in Computer
											Science or Computer Science / Mathematics at CSI and
											successful completion of three years of study with 90 or
											more earned credits.
										</li>
										<li>Cumulative GPA 3.3 or above.</li>
										<li>
											Two letters of recommendation, at least one from a
											fulltime CSI Computer Science faculty under whom the
											applicant has studied.
										</li>
										<li>
											Permissions from the course instructor, the coordinator of
											the graduate program, and the department chairperson.
										</li>
										<li>
											Application for admission and conditional acceptance to
											the Computer Science graduate program.
										</li>
										<li>
											All graduate elective courses can be taken as
											double-counting courses, except the required core courses:
											CSC 716, CSC 727, CSC 740 and CSC 770.
										</li>
									</ol>
								</div>
							</div>
						</section>
					</Slide>

					{/* ABET Accreditation Section */}
					<Slide delay={0.05}>
						<section
							id="objectives"
							aria-label="ABET Accreditation"
							className="flex flex-col gap-6"
						>
							<div className="flex flex-col gap-4">
								<h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-csi-dark">
									Our B.S. in Computer Science is accredited by the Computing
									Accreditation Commission of ABET,{" "}
									<a
										href="http://www.abet.org"
										className="text-csi-blue hover:underline focus:outline-none focus:ring-2 focus:ring-csi-blue"
										target="_blank"
										rel="noopener noreferrer"
									>
										http://www.abet.org
									</a>
								</h2>
								<address className="not-italic text-base text-gray-800 text-center border-l-4 border-csi-blue pl-4 py-2 bg-gray-50">
									111 Market Place, Suite 1050
									<br />
									Baltimore, Maryland 21202-4012
									<br />
									Telephone: (410) 347-7700
								</address>
							</div>

							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl md:text-2xl text-csi-dark">
									Program Educational Objectives
								</h3>
								<p className="text-base leading-relaxed text-gray-800">
									A few years after graduation, graduates will:
								</p>
								<ol className="list-decimal pl-5 space-y-2 text-base text-gray-800">
									<li>
										Hold responsible positions in computing related fields
										and/or be pursuing an advanced computing related degree
									</li>
									<li>
										Remain current in their field through the pursuit of
										life-long learning
									</li>
									<li>
										Use their core computing and problem solving knowledge
									</li>
								</ol>
							</div>

							<div id="outcomes" className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl md:text-2xl text-csi-dark">
									Student Outcomes
								</h3>
								<ol className="list-decimal pl-5 space-y-2 text-base text-gray-800">
									<li>
										Analyze a complex computing problem and to apply principles
										of computing and other relevant disciplines to identify
										solutions.
									</li>
									<li>
										Design, implement, and evaluate a computing-based solution
										to meet a given set of computing requirements in the context
										of the program’s discipline.
									</li>
									<li>
										Communicate effectively in a variety of professional
										contexts.
									</li>
									<li>
										Recognize professional responsibilities and make informed
										judgments in computing practice based on legal and ethical
										principles.
									</li>
									<li>
										Function effectively as a member or leader of a team engaged
										in activities appropriate to the program’s discipline.
									</li>
									<li>
										Apply computer science theory and software development
										fundamentals to produce computing-based solutions.
									</li>
								</ol>
							</div>

							<div id="enrollment" className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl md:text-2xl text-csi-dark">
									BS Program Enrollment
								</h3>
								<p className="text-base leading-relaxed text-gray-800">
									<a
										href="#"
										className="text-csi-blue hover:underline focus:outline-none focus:ring-2 focus:ring-csi-blue"
									>
										See Enrollment Data
									</a>
								</p>
							</div>
						</section>
					</Slide>
				</main>
			</div>
		</div>
	);
};

export default Undergraduate;
