'use client';

import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Kanga completely changed how our team ships. It's like having a project manager that actually reads every thread.",
    author: 'Sarah Chen',
    role: 'Lead Engineer, Stripe',
    logo: '/logo/logo1.svg',
  },
  {
    quote: 'The context it retains across sessions is insane. No more repeating myself in standups or chasing stale tickets.',
    author: 'Marcus Adebayo',
    role: 'CTO, Supabase',
    logo: '/logo/logo2.svg',
  },
  {
    quote: "We cut our meeting time by 40% because Kanga summarizes everything. Honestly wish we'd built it ourselves.",
    author: 'Emily Larsson',
    role: 'Product Director, Vercel',
    logo: '/logo/logo3.svg',
  },
  {
    quote: "Set it up in five minutes and it immediately started catching things our old workflow missed. Zero friction.",
    author: 'David Okonkwo',
    role: 'Founder, Linear',
    logo: '/logo/logo4.svg',
  },
  {
    quote: 'The PR summaries alone saved us hours. Kanga knows our codebase better than half the team.',
    author: 'Priya Sharma',
    role: 'Senior Dev, GitHub',
    logo: '/logo/logo5.svg',
  },
  {
    quote: 'I was skeptical about AI tooling until Kanga. Now I cannot imagine running a sprint without it.',
    author: 'James Whitfield',
    role: 'Engineering Manager, Notion',
    logo: '/logo/logo6.svg',
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#FF9D5C]/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-8 md:px-14 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF9D5C]/20 bg-[#FF9D5C]/10 px-4 py-2 text-sm text-[#FFB27D]">
            <Quote size={14} />
            Trusted by teams worldwide
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
            Loved by the people who{' '}
            <span className="bg-gradient-to-r from-[#FF9D5C] to-[#FFD6A5] bg-clip-text text-transparent">
              ship the product
            </span>
          </h2>

          <p className="mt-4 text-lg text-white/50">
            Real words from real humans building at top companies.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#FF9D5C]/20 hover:bg-white/[0.06]"
            >
              <Quote
                size={20}
                className="mb-4 text-[#FF9D5C]/30"
              />

              <p className="text-[15px] leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-white/[0.06] pt-6">
                <img
                  src={t.logo}
                  alt=""
                  className="h-5 w-auto max-w-[60px] object-contain opacity-40"
                />

                <div>
                  <p className="text-sm font-medium text-white font-sans">
                    {t.author}
                  </p>

                  <p className="text-xs text-white/40 font-mono">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
