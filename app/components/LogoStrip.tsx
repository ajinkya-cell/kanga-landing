'use client';

const logos = [
  '/logo/logo1.svg',
  '/logo/logo2.svg',
  '/logo/logo3.svg',
  '/logo/logo4.svg',
  '/logo/logo5.svg',
  '/logo/logo6.svg',
  '/logo/logo7.svg',
  '/logo/logo8.svg',
  '/logo/logo9.svg',
  '/logo/logo10.svg',
  '/logo/logo11.svg',
  '/logo/logo12.svg',
  '/logo/logo13.svg',
];

export default function LogoStrip() {
  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-horizontal {
            animation: none !important;
          }
        }
        .marquee-track {
          min-width: max-content;
        }
        .animate-marquee-horizontal {
          animation: marquee-scroll 40s linear infinite;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        @media (max-width: 768px) {
          .animate-marquee-horizontal {
            animation-duration: 25s;
          }
        }
        @media (hover: hover) {
          .animate-marquee-horizontal:hover {
            animation-play-state: paused;
          }
        }
      `}</style>

      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl overflow-hidden">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#09090B] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#09090B] to-transparent" />

            <div className="flex">
              <div className="marquee-track flex min-w-max items-center gap-16 px-8 animate-marquee-horizontal">
                {[...logos, ...logos].map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className="flex shrink-0 items-center opacity-40 transition-opacity duration-500 hover:opacity-70"
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-7 w-auto max-w-[120px] object-contain md:h-8"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
