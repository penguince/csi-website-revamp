"use client";

import { useState } from "react";

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
    <div className="w-full">
      {/* Top banner / page title */}
      <div className="bg-csi-gray border-b border-gray-300 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center bg-white py-4 px-6 rounded shadow-sm">
            Graduate Programs
          </h1>
        </div>
      </div>

      {/* Main layout: only left sidebar for now */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* LEFT SIDEBAR */}
          <nav
            className="w-full lg:w-64 flex flex-col gap-4"
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
                    // MS item with submenu (accordion-style)
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

                    // Normal simple links (PhD, BS/MS policy)
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

          {/* You’ll add <main> on the right later */}
        </div>
      </div>
    </div>
  );
};

export default Graduate;
