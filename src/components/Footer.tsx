import { Clock, Mail, MapPin, Phone, Send, Ticket } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "#about" },
      { label: "Rides", href: "#rides" },
      { label: "Food & Fun", href: "#stalls" },
      { label: "Gallery", href: "#gallery" },
    ],
  },
  {
    title: "Plan",
    links: [
      { label: "Offers", href: "#offers" },
      { label: "Visit Info", href: "#visit" },
      { label: "FAQs", href: "#faq" },
      { label: "Book Tickets", href: "#visit" },
    ],
  },
];

const CONTACT_LINKS = [
  {
    label: "+91 98765 43210",
    href: "tel:+919876543210",
    icon: Phone,
  },
  {
    label: "hello@childrensparkkurnool.in",
    href: "mailto:hello@childrensparkkurnool.in",
    icon: Mail,
  },
  {
    label: "Children's Park, Kurnool",
    href: "https://maps.google.com/?q=Children's%20Park%20Kurnool",
    icon: MapPin,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-slate-200">
      <div className="h-1 bg-gradient-to-r from-carnival-pink via-carnival-yellow to-carnival-teal" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr_1.15fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-carnival-pink via-carnival-orange to-carnival-yellow text-white shadow-[0_10px_28px_rgba(255,93,143,0.35)]">
                <Ticket className="h-6 w-6" />
              </span>
              <span className="font-display text-2xl font-extrabold leading-none text-white">
                Children&apos;s Park
                <span className="mt-1 block text-xs font-bold uppercase tracking-widest text-carnival-yellow">
                  Kurnool, Andhra Pradesh
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-6 text-slate-300">
              Family rides, cheerful food stalls, birthday specials, and
              all-day carnival energy in the heart of Kurnool.
            </p>

            <a
              href="#visit"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-carnival-pink px-6 py-3 font-display text-sm font-bold text-white shadow-[0_10px_25px_rgba(255,93,143,0.4)] transition-all hover:-translate-y-0.5 hover:bg-carnival-red"
            >
              <Ticket className="h-4 w-4" />
              Book Tickets
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h2 className="font-display text-sm font-bold uppercase tracking-widest text-carnival-yellow">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-300 transition-colors hover:text-carnival-pink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-carnival-teal">
              Visit Details
            </h2>

            <div className="mt-5 flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-carnival-blue/15 text-carnival-blue">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display font-bold text-white">
                  Tue - Sun, 10:00 AM - 9:00 PM
                </p>
                <p className="text-sm text-slate-400">Closed on Mondays</p>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {CONTACT_LINKS.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-carnival-yellow"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-carnival-pink" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Children&apos;s Park Kurnool. All
            rights reserved.
          </p>
          <a
            href="mailto:hello@childrensparkkurnool.in"
            className="inline-flex items-center gap-2 font-display font-bold text-carnival-yellow transition-colors hover:text-carnival-pink"
          >
            <Send className="h-4 w-4" />
            Plan a group visit
          </a>
        </div>
      </div>
    </footer>
  );
}
