const ITEMS = [
  "🎡", "🐼", "🎠", "🎢", "🍿", "🎈", "🎪", "🍭", "🚀", "🎯", "🎨", "🎶",
];

export default function Gallery() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <section id="gallery" className="relative overflow-hidden bg-carnival-navy py-16">
      <div className="mx-auto mb-10 max-w-7xl px-5 text-center sm:px-8">
        <span className="font-display text-sm font-bold uppercase tracking-widest text-carnival-yellow">
          Moments &amp; Memories
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
          A Little Taste of the Fun
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-carnival-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-carnival-navy to-transparent" />
        <div className="flex w-max animate-marquee gap-6">
          {loop.map((emoji, i) => (
            <div
              key={i}
              className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-white/10 text-5xl ring-1 ring-white/10 backdrop-blur-sm"
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
