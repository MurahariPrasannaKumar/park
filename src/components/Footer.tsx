import {
  Mail,
  Share2,
  MessageSquare,
  Send,
  Hexagon,
  ArrowRight,
} from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Community", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const SOCIALS = [
  { label: "Email", icon: Mail, href: "#" },
  { label: "Share", icon: Share2, href: "#" },
  { label: "Chat", icon: MessageSquare, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Subtle Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[1000px] -translate-x-1/2 opacity-20"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-indigo-500/40 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand & Newsletter Section */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2.5">
              <Hexagon className="h-7 w-7 fill-indigo-500/20 text-indigo-500" />
              <span className="text-xl font-bold tracking-tight text-white">
                Nexus
              </span>
            </div>

            <p className="text-sm leading-6 text-slate-400">
              Accelerate your development workflow. Build better, ship faster,
              and scale infinitely with our next-generation platform.
            </p>

            <form className="relative max-w-sm">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none ring-indigo-500 transition-all focus:border-indigo-500 focus:bg-slate-900 focus:ring-1"
                placeholder="Subscribe to our newsletter"
              />
              <button
                type="submit"
                className="absolute bottom-1 right-1 top-1 flex items-center justify-center rounded-md bg-indigo-600 px-3 text-white transition-colors hover:bg-indigo-500"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Product</h3>
                <ul className="mt-6 space-y-4">
                  {FOOTER_LINKS.Product.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Resources</h3>
                <ul className="mt-6 space-y-4">
                  {FOOTER_LINKS.Resources.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Company</h3>
                <ul className="mt-6 space-y-4">
                  {FOOTER_LINKS.Company.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {FOOTER_LINKS.Legal.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800/80 pt-8 md:flex-row md:items-center">
          {/* Status Indicator */}
          <a
            href="#"
            className="group flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            All systems operational
            <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
          </a>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-slate-500 transition-colors hover:text-white"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-xs leading-5 text-slate-500">
            &copy; {new Date().getFullYear()} Nexus Technologies, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
