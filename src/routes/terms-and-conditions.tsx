import { createFileRoute } from "@tanstack/react-router";
import {
  DatabaseZap,
  Facebook,
  LayoutDashboard,
  Mail,
  MailCheck,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

const DELETION_MAILTO =
  "mailto:gaurav998290@gmail.com?subject=Sendora%20Chat%20-%20Data%20Deletion%20Request";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Sendora Chat — Terms of Service" },
      {
        name: "description",
        content:
          "Read the Sendora Chat Terms of Service, WhatsApp and Meta compliance requirements, account responsibilities and user data deletion instructions.",
      },
      { property: "og:title", content: "Sendora Chat — Terms of Service" },
      {
        property: "og:description",
        content:
          "Read the Sendora Chat Terms of Service, WhatsApp and Meta compliance requirements, account responsibilities and user data deletion instructions.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms-and-conditions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsPage,
});

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="legal-h2 mt-12 font-heading font-bold">{children}</h2>;
}

type Step = {
  number: string;
  title: string;
  icon: LucideIcon;
  intro?: React.ReactNode;
  items: React.ReactNode[];
};

const steps: Step[] = [
  {
    number: "01",
    title: "Direct Dashboard Deletion",
    icon: LayoutDashboard,
    items: [
      "Log in to your Sendora Chat dashboard.",
      "Navigate to Settings > Connected Accounts.",
      'Click "Disconnect WhatsApp Account" to immediately revoke active access tokens and webhook associations.',
    ],
  },
  {
    number: "02",
    title: "Manual Data Deletion Request",
    icon: DatabaseZap,
    intro:
      "If you want all stored records (WABA details, message template logs, profile information) permanently erased from our database:",
    items: [
      <>
        Send an email to{" "}
        <a
          href={DELETION_MAILTO}
          className="break-all font-medium text-primary underline underline-offset-2"
        >
          gaurav998290@gmail.com
        </a>{" "}
        with the subject line: <strong>&quot;Sendora Chat - Data Deletion Request&quot;.</strong>
      </>,
      "Include your registered email address and associated WhatsApp Phone Number ID.",
      "Our technical team will process the request, purge your data from our active databases within 48 to 72 hours, and send a confirmation email once complete.",
    ],
  },
  {
    number: "03",
    title: "Revoke via Facebook Business Manager",
    icon: Facebook,
    items: [
      "Go to your Meta Business Settings > Integrations > Connected Apps.",
      <>
        Locate &quot;Sendora Chat&quot; (or App ID: <strong className="break-all">620661973201296</strong>) and
        click &quot;Remove&quot;.
      </>,
    ],
  },
];

