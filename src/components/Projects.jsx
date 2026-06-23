import {
  FaGithub,
  FaPlay,
  FaClock,
  FaRobot,
  FaDatabase,
  FaChartLine,
  FaMusic,
  FaCode,
  FaHome,
  FaLayerGroup,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { projects } from "../data/projects";

function Projects() {
  const projectIcons = {
    registry: <FaDatabase />,
    stock: <FaChartLine />,
    realestate: <FaHome />,
    event: <FaMusic />,
    property: <FaLayerGroup />,
    chatbot: <FaRobot />,
  };

  function getVideoEmbedUrl(url) {
    if (!url) return "";

    const googleDriveFileMatch = url.match(/\/file\/d\/([^/]+)/);
    if (googleDriveFileMatch) {
      return `https://drive.google.com/file/d/${googleDriveFileMatch[1]}/preview`;
    }

    const googleDriveIdMatch = url.match(/[?&]id=([^&]+)/);
    if (url.includes("drive.google.com") && googleDriveIdMatch) {
      return `https://drive.google.com/file/d/${googleDriveIdMatch[1]}/preview`;
    }

    const youtubeMatch = url.match(/[?&]v=([^&]+)/);
    if (url.includes("youtube.com") && youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }

    const shortYoutubeMatch = url.match(/youtu\.be\/([^?]+)/);
    if (shortYoutubeMatch) {
      return `https://www.youtube.com/embed/${shortYoutubeMatch[1]}`;
    }

    return url;
  }

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24">
      {/* Background effects */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="mt-5 max-w-5xl text-4xl font-black leading-tight text-slate-50 md:text-5xl">
            Projects that show my full-stack, backend, and AI engineering skills
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            A selection of practical software projects including web
            applications, database-driven platforms, AI tools, prediction
            systems, and full-stack business solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const embedUrl = getVideoEmbedUrl(project.demoVideo);

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 shadow-xl shadow-slate-950/40 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-cyan-500/10"
              >
                {/* Project preview area */}
                <div className="relative h-56 overflow-hidden border-b border-slate-800 bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-purple-500/20" />
                  <div className="absolute right-[-60px] top-[-60px] h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
                  <div className="absolute bottom-[-70px] left-[-40px] h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />

                  {/* Default project preview */}
                  <div className="relative flex h-full flex-col justify-between p-6 transition duration-300 group-hover:opacity-0">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-300">
                        {project.category}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-400/10 text-xl text-blue-300 shadow-lg shadow-blue-500/10">
                        {projectIcons[project.iconType] || <FaCode />}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-400">
                        Project Preview
                      </p>

                      <h3 className="mt-2 text-3xl font-black text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Video preview on hover */}
                  {embedUrl ? (
                    <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                      <iframe
                        src={embedUrl}
                        title={`${project.title} demo video`}
                        className="h-full w-full"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />

                      <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-slate-950/80 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-300 backdrop-blur">
                        Demo Preview
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-6 py-4 text-center backdrop-blur">
                        <FaClock className="mx-auto text-3xl text-slate-500" />
                        <p className="mt-3 text-sm font-bold text-slate-400">
                          Demo video coming soon
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project content */}
                <div className="p-7">
                  <p className="font-semibold text-blue-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 min-h-[84px] leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    {project.demoVideo ? (
                      <a
                        href={project.demoVideo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-600"
                      >
                        <FaPlay />
                        Watch Demo
                      </a>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-bold text-slate-400">
                        <FaClock />
                        Demo Coming Soon
                      </span>
                    )}

                    {project.liveSite ? (
                      <a
                        href={project.liveSite}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-400"
                      >
                        <FaExternalLinkAlt />
                        Live Site
                      </a>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-bold text-slate-500">
                        <FaClock />
                        {project.title === "MD Registry System"
                          ? "Live Site Unavailable"
                          : "Live Site Coming Soon"}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
