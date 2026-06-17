import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDownload,
  FaCode,
  FaRobot,
  FaBriefcase,
} from "react-icons/fa";

function Contact() {
  const contactLinks = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "ekhatortyrone98@gmail.com",
      href: "mailto:ekhatortyrone98@gmail.com",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/Tyroneekhator",
      href: "https://github.com/Tyroneekhator",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/tyrone-ekhator",
      href: "https://www.linkedin.com/in/tyrone-ekhator",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "London, England, United Kingdom",
      href: "#contact",
    },
  ];

  const opportunities = [
    {
      icon: <FaBriefcase />,
      title: "Junior Software Engineer Roles",
    },
    {
      icon: <FaCode />,
      title: "Full-Stack Developer Roles",
    },
    {
      icon: <FaRobot />,
      title: "AI / Backend Developer Roles",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight text-slate-50 md:text-5xl">
            Let’s connect and build something useful
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            I am open to junior software engineering roles, full-stack developer
            roles, AI/backend opportunities, internships, and software projects
            where I can contribute and continue growing.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left contact card */}
          <article className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/10 text-4xl text-cyan-300 shadow-lg shadow-cyan-500/10">
                <FaPaperPlane />
              </div>

              <h3 className="text-3xl font-black text-slate-50">
                Available for opportunities
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                I am currently focused on building software engineering, AI,
                full-stack, backend, and database-driven projects. You can reach
                out through email, GitHub, or LinkedIn.
              </p>

              <div className="mt-8 space-y-4">
                {opportunities.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <span className="text-cyan-400">{item.icon}</span>
                    <p className="text-sm font-semibold text-slate-300">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:ekhatortyrone98@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-600"
                >
                  <FaEnvelope />
                  Send Email
                </a>

                <a
                  href="/Tyrone_Ekhator_Software_Engineer_CV.docx"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                >
                  <FaDownload />
                  Download CV
                </a>
              </div>
            </div>
          </article>

          {/* Right contact links */}
          <div className="grid gap-5 sm:grid-cols-2">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-cyan-500/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-400/10 text-2xl text-blue-300 transition group-hover:border-cyan-400/50 group-hover:text-cyan-300">
                  {item.icon}
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  {item.label}
                </p>

                <h3 className="mt-3 break-words text-lg font-black text-slate-50">
                  {item.value}
                </h3>
              </a>
            ))}

            <article className="relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-cyan-400/10 p-6 shadow-xl shadow-cyan-500/10 sm:col-span-2">
              <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Portfolio Status
                </p>

                <h3 className="mt-3 text-2xl font-black text-slate-50">
                  Ready to showcase my software projects
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  This portfolio highlights my experience with full-stack
                  development, AI projects, backend systems, machine learning,
                  database applications, and real-world software solutions.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
