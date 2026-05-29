'use client';

export default function TrustedBy() {
  return (
    <section className="border-y border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-12 px-6 text-white/40">
        <span className="font-semibold">GitHub</span>

        <span className="font-semibold">Vercel</span>

        <span className="font-semibold">Stripe</span>

        <span className="font-semibold">Supabase</span>

        <span className="font-semibold">OpenAI</span>
      </div>
    </section>
  );
}