import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 px-6 py-10">
      <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="text-2xl font-black text-slate-50">
            Tyrone<span className="text-cyan-400">.</span>
          </a>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Software Engineer portfolio showcasing full-stack development,
            backend systems, AI chatbot projects, machine learning applications,
            and database-driven software solutions.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            © {currentYear} Tyrone Ekhator. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex gap-3">
            <a
              href="mailto:ekhatortyrone98@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              aria-label="Email Tyrone Ekhator"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/Tyroneekhator"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/tyrone-ekhator"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-600"
          >
            Back to Top
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
