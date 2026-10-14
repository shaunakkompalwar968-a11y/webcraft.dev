/**
 * WebCraft.dev (WebCrafted)
 * Full Stack Web Development Studio | Hyderabad, India
 * Client-Side Application Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  applyConfiguration();
  initNavbar();
  initHeroCodeSandbox();
  initFaqAccordion();
  initInquiryForm();
  initWhatsAppButtons();
  initLegalModals();
});

/* ==========================================================================
   1. Apply Centralized Configuration (from config.js)
   ========================================================================== */
function applyConfiguration() {
  const config = window.WEBCRAFT_CONFIG || {};

  // Update availability badges
  if (config.availabilityStatus) {
    document.querySelectorAll('.availability-text').forEach(el => {
      el.textContent = config.availabilityStatus;
    });
  }

  // Update email links
  const targetEmail = config.emailAddress || 'webbcraft.dev1@gmail.com';
  document.querySelectorAll('.config-email').forEach(el => {
    el.textContent = targetEmail;
    if (el.tagName === 'A') el.href = `mailto:${targetEmail}`;
  });

  // Update phone / WhatsApp links
  const targetPhone = config.phoneNumber || '+91 7794835164';
  document.querySelectorAll('.config-phone').forEach(el => {
    el.textContent = targetPhone;
    if (el.tagName === 'A') el.href = `tel:${targetPhone.replace(/\s+/g, '')}`;
  });

  // Update social profile links
  if (config.linkedinUrl) {
    document.querySelectorAll('.config-linkedin').forEach(el => {
      el.href = config.linkedinUrl;
    });
  }
  if (config.githubUrl) {
    document.querySelectorAll('.config-github').forEach(el => {
      el.href = config.githubUrl;
    });
  }
}

/* ==========================================================================
   2. Sticky Navigation & Mobile Menu
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggleBtn = document.querySelector('.nav-mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  // Scroll appearance
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.innerHTML = isOpen ? '✕' : '☰';
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.innerHTML = '☰';
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ==========================================================================
   3. Hero Visual Code Sandbox & Simulation
   ========================================================================== */
function initHeroCodeSandbox() {
  const tabs = document.querySelectorAll('.browser-tab-btn');
  const codeBox = document.getElementById('heroCodeContent');

  const snippets = {
    'page.tsx': `<span style="color:#64748b;">// Clean, Component-Based Architecture</span>
<span style="color:#38bdf8;">import</span> { TourPackageCard } <span style="color:#38bdf8;">from</span> <span style="color:#a7f3d0;">'@/components/tours'</span>;
<span style="color:#38bdf8;">import</span> { WhatsAppEnquiry } <span style="color:#38bdf8;">from</span> <span style="color:#a7f3d0;">'@/components/contact'</span>;

<span style="color:#818cf8;">export default function</span> <span style="color:#fcd34d;">AdventureWebsite</span>() {
  <span style="color:#818cf8;">return</span> (
    &lt;<span style="color:#38bdf8;">main</span> <span style="color:#94a3b8;">className</span>=<span style="color:#a7f3d0;">"min-h-screen bg-slate-950"</span>&gt;
      &lt;<span style="color:#fcd34d;">HeroBanner</span> headline=<span style="color:#a7f3d0;">"Explore Untamed Trails"</span> /&gt;
      &lt;<span style="color:#fcd34d;">TourPackageCard</span> location=<span style="color:#a7f3d0;">"Himalayas"</span> /&gt;
      &lt;<span style="color:#fcd34d;">WhatsAppEnquiry</span> instantReply={<span style="color:#34d399;">true</span>} /&gt;
    &lt;/<span style="color:#38bdf8;">main</span>&gt;
  );
}`,
    'api.ts': `<span style="color:#64748b;">// Robust Serverless Lead & Inquiry Route</span>
<span style="color:#38bdf8;">import</span> { NextRequest, NextResponse } <span style="color:#38bdf8;">from</span> <span style="color:#a7f3d0;">'next/server'</span>;
<span style="color:#38bdf8;">import</span> { sanitizeInput } <span style="color:#38bdf8;">from</span> <span style="color:#a7f3d0;">'@/lib/validation'</span>;

<span style="color:#818cf8;">export async function</span> <span style="color:#fcd34d;">POST</span>(req: <span style="color:#38bdf8;">NextRequest</span>) {
  <span style="color:#818cf8;">const</span> body = <span style="color:#818cf8;">await</span> req.json();
  <span style="color:#818cf8;">const</span> cleanData = <span style="color:#fcd34d;">sanitizeInput</span>(body);

  <span style="color:#64748b;">// Deliver instant email notification</span>
  <span style="color:#818cf8;">await</span> <span style="color:#fcd34d;">sendInquiryEmail</span>(cleanData);
  <span style="color:#818cf8;">return</span> NextResponse.<span style="color:#fcd34d;">json</span>({ success: <span style="color:#34d399;">true</span> });
}`,
    'config.json': `{
  <span style="color:#38bdf8;">"brand"</span>: <span style="color:#a7f3d0;">"WebCraft.dev"</span>,
  <span style="color:#38bdf8;">"location"</span>: <span style="color:#a7f3d0;">"Hyderabad, India"</span>,
  <span style="color:#38bdf8;">"contact"</span>: <span style="color:#a7f3d0;">"webbcraft.dev1@gmail.com"</span>,
  <span style="color:#38bdf8;">"phone"</span>: <span style="color:#a7f3d0;">"+91 7794835164"</span>,
  <span style="color:#38bdf8;">"status"</span>: <span style="color:#34d399;">"Available for new projects"</span>
}`
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.style.background = 'transparent';
        t.style.color = '#94a3b8';
      });
      tab.style.background = '#151d30';
      tab.style.color = '#e2e8f0';

      const file = tab.dataset.file;
      if (snippets[file] && codeBox) {
        codeBox.innerHTML = snippets[file];
      }
    });
  });
}

