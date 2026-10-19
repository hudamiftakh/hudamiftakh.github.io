// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('hamburger');
  var links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Active nav link on scroll
  var sections = document.querySelectorAll('main .section[id]');
  var navAs = document.querySelectorAll('.nav-links a');
  function onScroll() {
    var pos = window.scrollY + 140;
    var current = null;
    sections.forEach(function (s) {
      if (s.offsetTop <= pos) current = s.id;
    });
    navAs.forEach(function (a) {
      a.style.color = (a.getAttribute('href') === '#' + current) ? 'var(--accent)' : '';
      a.style.fontWeight = (a.getAttribute('href') === '#' + current) ? '700' : '';
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  initLang();
});
// ---------- Language (ID/EN) ----------
var I18N = {
  "en": {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.certifications": "Certifications",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "btn.print": "Print / PDF CV",
    "hero.kicker": "👋 Hello, I'm",
    "hero.role": "Senior Software Developer",
    "hero.desc": "Building reliable web applications, corporate dashboards, and government information systems since 2016. Based in Surabaya, Indonesia — open to remote work worldwide.",
    "hero.cta": "Get in Touch",
    "hero.meta.remote": "🌐 Remote-friendly (UTC+7)",
    "hero.meta.exp": "💼 10+ years experience",
    "about.title": "About",
    "about.lead": "Software developer with 10 years of experience (since 2016) — as a Senior Programmer at a Surabaya software house since 2021, a freelance developer for Indonesian clients, and a contract developer at Blue Bird Group. I build backend systems with PHP (Laravel, CodeIgniter), fullstack JavaScript, and Node.js — from database modeling and REST APIs to production deployment. My work spans government information systems, corporate dashboards, housing management, e-contract apps, and city websites, plus a SaaS WhatsApp bot platform integrated with the Meta WhatsApp Cloud API that I built and operate myself.",
    "about.stat.years": "Years experience",
    "about.stat.systems": "Production systems shipped",
    "about.stat.repos": "Repos on GitHub",
    "about.stat.saas": "SaaS product (ChatWaBot)",
    "exp.title": "Experience",
    "exp.job1": "Senior Programmer",
    "exp.b1": "Design, develop, and maintain web-based information systems for provincial and municipal government clients in East Java.",
    "exp.b2": "Build backend services with PHP (Laravel, CodeIgniter) and Node.js — REST APIs, database modeling (MySQL, PostgreSQL), and third-party integrations.",
    "exp.b3": "Develop WhatsApp gateway services and chatbot integrations, including Meta WhatsApp Cloud API (WABA) onboarding flows.",
    "exp.b4": "Handle full deployment cycle on VPS/cPanel hosting: server setup, SSL, backups, and performance tuning.",
    "exp.b5": "Collaborate directly with government stakeholders on requirements, UAT, and production support.",
    "exp.job2": "Software Developer (Contract)",
    "exp.b6": "Built the <strong>Blue Bird Performance Monitor</strong> dashboard application — fleet/operations monitoring with real-time data views and reporting.",
    "exp.b7": "Delivered a production-ready internal tool used for operational oversight across the group.",
    "exp.job3": "Freelance Developer",
    "exp.b8": "Design and deliver web applications for domestic clients across government and private sectors — from requirements and database design to deployment and maintenance.",
    "exp.b9": "Representative work: housing management system (Perum TSI, Sidoarjo), e-contract application (PT ITS Sains Tekno, Surabaya), official city website (Kota Tual).",
    "proj.title": "Selected Projects",
    "proj.badge": "Personal SaaS",
    "proj.d1": "SaaS WhatsApp bot platform with multi-session support and Meta WhatsApp Cloud API (WABA Official) integration — template messaging, webhook handling, and per-tenant configuration.",
    "proj.d2": "Information system for the East Java Forestry Agency (Dinas Kehutanan Jawa Timur), streamlining forestry data management and reporting.",
    "proj.d3": "Monitoring & evaluation system for Surabaya city government programs — tracking, reporting, and performance dashboards.",
    "proj.d4": "Digital attendance system for MIN 1 Jombang — QR-based check-in, recaps, and reporting for school administration.",
    "proj.d5": "WhatsApp gateway service for the East Java Public Order Agency (Satpol PP), enabling official broadcast and notification messaging.",
    "proj.d6": "Regional work-plan (RKPD) information system for Surabaya's Development Planning Agency — planning data entry, review, and reporting workflows.",
    "proj.d7": "Social assistance data management system for Surabaya (Dinas Sosial) — beneficiary data processing and reporting.",
    "proj.d8": "Operations monitoring dashboard for Blue Bird Group — real-time performance views and reporting for fleet operations.",
    "proj.d9": "Housing estate management system for Perum TSI, Sidoarjo — resident data, billing, and operational reporting.",
    "proj.d10": "Electronic contract management application for PT ITS Sains Tekno, Surabaya — contract drafting, approval workflows, and document tracking.",
    "proj.d11": "Official city website for Kota Tual — public information portal and government profile.",
    "proj.d12": "Online booking application for a photo studio — session scheduling, package selection, and customer management.",
    "proj.d13": "School profile website for EduPrime — school profile, PPDB (new student admission) info, facilities, achievements, and news.",
    "proj.d14": "Digital ecosystem portal (ALMAS) for MIN 1 Jombang — 16+ integrated services including E-PPDB, E-Arsip, E-Ranking, E-Alumni, E-Tabungan, and school information services.",
    "skills.title": "Skills",
    "skills.db": "Database",
    "skills.integ": "Integrations",
    "skills.devops": "DevOps & Tools",
    "skills.lang": "Languages",
    "skills.lang.id": "Indonesian (Native)",
    "skills.lang.en": "English (Working)",
    "cert.title": "Certifications",
    "cert.alibaba": "Alibaba Cloud Training & Certification · Valid until Jan 2027",
    "edu.title": "Education",
    "edu.degree1": "Bachelor's Degree — Information Systems (S1 Sistem Informasi)",
    "contact.title": "Let's Work Together",
    "contact.lead": "I'm currently looking for remote software developer roles — backend PHP/Laravel, fullstack, or Node.js. My inbox is always open.",
    "contact.phone": "Phone / WhatsApp",
    "contact.location": "Location",
    "btn.download": "Download CV as PDF",
    "cert.gallery": "Certificate Gallery",
    "cert.hint": "(click to enlarge)",
    "footer.built": "Built with plain HTML/CSS",
    "footer.source": "Source"
  },
  "id": {
    "nav.about": "Tentang",
    "nav.experience": "Pengalaman",
    "nav.projects": "Proyek",
    "nav.skills": "Keahlian",
    "nav.certifications": "Sertifikasi",
    "nav.education": "Pendidikan",
    "nav.contact": "Kontak",
    "btn.print": "Cetak / PDF CV",
    "hero.kicker": "👋 Halo, saya",
    "hero.role": "Pengembang Perangkat Lunak Senior",
    "hero.desc": "Membangun aplikasi web yang andal, dasbor korporat, dan sistem informasi pemerintahan sejak 2016. Berbasis di Surabaya, Indonesia — terbuka untuk kerja remote di seluruh dunia.",
    "hero.cta": "Hubungi Saya",
    "hero.meta.remote": "🌐 Siap kerja remote (UTC+7)",
    "hero.meta.exp": "💼 Pengalaman 10+ tahun",
    "about.title": "Tentang Saya",
    "about.lead": "Pengembang perangkat lunak dengan 10 tahun pengalaman (sejak 2016) — sebagai Senior Programmer di software house Surabaya sejak 2021, pengembang lepas untuk klien Indonesia, dan pengembang kontrak di Blue Bird Group. Saya membangun sistem backend dengan PHP (Laravel, CodeIgniter), fullstack JavaScript, dan Node.js — dari perancangan basis data dan REST API hingga deployment produksi. Pekerjaan saya mencakup sistem informasi pemerintahan, dasbor korporat, manajemen perumahan, aplikasi e-kontrak, dan website kota, plus platform SaaS bot WhatsApp yang terintegrasi dengan Meta WhatsApp Cloud API yang saya bangun dan operasikan sendiri.",
    "about.stat.years": "Tahun pengalaman",
    "about.stat.systems": "Sistem produksi diluncurkan",
    "about.stat.repos": "Repositori di GitHub",
    "about.stat.saas": "Produk SaaS (ChatWaBot)",
    "exp.title": "Pengalaman",
    "exp.job1": "Programmer Senior",
    "exp.b1": "Merancang, mengembangkan, dan memelihara sistem informasi berbasis web untuk klien pemerintah provinsi dan kota/kabupaten di Jawa Timur.",
    "exp.b2": "Membangun layanan backend dengan PHP (Laravel, CodeIgniter) dan Node.js — REST API, perancangan basis data (MySQL, PostgreSQL), dan integrasi pihak ketiga.",
    "exp.b3": "Mengembangkan layanan gateway WhatsApp dan integrasi chatbot, termasuk alur onboarding Meta WhatsApp Cloud API (WABA).",
    "exp.b4": "Menangani siklus deployment penuh di hosting VPS/cPanel: penyiapan server, SSL, backup, dan tuning performa.",
    "exp.b5": "Berkolaborasi langsung dengan pemangku kepentingan pemerintahan terkait kebutuhan, UAT, dan dukungan produksi.",
    "exp.job2": "Pengembang Perangkat Lunak (Kontrak)",
    "exp.b6": "Membangun aplikasi dasbor <strong>Blue Bird Performance Monitor</strong> — pemantauan armada/operasional dengan tampilan data real-time dan pelaporan.",
    "exp.b7": "Menghadirkan perangkat internal siap produksi yang digunakan untuk pengawasan operasional di seluruh grup.",
    "exp.job3": "Pengembang Lepas",
    "exp.b8": "Merancang dan menghadirkan aplikasi web untuk klien domestik di sektor pemerintahan dan swasta — dari analisis kebutuhan dan desain basis data hingga deployment dan pemeliharaan.",
    "exp.b9": "Karya representatif: sistem manajemen perumahan (Perum TSI, Sidoarjo), aplikasi e-kontrak (PT ITS Sains Tekno, Surabaya), website resmi kota (Kota Tual).",
    "proj.title": "Proyek Pilihan",
    "proj.badge": "SaaS Pribadi",
    "proj.d1": "Platform SaaS bot WhatsApp dengan dukungan multi-sesi dan integrasi Meta WhatsApp Cloud API (WABA Official) — template messaging, penanganan webhook, dan konfigurasi per-tenant.",
    "proj.d2": "Sistem informasi untuk Dinas Kehutanan Jawa Timur — mengefisienkan pengelolaan data dan pelaporan kehutanan.",
    "proj.d3": "Sistem monitoring & evaluasi program pemerintah Kota Surabaya — pelacakan, pelaporan, dan dasbor kinerja.",
    "proj.d4": "Sistem absensi digital untuk MIN 1 Jombang — check-in berbasis QR, rekap, dan pelaporan untuk administrasi sekolah.",
    "proj.d5": "Layanan gateway WhatsApp untuk Satpol PP Jawa Timur — mendukung broadcast dan pesan notifikasi resmi.",
    "proj.d6": "Sistem informasi rencana kerja daerah (RKPD) untuk Bappdalitbang Surabaya — alur entri data perencanaan, reviu, dan pelaporan.",
    "proj.d7": "Sistem pengelolaan data bantuan sosial untuk Dinas Sosial Surabaya — pengolahan data penerima dan pelaporan.",
    "proj.d8": "Dasbor pemantauan operasional untuk Blue Bird Group — tampilan kinerja real-time dan pelaporan operasional armada.",
    "proj.d9": "Sistem manajemen perumahan untuk Perum TSI, Sidoarjo — data penghuni, penagihan, dan pelaporan operasional.",
    "proj.d10": "Aplikasi pengelolaan kontrak elektronik untuk PT ITS Sains Tekno, Surabaya — penyusunan kontrak, alur persetujuan, dan pelacakan dokumen.",
    "proj.d11": "Website resmi Kota Tual — portal informasi publik dan profil pemerintahan.",
    "proj.d12": "Aplikasi booking online untuk studio foto — penjadwalan sesi, pemilihan paket, dan pengelolaan pelanggan.",
    "proj.d13": "Website profil sekolah untuk EduPrime — profil sekolah, info PPDB (penerimaan siswa baru), fasilitas, prestasi, dan berita.",
    "proj.d14": "Portal ekosistem digital (ALMAS) untuk MIN 1 Jombang — 16+ layanan terpadu termasuk E-PPDB, E-Arsip, E-Ranking, E-Alumni, E-Tabungan, dan layanan informasi sekolah.",
    "skills.title": "Keahlian",
    "skills.db": "Basis Data",
    "skills.integ": "Integrasi",
    "skills.devops": "DevOps & Utilitas",
    "skills.lang": "Bahasa",
    "skills.lang.id": "Indonesia (Bahasa ibu)",
    "skills.lang.en": "Inggris (Aktif)",
    "cert.title": "Sertifikasi",
    "cert.alibaba": "Alibaba Cloud Training & Certification · Berlaku hingga Jan 2027",
    "edu.title": "Pendidikan",
    "edu.degree1": "Sarjana — Sistem Informasi (S1)",
    "contact.title": "Mari Bekerja Sama",
    "contact.lead": "Saya sedang mencari peran pengembang perangkat lunak remote — backend PHP/Laravel, fullstack, atau Node.js. Kotak masuk saya selalu terbuka.",
    "contact.phone": "Telepon / WhatsApp",
    "contact.location": "Lokasi",
    "btn.download": "Unduh CV sebagai PDF",
    "cert.gallery": "Galeri Sertifikat",
    "cert.hint": "(klik untuk memperbesar)",
    "footer.built": "Dibuat dengan HTML/CSS murni",
    "footer.source": "Kode sumber"
  }
};
var I18N_META = {
  "en": {
    "title": "Miftahul Huda — Senior Software Developer",
    "desc": "Miftahul Huda, Senior Software Developer (Backend PHP/Laravel, Fullstack, Node.js) based in Surabaya, Indonesia. Open to remote work worldwide."
  },
  "id": {
    "title": "Miftahul Huda — Pengembang Perangkat Lunak Senior",
    "desc": "Miftahul Huda, Pengembang Perangkat Lunak Senior (Backend PHP/Laravel, Fullstack, Node.js) di Surabaya, Indonesia. Terbuka untuk kerja remote di seluruh dunia."
  }
};

function setLang(lang) {
  if (lang !== "id" && lang !== "en") lang = "en";
  document.documentElement.lang = lang === "id" ? "id" : "en";
  var dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.innerHTML = v;
  });
  document.title = I18N_META[lang].title;
  var md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", I18N_META[lang].desc);
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });
  try { localStorage.setItem("mh-lang", lang); } catch (e) {}
}

function initLang() {
  var lang = "en";
  var saved = null;
  try { saved = localStorage.getItem("mh-lang"); } catch (e) {}
  if (saved === "id" || saved === "en") {
    lang = saved;
  } else if (navigator.language && navigator.language.toLowerCase().indexOf("id") === 0) {
    lang = "id";
  }
  setLang(lang);
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
}
