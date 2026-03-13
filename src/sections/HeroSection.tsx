import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const techStack = '{ React, Next.js, Node.js, NestJS, Tailwind CSS, GraphQL... }';

  useEffect(() => {
    let currentLength = 0;
    const interval = setInterval(() => {
      currentLength++;
      setTypedText(techStack.slice(0, currentLength));
      if (currentLength === techStack.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-16 px-6 relative"
    >
      <div className="absolute inset-0 bg-linear-to-b from-(--bg-primary) to-transparent opacity-50 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
          Software Engineer
        </h1>

        <div className="text-(--text-muted) font-mono text-sm md:text-base lg:text-lg hidden sm:block h-6">
          {typedText}
          <span className="animate-pulse bg-(--color-accent-current) w-2 h-5 inline-block ml-1 align-middle" />
        </div>

        <p className="max-w-xl mx-auto text-(--text-muted) text-base md:text-lg leading-relaxed">
          Specializing in React & Next.js, I leverage cutting-edge technologies to bring scalable software solutions to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <a
            href="#portfolio"
            className="px-8 py-3 rounded-full bg-(--color-accent-current) text-(--bg-primary) font-bold text-lg hover:shadow-[0_0_20px_var(--color-accent-current)] transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            See my dev work
          </a>
          <a
            href="/Kenneth Olukotun-CV.pdf"
            download="Kenneth_Olukotun_CV.pdf"
            className="px-8 py-3 rounded-full border border-transparent underline decoration-(--text-primary) underline-offset-4 text-(--text-primary) font-medium text-lg hover:text-(--color-accent-current) hover:decoration-(--color-accent-current) transition-all w-full sm:w-auto text-center"
          >
            Download CV
          </a>
        </div>

        <div className="pt-24 flex justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
          {/* Decorative graphic based on design */}
          <div className="relative w-64 h-24 bg-(--bg-secondary) rounded-xl border border-(--text-muted) border-opacity-20 shadow-lg flex items-center justify-center overflow-hidden">
            <div className="grid grid-cols-12 gap-1 px-3 w-full opacity-30">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="h-2 bg-(--text-muted) rounded-sm"></div>
              ))}
              <div className="col-span-12 h-2 mt-2 bg-(--text-muted) rounded-sm w-1/2 mx-auto"></div>
            </div>
          </div>
          <div className="w-12 h-20 bg-(--bg-secondary) rounded-[20px] border border-(--text-muted) border-opacity-20 shadow-lg relative flex justify-center">
            <div className="w-1 h-3 bg-(--text-muted) rounded-full mt-3 opacity-50"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
