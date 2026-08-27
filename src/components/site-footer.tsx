import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { Brand } from "./site-navbar";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-soft">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Brand />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Sendora Chat helps teams run smarter WhatsApp conversations with the Meta Cloud API —
            campaigns, templates and support in one workspace.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-wide">Product</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="/#features" className="transition-colors hover:text-primary">
                Features
              </a>
            </li>
            <li>
              <a href="/#pricing" className="transition-colors hover:text-primary">
                Pricing
              </a>
            </li>
            <li>
              <a href="/#contact" className="transition-colors hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-wide">Support</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/terms-and-conditions" className="transition-colors hover:text-primary">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <a
                href="mailto:hr@atsglobaltech.in"
                className="inline-flex items-center gap-2 break-all transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                hr@atsglobaltech.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sendora Chat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
