/* ===================================================================
   Portfolio — main.js
   Expects SITE_LANG, SOCIAL_LINKS, CONTACT_EMAIL, PROFILE, WORKS,
   UI_TEXT to already be defined on the page (see data.en.js / data.ja.js).
=================================================================== */
(function(){
  "use strict";

  const SOCIAL_ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.5c0-1.3-.02-3-1.9-3-1.9 0-2.2 1.4-2.2 2.9V21h-4V9Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',
    note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    pinterest: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.05-.8-.1-2 .02-2.9.12-.8.8-5.1.8-5.1s-.2-.4-.2-1.1c0-1 .6-1.8 1.3-1.8.6 0 .9.5.9 1.1 0 .6-.4 1.6-.6 2.5-.2.7.4 1.3 1.1 1.3 1.3 0 2.2-1.7 2.2-3.6 0-1.5-1-2.6-2.9-2.6-2.1 0-3.4 1.6-3.4 3.3 0 .6.2 1 .5 1.4.05.06.06.1.04.2l-.16.6c-.05.2-.17.25-.4.15-1.1-.45-1.6-1.66-1.6-3 0-2.24 1.9-4.93 5.6-4.93 3 0 5 2.16 5 4.5 0 3.07-1.7 5.37-4.2 5.37-.84 0-1.63-.46-1.9-.98l-.53 2.06c-.19.7-.56 1.4-.9 1.95A10 10 0 1 0 12 2Z"/></svg>'
  };

  const ENVELOPE_SVG = '<svg class="fallback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg>';

  document.addEventListener("DOMContentLoaded", init);

  function init(){
    renderHeader();
    renderMv();
    renderWorksGrid();
    renderProfile();
    renderFooter();
    buildWorkModal();
    buildContactModal();
    wireGlobalModalBehaviour();
  }

  /* ---------------- header / mv / profile / footer ---------------- */

  function renderHeader(){
    const langLink = document.getElementById("lang-switch");
    if (langLink){
      langLink.href = UI_TEXT.langSwitchHref;
      langLink.textContent = UI_TEXT.langSwitchLabel;
    }
    const contactBtn = document.getElementById("contact-trigger");
    if (contactBtn){
      const img = contactBtn.querySelector("img");
      if (img){
        img.addEventListener("error", () => {
          img.remove();
          contactBtn.insertAdjacentHTML("beforeend", ENVELOPE_SVG);
        });
      }
      contactBtn.addEventListener("click", () => openModal(document.getElementById("contact-modal")));
    }
  }

  function renderMv(){
    document.getElementById("mv-title").textContent = UI_TEXT.mvTitle;
    document.getElementById("mv-role").textContent = UI_TEXT.mvRole;
    document.getElementById("mv-name").textContent = UI_TEXT.mvName;
  }

  function renderWorksGrid(){
    document.getElementById("works-title").textContent = UI_TEXT.worksTitle;
    const grid = document.getElementById("works-grid");
    grid.innerHTML = "";
    Object.keys(WORKS).forEach(key => {
      const work = WORKS[key];
      const btn = document.createElement("button");
      btn.className = "work-tile";
      btn.type = "button";
      btn.dataset.work = key;
      btn.style.backgroundImage = `url('${work.tileImage}')`;
      btn.innerHTML = `<span class="tile-label">${work.label}</span>`;
      btn.addEventListener("click", () => openWorkModal(key));
      grid.appendChild(btn);
    });
  }

  function renderProfile(){
    document.getElementById("profile-title").textContent = UI_TEXT.profileTitle;
    const photo = document.getElementById("profile-photo");
    photo.src = PROFILE.photo;
    photo.alt = PROFILE.name;
    document.getElementById("profile-name").textContent = PROFILE.name;

    const bioWrap = document.getElementById("profile-bio-text");
    bioWrap.innerHTML = "";
    PROFILE.bio.forEach(paragraph => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      bioWrap.appendChild(p);
    });

    const socialWrap = document.getElementById("social-icons");
    socialWrap.innerHTML = "";
    Object.keys(SOCIAL_LINKS).forEach(key => {
      const a = document.createElement("a");
      a.href = SOCIAL_LINKS[key];
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", key.charAt(0).toUpperCase() + key.slice(1));
      a.innerHTML = SOCIAL_ICONS[key] || "";
      socialWrap.appendChild(a);
    });
  }

  function renderFooter(){
    document.getElementById("footer-text").textContent = UI_TEXT.footer;
  }

  /* ---------------- work modal (shared shell, repopulated per work) ---------------- */

  let carouselTimer = null;

  function buildWorkModal(){
    const modal = document.getElementById("work-modal");
    modal.innerHTML = `
      <button class="modal-close" type="button" aria-label="Close">&times;</button>
      <div class="modal-scroll">
        <h2 class="modal-title" id="work-modal-title"></h2>
        <div class="work-thumbs" id="work-thumbs"></div>
        <div id="work-details"></div>
      </div>`;
    modal.querySelector(".modal-close").addEventListener("click", () => closeModal(modal));
  }

  function openWorkModal(key){
    const work = WORKS[key];
    const modal = document.getElementById("work-modal");
    modal.querySelector("#work-modal-title").textContent = work.label;

    const detailsWrap = modal.querySelector("#work-details");
    detailsWrap.innerHTML = "";
    work.items.forEach((item, i) => {
      const row = document.createElement("div");
      row.className = "work-detail";
      row.id = `${key}-detail-${i}`;
      row.innerHTML = `
        <img src="${item.image}" alt="${escapeHtml(item.title)}">
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </div>`;
      detailsWrap.appendChild(row);
    });

    renderThumbs(key, work);
    openModal(modal);
  }

  function renderThumbs(key, work){
    const thumbsWrap = document.getElementById("work-thumbs");
    thumbsWrap.innerHTML = "";
    if (carouselTimer){ clearInterval(carouselTimer); carouselTimer = null; }

    const items = work.items;
    const drawSlots = (list) => {
      thumbsWrap.innerHTML = "";
      list.forEach(({ item, index }) => {
        const t = document.createElement("button");
        t.type = "button";
        t.className = "work-thumb";
        t.style.backgroundImage = `url('${item.image}')`;
        t.setAttribute("aria-label", item.title);
        t.addEventListener("click", () => {
          document.getElementById(`${key}-detail-${index}`)
            .scrollIntoView({ behavior: "smooth", block: "start" });
        });
        thumbsWrap.appendChild(t);
      });
    };

    if (items.length <= 5){
      drawSlots(items.map((item, index) => ({ item, index })));
      return;
    }

    // more than 5: cycle a 5-item window every 3s
    let start = 0;
    const windowOf = (s) => {
      const out = [];
      for (let n = 0; n < 5; n++){
        const idx = (s + n) % items.length;
        out.push({ item: items[idx], index: idx });
      }
      return out;
    };
    drawSlots(windowOf(start));
    carouselTimer = setInterval(() => {
      start = (start + 1) % items.length;
      thumbsWrap.style.opacity = 0;
      setTimeout(() => {
        drawSlots(windowOf(start));
        thumbsWrap.style.opacity = 1;
      }, 200);
    }, 3000);
  }

  /* ---------------- contact modal ---------------- */

  function buildContactModal(){
    const modal = document.getElementById("contact-modal");
    modal.innerHTML = `
      <button class="modal-close" type="button" aria-label="Close">&times;</button>
      <div class="modal-scroll">
        <h2 class="modal-title">${UI_TEXT.contactTitle}</h2>
        <form class="contact-form" id="contact-form">
          <div>
            <label for="cf-name">${UI_TEXT.formName}</label>
            <input type="text" id="cf-name" name="name" required>
          </div>
          <div>
            <label for="cf-email">${UI_TEXT.formEmail}</label>
            <input type="email" id="cf-email" name="email" required>
          </div>
          <div>
            <label for="cf-message">${UI_TEXT.formMessage}</label>
            <textarea id="cf-message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="send-btn" aria-label="Send">
            <img src="${SITE_LANG === 'ja' ? '../' : ''}assets/images/send_img.png" alt="Send">
          </button>
          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>`;

    const img = modal.querySelector(".send-btn img");
    img.addEventListener("error", () => {
      img.remove();
      modal.querySelector(".send-btn").insertAdjacentHTML(
        "beforeend",
        `<span class="fallback-btn">${SITE_LANG === "ja" ? "送信" : "Send"}</span>`
      );
    });

    modal.querySelector(".modal-close").addEventListener("click", () => closeModal(modal));
    modal.querySelector("#contact-form").addEventListener("submit", handleContactSubmit);
  }

  function handleContactSubmit(e){
    e.preventDefault();
    const form = e.target;
    const status = document.getElementById("form-status");
    const submitBtn = form.querySelector(".send-btn");
    status.className = "form-status";
    status.textContent = UI_TEXT.formSending;
    submitBtn.style.pointerEvents = "none";

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      _subject: `Portfolio contact from ${form.name.value}`
    };

    // Static-site email delivery via FormSubmit (https://formsubmit.co).
    // Replace CONTACT_EMAIL in data.en.js / data.ja.js with your real address.
    fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => { if (!res.ok) throw new Error("send-failed"); })
      .then(() => {
        status.textContent = UI_TEXT.formSuccess;
        status.className = "form-status success";
        form.reset();
      })
      .catch(() => {
        status.textContent = UI_TEXT.formError;
        status.className = "form-status error";
      })
      .finally(() => { submitBtn.style.pointerEvents = "auto"; });
  }

  /* ---------------- modal plumbing ---------------- */

  function wireGlobalModalBehaviour(){
    const overlay = document.getElementById("modal-overlay");
    overlay.addEventListener("click", closeOpenModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeOpenModal();
    });
  }

  function openModal(modal){
    document.getElementById("modal-overlay").classList.add("is-open");
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal){
    modal.classList.remove("is-open");
    document.getElementById("modal-overlay").classList.remove("is-open");
    document.body.style.overflow = "";
    if (carouselTimer){ clearInterval(carouselTimer); carouselTimer = null; }
  }

  function closeOpenModal(){
    document.querySelectorAll(".modal.is-open").forEach(closeModal);
  }

  function escapeHtml(str){
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
})();