/* ==========================================================================
   4. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(other => other.classList.remove('active'));

        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================================
   5. WhatsApp URL Dispatcher
   ========================================================================== */
function getWhatsAppUrl(customMessage = null) {
  const config = window.WEBCRAFT_CONFIG || {};
  let phone = config.whatsappNumber || '';
  phone = phone.replace(/[^0-9]/g, '');

  const msg = customMessage || config.whatsappPrefillMessage || 
    'Hi WebCraft.dev, I visited your portfolio and would like to discuss a website development project. Could you share more details?';

  if (!phone || phone === 'YOUR_WHATSAPP_NUMBER' || phone.length < 8) {
    return null;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

function initWhatsAppButtons() {
  const whatsappTriggers = document.querySelectorAll('.whatsapp-trigger');

  whatsappTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const url = getWhatsAppUrl();

      if (!url) {
        e.preventDefault();
        showToast('ℹ️ Please configure your WhatsApp number in config.js (window.WEBCRAFT_CONFIG.whatsappNumber)', 'info');
      } else {
        btn.setAttribute('href', url);
      }
    });
  });
}

/* ==========================================================================
   6. Project Inquiry Form Validation & Submission
   ========================================================================== */
function initInquiryForm() {
  const form = document.getElementById('projectInquiryForm');
  const noticeBox = document.getElementById('formNotice');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Check honeypot spam protection
    const honeypot = form.querySelector('input[name="hp_field"]');
    if (honeypot && honeypot.value.trim() !== '') {
      // Bot detected, silently abort
      return;
    }

    // Retrieve fields
    const fullName = document.getElementById('formFullName').value.trim();
    const businessName = document.getElementById('formBusinessName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const whatsapp = document.getElementById('formWhatsApp').value.trim();
    const projectType = document.getElementById('formProjectType').value;
    const budget = document.getElementById('formBudget').value;
    const timeline = document.getElementById('formTimeline').value;
    const description = document.getElementById('formDescription').value.trim();

    // Strict validation
    if (!fullName || !email || !projectType || !budget || !timeline || !description) {
      showFormNotice('Please fill out all required fields marked with *.', 'error');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormNotice('Please provide a valid email address.', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending Inquiry...';
    submitBtn.disabled = true;

    const config = window.WEBCRAFT_CONFIG || {};
    const endpoint = config.formEndpoint ? config.formEndpoint.trim() : '';

    const payload = {
      fullName,
      businessName: businessName || 'Not specified',
      email,
      whatsapp: whatsapp || 'Not provided',
      projectType,
      budget,
      timeline,
      description,
      submittedAt: new Date().toISOString()
    };

    // If a valid server endpoint is provided
    if (endpoint && endpoint.startsWith('http')) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          form.reset();
          showFormNotice('Thank you! Your project inquiry has been delivered. We will review your requirements and reach out shortly.', 'success');
          showToast('✓ Inquiry submitted successfully!', 'success');
        } else {
          throw new Error('Server returned an error status.');
        }
      } catch (err) {
        showFormNotice('Submission encountered an issue. Initiating direct email fallback...', 'error');
        openMailtoFallback(payload);
      } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }
    } else {
      // Backend not yet configured: provide transparent and reliable email/WhatsApp draft
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;

      showFormNotice(
        'Backend endpoint not yet configured in config.js. Generating prefilled email and WhatsApp draft now...',
        'info'
      );

      openMailtoFallback(payload);
    }
  });

  function showFormNotice(msg, type) {
    if (!noticeBox) return;
    noticeBox.className = `form-feedback-notice ${type}`;
    noticeBox.textContent = msg;
    noticeBox.style.display = 'block';
  }

  function openMailtoFallback(data) {
    const config = window.WEBCRAFT_CONFIG || {};
    const targetEmail = config.emailAddress || 'webbcraft.dev1@gmail.com';

    const subject = encodeURIComponent(`Project Inquiry: ${data.projectType} - ${data.fullName}`);
    const body = encodeURIComponent(
`Hi WebCraft.dev,

Here are my website project details from WebCraft.dev:

• Full Name: ${data.fullName}
• Business Name: ${data.businessName}
• Email: ${data.email}
• WhatsApp / Phone: ${data.whatsapp}
• Project Type: ${data.projectType}
• Budget: ${data.budget}
• Target Timeline: ${data.timeline}

Project Description & Goals:
${data.description}

Looking forward to your response.`
    );

    const mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
}

