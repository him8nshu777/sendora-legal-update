# Sendora Legal Update

Update the existing **Sendora Chat React project**.

This is the FINAL legal-content update.

Do NOT redesign the existing application. Keep the current Sendora Chat UI, orange/white theme, dark/light theme, fonts, spacing, animations, responsive behavior, components and overall design exactly as they are.

Only update the Terms & Conditions page and related navigation/content as described below.

---

# 1. FINAL ROUTES — EXACTLY 3

The application must contain ONLY:

```text
/
/login
/terms-and-conditions
```

Do NOT create any additional route.

Absolutely NO:

```text
/privacy-policy
/register
/dashboard
/about
/contact
/pricing
/features
/forgot-password
/data-deletion
```

The User Data Deletion Instructions must be displayed as a section on:

```text
/terms-and-conditions
```

Do NOT create a separate data deletion page.

---

# 2. BRAND

The complete project must use:

# Sendora Chat

Remove all occurrences of:

```text
Living Connect
WH Marketing
```

Do not leave old branding in JSX, CSS, JavaScript, metadata, accessibility labels, footer, navbar or content.

---

# 3. TERMS PAGE

Route:

```text
/terms-and-conditions
```

Page title:

```text
Terms of Service
```

Small badge:

```text
LEGAL
```

Subtitle:

```text
Please read these terms carefully before using Sendora Chat.
```

Show:

```text
Last updated: August 27, 2026
```

Use the same Sendora Chat Navbar and Footer.

---

# 4. TERMS OF SERVICE CONTENT

Use the following content as the primary Terms of Service content.

Do NOT replace it with lorem ipsum.

Do NOT remove any of the provided points.

Do NOT substantially change the meaning.

## Terms of Service for Sendora Chat

### Last updated: August 27, 2026

### 1. Acceptance of Terms

By accessing or using Sendora Chat, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our services.

### 2. Meta & WhatsApp Compliance

Users of Sendora Chat must strictly comply with:

* Meta Business Messaging Policy
* WhatsApp Commerce and Messaging Policies
* Meta Platform Terms and Developer Policies

Any violation of WhatsApp's spam, offensive content, or unauthorized messaging policies will result in immediate termination of service access.

### 3. Account & API Responsibilities

* You are solely responsible for maintaining the confidentiality of your credentials and access tokens.
* You are responsible for ensuring that all recipients of your WhatsApp messages have provided valid opt-in consent.

### 4. Service Availability & Modifications

While we strive for continuous uptime, Sendora Chat is dependent on Meta Cloud API availability and cannot be held liable for third-party service interruptions, delivery delays, or network downtime.

### 5. Limitation of Liability

Sendora Chat and its parent company shall not be liable for any indirect, incidental, or punitive damages resulting from your use of the messaging services.

### 6. Contact Information

For legal inquiries or support regarding these terms:

**Email:** [gaurav998290@gmail.com](mailto:gaurav998290@gmail.com)

Make the email clickable:

```text
mailto:gaurav998290@gmail.com
```

---

# 5. ADD USER DATA DELETION SECTION

Immediately after the Terms of Service content, add a clearly separated section on the SAME page.

Use an orange-highlighted section header:

```text
USER DATA DELETION
```

Main heading:

```text
User Data Deletion Instructions for Sendora Chat
```

Intro text:

```text
Sendora Chat respects user data privacy and complies with Meta Platform policies by providing a transparent mechanism to request account and data removal.
```

Then display:

```text
If you wish to delete your Sendora Chat account data and associated Meta/WhatsApp credentials, follow the steps below:
```

---

# 6. STEP 1 — DIRECT DASHBOARD DELETION

Create a numbered subsection:

### Step 1: Direct Dashboard Deletion

Display the following instructions:

1. Log in to your Sendora Chat dashboard.
2. Navigate to Settings > Connected Accounts.
3. Click "Disconnect WhatsApp Account" to immediately revoke active access tokens and webhook associations.

IMPORTANT:

Do NOT create a `/dashboard` route.

The text "Sendora Chat dashboard" is informational and refers to the actual dashboard/service environment. It must NOT link to a new page inside this React website.

---

# 7. STEP 2 — MANUAL DATA DELETION REQUEST

Create:

### Step 2: Manual Data Deletion Request

