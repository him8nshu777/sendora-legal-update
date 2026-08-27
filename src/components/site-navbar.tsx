import { Link } from "@tanstack/react-router";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "./theme-toggle";

const sections = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Sendora Chat home">
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow">
        <MessageCircle className="size-5" aria-hidden="true" />
      </span>
      <span className="font-heading text-lg font-bold tracking-tight">Sendora Chat</span>
    </Link>
  );
}

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <Brand />

        <ul className="hidden items-center gap-8 md:flex">
          {sections.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            to="/login"
            className="rounded-xl border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Log in
          </Link>
          <Link
            to="/login"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Get started
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {sections.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-soft hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
