import { Link, createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Bot,
  Check,
  Mail,
  MessageSquareText,
  Rocket,
  Send,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sendora Chat — Smarter Conversations" },
      {
        name: "description",
        content:
          "Sendora Chat is a WhatsApp Business platform for campaigns, templates, automation and shared team inbox powered by the Meta Cloud API.",
      },
      { property: "og:title", content: "Sendora Chat — Smarter Conversations" },
      {
        property: "og:description",
        content:
          "Run WhatsApp campaigns, automations and support conversations from one Sendora Chat workspace.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  {
    icon: Send,
    title: "Bulk campaigns",
    text: "Launch approved template campaigns to thousands of opted-in contacts in minutes.",
  },
  {
    icon: Bot,
    title: "Smart automations",
    text: "Auto-replies, keyword flows and chatbots that answer while your team sleeps.",
  },
  {
    icon: Users,
    title: "Shared team inbox",
    text: "Assign chats, add internal notes and never let a customer message go cold.",
  },
  {
    icon: BarChart3,
    title: "Delivery analytics",
    text: "Track sent, delivered, read and replied metrics for every single broadcast.",
  },
  {
    icon: ShieldCheck,
    title: "Meta compliant",
    text: "Built directly on the official Meta Cloud API with opt-in and policy safeguards.",
  },
  {
    icon: Zap,
    title: "Fast integrations",
    text: "Connect your CRM, store or internal tools with webhooks and a clean REST API.",
  },
];

const stats = [
  { value: "12M+", label: "Messages delivered" },
  { value: "3,400+", label: "Active businesses" },
  { value: "98.6%", label: "Delivery rate" },
  { value: "24/7", label: "Support coverage" },
];

const plans = [
  {
    name: "Starter",
    price: "$19",
    text: "For small teams testing WhatsApp growth.",
    features: ["1 WhatsApp number", "2 team seats", "5,000 messages/mo", "Basic analytics"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$59",
    text: "For scaling marketing and support teams.",
    features: [
      "3 WhatsApp numbers",
      "10 team seats",
      "50,000 messages/mo",
      "Automations & chatbots",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "$149",
    text: "For high-volume messaging operations.",
    features: [
      "Unlimited numbers",
      "Unlimited seats",
      "Custom message volume",
      "Dedicated success manager",
      "SLA & uptime guarantee",
    ],
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "Sendora Chat cut our support response time in half. The shared inbox alone paid for itself in the first month.",
    name: "Ananya Rao",
    role: "Head of Support, Kindle Retail",
  },
  {
    quote:
      "Campaign delivery is rock solid and the template approval flow is the cleanest we have used.",
    name: "Marcus Feld",
    role: "Growth Lead, Northline",
  },
  {
    quote:
      "We moved from three tools to one. Automations handle 60% of our incoming conversations now.",
    name: "Priya Menon",
    role: "Founder, Bloomcart",
  },
];

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-soft py-16 md:py-24">
          <div className="container-page grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                <Rocket className="size-3.5" aria-hidden="true" />
                WhatsApp Business API
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Smarter conversations, <span className="text-primary">at scale</span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground">
                Sendora Chat brings campaigns, automations and your whole support team into one
                WhatsApp workspace built on the official Meta Cloud API.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/login"
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Get started free
                </Link>
                <a
                  href="#features"
                  className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  See features
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MessageSquareText className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold">Sendora Inbox</p>
                  <p className="text-xs text-muted-foreground">3 conversations active</p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-soft px-4 py-2.5 text-sm">
                  Hi! Is the order shipping today?
                </p>
                <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                  Yes — dispatched at 4pm with tracking sent here.
                </p>
                <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-soft px-4 py-2.5 text-sm">
                  Perfect, thank you!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-20 py-16 md:py-24">
          <div className="container-page">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Everything you need to run WhatsApp
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              One platform for marketing, sales and support conversations.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <f.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-soft py-14">
          <div className="container-page grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-bold text-primary md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 py-16 md:py-24">
          <div className="container-page">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Simple pricing</h2>
            <p className="mt-3 text-muted-foreground">No setup fees. Cancel anytime.</p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {plans.map((p) => (
                <article
                  key={p.name}
                  className={`rounded-2xl border bg-card p-7 shadow-card transition-all hover:-translate-y-1 ${
                    p.featured ? "border-primary ring-1 ring-primary" : "border-border"
                  }`}
                >
                  {p.featured ? (
                    <span className="mb-3 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                      Most popular
                    </span>
                  ) : null}
                  <h3 className="font-heading text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                  <p className="mt-5 font-heading text-4xl font-bold">
                    {p.price}
                    <span className="text-base font-normal text-muted-foreground">/mo</span>
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/login"
                    className={`mt-7 block rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                      p.featured
                        ? "bg-primary text-primary-foreground shadow-glow"
                        : "border border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    Choose {p.name}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="scroll-mt-20 bg-soft py-16 md:py-24">
          <div className="container-page">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Loved by growing teams</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl border border-border bg-card p-6 shadow-card"
                >
                  <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm text-muted-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5">
                    <span className="block font-heading text-sm font-bold">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-16 md:py-24">
          <div className="container-page">
            <div className="rounded-3xl border border-info-card-border bg-info-card p-8 text-center md:p-12">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Ready to talk to our team?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Tell us about your messaging volume and we&apos;ll help you pick the right Sendora
                Chat plan.
              </p>
              <a
                href="mailto:hr@atsglobaltech.in"
                className="mt-7 inline-flex max-w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <span className="break-all">hr@atsglobaltech.in</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