Display:

```text
If you want all stored records (WABA details, message template logs, profile information) permanently erased from our database:
```

Then show:

1. Send an email to `gaurav998290@gmail.com` with the subject line:
   **"Sendora Chat - Data Deletion Request".**

2. Include your registered email address and associated WhatsApp Phone Number ID.

3. Our technical team will process the request, purge your data from our active databases within 48 to 72 hours, and send a confirmation email once complete.

Make the email address clickable:

```text
mailto:gaurav998290@gmail.com?subject=Sendora%20Chat%20-%20Data%20Deletion%20Request
```

When clicked, it should open the user's email client with the subject pre-filled:

```text
Sendora Chat - Data Deletion Request
```

---

# 8. STEP 3 — REVOKE VIA FACEBOOK BUSINESS MANAGER

Create:

### Step 3: Revoke via Facebook Business Manager

Display:

1. Go to your Meta Business Settings > Integrations > Connected Apps.
2. Locate "Sendora Chat" (or App ID: **620661973201296**) and click "Remove".

Important:

Do NOT create a separate Meta/Facebook page or route.

If an external Meta link is required later, keep it as an external link. Do not create an internal route.

---

# 9. DATA DELETION VISUAL DESIGN

The User Data Deletion section should look professional and easy to understand.

Create:

### Intro Card

Soft orange background:

```text
#FFF1E7
```

With:

* Shield icon
* Database/trash icon
* Orange accent
* Rounded corners

Heading:

```text
Your Data, Your Control
```

Supporting text:

```text
You can disconnect your WhatsApp account or request permanent deletion of your stored Sendora Chat data.
```

Then display the three deletion steps as cards.

---

# 10. DELETION STEP CARDS

Desktop:

3 cards in a vertical timeline OR clean stacked sections.

Preferred layout:

```text
01
Direct Dashboard Deletion

02
Manual Data Deletion Request

03
Revoke via Facebook Business Manager
```

Each card should contain:

* Step number
* Orange icon
* Heading
* Instructions
* Hover effect

Do NOT make the layout overly complicated.

---

# 11. DATA DELETION EMAIL CTA

At the bottom of the User Data Deletion section, create a highlighted CTA:

Heading:

```text
Need to permanently delete your data?
```

Description:

```text
Send us a data deletion request and our technical team will process it.
```

Button:

```text
REQUEST DATA DELETION
```

The button must open:

```text
mailto:gaurav998290@gmail.com?subject=Sendora%20Chat%20-%20Data%20Deletion%20Request
```

Button style:

```text
background: #FF6500
color: #FFFFFF
border-radius: 12px
```

---

# 12. LEGAL CONTACT

At the bottom of the Terms page, create a contact box:

### Legal & Support

```text
For legal inquiries, support or data deletion requests, contact:
```

Email:

```text
gaurav998290@gmail.com
```

Clickable:

```text
mailto:gaurav998290@gmail.com
```

Use an orange email icon.

---

# 13. IMPORTANT — NO PRIVACY POLICY PAGE

There must NOT be a Privacy Policy page in this project.

Remove:

```text
/privacy-policy
```

from the router if it exists.

Remove Privacy Policy navigation/footer links if they exist.

The legal navigation should contain ONLY:

```text
Terms & Conditions
```

---

# 14. LOGIN PAGE LEGAL TEXT

At the bottom of the Login form, use:

```text
By continuing, you agree to our Terms & Conditions.
```

Make:

```text
Terms & Conditions
```

clickable:

```text
/terms-and-conditions
```

Do NOT show Privacy Policy.

---

# 15. FOOTER

Footer Support column should contain ONLY:

```text
Terms & Conditions
```

Link:

```text
/terms-and-conditions
```

Do NOT add:

```text
Privacy Policy
Data Deletion
```

as separate footer pages/links.

The Data Deletion instructions are already available inside Terms & Conditions.

---

# 16. DARK/LIGHT THEME

Keep the existing fully functional theme switcher.

Light theme:

```text
Background: #FFFFFF
Soft Background: #FFF9F5
Card: #FFFFFF
Text: #172033
Muted: #737B89
Orange: #FF6500
```

Dark theme:

```text
Background: #0F1117
Secondary: #151922
Card: #1A1F2A
Text: #FFFFFF
Muted: #8F98A8
Border: #2A303C
Orange: #FF6500
```

