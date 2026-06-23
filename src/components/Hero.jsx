import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaRobot,
  FaEye,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

function Hero() {
  const stats = [
    ["1 Year", "Software Engineering Experience"],
    ["6+", "Portfolio Projects"],
    ["Full-Stack", "React, Django, Node & Next.js"],
    ["AI / ML", "Chatbots, Prediction Apps & Data Work"],
  ];

  const highlights = [
    {
      icon: <FaCode />,
      title: "Full-Stack Apps",
      text: "React, Django, FastAPI, Node.js",
    },
    {
      icon: <FaRobot />,
      title: "AI Projects",
      text: "Chatbots, ML prediction apps",
    },
    {
      icon: <FaDatabase />,
      title: "Databases",
      text: "SQL Server, MySQL, MongoDB",
    },
    {
      icon: <FaServer />,
      title: "Backend Systems",
      text: "APIs, auth, CRUD, workflows",
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
    >
      {/* Background effects */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Left side */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to Junior Software Engineer Roles
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Software Engineer Portfolio
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-50 md:text-7xl">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Tyrone Ekhator
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-slate-200 md:text-3xl">
            Full-Stack Developer | AI Software Engineer
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            I build full-stack web applications, backend systems,
            database-driven platforms, AI chatbots, machine learning
            applications, and responsive user interfaces using Python,
            JavaScript, React, Django, FastAPI, Node.js, Next.js, SQL, and
            MongoDB.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-1 hover:bg-blue-600"
            >
              View Projects
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="/Tyrone_Ekhator_Software_Engineer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaEye />
              View CV
            </a>

            <a
              href="https://github.com/Tyroneekhator"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tyrone-ekhator"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur transition hover:border-cyan-400/60 hover:bg-slate-900"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  {item.icon}
                </div>

                <h3 className="font-bold text-slate-100">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="relative lg:-translate-y-25">
          <div className="animate-float rounded-[2rem] border border-slate-700 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <p className="text-sm font-medium text-slate-400">
                portfolio.jsx
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 font-mono text-sm leading-7">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">developer</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-yellow-300">&#123;</span>
              </p>

              <p className="pl-5">
                name: <span className="text-emerald-400">'Tyrone Ekhator'</span>
                ,
              </p>

              <p className="pl-5">
                role:{" "}
                <span className="text-emerald-400">'AI Software Engineer'</span>
                ,
              </p>

              <p className="pl-5">
                focus:{" "}
                <span className="text-emerald-400">
                  'Full-Stack Development'
                </span>
                ,
              </p>

              <p className="pl-5">
                projects:{" "}
                <span className="text-blue-400">['Web Apps', 'AI', 'ML']</span>,
              </p>

              <p>
                <span className="text-yellow-300">&#125;</span>
              </p>
            </div>

            <div className="mt-6 grid gap-4">
              {stats.map(([value, label], index) => (
                <div
                  key={value}
                  className="grid grid-cols-[120px_1fr] items-center rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <p
                    className={`text-xl font-black ${
                      index === 0 ? "text-cyan-400" : "text-blue-400"
                    }`}
                  >
                    {value}
                  </p>

                  <p className="text-sm font-medium text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -right-6 -top-6 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-300 shadow-lg shadow-cyan-500/20">
            AI + Full-Stack
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-blue-400/30 bg-blue-400/10 px-5 py-3 text-sm font-bold text-blue-300 shadow-lg shadow-blue-500/20">
            React + Python
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
