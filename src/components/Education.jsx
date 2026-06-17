import {
  FaBookOpen,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
  FaRobot,
  FaUniversity,
} from "react-icons/fa";

function Education() {
  const learningAreas = [
    {
      icon: <FaCode />,
      title: "Programming",
      text: "Software development, problem solving, debugging, and clean code practices.",
    },
    {
      icon: <FaDatabase />,
      title: "Databases",
      text: "Database design, data handling, records, and application data storage.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      text: "Frontend, backend, user interfaces, and full-stack application development.",
    },
    {
      icon: <FaRobot />,
      title: "AI & Software Projects",
      text: "Practical software projects, AI tools, chatbot systems, and machine learning applications.",
    },
  ];

  const highlights = [
    "Software engineering and computing background",
    "Practical web application development",
    "Database and backend system knowledge",
    "Project-based learning and problem solving",
  ];

  return (
    <section id="education" className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Education
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-slate-50 md:text-5xl">
            Academic background supporting my software engineering work
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            My education helped me build a strong foundation in computing,
            software development, databases, problem solving, and project-based
            technical work.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Main education card */}
          <article className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <div className="absolute right-[-70px] top-[-70px] h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/10 text-4xl text-cyan-300 shadow-lg shadow-cyan-500/10">
                <FaGraduationCap />
              </div>

              <div className="flex items-center gap-2 text-blue-400">
                <FaUniversity />
                <p className="font-bold">University Education</p>
              </div>

              <h3 className="mt-4 text-3xl font-black text-slate-50">
                Solent University
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Software engineering and computing background with practical
                experience in application development, databases, technical
                projects, and problem-solving.
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <FaCheckCircle className="text-cyan-400" />
                    <p className="text-sm font-semibold text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 w-fit rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-300">
                Education
              </div>
            </div>
          </article>

          {/* Learning areas */}
          <div className="grid gap-5 sm:grid-cols-2">
            {learningAreas.map((area) => (
              <article
                key={area.title}
                className="group rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-cyan-500/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-400/10 text-xl text-blue-300">
                  {area.icon}
                </div>

                <h3 className="text-xl font-black text-slate-50">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">{area.text}</p>
              </article>
            ))}

            <article className="relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-cyan-400/10 p-6 shadow-xl shadow-cyan-500/10">
              <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20 text-xl text-cyan-300">
                  <FaBookOpen />
                </div>

                <h3 className="text-xl font-black text-slate-50">
                  Continuous Learning
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  I continue improving my skills through real-world projects,
                  portfolio applications, GitHub work, and modern development
                  tools.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
