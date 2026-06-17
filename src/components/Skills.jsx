import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaTools,
  FaRobot,
} from "react-icons/fa";

import {
  SiDjango,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTensorflow,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      description:
        "Building responsive, modern, and user-friendly web interfaces.",
      list: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      miniIcons: [<FaReact />, <SiJavascript />, <SiTailwindcss />],
    },
    {
      icon: <FaNodeJs />,
      title: "Backend Development",
      description:
        "Creating APIs, authentication systems, CRUD features, and server logic.",
      list: ["Django", "FastAPI", "Node.js", "Express.js", "REST APIs"],
      miniIcons: [<SiDjango />, <SiFastapi />, <FaNodeJs />],
    },
    {
      icon: <FaDatabase />,
      title: "Databases",
      description:
        "Designing and working with relational and NoSQL database systems.",
      list: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL"],
      miniIcons: [<SiMysql />, <SiMongodb />, <SiPostgresql />],
    },
    {
      icon: <FaPython />,
      title: "Machine Learning",
      description: "Building prediction systems and data-driven applications.",
      list: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
      miniIcons: [<FaPython />, <SiTensorflow />],
    },
    {
      icon: <FaRobot />,
      title: "AI & Chatbots",
      description:
        "Developing AI-powered tools, chatbots, and intelligent support systems.",
      list: ["AI Chatbots", "NLP", "Automation", "Prediction Apps"],
      miniIcons: [<FaRobot />, <FaPython />],
    },
    {
      icon: <FaTools />,
      title: "Developer Tools",
      description:
        "Using professional tools for development, testing, deployment, and version control.",
      list: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
      miniIcons: [<FaTools />],
    },
  ];

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-slate-50 md:text-5xl">
            Technologies I use to build modern software
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            My skill set covers frontend development, backend systems,
            databases, machine learning, AI chatbots, and developer tools used
            to build and deploy real-world software projects.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-7 shadow-xl shadow-slate-950/30 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-cyan-500/10"
            >
              <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-400/10 text-2xl text-blue-300 shadow-lg shadow-blue-500/10">
                    {skill.icon}
                  </div>

                  <div className="flex gap-2 text-xl text-slate-500">
                    {skill.miniIcons.map((icon, index) => (
                      <span
                        key={index}
                        className="transition group-hover:text-cyan-400"
                      >
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-50">
                  {skill.title}
                </h3>

                <p className="mt-3 min-h-[56px] leading-7 text-slate-400">
                  {skill.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.list.map((item) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
