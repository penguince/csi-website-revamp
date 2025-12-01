"use client";
import myguy from "../../public/shuqun.jpg";

import { useState } from "react";

/* FIXES: 
-- get rid of that silly sticky dpt contact, have left side bar map to that dpt contact instead of a separate section. add an image of the dude. DONE
-- fix the jumping across the screen to actually look
    TO DO AMS: 
    1. identify sections of the page -- look at prev pages, current dpt website, and understand the typical sections
    2. What data is needed?
    3. Components needed? -- keep everything in here (as per others), 
    ---
    4. sketch page layout in nb
    ---
    5. build the skeleton 
    6. add real data n content
    7. styling
    8. cleanup and final check
*/

/*
    Sections (ids used below):
    - ms-program
    - ms-admission
    - ms-degree-reqs
    - ms-specializations
    - phd-program
    - double-counting
    - apply-ms
    - apply-phd
    - intl-applicants
    - tuition
    - grad-catalog
    - advisement
    - dept-contact
*/

const Graduate = () => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>(["ms-program"]);

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

  const toggleMenu = (id: string) => {
    setExpandedMenus((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full bg-white flex flex-col">
      {/* Top banner / page title */}
      <div className="bg-csi-gray border-b border-gray-300 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center bg-white py-4 px-6 rounded shadow-sm">
            Graduate Programs
          </h1>
        </div>
      </div>

      {/* NEW: Main content wrapper using Grid for large screens */}
      {/* The full-width container for the sidebar and main content */}
      <div className="max-w-7xl mx-auto w-full p-4 lg:p-6 grid lg:grid-cols-[256px_minmax(0,1fr)] gap-6">
        {/* LEFT SIDEBAR (sticky wrapper applied here) */}
        <nav
          className="w-full lg:w-64 flex flex-col gap-4 order-2 lg:order-1 lg:sticky lg:top-8 self-start"
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

        {/* RIGHT SIDE: center content + right profile card */}
        <div className="w-full flex flex-col xl:flex-row gap-6 order-1 lg:order-2">
          {/* Main content wrapper */}
          <main className="flex-1 flex flex-col gap-8">
            {/* MAIN CONTENT COLUMN */}

            {/*MS Program Overview -- top of page*/}
            <section
              id="ms-program"
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 flex flex-col gap-5"
            >
              <h2 className="text-3xl font-semibold text-gray-950">
                M.S. Program
              </h2>

              {/* External Links */}
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

              {/* Overview Text */}
              <div className="text-gray-800 text-base leading-relaxed flex flex-col gap-4">
                <p>
                  The program is designed to provide advanced education in this
                  rapidly evolving and challenging discipline. It serves those
                  students who wish to increase their professional competence
                  for business, industry, and research and development
                  laboratories, as well as those who wish to enter careers in
                  research and teaching. Students may continue in doctoral
                  programs in computer science, including the City University
                  program in which CSI participates (Ph.D.).
                </p>

                <p>
                  All students are required to take 10 graduate courses (30
                  credits). These include three foundation courses and seven
                  additional Computer Science graduate courses. The three
                  foundation courses cover theoretical computer science,
                  advanced operating systems, and computer architecture/parallel
                  programming. Courses to meet the remaining requirements are
                  chosen in consultation with a graduate adviser to create a
                  program that meets the needs of the individual student.
                </p>

                <p>
                  Any other registered CSI graduate course in computer science
                  shall be counted as an elective for the purposes of fulfilling
                  the MS in Computer Science degree requirements, with the
                  following exceptions: those courses specifically identified as
                  computing for teachers or other computer science teacher
                  education courses, or those identified as graduate proficiency
                  courses.
                </p>
              </div>
            </section>

            {/* admissions section */}

            <section
              id="ms-admission"
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 flex flex-col gap-6"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-950 text-center">
                Admission Requirements
              </h2>

              {/* Requirements Table */}
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-300 bg-gray-50">
                      <td className="p-4 text-gray-800 text-base">
                        1. A Bachelor of Science degree in Computer Science or
                        related area with a{" "}
                        <strong>B average (3.0 out of 4.0)</strong> overall and
                        in the major.
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

              {/* Paragraphs below table */}
              <div className="flex flex-col gap-3 text-gray-700 text-base leading-relaxed">
                <p>
                  Students who satisfy the requirements listed above will be
                  admitted as matriculated graduate students.
                </p>
                <p>
                  Students transferring from other related majors will be
                  permitted to remedy undergraduate course deficiencies as
                  follows: students missing any of the listed subject(s) must
                  take the corresponding undergraduate courses or take a
                  challenge exam. No more than nine graduate credits may be
                  completed before deficiencies have been remedied.
                  Undergraduate courses taken to remove deficiencies must be in
                  addition to the regular coursework for the MS degree.
                </p>
              </div>
            </section>

            <section
              id="ms-degree-reqs"
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                Degree Requirements
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Use this area to summarize the total credits, core requirements,
                and elective structure. For now, this is just filler text to
                give you a sense of height and spacing.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Core Courses
                  </h3>
                  <p className="text-sm text-gray-700">
                    Short description of theory, systems, or foundational
                    courses.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Elective Courses
                  </h3>
                  <p className="text-sm text-gray-700">
                    Short description of advanced topics or specialization
                    electives.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="ms-specializations"
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                Specializations
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Example specializations might include Data Science, Software
                Engineering, Cybersecurity, or High-Performance Computing.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Data Science
                  </h3>
                  <p className="text-sm text-gray-700">
                    Filler copy describing analytical methods, machine learning,
                    and big data tools.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Software Engineering
                  </h3>
                  <p className="text-sm text-gray-700">
                    Filler copy describing large-scale systems, testing, and
                    project work.
                  </p>
                </div>
              </div>
            </section>

            {/* ...the rest of your sections stay the same... */}

            <section
              id="phd-program"
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                Ph.D. in Computer Science
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Brief placeholder description of the Ph.D. option and how CSI
                students participate through the CUNY Graduate Center.
              </p>
            </section>

            <section
              id="double-counting"
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                BS/MS Double Counting Policy
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Placeholder description of which courses can count toward both
                the BS and MS degrees in the accelerated program.
              </p>
            </section>

            <section
              id="apply-ms"
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                Apply to M.S.
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                This is where you can eventually link to the official graduate
                application and list key deadlines.
              </p>
            </section>

            <section
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
            </section>

            <section
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
            </section>

            <section
              id="tuition"
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                Tuition &amp; Fees
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                This section can eventually summarize tuition categories and
                link to the Bursar&apos;s official page.
              </p>
            </section>

            <section
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
            </section>

            <section
              id="advisement"
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                Graduate Advisement
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Placeholder copy describing how students are assigned advisors,
                how to schedule appointments, and what to bring.
              </p>
            </section>
          </main>

          {/* RIGHT PROFILE CARD COLUMN (sticky wrapper applied here) */}
          <aside
            id="dept-contact"
            className="hidden xl:block xl:w-64 self-start"
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
      </div>
      {/* End of new main content wrapper */}
    </div>
  );
};

export default Graduate;
