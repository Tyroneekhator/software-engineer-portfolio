import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaRobot,
} from "react-icons/fa";

function Experience() {
  const achievements = [
    "Worked on software engineering tasks involving application development and technical problem solving.",
    "Built and improved database-driven systems, backend logic, and user interface features.",
    "Applied full-stack development skills across frontend, backend, database, and workflow-based projects.",
    "Used GitHub, VS Code, debugging tools, and development workflows to build and improve software projects.",
  ];

  const focusAreas = [
    {
      icon: <FaLaptopCode />,
      title: "Application Development",
      text: "Building practical web applications and user-focused software features.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Systems",
      text: "Working with structured data, records, database models, and CRUD logic.",
    },
    {
      icon: <FaRobot />,
      title: "AI & Automation",
      text: "Creating AI-related tools, chatbot features, and machine learning projects.",
    },
    {
      icon: <FaCode />,
      title: "Problem Solving",
      text: "Debugging, improving code quality, and turning requirements into working features.",
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-slate-50 md:text-5xl">
            Professional experience building real software solutions
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            My experience combines full-stack development, backend systems,
            database-driven applications, user interface improvements, and
            technical problem solving.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Main experience card */}
          <article className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-400/10 text-2xl text-blue-300 shadow-lg shadow-blue-500/10">
                    <FaBriefcase />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-50">
                      AI Software Engineer
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-blue-400">
                      <FaBuilding />
                      <p className="font-semibold">
                        Niger Delta Power Holding Company Limited
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                  <FaCalendarAlt />
                  Experience
                </div>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-slate-400">
                Worked on software engineering tasks involving application
                development, backend logic, database-driven systems, user
                interface improvements, and practical technical problem solving.
              </p>

              <div className="mt-8 space-y-4">
                {achievements.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-cyan-400" />
                    <p className="leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Full-Stack Development",
                  "Backend Logic",
                  "Database Systems",
                  "UI Improvements",
                  "Debugging",
                  "GitHub",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Focus cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {focusAreas.map((area) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
