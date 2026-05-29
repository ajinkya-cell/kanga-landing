'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  Rocket,
  MessageSquare,
  ClipboardList,
} from 'lucide-react';

const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
});

function FloatingCard({
  icon,
  title,
  subtitle,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`absolute rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-4 py-3 shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="text-[#FF9D5C]">{icon}</div>

        <div>
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="text-xs text-white/50">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="w-full  flex min-h-screen items-center">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-20 px-8 md:px-14 lg:grid-cols-2 lg:px-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center lg:pr-10"
        >
          <div className="mb-2 flex w-fit items-center gap-2 rounded-full border border-[#FF9D5C]/20 bg-[#FF9D5C]/10 px-4 py-2 text-sm text-[#FFB27D]">
            <Sparkles size={14} />

            Trusted by 10,000+ developers
          </div>

          <h1 className="max-w-[700px] text-[40px] font-bold leading-[1.1] md:text-5xl">
            The developer productivity assistant

            <span className="block bg-gradient-to-r from-[#FF9D5C] to-[#FFD6A5]  bg-clip-text text-transparent">
              that never drops the ball.
            </span>
          </h1>

          <p className="mt-3 max-w-[620px] text-md leading-relaxed text-white/60 font-sans">
            Track tasks, summarize discussions, organize
            documentation, and keep projects moving — all with a
            teammate that fits right in your pouch.
          </p>

         <div className="mt-5 flex flex-wrap gap-5">
            <button className="flex items-center gap-2 rounded-full bg-[#FF9D5C] px-7 py-4 text-base font-semibold text-black shadow-[0_10px_30px_rgba(255,157,92,0.35)] transition-all duration-300 hover:scale-105">
              Start Free
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2  border-white/10 rounded-full bg-white/[0.04] px-8 py-4 text-base backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.08]">
              <Play size={16} />

              Watch Demo
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-14 border-t border-white/10 pt-5">
            <div>
              <h3 className="text-3xl font-bold font-mono tracking-tight">10K+</h3>

              <p className="text-sm text-white/50 font-sans">
                Developers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold font-mono tracking-tight">2M+</h3>

              <p className="text-sm text-white/50 font-sans">
                Tasks Managed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold font-mono tracking-tight">99.9%</h3>

              <p className="text-sm text-white/50 font-sans">
                Reliability
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <div className="relative flex items-center justify-center lg:justify-end">
         <div className="absolute h-[650px] w-[650px] rounded-full bg-[#FF9D5C]/20 blur-[160px]" />

         <div className="-translate-11 translate-x-5 h-[650px] w-full max-w-[720px]">
            <ModelViewer />
          </div>

          <FloatingCard
            icon={<CheckCircle2 size={18} />}
            title="PR Reviewed"
            subtitle="Merged 2 minutes ago"
            className="left-0 top-24 hidden md:block"
          />

          <FloatingCard
            icon={<Rocket size={18} />}
            title="Deploy Successful"
            subtitle="Production updated"
            className="right-0 top-40 hidden md:block"
          />

          <FloatingCard
            icon={<ClipboardList size={18} />}
            title="Sprint Updated"
            subtitle="6 tasks organized"
            className="bottom-36 left-10 hidden md:block"
          />

          <FloatingCard
            icon={<MessageSquare size={18} />}
            title="Messages Summarized"
            subtitle="34 unread messages"
            className="bottom-45 right-12 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}