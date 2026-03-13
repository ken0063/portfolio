export function Footer() {
  return (
    <footer id="contact" className="border-t border-(--text-muted)/10 mt-32 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 relative z-10 text-center md:text-left">
          <h2 className="text-3xl font-bold">Let's work together.</h2>
          <p className="text-(--text-muted) mt-2">Feel free to reach out for collaborations or just a friendly hello.</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=olukotunken@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-8 py-3 rounded-full bg-(--text-primary) text-(--bg-primary) font-bold text-lg hover:shadow-[0_0_20px_var(--color-accent-current)] hover:bg-(--color-accent-current) transition-all w-max mx-auto md:mx-0"
          >
            olukotunken@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-4 text-center md:text-right">
          <ul className="flex gap-6 justify-center md:justify-end text-(--text-muted) font-medium">
            <li><a href="https://www.linkedin.com/in/kenneth-olukotun" target="_blank" rel="noopener noreferrer" className="hover:text-(--text-primary) transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com/ken0063?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-(--text-primary) transition-colors">GitHub</a></li>
          </ul>
          <p className="text-sm text-(--text-muted)/50">© {new Date().getFullYear()} Kenneth Olukotun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
