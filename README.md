# WebCraft.dev | Premium Freelance Web Development Studio

Official portfolio and client acquisition platform for **WebCraft.dev** (`WebCrafted`) — Freelance Full Stack Web Development based in **Hyderabad, India**.

---

## 🌟 Overview & Objectives

This website serves as both a showcase of engineering capabilities and a conversion engine for acquiring business clients across small businesses, startups, tourism companies, restaurants, local companies, and international clients.

### Key Architectural Standards Met:
- **Zero Fabricated Content**: No fake testimonials, invented company logos, false statistics, or exaggerated performance metrics.
- **Cinematic Dark Theme**: Futuristic, sophisticated visual identity with balanced negative space, subtle lighting effects, glass-style navigation, and device mockup frames.
- **Real Project Showcase**: Features the live project **[Spirit Adventure](https://spirit-adventure.onrender.com/)** with its real technology stack and functional highlights.
- **Clear Project Slots**: Clearly designated, modern placeholder frames for upcoming client business websites and campaign landing pages.
- **Centralized Configuration**: All contact information, WhatsApp numbers, email addresses, and form backend endpoints can be updated in a single file: `config.js`.

---

## 📁 File Structure

```
d:\Projects\Web Development\webcraft.dev\
├── index.html                  # Semantic, accessible HTML5 structure (all 16 prompt sections)
├── styles.css                  # Custom cinematic dark design system & responsive layout
├── script.js                   # Client-side engine: navigation, form validation, WhatsApp, modals
├── config.js                   # Central configuration: contact details, WhatsApp, email, endpoints
├── 404.html                    # Custom branded 404 Not Found error page
├── robots.txt                  # Search engine crawler instructions
├── sitemap.xml                 # XML sitemap for SEO discovery
├── .env.example                # Environment variables template for serverless/backend setups
├── README.md                   # Complete documentation
└── assets/
    ├── Logohead.png            # Brand mark / favicon
    ├── Logo.png                # Full brand logo asset
    ├── logo.svg                # Vector SVG brand mark fallback
    ├── spirit-adventure-preview.svg  # Desktop mockup preview for Spirit Adventure
    ├── placeholder-business.svg       # Desktop mockup frame for Business Website slot
    └── placeholder-landing.svg        # Dual desktop + mobile mockup for Landing Page slot
```

---

## ⚙️ Configuration & Customization (`config.js`)

You can update contact information, links, and form settings in `config.js`:

```javascript
window.WEBCRAFT_CONFIG = {
  brandName: "WebCrafted",
  brandDomain: "WebCraft.dev",
  profession: "Freelance Full Stack Web Development",
  location: "Hyderabad, India",
  availabilityStatus: "Available for new projects",

  // 1. Phone & WhatsApp Configuration
  phoneNumber: "+91 7794835164",
  whatsappNumber: "917794835164",
  whatsappPrefillMessage: "Hi WebCraft.dev, I visited your portfolio and would like to discuss a website development project. Could you share more details?",

  // 2. Business Email Address
  emailAddress: "webbcraft.dev1@gmail.com",

  // 3. Social Profiles
  linkedinUrl: "https://www.linkedin.com/in/shaunak-kompalwar-60a5243b6/",
  githubUrl: "https://github.com/shaunakkompalwar968",
  instagramUrl: "", // Optional

  // 4. Form Backend Endpoint (Formspree, Web3Forms, or custom API)
  formEndpoint: "" // e.g., "https://formspree.io/f/YOUR_FORM_ID"
};
```

---

## 📬 Project Inquiry Form Handling

The inquiry form includes client-side validation, spam honeypot protection, and a two-tier delivery pipeline:
1. **Configured Endpoint**: If `formEndpoint` is provided in `config.js`, inquiries are posted via `fetch()` directly to your backend or form provider (e.g., Formspree, Web3Forms, Resend).
2. **Unconfigured Handover**: If no backend endpoint is configured yet, the form alerts the user and automatically prepares a prefilled `mailto:` email draft and WhatsApp message containing the exact form data so no inquiries are lost.

---

## 📱 WhatsApp Integration

- **Floating WhatsApp Button**: Positioned at the bottom-right corner with a hover tooltip.
- **Contextual WhatsApp Buttons**: Situated in the contact section and service cards.
- **Direct Link**: `https://wa.me/917794835164`
- **Prefilled Message**:
  > *"Hi WebCraft.dev, I visited your portfolio and would like to discuss a website development project. Could you share more details?"*

---

## 🚀 How to Run & Preview

### Option A: Open directly in your browser
Double-click `index.html` in your file explorer.

### Option B: Using Python local server
```bash
python -m http.server 3000
```
Open `http://localhost:3000` in your web browser.

---

## 🌐 Production Deployment

This project requires zero build steps and is ready for 1-click deployment:
- **Cloudflare Pages**: Connect your GitHub repository, leave build command empty, root `./`.
- **Vercel**: Run `npx vercel` or connect repository via the Vercel dashboard.
- **Netlify**: Drag and drop the workspace folder onto Netlify Drop or link via GitHub.
- **GitHub Pages**: Repository Settings > Pages > Select `main` branch `/ (root)`.