The Terms page and User Data Deletion section must automatically adapt to both themes.

For dark mode, the deletion information card should use:

```text
background: #202633
border: 1px solid #2A303C
```

Do NOT leave white cards with unreadable text in dark mode.

---

# 17. TYPOGRAPHY

Continue using:

### Headings

Poppins:

```text
font-weight: 700
```

### Body

Inter:

```text
font-weight: 400
line-height: 1.8
```

Terms page:

```text
H1: 42–48px desktop
H2: 24–28px
H3: 18–20px
Body: 15–16px
```

Mobile:

```text
H1: 32–36px
H2: 21–24px
H3: 17–19px
Body: 14–15px
```

---

# 18. RESPONSIVE BEHAVIOR

Terms page must work perfectly on:

* Desktop
* Laptop
* Tablet
* Mobile

Mobile:

* Content width = calc(100% - 32px)
* Padding = 24px
* Step cards stack vertically
* Email buttons remain usable
* No horizontal scrolling
* Long App ID must wrap properly
* Long email links must not overflow
* Navbar becomes hamburger menu

---

# 19. ACCESSIBILITY

Implement:

* Semantic headings
* Proper ordered lists
* Proper unordered lists
* Accessible email links
* Accessible buttons
* Keyboard navigation
* Focus states
* Sufficient color contrast
* ARIA labels for icons where needed

Use actual `

` and `

` elements for legal instructions instead of manually typed numbers.

---

# 20. SEO

Terms page title:

```text
Sendora Chat — Terms of Service
```

Meta description:

```text
Read the Sendora Chat Terms of Service, WhatsApp and Meta compliance requirements, account responsibilities and user data deletion instructions.
```

Home title:

```text
Sendora Chat — Smarter Conversations
```

Login title:

```text
Sendora Chat — Login
```

---

# 21. FINAL ROUTES CHECK

The React Router configuration MUST contain exactly:

```text
/
/login
/terms-and-conditions
```

Nothing else.

---

# 22. FINAL CONTENT CHECK

Search the entire project and remove:

```text
Living Connect
WH Marketing
/privacy-policy
Privacy Policy page
```

Confirm that:

```text
Sendora Chat
```

is the only project brand.

Confirm these emails are used exactly as follows:

### Home Contact

```text
hr@atsglobaltech.in
```

### Legal / Terms / Data Deletion

```text
gaurav998290@gmail.com
```

---

# 23. FINAL TERMS PAGE ORDER

The final Terms & Conditions page should appear in this order:

```text
LEGAL

Terms of Service

Last updated: August 27, 2026

1. Acceptance of Terms

2. Meta & WhatsApp Compliance

3. Account & API Responsibilities

4. Service Availability & Modifications

5. Limitation of Liability

6. Contact Information


--------------------------------

USER DATA DELETION

User Data Deletion Instructions for Sendora Chat

Introduction

Step 1: Direct Dashboard Deletion

Step 2: Manual Data Deletion Request

Step 3: Revoke via Facebook Business Manager

Data Deletion CTA

Legal & Support
```

---

# 24. FINAL RESULT

The final Sendora Chat React application must contain:

### HOME

```text
/
/ 
```

Complete landing page with:

* Navbar
* Hero
* Features
* Stats
* Pricing
* Testimonials
* Contact section
* Footer
* Dark/Light theme

### LOGIN

```text
/login
```

Complete login UI with:

* Sendora Chat branding
* Email/mobile input
* Password input
* Remember me
* Forgot password UI
* Login
* Google login UI
* Create account UI
* Terms & Conditions link
* Dark/Light theme

### TERMS

```text
/terms-and-conditions
```

Complete Terms of Service page containing:

* Terms of Service
* Meta & WhatsApp compliance
* Account/API responsibilities
* Service availability
* Limitation of liability
* Legal contact
* User Data Deletion Instructions
* Direct Dashboard Deletion
* Manual Data Deletion Request
* Facebook Business Manager revocation
* Data deletion email CTA

NO OTHER PAGE.

Keep the entire application visually consistent with the existing **Sendora Chat orange SaaS design** and make the final result production-ready.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7e28161c-9321-4a5a-ab4f-f67cb50cede9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
