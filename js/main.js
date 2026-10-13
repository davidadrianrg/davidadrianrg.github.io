/* davidadrianrg.github.io — interacciones + bilingüe ES (por defecto) / EN.
   El texto ES vive en el HTML; aquí solo las traducciones EN (los elementos
   sin traducción conservan su texto original). */
(function () {
  "use strict";

  var I18N_EN = {
    "skip": "Skip to content",

    "nav.perfil": "Profile",
    "nav.capacidades": "Skills",
    "nav.experiencia": "Experience",
    "nav.formacion": "Education",
    "nav.proyectos": "Projects",
    "nav.contacto": "Contact",

    "hero.lead1": "I design cloud data architectures for industrial environments:",
    "hero.lead2": "from the plant floor to the dashboard, in real time.",
    "hero.f1.label": "Location",
    "hero.f1.val": "Coirós, Galicia — Spain",
    "hero.f2.label": "Languages",
    "hero.f2.val": "Spanish & Galician (native) · English (full professional) · German (elementary)",
    "hero.f3.label": "Certification",
    "hero.cta1": "Get in touch",
    "hero.photoAlt": "Portrait of David Adrián Rodríguez García",

    "cap.eyebrow": "Capabilities",
    "cap.h2": "What I do",
    "cap1.t": "Data & IoT architecture",
    "cap1.d": "Data lakes, streaming and MLOps on AWS and GCP.",
    "cap2.t": "Infrastructure as code",
    "cap2.d": "Code-defined deployments: containers and serverless.",
    "cap3.t": "Batch & streaming pipelines",
    "cap3.d": "Real-time and batch processing with reliable orchestration.",
    "cap4.t": "Industrial data",
    "cap4.d": "Captured from the plant: sensors, PLCs and historians; edge-cloud systems.",
    "cap5.t": "Applied agentic AI",
    "cap5.d": "Team productivity boosted by deploying AI in day-to-day work.",
    "cap5.tag": "Agents",

    "exp.eyebrow": "Experience",
    "exp.h2": "Where I've applied it",

    "job1.period": "Mar 2024 — present",
    "job1.loc": "Madrid, Spain",
    "job1.b1": "Ingestion architectures from IoT devices and plant systems (sensors, PLCs, historians) to the cloud, with streaming processing.",
    "job1.b2": "Data preparation and transformation for prescriptive maintenance: cleansing, normalisation, time series and model-ready features.",
    "job1.b3": "Design of a new data platform for centralised handling of all streaming data — real-time, scalable processing.",
    "job2.period": "Nov 2023 — Feb 2024",
    "job2.loc": "Madrid, Spain",
    "job2.b1": "Technical leadership of the company's Data department: team leadership plus batch and streaming architecture design.",
    "job2.b2": "Architectures with Apache Kafka and Apache Flink to transform the company's data model.",
    "job3.period": "Feb 2023 — Nov 2023",
    "job3.b1": "Company technology strategy and data architectures for analytics & AI products, focused on the steel industry (global partner: Russula).",
    "job3.b2": "Real-time production data with streaming and machine learning: predictive maintenance, failure prescription and industrial control optimisation.",
    "job3.b3": "Hybrid on-premise–cloud architectures ensuring availability and scalability.",
    "job4.period": "Oct 2021 — Feb 2023",
    "job4.b1": "Data engineering for a major food-retail client, working with GCP and AWS.",
    "job4.b2": "ETL ingestion models with Talend and Airflow; task automation, data capture and validation.",
    "job4.b3": "Dashboards for data traceability and exploitation (Google Data Studio).",
    "job5.co": "Freelance",
    "job5.period": "Oct 2019 — Nov 2021",
    "job5.loc": "A Coruña area",
    "job5.b1": "Design and installation of IoT systems for residential and retail sectors.",
    "job5.b2": "Microcontroller programming; backends with Node-RED; AWS and Raspberry Pi as edge devices.",
    "job6.role": "Facilities Design Engineer",
    "job6.period": "May 2018 — Feb 2020",
    "job6.loc": "A Coruña area",
    "job6.b1": "Led the electrical facilities team for retail stores across Asia.",
    "job6.b2": "Low-voltage electrical design, lighting, HVAC and sanitation projects.",
    "job6.b3": "Special systems: PA, data network and CCTV.",

    "edu.eyebrow": "Education",
    "edu.h2": "Engineering, computing & business",
    "edu1.t": "Master's Degree in Industrial Computing and Robotics",
    "edu.udc": "University of A Coruña (UDC)",
    "edu2.t": "Master in Business Management — Future Leaders",
    "edu3.t": "MSc in Industrial Engineering",
    "edu4.t": "MSc in Industrial Engineering",
    "edu5.t": "BSc in Industrial Technology Engineering",

    "rec.eyebrow": "Recognition",
    "rec.h2": "Certifications & awards",
    "rec.l1": "Certification",
    "rec.l2": "Award",
    "rec.l3": "Additional training",
    "rec.award": "Best Entrepreneurial Project — VII Galicia Energy Awards",
    "rec.courses": "Professional JavaScript · NodeJS applied to home automation (Google Home & Google Assistant) · Getting Started with AWS · SSH: essential in modern times",

    "prj.eyebrow": "Projects",
    "prj.h2": "Open source",
    "prj1.d": "Cross-platform client for RomM servers: Android and Linux. Downloads ROMs and syncs saves across devices.",
    "prj2.d": "CO₂ monitoring with ESP8266 and an MH-Z19C sensor: data travels over MQTT into Node-RED, InfluxDB and Grafana.",
    "prj3.d": "Level control for 6 tanks with embedded systems (BeagleBone, Raspberry Pi, Arduino, Wemos D1), MQTT data into a Python GUI.",
    "prj4.d": "Your Android phone as a wireless mic and local-Whisper dictation for Linux and SteamOS. 100% offline.",
    "prj.link": "View on GitHub",
    "prj.more": "More projects at github.com/davidadrianrg →",

    "con.eyebrow": "Contact",
    "con.h2": "Got a data or IoT project?",
    "con.para": "Let's talk architecture, ingestion, streaming or applied AI.",

    "footer.tagline": "From the Tower of Hercules to the world"
  };

  var EN_DESC = "Data & IoT engineer based in Galicia, Spain — I design cloud data architectures for industrial environments: from the plant floor to the dashboard, in real time.";

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var snapshot = new Map();
  nodes.forEach(function (el) {
    var attr = el.getAttribute("data-i18n-attr");
    snapshot.set(el, attr ? { attr: attr, value: el.getAttribute(attr) || "" } : { value: el.textContent });
  });

  var esTitle = document.title;
  var descEl = document.querySelector('meta[name="description"]');
  var esDesc = descEl ? descEl.getAttribute("content") : "";

  function applyLang(lang) {
    document.documentElement.lang = lang;
    nodes.forEach(function (el) {
      var snap = snapshot.get(el);
      if (!snap) return;
      var key = el.getAttribute("data-i18n");
      var val = (lang === "en" && Object.prototype.hasOwnProperty.call(I18N_EN, key)) ? I18N_EN[key] : snap.value;
      if (snap.attr) el.setAttribute(snap.attr, val);
      else el.textContent = val;
    });
    if (descEl) descEl.setAttribute("content", lang === "en" ? EN_DESC : esDesc);
    document.title = esTitle;
    Array.prototype.slice.call(document.querySelectorAll("[data-lang-btn]")).forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang-btn") === lang));
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var initial = (saved === "es" || saved === "en")
    ? saved
    : ((navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en");
  applyLang(initial);

  Array.prototype.slice.call(document.querySelectorAll("[data-lang-btn]")).forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang-btn")); });
  });

  /* cabecera: línea al hacer scroll */
  var head = document.querySelector(".site-head");
  function onScroll() { if (head) head.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* scrollspy del menú */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a[href^='#']"));
  var byId = {};
  navLinks.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window && navLinks.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.remove("active"); });
        var link = byId[entry.target.id];
        if (link) link.classList.add("active");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Array.prototype.slice.call(document.querySelectorAll("main section[id]")).forEach(function (s) { spy.observe(s); });
  }

  /* aparición al hacer scroll */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduced) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); ro.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* año del pie */
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
