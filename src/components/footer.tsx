'use client';

import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'Studio Rental', href: '#services' },
      { label: 'Podcast Production', href: '#services' },
      { label: 'Video Editing', href: '#services' },
      { label: 'Livestream Setup', href: '#services' },
      { label: 'Equipment Hire', href: '#services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Studio Policies', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
] as const;

const legalLinks = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Settings', href: '#' },
  { label: 'Accessibility', href: '#' },
] as const;

const socialIcons = [
  { icon: <Instagram className="h-5 w-5" />, href: '#' },
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#' },
  { icon: <Youtube className="h-5 w-5" />, href: '#' },
];

export default function FooterNewsletter() {
  return (
    <footer className="relative w-full bg-neutral-950 text-neutral-100 pt-20 pb-10">
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-blue-500 opacity-10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-blue-500 opacity-10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 rounded-2xl bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Record better with AM Studios
              </h3>
              <p className="mb-6 text-neutral-400">
                Join thousands of professionals who trust AM Studios for all their video and audio needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-lg border border-white/20 bg-neutral-900 px-4 py-3 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:shadow-blue-600/30 hover:bg-blue-500">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="hidden justify-end md:flex">
              <div className="relative">
                <div className="absolute inset-0 rotate-6 rounded-xl bg-blue-500/20" />
                <img
                  src="https://images.unsplash.com/photo-1642437317106-5716114cfede?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHN0dWRpb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
                  alt="AM Studios team"
                  className="relative w-80 rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center space-x-3">
              <img src="/logo.png" alt="AM Studios logo" className="h-10 w-10 rounded" />
              <span className="text-xl font-bold text-white">AM Studios</span>
            </div>
            <p className="mb-6 text-neutral-400">

              AM Studios is a premium 24/7 podcast and video production facility in Delhi.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/50 backdrop-blur-xl border border-white/10 text-neutral-300 transition hover:bg-blue-600/10 hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-lg font-semibold text-white">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="mb-4 text-sm text-neutral-400 md:mb-0">
            © 2025 AM Studios. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-400 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}