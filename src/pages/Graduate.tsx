"use client";
import myguy from "../../public/shuqun.jpg";
import { useState } from "react";

/* UPDATES:
   - Width Adjustment: Increased container max-width from max-w-7xl to max-w-[1600px] 
     to allow the middle content sections to expand and fill more screen space.
   - Header Alignment: Matched header max-width to the new content width for vertical alignment.
*/

const Graduate = () => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>(["ms-program"]);

  // --- DATA: Sidebar Navigation ---
  const sidebarDegrees = [
    { name: "M.S. in Computer Science", id: "ms-program", hasSubmenu: true },
    { name: "Ph.D. in Computer Science", href: "#phd-program" },
    { name: "BS/MS Double Counting Policy", href: "#double-counting" },
  ];

  const msSubmenu = [
    { name: "Overview", href: "#ms-program" },
    { name: "Admission Requirements", href: "#ms-admission" },
    { name: "Degree Requirements", href: "#ms-degree-reqs" },
    { name: "Specializations", href: "#ms-specializations" },
  ];

  const applicationLinks = [
    { name: "Apply to M.S.", href: "#apply-ms" },
    { name: "Apply to Ph.D.", href: "#apply-phd" },
    { name: "International Applicants", href: "#intl-applicants" },
    { name: "Tuition & Fees", href: "#tuition" },
  ];

  const resourcesLinks = [
    { name: "Graduate Catalog", href: "#grad-catalog" },
    { name: "Graduate Advisement", href: "#advisement" },
    { name: "Department Contact", href: "#dept-contact" },
  ];

  // --- DATA: Specialization Cards ---
  const specializationsData = [
    {
      area: "Artificial Intelligence and Data Analytics",
      courses: [
        { code: "CSC 706", title: "Computer Graphics" },
        { code: "CSC 725", title: "Computer Vision" },
        { code: "CSC 731", title: "AI and Knowledge Engineering" },
        { code: "CSC 732", title: "Neural Networks & Pattern Rec" },
        { code: "CSC 733", title: "Natural Language Processing" },
        { code: "CSC 735", title: "Machine Learning & Data Mining" },
        { code: "CSC 741", title: "Digital Image Processing" },
        { code: "CSC 747", title: "Digital Signal Processing" },
        { code: "CSC 767", title: "Neural Networks & Deep Learning" },
        { code: "CSC 769", title: "Graph-Based Analysis for Big Data" },
      ],
    },
    {
      area: "Cloud Computing and Software Engineering",
      courses: [
        { code: "CSC 710", title: "Software Engineering" },
        { code: "CSC 714", title: "Software Systems Analysis" },
        { code: "CSC 715", title: "Data Base Theory" },
        { code: "CSC 754", title: "Topics in System Simulation" },
        { code: "CSC 770", title: "Parallel Computing" },
      ],
    },
    {
      area: "Cybersecurity and Networks",
      courses: [
        { code: "CSC 747", title: "Digital Signal Processing" },
        { code: "CSC 756", title: "Network Security" },
        { code: "CSC 762", title: "Fund. of Wireless Comms" },
        { code: "CSC 768", title: "Cryptography" },
      ],
    },
  ];

  const toggleMenu = (id: string) => {
    setExpandedMenus((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full bg-white flex flex-col">
      {/* Top banner / page title */}
      <div className="bg-csi-gray border-b border-gray-300 py-6 px-4">
        {/* UPDATED: max-w increased to 1600px */}
        <div className="max-w-[1600px] mx-auto">
          <h1 className="text-3xl font-bold text-center bg-white py-4 px-6 rounded shadow-sm">
            Graduate Programs
          </h1>
        </div>
      </div>

      {/* Main content wrapper grid */}
      {/* UPDATED: max-w increased to 1600px */}
      <div className="max-w-[1600px] mx-auto w-full p-4 lg:p-6 grid lg:grid-cols-[256px_minmax(0,1fr)] gap-6">
        {/* --- LEFT SIDEBAR (Sticky Navigation) --- */}
        <nav
          className="w-full lg:w-64 flex flex-col gap-4 order-2 lg:order-1 lg:sticky lg:top-8 self-start max-h-screen overflow-y-auto"
          aria-label="Graduate navigation menu"
        >
          {/* Degrees Panel */}
          <div className="w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 md:p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-300">
                <h2 className="font-bold text-sm md:text-base uppercase text-blue-600">
                  Degrees
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {sidebarDegrees.map((degree) => {
                  if (degree.hasSubmenu) {
                    const isOpen = expandedMenus.includes("ms-program");

                    return (
                      <div key={degree.id} className="flex flex-col gap-2">
                        <button
                          onClick={() => toggleMenu("ms-program")}
                          className="flex items-center justify-between font-bold text-sm leading-relaxed text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1 transition"
                          aria-expanded={isOpen}
                          aria-controls="ms-submenu"
                        >
                          <span>M.S. in Computer Science</span>
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 9l7 7 7-7"
                            />
                          </svg>
                        </button>

                        {isOpen && (
                          <div
                            id="ms-submenu"
                            className="pl-4 flex flex-col gap-2 border-l-2 border-gray-300"
                          >
                            {msSubmenu.map((item) => (
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
                    );
                  }

                  return (
                    <a
                      key={degree.href}
                      href={degree.href}
                      className="font-bold text-sm leading-relaxed text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1 transition"
                    >
                      {degree.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Application Panel */}
          <div className="w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 md:p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-300">
                <h2 className="font-bold text-sm md:text-base uppercase text-blue-600">
                  Application
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {applicationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-bold text-sm text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-2 py-1 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Resources Panel */}
          <div className="w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 md:p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-300">
                <h2 className="font-bold text-sm md:text-base uppercase text-blue-600">
                  Resources
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {resourcesLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-bold text-sm text-gray-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-2 py-1 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* --- RIGHT COLUMN CONTENT --- */}
        <div className="order-1 lg:order-2 flex flex-col gap-8">
          {/* TOP BLOCK: Split Layout (Main + Contact) */}
          <div className="w-full flex flex-col xl:flex-row gap-6">
            <main className="flex-1 flex flex-col gap-8">
              {/* MS Program Overview */}
              <section
                id="ms-program"
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 flex flex-col gap-5"
              >
                <h2 className="text-3xl font-semibold text-gray-950">
                  M.S. Program
                </h2>

                <div className="text-blue-700 text-sm font-medium flex flex-wrap gap-3 border-b border-gray-300 pb-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Degree Requirements
                  </a>
                  <span>|</span>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Tuition
                  </a>
                </div>

                <div className="text-gray-800 text-base leading-relaxed flex flex-col gap-4">
                  <p>
                    The program is designed to provide advanced education in
                    this rapidly evolving and challenging discipline. It serves
                    those students who wish to increase their professional
                    competence for business, industry, and research and
                    development laboratories, as well as those who wish to enter
                    careers in research and teaching.
                  </p>
                  <p>
                    All students are required to take 10 graduate courses (30
                    credits). These include three foundation courses and seven
                    additional Computer Science graduate courses.
                  </p>
                  <p>
                    Any other registered CSI graduate course in computer science
                    shall be counted as an elective for the purposes of
                    fulfilling the MS in Computer Science degree requirements.
                  </p>
                </div>
              </section>

              {/* Admissions Section */}
              <section
                id="ms-admission"
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 flex flex-col gap-6"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-950 text-center">
                  Admission Requirements
                </h2>

                <div className="border border-gray-300 rounded-md overflow-hidden">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-300 bg-gray-50">
                        <td className="p-4 text-gray-800 text-base">
                          1. A Bachelor of Science degree in Computer Science or
                          related area with a{" "}
                          <strong>B average (3.0 out of 4.0)</strong> overall
                          and in the major.
                        </td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="p-4 text-gray-800 text-base">
                          2. Resume or CV
                        </td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="p-4 text-gray-800 text-base">
                          3. Demonstrable knowledge of:
                        </td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="p-4 pl-8 text-gray-800 text-base">
                          High-Level Programming Language(s), Data Structures,
                          Software Design, Operating Systems
                        </td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="p-4 pl-8 text-gray-800 text-base">
                          Digital Design, Computer Architecture
                        </td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="p-4 pl-8 text-gray-800 text-base">
                          Discrete Mathematics, Calculus
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 pl-8 text-gray-800 text-base">
                          Probability or Linear Algebra
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col gap-3 text-gray-700 text-base leading-relaxed">
                  <p>
                    Students who satisfy the requirements listed above will be
                    admitted as matriculated graduate students.
                  </p>
                  <p>
                    Students transferring from other related majors will be
                    permitted to remedy undergraduate course deficiencies by
                    taking corresponding undergraduate courses or challenge
                    exams.
                  </p>
                </div>
              </section>

              {/* Degree Requirements */}
              <section
                id="ms-degree-reqs"
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3 scroll-mt-24"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                  Degree Requirements
                </h2>

                <p className="text-base text-gray-700 leading-relaxed font-bold">
                  A program of 10 courses (30 credits) with at least a 3.0 (B)
                  average.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                  Core Courses Required for All Students:
                </h3>

                <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-300 bg-gray-100">
                        <th className="p-3 text-left font-bold text-gray-800 w-1/4">
                          Course
                        </th>
                        <th className="p-3 text-left font-bold text-gray-800">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-3 text-gray-800">CSC 716</td>
                        <td className="p-3 text-gray-800">
                          Advanced Operating Systems
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-3 text-gray-800">CSC 727</td>
                        <td className="p-3 text-gray-800">
                          Algorithms and Information Structures
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-3 text-gray-800">
                          CSC 740 <br className="lg:hidden" /> -or-{" "}
                          <br className="lg:hidden" /> CSC 770
                        </td>
                        <td className="p-3 text-gray-800">
                          Computer Systems Design <br /> -or- <br /> Parallel
                          Computing
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-gray-800">
                          CSC 759 <br className="lg:hidden" /> -or-{" "}
                          <br className="lg:hidden" /> CSC 799
                        </td>
                        <td className="p-3 text-gray-800">
                          Graduate Research Laboratory <br /> -or- <br /> Thesis
                          Research
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 border-t pt-4 border-gray-200 flex flex-col gap-3 text-sm text-gray-600 italic">
                  <p>
                    Exceptional students may be permitted to satisfy six credits
                    of the total credit requirement with a **master's thesis**.
                  </p>
                  <p>
                    For **specialization** one must take two courses from one
                    area and complete a **master's thesis or project**.
                  </p>
                </div>
              </section>

              {/* Specializations Section */}
              <section
                id="ms-specializations"
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                    Specializations
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Certain specialization areas are well represented by faculty
                    research interests. Students interested in specializing are
                    advised to select courses from the lists below and speak to
                    their advisor.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                  {specializationsData.map((spec) => (
                    <div
                      key={spec.area}
                      className="border border-gray-200 rounded-lg p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow bg-gray-50/50"
                    >
                      <h3 className="font-bold text-lg text-blue-800 border-b border-gray-200 pb-2">
                        {spec.area}
                      </h3>
                      <ul className="flex flex-col gap-1.5">
                        {spec.courses.map((course) => (
                          <li
                            key={course.code}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <span className="font-semibold text-gray-500 whitespace-nowrap text-xs uppercase tracking-wide bg-white px-1.5 py-0.5 rounded border border-gray-200">
                              {course.code}
                            </span>
                            <span className="leading-tight">
                              {course.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Ph.D. Section (No Rounded Corners) */}
              <section
                id="phd-program"
                className="bg-white border border-gray-200 shadow-sm p-6 flex flex-col gap-6 rounded-none"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                  Ph.D. in Computer Science
                </h2>

                <div className="text-base text-gray-700 leading-relaxed flex flex-col gap-4">
                  <p>
                    The College participates in the CUNY Graduate School and
                    University Center's Ph.D. program in Computer Science.
                  </p>
                  <p>
                    Students wishing to specialize in the following areas (or
                    related fields) may do much of their coursework and research
                    at the College of Staten Island:
                  </p>
                  <ul className="list-disc pl-5 grid md:grid-cols-2 gap-x-4 gap-y-1 text-sm font-medium text-gray-800">
                    <li>Artificial Intelligence & Data Mining</li>
                    <li>Multimedia & Image Processing</li>
                    <li>Software Engineering</li>
                    <li>Management Information Systems</li>
                    <li>Networks</li>
                    <li>Telecommunication</li>
                  </ul>
                  <p>
                    Students are admitted to the program by the Graduate School
                    and University Center and are advised to contact the CSI
                    Computer Science department.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-300 p-5 rounded-none">
                  <h3 className="font-bold text-lg text-blue-800 mb-4 text-center uppercase tracking-wide">
                    Ph.D. Admissions & Contact
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-800">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-bold border-b border-gray-300 pb-1 mb-1 block">
                        CUNY Graduate Center Admissions
                      </span>
                      <p>365 Fifth Avenue</p>
                      <p>New York, NY 10016</p>
                      <p className="mt-1">
                        Phone:{" "}
                        <a
                          href="tel:2128177470"
                          className="text-blue-600 hover:underline"
                        >
                          212.817.7470
                        </a>
                      </p>
                      <p>
                        Email:{" "}
                        <a
                          href="mailto:admissions@gc.cuny.edu"
                          className="text-blue-600 hover:underline"
                        >
                          admissions@gc.cuny.edu
                        </a>
                      </p>
                      <p>
                        Web:{" "}
                        <a
                          href="https://www.gc.cuny.edu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          www.gc.cuny.edu
                        </a>
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="font-bold border-b border-gray-300 pb-1 mb-1 block">
                        Program in Computer Science
                      </span>
                      <p>The Graduate Center, Room 4319</p>
                      <p>365 Fifth Avenue</p>
                      <p>New York, NY 10016</p>
                      <p className="mt-1">
                        Phone:{" "}
                        <a
                          href="tel:2128178190"
                          className="text-blue-600 hover:underline"
                        >
                          (212) 817-8190
                        </a>
                      </p>
                      <p>Fax: (212) 817-1510</p>
                      <p>
                        Email:{" "}
                        <a
                          href="mailto:compsci@gc.cuny.edu"
                          className="text-blue-600 hover:underline"
                        >
                          compsci@gc.cuny.edu
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </main>

            {/* Right Profile Card (Sticky for Top Block) */}
            <aside
              id="dept-contact"
              className="hidden xl:block xl:w-64 self-start  top-8"
              aria-label="Department contact card"
            >
              <div className="w-full bg-white border border-gray-300 rounded-lg shadow-md p-4 md:p-6 flex flex-col gap-2">
                <h3 className="text-xs md:text-sm font-bold uppercase text-blue-600 tracking-wide">
                  Department Contact
                </h3>

                <img
                  src={myguy}
                  alt="Professor Shuqun Zhang"
                  className="w-24 h-24 object-cover rounded-full mx-auto mt-2 mb-4 border border-gray-200"
                />

                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-base text-gray-900">
                    Professor Shuqun Zhang
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    Chairperson, Computer Science
                  </p>
                </div>

                <div className="mt-2 flex flex-col gap-1 text-sm text-gray-800">
                  <p>2800 Victory Blvd, 1N-215</p>
                  <p>Staten Island, NY 10314</p>
                </div>

                <div className="mt-2 flex flex-col gap-1 text-sm text-gray-800">
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:7189822850"
                      className="text-blue-600 hover:underline"
                    >
                      718.982.2850
                    </a>
                  </p>
                  <p>Fax: 718.982.2856</p>
                </div>

                <p className="mt-2 text-sm text-gray-800">
                  Email:{" "}
                  <a
                    href="mailto:shuqun.zhang@csi.cuny.edu"
                    className="text-blue-600 hover:underline"
                  >
                    shuqun.zhang@csi.cuny.edu
                  </a>
                </p>
              </div>
            </aside>
          </div>

          {/* MIDDLE BLOCK: Double Counting (Full Width) */}
          <section
            id="double-counting"
            className="w-full bg-white border border-gray-200 shadow-sm p-6 flex flex-col gap-5 rounded-none"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
              Computer Science Graduate Course Double-Counting Policy
            </h2>

            <a
              href="#"
              className="text-blue-600 hover:underline font-medium w-fit"
            >
              Open PDF Flyer
            </a>

            <div className="text-base text-gray-700 leading-relaxed flex flex-col gap-4">
              <p>
                Undergraduate students majoring in Computer Science or
                CS/Mathematics and satisfying the following criteria may be
                granted permission to take up to three graduate courses at
                undergraduate tuition to be counted towards their bachelor’s
                degree. These courses may be used only to substitute for 400
                level Computer Science elective courses (CSC designation). These
                graduate courses will be double-counted toward their master’s
                degree. This allows students to earn both the bachelor’s and the
                master’s degrees in five years.
              </p>

              <h3 className="font-bold text-gray-900 mt-2">Criteria:</h3>

              <ol className="list-decimal pl-5 flex flex-col gap-3 marker:font-bold marker:text-gray-900">
                <li>
                  Current enrollment in bachelor’s degree in Computer Science or
                  Computer Science / Mathematics at CSI and successful
                  completion of three years of study with 90 or more earned
                  credits.
                </li>
                <li>Cumulative GPA 3.3 or above.</li>
                <li>
                  Two letters of recommendation, at least one from a fulltime
                  CSI Computer Science faculty under whom the applicant has
                  studied.
                </li>
                <li>
                  Permissions from the course instructor, the coordinator of the
                  graduate program, and the department chairperson.
                </li>
                <li>
                  Application for admission and conditional acceptance to the
                  Computer Science graduate program.
                </li>
                <li>
                  All graduate elective courses can be taken as double-counting
                  courses, except the required core courses: CSC 716, CSC 727,
                  CSC 740 and CSC 770.
                </li>
              </ol>
            </div>
          </section>

          {/* BOTTOM BLOCK: Footer Sections + Ghost Spacer */}
          <div className="w-full flex flex-col xl:flex-row gap-6">
            <main className="flex-1 flex flex-col gap-8">
              <section
                id="apply-ms"
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                  Apply to M.S. or PHD
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Link to official graduate application and list key deadlines.
                </p>
              </section>

              {/* <section
                id="apply-phd"
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                  Apply to Ph.D.
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Filler content for Ph.D. application guidance and external
                  links.
                </p>
              </section> */}

              {/* <section
                id="intl-applicants"
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                  International Applicants
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Placeholder text covering language requirements, evaluation of
                  foreign transcripts, and visa info.
                </p>
              </section> */}

              {/* <section
                id="tuition"
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                  Tuition &amp; Fees
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  This section can eventually summarize tuition categories and
                  link to the Bursar's official page.
                </p>
              </section> */}

              {/* <section
                id="grad-catalog"
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                  Graduate Catalog
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Filler description for where to find official course
                  descriptions and college-wide graduate policies.
                </p>
              </section> */}

              {/* <section
                id="advisement"
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                  Graduate Advisement
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Placeholder copy describing how students are assigned
                  advisors, how to schedule appointments, and what to bring.
                </p>
              </section> */}
            </main>
            {/* Ghost Spacer for Alignment */}
            <div
              className="hidden xl:block xl:w-64 shrink-0"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graduate;
