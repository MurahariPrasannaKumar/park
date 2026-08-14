const SOCIALS = [
  { label: "Facebook", emoji: "📘" },
  { label: "Instagram", emoji: "📸" },
  { label: "YouTube", emoji: "▶️" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-carnival-navy pt-16 text-white">
      <svg
        viewBox="0 0 1440 60"
        className="absolute -top-1 left-0 w-full text-white"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 40 C 240 0 480 0 720 30 C 960 60 1200 60 1440 20 L1440 60 L0 60 Z"
          fill="currentColor"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-carnival-pink via-carnival-orange to-carnival-yellow text-lg">
                🎡
              </span>
              <span className="font-display text-xl font-bold">
                Children&apos;s Park
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Kurnool&apos;s favourite amusement park — thrilling rides,
              joyful entertainment, and delicious treats for the whole
              family.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm transition-colors hover:bg-carnival-pink"
                  aria-label={social.label}
                >
                  {social.emoji}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display font-bold">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><a href="#rides" className="hover:text-white">Rides &amp; Attractions</a></li>
              <li><a href="#stalls" className="hover:text-white">Food &amp; Entertainment</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#visit" className="hover:text-white">Plan Your Visit</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display font-bold">Visit Us</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Children&apos;s Park, Kurnool</li>
              <li>Andhra Pradesh, India — 518001</li>
              <li>Tue – Sun, 10 AM – 9 PM</li>
            </ul>
          </div>

          <div>
            <p className="font-display font-bold">Get In Touch</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>+91 98765 43210</li>
              <li>hello@childrensparkkurnool.in</li>
            </ul>
          </div>
        </div>

        <p className="pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Children&apos;s Park, Kurnool. All rights reserved. Made with 💛 in Andhra Pradesh.
        </p>
      </div>
    </footer>
  );
}