/* ==========================================================================
   7. Legal Modals (Privacy Policy & Terms)
   ========================================================================== */
function initLegalModals() {
  const modal = document.getElementById('legalModal');
  const modalTitle = document.getElementById('legalModalTitle');
  const modalContent = document.getElementById('legalModalContent');
  const closeBtn = document.getElementById('closeLegalModalBtn');

  if (!modal) return;

  document.querySelectorAll('.open-legal-modal').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const type = link.dataset.legal;

      if (type === 'privacy') {
        modalTitle.textContent = 'Privacy Policy';
        modalContent.innerHTML = `
          <p style="margin-bottom:1rem;">Your privacy is respected at WebCraft.dev. Any information you submit through the project inquiry form (such as your name, email, or project description) is used solely for the purpose of communicating regarding your website project.</p>
          <p style="margin-bottom:1rem;">We do not sell, rent, or share your personal data with third-party advertising platforms.</p>
          <p>For questions or requests to delete your inquiry data, contact us directly at webbcraft.dev1@gmail.com.</p>
        `;
      } else {
        modalTitle.textContent = 'Terms & Conditions';
        modalContent.innerHTML = `
          <p style="margin-bottom:1rem;">All web development services provided by WebCraft.dev (WebCrafted) are governed by mutually agreed project proposals and milestone scopes.</p>
          <p style="margin-bottom:1rem;">1. <strong>Project Scope:</strong> Defined deliverables, features, and target timelines will be agreed upon in writing prior to commencing development.</p>
          <p style="margin-bottom:1rem;">2. <strong>Intellectual Property:</strong> Upon final milestone payment, full ownership of the website codebase and custom assets will be transferred to the client.</p>
          <p>3. <strong>Third-Party Services:</strong> Domain registration, cloud hosting, and third-party API service fees are paid directly to the respective providers by the client.</p>
        `;
      }

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   8. Toast Notification Utility
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.style.cssText = 'position:fixed; bottom:2rem; left:2rem; z-index:3000; display:flex; flex-direction:column; gap:0.5rem; pointer-events:none;';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: #0f172a;
    border: 1px solid ${type === 'success' ? '#10b981' : '#38bdf8'};
    color: #ffffff;
    padding: 0.85rem 1.4rem;
    border-radius: 8px;
    font-size: 0.88rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    pointer-events: auto;
    transition: all 0.3s ease;
    transform: translateY(20px);
    opacity: 0;
  `;
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
