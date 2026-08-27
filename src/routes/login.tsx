import { Link, createFileRoute } from "@tanstack/react-router";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sendora Chat — Login" },
      {
        name: "description",
        content:
          "Log in to Sendora Chat to manage your WhatsApp campaigns, templates and customer conversations.",
      },
      { property: "og:title", content: "Sendora Chat — Login" },
      {
        property: "og:description",
        content: "Log in to Sendora Chat to manage your WhatsApp conversations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/login" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/login" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />

      <main className="flex-1 bg-soft py-14 md:py-20">
        <div className="container-page">
          <div className="mx-auto w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
            <h1 className="font-heading text-2xl font-bold sm:text-3xl">Welcome back</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Log in to your Sendora Chat workspace.
            </p>

            <form
              className="mt-7 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label htmlFor="identifier" className="text-sm font-medium">
                  Email or mobile number
                </label>
                <div className="relative mt-2">
                  <Mail
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="identifier"
                    name="identifier"
                    type="text"
                    autoComplete="username"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-input bg-background py-2.5 pl-10 pr-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative mt-2">
                  <Lock
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-input bg-background py-2.5 pl-10 pr-11 text-sm outline-none transition-colors focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-2 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" aria-hidden="true" />
                    ) : (
                      <Eye className="size-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <label htmlFor="remember" className="flex items-center gap-2 text-sm">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="size-4 rounded border-input accent-primary"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Log in
              </button>
            </form>

            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wide text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              or
              <span className="h-px flex-1 bg-border" />
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary"
            >
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.9h5.5a4.7 4.7 0 0 1-2 3.1v2.6h3.2c1.9-1.7 3-4.3 3-7.3 0-.7-.1-1.4-.2-2z"
                />
                <path
                  fill="#34A853"
                  d="M12 22c2.7 0 5-.9 6.7-2.4l-3.2-2.5c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.2H2.9v2.6A10 10 0 0 0 12 22"
                />
                <path fill="#FBBC05" d="M6.2 13.9a6 6 0 0 1 0-3.8V7.5H2.9a10 10 0 0 0 0 9z" />
                <path
                  fill="#4285F4"
                  d="M12 6c1.5 0 2.8.5 3.8 1.5l2.8-2.8C17 3.1 14.7 2 12 2A10 10 0 0 0 2.9 7.5l3.3 2.6C7 7.8 9.3 6 12 6"
                />
              </svg>
              Continue with Google
            </button>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              New to Sendora Chat?{" "}
              <button type="button" className="font-medium text-primary hover:opacity-80">
                Create an account
              </button>
            </p>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link
                to="/terms-and-conditions"
                className="font-medium text-primary underline underline-offset-2"
              >
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