function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border bg-soft py-14 md:py-20">
          <div className="container-page">
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Legal
            </span>
            <h1 className="legal-h1 mt-5 font-heading font-bold">Terms of Service</h1>
            <p className="legal-body mt-3 max-w-2xl text-muted-foreground">
              Please read these terms carefully before using Sendora Chat.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: August 27, 2026</p>
          </div>
        </section>

        {/* Terms content */}
        <section className="py-12 md:py-16">
          <div className="container-page max-w-3xl px-4 [padding-inline:24px] md:[padding-inline:16px]">
            <h2 className="legal-h2 font-heading font-bold">Terms of Service for Sendora Chat</h2>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: August 27, 2026</p>

            <SectionHeading>1. Acceptance of Terms</SectionHeading>
            <p className="legal-body mt-3 text-muted-foreground">
              By accessing or using Sendora Chat, you agree to be bound by these Terms of Service.
              If you disagree with any part of these terms, you may not use our services.
            </p>

            <SectionHeading>2. Meta &amp; WhatsApp Compliance</SectionHeading>
            <p className="legal-body mt-3 text-muted-foreground">
              Users of Sendora Chat must strictly comply with:
            </p>
            <ul className="legal-body mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Meta Business Messaging Policy</li>
              <li>WhatsApp Commerce and Messaging Policies</li>
              <li>Meta Platform Terms and Developer Policies</li>
            </ul>
            <p className="legal-body mt-3 text-muted-foreground">
              Any violation of WhatsApp&apos;s spam, offensive content, or unauthorized messaging
              policies will result in immediate termination of service access.
            </p>

            <SectionHeading>3. Account &amp; API Responsibilities</SectionHeading>
            <ul className="legal-body mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                You are solely responsible for maintaining the confidentiality of your credentials
                and access tokens.
              </li>
              <li>
                You are responsible for ensuring that all recipients of your WhatsApp messages have
                provided valid opt-in consent.
              </li>
            </ul>

            <SectionHeading>4. Service Availability &amp; Modifications</SectionHeading>
            <p className="legal-body mt-3 text-muted-foreground">
              While we strive for continuous uptime, Sendora Chat is dependent on Meta Cloud API
              availability and cannot be held liable for third-party service interruptions, delivery
              delays, or network downtime.
            </p>

            <SectionHeading>5. Limitation of Liability</SectionHeading>
            <p className="legal-body mt-3 text-muted-foreground">
              Sendora Chat and its parent company shall not be liable for any indirect, incidental,
              or punitive damages resulting from your use of the messaging services.
            </p>

            <SectionHeading>6. Contact Information</SectionHeading>
            <p className="legal-body mt-3 text-muted-foreground">
              For legal inquiries or support regarding these terms:
            </p>
            <p className="legal-body mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:gaurav998290@gmail.com"
                className="break-all font-medium text-primary underline underline-offset-2"
              >
                gaurav998290@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* User data deletion */}
        <section
          aria-labelledby="data-deletion"
          className="border-t border-border bg-soft py-12 md:py-16"
        >
          <div className="container-page max-w-3xl px-4 [padding-inline:24px] md:[padding-inline:16px]">
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              User Data Deletion
            </span>
            <h2 id="data-deletion" className="legal-h1 mt-5 font-heading font-bold">
              User Data Deletion Instructions for Sendora Chat
            </h2>
            <p className="legal-body mt-4 text-muted-foreground">
              Sendora Chat respects user data privacy and complies with Meta Platform policies by
              providing a transparent mechanism to request account and data removal.
            </p>

            {/* Intro card */}
            <div className="mt-8 rounded-2xl border border-info-card-border bg-info-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </span>
                <span className="flex size-10 items-center justify-center rounded-xl border border-primary/40 text-primary">
                  <Trash2 className="size-5" aria-hidden="true" />
                </span>
              </div>
              <h3 className="legal-h3 mt-4 font-heading font-bold">Your Data, Your Control</h3>
              <p className="legal-body mt-2 text-muted-foreground">
                You can disconnect your WhatsApp account or request permanent deletion of your
                stored Sendora Chat data.
              </p>
            </div>

            <p className="legal-body mt-8 text-muted-foreground">
              If you wish to delete your Sendora Chat account data and associated Meta/WhatsApp
              credentials, follow the steps below:
            </p>

            {/* Step cards */}
            <div className="mt-6 space-y-5">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <step.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <span className="font-heading text-sm font-bold tracking-[0.2em] text-primary">
                        {step.number}
                      </span>
                      <h3 className="legal-h3 mt-1 font-heading font-bold">
                        Step {Number(step.number)}: {step.title}
                      </h3>
                      {step.intro ? (
                        <p className="legal-body mt-3 text-muted-foreground">{step.intro}</p>
                      ) : null}
                      <ol className="legal-body mt-3 list-decimal space-y-2 pl-5 text-muted-foreground">
                        {step.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-2xl border border-info-card-border bg-info-card p-6 text-center sm:p-8">
              <h3 className="legal-h3 font-heading font-bold">
                Need to permanently delete your data?
              </h3>
              <p className="legal-body mt-2 text-muted-foreground">
                Send us a data deletion request and our technical team will process it.
              </p>
              <a
                href={DELETION_MAILTO}
                className="mt-6 inline-flex max-w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <MailCheck className="size-4 shrink-0" aria-hidden="true" />
                Request Data Deletion
              </a>
            </div>

            {/* Legal contact */}
            <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="legal-h3 font-heading font-bold">Legal &amp; Support</h3>
              <p className="legal-body mt-2 text-muted-foreground">
                For legal inquiries, support or data deletion requests, contact:
              </p>
              <a
                href="mailto:gaurav998290@gmail.com"
                className="mt-4 inline-flex max-w-full items-center gap-3 text-primary"
              >
                <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="break-all font-medium underline underline-offset-2">
                  gaurav998290@gmail.com
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
