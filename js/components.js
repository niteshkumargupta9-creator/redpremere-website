/* ═══════════════════════════════════════
   RED PREMERE ENTERPRISES — components.js
   Injects shared nav, footer, and dialog
═══════════════════════════════════════ */

(function () {

  // ─── NAV ───
  const navHTML = `
<nav class="nav" id="main-nav">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-mark">RP</div>
      <div class="nav-logo-text">
        <span class="nav-logo-main">Red Premere</span>
        <span class="nav-logo-sub">Enterprises</span>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html"     class="nav-link">Home</a></li>
      <li><a href="services.html"  class="nav-link">Services</a></li>
      <li><a href="about.html"     class="nav-link">About</a></li>
      <li><a href="portfolio.html" class="nav-link">Portfolio</a></li>
      <li><a href="contact.html"   class="nav-link">Contact</a></li>
    </ul>
    <a href="contact.html" class="nav-cta">Get a Quote</a>
    <button class="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile Menu -->
<div class="nav-mobile" id="nav-mobile">
  <a href="index.html"     class="nav-link">Home</a>
  <a href="services.html"  class="nav-link">Services</a>
  <a href="about.html"     class="nav-link">About</a>
  <a href="portfolio.html" class="nav-link">Portfolio</a>
  <a href="contact.html"   class="nav-link">Contact</a>
  <a href="contact.html"   class="nav-cta btn btn-red">Get a Quote</a>
</div>`;

  // ─── FOOTER ───
  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">

      <!-- Brand -->
      <div>
        <a href="index.html" class="nav-logo" style="margin-bottom:0">
          <div class="nav-logo-mark">RP</div>
          <div class="nav-logo-text">
            <span class="nav-logo-main">Red Premere</span>
            <span class="nav-logo-sub">Enterprises</span>
          </div>
        </a>
        <p class="footer-brand-desc">Varanasi's complete brand partner — merchandise, custom bottles, digital identity, and business websites. All connected.</p>
        <div class="footer-badges">
          <span class="footer-badge">GST Registered</span>
          <span class="footer-badge">MSME Certified</span>
        </div>
      </div>

      <!-- Pages -->
      <div>
        <p class="footer-heading">Pages</p>
        <ul class="footer-links">
          <li><a href="index.html"     class="footer-link">Home</a></li>
          <li><a href="services.html"  class="footer-link">Services &amp; Pricing</a></li>
          <li><a href="about.html"     class="footer-link">About Us</a></li>
          <li><a href="portfolio.html" class="footer-link">Portfolio</a></li>
          <li><a href="contact.html"   class="footer-link">Contact</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <p class="footer-heading">Services</p>
        <ul class="footer-links">
          <li><a href="services.html" class="footer-link">Custom Merchandise</a></li>
          <li><a href="services.html" class="footer-link">Branded Water Bottles</a></li>
          <li><a href="services.html" class="footer-link">Digital Business Cards</a></li>
          <li><a href="services.html" class="footer-link">Website Development</a></li>
          <li><a href="services.html" class="footer-link">Pro Labeling</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <p class="footer-heading">Contact</p>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">👤</span>
          <div class="footer-contact-text"><strong>Nitesh Kumar Gupta</strong>Founder</div>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📞</span>
          <div class="footer-contact-text"><strong>+91-7007861268</strong>Call or WhatsApp</div>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">✉</span>
          <div class="footer-contact-text"><strong>info@redpremere.com</strong>Email us</div>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📍</span>
          <div class="footer-contact-text"><strong>Varanasi, Uttar Pradesh</strong>Local delivery available</div>
        </div>
      </div>

    </div>
  </div>

  <div class="marquee-outer">
    <div class="marquee-track">
      ${Array(2).fill(['RED PREMERE ENTERPRISES','CUSTOM MERCHANDISE','BRANDED BOTTLES','DIGITAL IDENTITY','BUSINESS WEBSITES','VARANASI','GST REGISTERED','MSME CERTIFIED'].map(t=>`<span class="marquee-item"><span class="marquee-dot"></span>${t}</span>`).join('')).join('')}
    </div>
  </div>

  <div class="container">
    <div class="footer-bottom">
      <span class="footer-bottom-text">© ${new Date().getFullYear()} Red Premere Enterprises. All rights reserved. All prices excl. GST.</span>
      <span class="footer-bottom-brand"><span>Red</span> Premere Enterprises</span>
    </div>
  </div>
</footer>`;

  // ─── DIALOG ───
  const dialogHTML = `
<div class="dialog-overlay" id="dialog">
  <div class="dialog-box">
    <span class="dialog-icon">✅</span>
    <h3 class="dialog-title" id="dialog-title">Thank You!</h3>
    <p class="dialog-message" id="dialog-message">Your inquiry has been received. You will be contacted shortly.</p>
    <p class="dialog-wa-note">
      <strong style="color:#25D366">💬 Also notify us on WhatsApp</strong><br>
      Tap below to send your inquiry details directly — so we can respond faster.
    </p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <a id="dialog-wa-btn" href="#" target="_blank" rel="noopener"
         style="display:inline-block;padding:12px 24px;background:#25D366;color:white;font-family:'Space Grotesk',sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;">
        Open WhatsApp
      </a>
      <button class="dialog-close" onclick="closeDialog()">Done</button>
    </div>
  </div>
</div>`;

  // ─── INJECT ───
  const navTarget = document.getElementById('nav-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  const dialogTarget = document.getElementById('dialog-placeholder');

  if (navTarget)    navTarget.outerHTML = navHTML;
  if (footerTarget) footerTarget.outerHTML = footerHTML;
  if (dialogTarget) dialogTarget.outerHTML = dialogHTML;

})();
