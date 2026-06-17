import {
  FaBrain,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaRobot,
  FaServer,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Development",
      description:
        "I build complete web applications using React, Next.js, Django, FastAPI, Node.js, Express, and modern frontend tools.",
    },
    {
      icon: <FaServer />,
      title: "Backend Systems",
      description:
        "I work with APIs, authentication, CRUD operations, database models, role-based access, and business workflow logic.",
    },
    {
      icon: <FaBrain />,
      title: "AI & Machine Learning",
      description:
        "I create AI-powered tools, customer support chatbots, prediction apps, and data-driven software systems.",
    },
  ];

  const strengths = [
    "Frontend and backend development",
    "Database-driven web applications",
    "AI chatbot and machine learning projects",
    "Clean user interface implementation",
    "Problem solving and debugging",
    "GitHub project documentation",
  ];

  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-slate-50 md:text-5xl">
              I build practical software that solves real problems.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I am a Software Engineer with hands-on experience building
              full-stack web applications, backend systems, database-driven
              platforms, machine learning applications, AI chatbots, and
              responsive user interfaces.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              My work focuses on creating useful, clean, and reliable software
              using technologies such as Python, JavaScript, React, Django,
              FastAPI, Node.js, Next.js, SQL Server, MySQL, MongoDB, and machine
              learning tools.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                >
                  <FaCheckCircle className="text-cyan-400" />
                  <p className="text-sm font-semibold text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right profile card */}
          <div className="relative">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur">
              <div className="mb-7 flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/10 text-3xl font-black text-cyan-300">
                  TE
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-50">
                    Tyrone Ekhator
                  </h3>

                  <p className="mt-1 font-semibold text-blue-400">
                    Full-Stack Developer | AI Software Engineer
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                    <FaCode />
                  </div>

                  <h4 className="font-bold text-slate-100">
                    Development Focus
                  </h4>

                  <p className="mt-2 leading-7 text-slate-400">
                    Web apps, backend systems, APIs, database platforms, AI
                    tools, and responsive user interfaces.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                    <FaDatabase className="text-2xl text-cyan-400" />
                    <p className="mt-4 text-2xl font-black text-slate-50">6+</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Portfolio Projects
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                    <FaRobot className="text-2xl text-blue-400" />
                    <p className="mt-4 text-2xl font-black text-slate-50">AI</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Chatbots & ML Apps
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-5 -top-5 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-300 shadow-lg shadow-cyan-500/20">
              Software Engineer
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-7 shadow-xl shadow-slate-950/30 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-cyan-500/10"
            >
              <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-400/10 text-2xl text-blue-300 shadow-lg shadow-blue-500/10">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-50">
                  {card.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
