/* ChaseHorse Logiworkx — shared behaviour: layout, icons, scenes, animation, forms */
(function () {
  'use strict';

  /* ---------- config ---------- */
  var EMAIL = 'letsconnect@chasehorse.com';
  var PHONE = '+91 7337369111';
  var PHONE_RAW = '917337369111';
  var LOGIN_URL = '#'; // TODO: set to the live customer-portal login URL
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- icons (lucide-style, stroke) ---------- */
  var P = {
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    ship: '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/>',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    package: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    warehouse: '<path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="12" height="12" x="6" y="10"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    clip: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    shirt: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
    grad: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    brief: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    cal: '<path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    rupee: '<path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/>',
    chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    hat: '<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 6 6v3"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><rect x="2" y="15" width="20" height="4" rx="1"/>',
    undo: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    headset: '<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    insta: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
    yt: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
    up: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    warn: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    store: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 13h4M10 17h4"/>',
    eye: '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    chev: '<path d="m6 9 6 6 6-6"/>'
  };
  function icon(n, cls) {
    return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || P.package) + '</svg>';
  }
  function paintIcons(root) {
    $$('i[data-i]', root).forEach(function (el) {
      var t = document.createElement('span');
      t.style.display = 'contents';
      t.innerHTML = icon(el.dataset.i, el.className);
      el.replaceWith(t.firstChild);
    });
  }

  /* ---------- layout (header / footer / dock) ---------- */
  var page = document.body.dataset.page || '';
  var NAV = [
    ['index.html', 'Home', 'home'],
    ['platform.html', 'Platform', 'platform'],
    ['services.html', 'Services', 'services'],
    ['solutions.html', 'Solutions', 'solutions'],
    ['live-market.html', 'Live Market', 'market']
  ];
  var DISC = [
    ['discover.html#about', 'About us'],
    ['discover.html#safety', 'Safety'],
    ['discover.html#events', 'Events'],
    ['discover.html#resources', 'Resources & demo'],
    ['careers.html#jobs', 'Careers'],
    ['careers.html#courses', 'Courses']
  ];

  function header() {
    var nav = NAV.map(function (n) { return '<a href="' + n[0] + '"' + (page === n[2] ? ' class="on"' : '') + '>' + n[1] + '</a>'; }).join('');
    var dd = '<div class="dd' + (['discover', 'careers'].indexOf(page) > -1 ? ' on' : '') + '"><button type="button" aria-haspopup="true">Discover ' + icon('chev') .replace('<svg', '<svg width="14" height="14"') + '</button><div class="menu">' +
      DISC.map(function (d) { return '<a href="' + d[0] + '">' + d[1] + '</a>'; }).join('') + '</div></div>';
    var shop = '<a href="shop.html"' + (page === 'shop' ? ' class="on"' : '') + '>Partner &amp; Shop</a>';
    var contact = '<a href="contact.html"' + (page === 'contact' ? ' class="on"' : '') + '>Contact</a>';
    return '<a class="skip" href="#main">Skip to content</a><div id="progress"></div>' +
      '<div class="topbar"><div class="wrap"><div class="l"><a href="tel:+' + PHONE_RAW + '">' + icon('phone', '').replace('<svg', '<svg width="14" height="14"') + PHONE + '</a>' +
      '<a href="mailto:' + EMAIL + '">' + icon('mail').replace('<svg', '<svg width="14" height="14"') + EMAIL + '</a></div>' +
      '<div class="r"><span>' + icon('pin').replace('<svg', '<svg width="14" height="14" style="display:inline;vertical-align:-2px"') + ' Regional HQ · Bangalore, India</span><a href="' + LOGIN_URL + '">Sign in</a></div></div></div>' +
      '<header class="site"><div class="wrap"><a class="brand" href="index.html" aria-label="ChaseHorse home"><img src="assets/logo-mark.png" alt="" width="22" height="44"><b>CHASEHORSE<small>LOGIWORKX</small></b></a>' +
      '<nav class="main" id="nav" aria-label="Main">' + nav + dd + shop + contact + '<a class="btn primary sm" href="contact.html#quote" style="margin-left:8px">Get a Quote ' + icon('arrow') + '</a></nav>' +
      '<button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><i></i><i></i><i></i></button></div></header>';
  }

  function footer() {
    var col = function (t, l) { return '<div><h4>' + t + '</h4><ul>' + l.map(function (x) { return '<li><a href="' + x[0] + '">' + x[1] + '</a></li>'; }).join('') + '</ul></div>'; };
    return '<footer class="site"><div class="wrap"><div class="cols">' +
      '<div class="about"><img src="assets/logo-full.png" alt="ChaseHorse" style="height:84px;width:auto"><p>Technology-driven logistics and supply chain transformation — one transparent platform for value creation, from the first mile to the field.</p><img class="lw" src="assets/logo-logiworkx-white.png" alt="ChaseHorse Logiworkx">' +
      '<div class="social" style="margin-top:20px"><a href="#" aria-label="LinkedIn">' + icon('linkedin') + '</a><a href="#" aria-label="Instagram">' + icon('insta') + '</a><a href="#" aria-label="YouTube">' + icon('yt') + '</a></div></div>' +
      col('Platform', [['platform.html', 'Overview'], ['platform.html#capabilities', 'Capabilities'], ['platform.html#gelp', 'What is G.E.L.P.'], ['services.html', 'Services catalogue']]) +
      col('Solutions', [['solutions.html', 'Solutions hub'], ['solutions.html#sectors', 'By sector'], ['solutions.html#industries', 'By industry'], ['solutions.html#design', 'Design your solution']]) +
      col('Live Market', [['live-market.html#book-truck', 'Book truck'], ['live-market.html#terminal', 'Terminal space'], ['live-market.html#deploy-lead', 'On-field lead'], ['live-market.html#trip-finance', 'Trip finance'], ['live-market.html#freight-index', 'Freight index']]) +
      col('Discover', [['discover.html#about', 'About us'], ['careers.html#jobs', 'Careers'], ['careers.html#courses', 'Courses'], ['discover.html#safety', 'Safety'], ['discover.html#events', 'Events']]) +
      col('Partner & Shop', [['shop.html#partners', 'Partners'], ['shop.html#merch', 'Merchandise'], ['shop.html#hse', 'HSE stores'], ['contact.html#quote', 'Get a quote'], ['contact.html#support', 'Support']]) +
      '</div><div class="foot-bottom"><span>© 2026 ChaseHorse Logiworkx. All rights reserved.</span><span>' + PHONE + ' · ' + EMAIL + '</span><span><a href="contact.html">Privacy &amp; Legal</a></span></div></div></footer>' +
      '<div class="dock"><a class="wa" href="https://wa.me/' + PHONE_RAW + '?text=Hello%20ChaseHorse" target="_blank" rel="noopener" aria-label="WhatsApp">' + icon('chat') + '</a>' +
      '<a class="call" href="tel:+' + PHONE_RAW + '" aria-label="Call">' + icon('phone') + '</a><button class="top" id="toTop" aria-label="Back to top">' + icon('up') + '</button></div><div class="toast" id="toast" role="status"></div>';
  }

  document.body.insertAdjacentHTML('afterbegin', header());
  document.body.insertAdjacentHTML('beforeend', footer());

  var burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', function () {
    var o = nav.classList.toggle('open');
    burger.classList.toggle('x', o);
    burger.setAttribute('aria-expanded', o);
  });
  $$('.dd > button').forEach(function (b) { b.addEventListener('click', function () { b.parentNode.classList.toggle('open'); }); });
  $$('nav.main a').forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); burger.classList.remove('x'); }); });

  /* ---------- animated scenes ---------- */
  function truck(cls, scale, y, delay) {
    return '<g transform="translate(0 ' + y + ') scale(' + scale + ')"><g class="' + cls + '" style="animation-delay:' + (delay || 0) + 's">' +
      '<rect x="0" y="6" width="118" height="56" rx="6" fill="#3d5bff"/><rect x="0" y="40" width="118" height="6" fill="#fff" opacity=".85"/>' +
      '<text x="59" y="33" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="14" fill="#fff" letter-spacing="2">CHASEHORSE</text>' +
      '<path d="M122 20h28l18 22v20h-46z" fill="#e8a24a"/><path d="M130 26h16l10 14h-26z" fill="#0a0d1c" opacity=".8"/>' +
      '<rect x="0" y="62" width="168" height="8" rx="3" fill="#111632"/>' +
      '<g transform="translate(26 72)"><circle r="12" fill="#05060d" stroke="#8c97d6" stroke-width="3"/><g class="spin"><path d="M0-9v18M-9 0h18" stroke="#8c97d6" stroke-width="2"/></g></g>' +
      '<g transform="translate(60 72)"><circle r="12" fill="#05060d" stroke="#8c97d6" stroke-width="3"/><g class="spin"><path d="M0-9v18M-9 0h18" stroke="#8c97d6" stroke-width="2"/></g></g>' +
      '<g transform="translate(142 72)"><circle r="12" fill="#05060d" stroke="#8c97d6" stroke-width="3"/><g class="spin"><path d="M0-9v18M-9 0h18" stroke="#8c97d6" stroke-width="2"/></g></g>' +
      '<rect x="160" y="52" width="8" height="5" rx="2" fill="#fff"><animate attributeName="opacity" values="1;.4;1" dur="1s" repeatCount="indefinite"/></rect></g></g>';
  }
  function stars(n) {
    var s = '', i, seed = 7;
    for (i = 0; i < n; i++) { seed = (seed * 9301 + 49297) % 233280; var x = seed / 233280 * 600; seed = (seed * 9301 + 49297) % 233280; var y = seed / 233280 * 230; s += '<circle class="tw" cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" style="animation-delay:' + (i % 7) * .4 + 's"/>'; }
    return s;
  }
  function skyline() {
    var s = '', x = 0, h = [90, 140, 110, 170, 120, 150, 100, 180, 130, 95], i = 0;
    while (x < 600) { var hh = h[i % h.length], w = 38 + (i % 3) * 8; s += '<rect x="' + x + '" y="' + (380 - hh) + '" width="' + w + '" height="' + hh + '" fill="#0d1230"/>'; for (var k = 0; k < 6; k++) { s += '<rect x="' + (x + 7 + (k % 3) * 11) + '" y="' + (380 - hh + 12 + Math.floor(k / 3) * 22) + '" width="4" height="6" fill="#e8a24a" opacity="' + ((i + k) % 3 ? .55 : .15) + '"/>'; } x += w + 4; i++; }
    return s;
  }
  var DEFS = '<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1038"/><stop offset="1" stop-color="#1b2160"/></linearGradient><radialGradient id="gl"><stop offset="0" stop-color="#3d5bff" stop-opacity=".55"/><stop offset="1" stop-color="#3d5bff" stop-opacity="0"/></radialGradient></defs>';

  var SCENES = {
    road: function () {
      return '<svg viewBox="0 0 600 516" preserveAspectRatio="xMidYMid slice">' + DEFS + '<rect width="600" height="516" fill="url(#sky)"/>' + stars(40) +
        '<circle cx="470" cy="90" r="120" fill="url(#gl)"/><circle cx="470" cy="90" r="30" fill="#e8f0ff" opacity=".9"/>' +
        '<g opacity=".5"><ellipse class="cloud" cx="0" cy="130" rx="60" ry="12" fill="#5a6bd6"/></g>' + skyline() +
        '<path class="dash" d="M30 190 Q 190 40 300 120 T 570 70" fill="none" stroke="#33d6ff" stroke-width="2"/>' +
        [[30, 190, 'Bengaluru'], [300, 120, 'Mumbai'], [570, 70, 'Delhi']].map(function (p) { return '<circle class="pulse" cx="' + p[0] + '" cy="' + p[1] + '" r="8" fill="#33d6ff"/><circle cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="#fff"/><text x="' + Math.min(p[0] + 10, 520) + '" y="' + (p[1] + 24) + '" fill="#c9d0f5" font-size="11" font-family="Inter">' + p[2] + '</text>'; }).join('') +
        '<g class="fly" fill="#fff"><g transform="translate(0 20) scale(1.1)"><path d="M0 8h30l8-8h6l-4 8h8l4-4h4l-2 6 2 6h-4l-4-4h-8l4 8h-6l-8-8H0z" fill="#e8f0ff"/></g></g>' +
        '<rect y="380" width="600" height="136" fill="#090b1c"/><rect y="380" width="600" height="4" fill="#3d5bff" opacity=".6"/>' +
        '<rect y="410" width="600" height="86" fill="#0e1126"/><line class="roadline" x1="0" y1="453" x2="600" y2="453" stroke="#e8a24a" stroke-width="4"/>' +
        truck('drive', 1, 336, 0) + '<g opacity=".55">' + truck('drive', .6, 420, -4.5) + '</g></svg>' +
        '<div class="fcard" style="top:8%;left:5%"><i data-i="clock"></i><div>24h<small>Tier 1 deployment</small></div></div>' +
        '<div class="fcard" style="top:34%;right:5%;animation-delay:-2s"><i data-i="pin"></i><div>Live tracking<small>Road · Sea · Air</small></div></div>';
    },
    orbit: function () {
      var rings = [[95, 'truck', 22, 0], [150, 'ship', 30, 1], [205, 'plane', 40, 2], [120, 'warehouse', 26, 3], [178, 'shield', 34, 4]];
      var g = '';
      rings.forEach(function (r, i) {
        var dir = i % 2 ? -1 : 1;
        g += '<circle cx="300" cy="258" r="' + r[0] + '" fill="none" stroke="#7b8fff" stroke-opacity=".25" stroke-dasharray="3 7"/>';
        g += '<g><animateTransform attributeName="transform" type="rotate" from="' + (i * 72) + ' 300 258" to="' + (i * 72 + 360 * dir) + ' 300 258" dur="' + r[2] + 's" repeatCount="indefinite"/>' +
          '<g transform="translate(' + (300 + r[0]) + ' 258)"><g><animateTransform attributeName="transform" type="rotate" from="0" to="' + (-360 * dir) + '" dur="' + r[2] + 's" repeatCount="indefinite"/>' +
          '<circle r="22" fill="#141937" stroke="#3d5bff" stroke-width="1.5"/><svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8a24a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + P[r[1]] + '</svg></g></g></g>';
      });
      return '<svg viewBox="0 0 600 516">' + DEFS + '<circle cx="300" cy="258" r="230" fill="url(#gl)"/>' + g + '</svg>' +
        '<img src="assets/logo-mark.png" alt="" class="float" style="position:absolute;left:50%;top:50%;height:26%;transform:translate(-50%,-50%);filter:drop-shadow(0 0 24px #3d5bff)">';
    },
    belt: function () {
      var boxes = '';
      for (var i = 0; i < 5; i++) boxes += '<g class="belt" style="animation-delay:-' + (i * 1.2) + 's"><rect x="0" y="318" width="64" height="52" rx="5" fill="' + (i % 2 ? '#e8a24a' : '#3d5bff') + '"/><rect x="0" y="336" width="64" height="8" fill="#fff" opacity=".6"/><rect x="26" y="318" width="12" height="52" fill="#000" opacity=".15"/></g>';
      var shelves = '';
      for (var r = 0; r < 3; r++) { shelves += '<rect x="30" y="' + (60 + r * 70) + '" width="540" height="6" fill="#2a3170"/>'; for (var c = 0; c < 8; c++) shelves += '<rect x="' + (46 + c * 66) + '" y="' + (22 + r * 70 + (c % 2) * 6) + '" width="48" height="' + (38 - (c % 2) * 6) + '" rx="3" fill="' + ['#26306e', '#33408c', '#2b3680'][(c + r) % 3] + '"/>'; }
      return '<svg viewBox="0 0 600 516">' + DEFS + '<rect width="600" height="516" fill="#090c20"/>' + shelves +
        '<rect y="368" width="600" height="14" fill="#1b2150"/><rect y="382" width="600" height="60" fill="#0d1130"/>' +
        '<path class="roadline" d="M0 375H600" stroke="#7b8fff" stroke-width="2" opacity=".5"/>' + boxes +
        '<g><rect x="286" y="250" width="3" height="130" fill="#33d6ff"><animate attributeName="opacity" values="1;.2;1" dur="1.4s" repeatCount="indefinite"/></rect><rect x="250" y="236" width="76" height="18" rx="6" fill="#141937" stroke="#33d6ff"/><rect x="200" y="320" width="3" height="50" fill="#33d6ff" opacity="0"/></g>' +
        '<g><animateTransform attributeName="transform" type="translate" values="0 0;0 12;0 0" dur="2.2s" repeatCount="indefinite"/><circle cx="520" cy="200" r="60" fill="url(#gl)"/></g>' +
        '<circle cx="48" cy="468" r="12" fill="#e8a24a"/><circle cx="82" cy="468" r="12" fill="#3d5bff"/><circle cx="116" cy="468" r="12" fill="#2ee6a6"/>' +
        '<text x="140" y="473" fill="#8c97d6" font-family="Chakra Petch" font-size="14" letter-spacing="2">SCAN · SORT · DISPATCH</text></svg>' +
        '<div class="fcard" style="top:8%;right:5%"><i data-i="clip"></i><div>Audit-ready<small>Every handover logged</small></div></div>' +
        '<div class="fcard" style="bottom:6%;right:5%;animation-delay:-2s"><i data-i="check"></i><div>POD verified<small>Proof of delivery</small></div></div>';
    },
    port: function () {
      var cont = '', cols = ['#e8a24a', '#3d5bff', '#2ee6a6', '#ff6b7a', '#33d6ff'];
      for (var r = 0; r < 3; r++) for (var c = 0; c < 4; c++) cont += '<rect x="' + (400 + c * 46) + '" y="' + (300 - r * 24) + '" width="42" height="21" rx="2" fill="' + cols[(r + c * 2) % 5] + '"/>';
      var shipC = '';
      for (var k = 0; k < 6; k++) shipC += '<rect x="' + (14 + k * 30) + '" y="-24" width="27" height="22" rx="2" fill="' + cols[k % 5] + '"/>';
      return '<svg viewBox="0 0 600 516">' + DEFS + '<rect width="600" height="516" fill="url(#sky)"/>' + stars(30) + '<circle cx="120" cy="100" r="70" fill="url(#gl)"/><circle cx="120" cy="100" r="22" fill="#e8f0ff"/>' +
        '<rect y="340" width="600" height="176" fill="#0b1442"/>' +
        '<g class="sail"><g transform="translate(0 300)"><g class="bob"><path d="M0 0h200l-24 40H24z" fill="#10163a" stroke="#7b8fff"/><rect x="8" y="2" width="184" height="6" fill="#3d5bff"/>' + shipC + '<rect x="156" y="-48" width="30" height="46" rx="3" fill="#f2f4ff"/><rect x="162" y="-40" width="18" height="8" fill="#3d5bff"/></g></g></g>' +
        '<rect x="380" y="322" width="200" height="50" fill="#141937"/>' + cont +
        '<g><rect x="520" y="140" width="8" height="180" fill="#e8a24a"/><rect x="380" y="140" width="150" height="8" fill="#e8a24a"/><g><animateTransform attributeName="transform" type="translate" values="0 0;-70 0;0 0" dur="6s" repeatCount="indefinite"/><line x1="450" y1="148" x2="450" y2="215" stroke="#fff"/><rect x="432" y="215" width="36" height="18" rx="2" fill="#2ee6a6"/></g></g>' +
        '<path d="M0 360q30-14 60 0t60 0 60 0 60 0 60 0 60 0 60 0 60 0 60 0 60 0" fill="none" stroke="#33d6ff" stroke-opacity=".5" stroke-width="2"><animateTransform attributeName="transform" type="translate" values="0 0;-60 0" dur="3s" repeatCount="indefinite"/></path>' +
        '<path d="M0 400q30-14 60 0t60 0 60 0 60 0 60 0 60 0 60 0 60 0 60 0 60 0" fill="none" stroke="#7b8fff" stroke-opacity=".35" stroke-width="2"><animateTransform attributeName="transform" type="translate" values="-60 0;0 0" dur="4s" repeatCount="indefinite"/></path>' +
        '<g class="fly" style="animation-duration:15s"><g transform="translate(0 60)"><path d="M0 8h30l8-8h6l-4 8h8l4-4h4l-2 6 2 6h-4l-4-4h-8l4 8h-6l-8-8H0z" fill="#e8f0ff"/></g></g></svg>' +
        '<div class="fcard" style="top:42%;left:5%"><i data-i="ship"></i><div>FCL &amp; LCL<small>End-to-end visibility</small></div></div>';
    },
    map: function () {
      var N = { blr: [250, 380, 'Bengaluru'], mum: [140, 270, 'Mumbai'], del: [230, 130, 'Delhi'], che: [310, 410, 'Chennai'], kol: [400, 220, 'Kolkata'], dub: [60, 230, 'Dubai'], sin: [520, 400, 'Singapore'], rot: [90, 70, 'Rotterdam'] };
      var routes = [['blr', 'mum'], ['mum', 'del'], ['del', 'kol'], ['blr', 'che'], ['che', 'sin'], ['mum', 'dub'], ['del', 'rot'], ['kol', 'sin']];
      var d = '', ids = '', g = '';
      routes.forEach(function (r, i) {
        var a = N[r[0]], b = N[r[1]], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 - 50;
        var path = 'M' + a[0] + ' ' + a[1] + ' Q' + mx + ' ' + my + ' ' + b[0] + ' ' + b[1];
        d += '<path class="dash" d="' + path + '" fill="none" stroke="#33d6ff" stroke-opacity=".7" stroke-width="1.6"/>';
        g += '<circle r="4" fill="#e8a24a"><animateMotion dur="' + (4 + i % 4) + 's" begin="-' + i + 's" repeatCount="indefinite" path="' + path + '"/></circle>';
      });
      var dots = '';
      for (var x = 20; x < 600; x += 22) for (var y = 20; y < 500; y += 22) { if (((x * 7 + y * 13) % 5) < 2) dots += '<circle cx="' + x + '" cy="' + y + '" r="1.4" fill="#7b8fff" opacity=".28"/>'; }
      var nodes = Object.keys(N).map(function (k) { var n = N[k]; return '<circle class="pulse" cx="' + n[0] + '" cy="' + n[1] + '" r="7" fill="#e8a24a"/><circle cx="' + n[0] + '" cy="' + n[1] + '" r="5" fill="#fff"/><text x="' + (n[0] + 10) + '" y="' + (n[1] + 4) + '" fill="#d3d9ff" font-size="11" font-family="Inter">' + n[2] + '</text>'; }).join('');
      return '<svg viewBox="0 0 600 516">' + DEFS + '<circle cx="300" cy="258" r="250" fill="url(#gl)"/><rect width="600" height="516" fill="#080b1f" opacity=".5"/>' + dots + d + g + nodes + '</svg>' +
        '<div class="fcard" style="top:6%;right:5%"><i data-i="route"></i><div>Live routes<small>Truck · Sea · Air</small></div></div>' +
        '<div class="fcard" style="bottom:6%;left:5%;animation-delay:-2s"><i data-i="globe"></i><div>120+ countries<small>6 continents</small></div></div>';
    }
  };
  $$('.scene[data-scene]').forEach(function (el) { var f = SCENES[el.dataset.scene]; if (f) el.innerHTML = f(); });

  /* road strip under hero */
  $$('.roadstrip').forEach(function (r) {
    var mini = '<svg viewBox="0 0 170 80" width="100%"><rect x="0" y="6" width="118" height="50" rx="6" fill="#3d5bff"/><rect x="0" y="36" width="118" height="5" fill="#fff" opacity=".8"/><path d="M122 18h26l18 20v18h-44z" fill="#e8a24a"/><circle cx="26" cy="62" r="11" fill="#05060d" stroke="#8c97d6" stroke-width="3"/><circle cx="62" cy="62" r="11" fill="#05060d" stroke="#8c97d6" stroke-width="3"/><circle cx="142" cy="62" r="11" fill="#05060d" stroke="#8c97d6" stroke-width="3"/></svg>';
    r.innerHTML = '<div class="lane"></div><div class="t">' + mini + '</div><div class="t b">' + mini + '</div>';
  });

  paintIcons();

  /* ---------- scroll reveal, progress, counters ---------- */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); if (e.target.dataset.count !== undefined) count(e.target); } });
  }, { threshold: .15 });
  $$('.rv,[data-count],.bars').forEach(function (el, i) { io.observe(el); });
  $$('.grid3>.rv,.grid4>.rv,.grid2>.rv').forEach(function (el, i) { el.style.setProperty('--d', (i % 4) * .09 + 's'); });

  function count(el) {
    var end = parseFloat(el.dataset.count), suf = el.dataset.suffix || '', t0 = performance.now(), dur = 1600;
    (function tick(t) { var p = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 3))); el.textContent = v + suf; if (p < 1) requestAnimationFrame(tick); })(t0);
  }

  var prog = $('#progress'), top = $('#toTop');
  function onScroll() {
    var h = document.documentElement, p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    prog.style.width = (p * 100) + '%';
    top.classList.toggle('show', h.scrollTop > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* card spotlight */
  document.addEventListener('pointermove', function (e) {
    var c = e.target.closest && e.target.closest('.card'); if (!c) return;
    var r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  /* ---------- hero slider ---------- */
  $$('[data-slider]').forEach(function (s) {
    var sl = $$('.slide', s), dots = $('.dots', s), cur = 0, tm;
    dots.innerHTML = sl.map(function (_, i) { return '<button aria-label="Slide ' + (i + 1) + '"></button>'; }).join('');
    var bs = $$('button', dots);
    function go(i) {
      cur = (i + sl.length) % sl.length;
      sl.forEach(function (x, k) { x.classList.toggle('on', k === cur); });
      bs.forEach(function (x, k) { x.classList.remove('on'); if (k === cur) { void x.offsetWidth; x.classList.add('on'); } });
      clearTimeout(tm); tm = setTimeout(function () { go(cur + 1); }, 6000);
    }
    bs.forEach(function (b, i) { b.addEventListener('click', function () { go(i); }); });
    go(0);
  });

  /* ---------- tabs / filters ---------- */
  $$('[data-tabs]').forEach(function (t) {
    var target = $(t.dataset.tabs);
    $$('button', t).forEach(function (b) {
      b.addEventListener('click', function () {
        $$('button', t).forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on');
        var f = b.dataset.f;
        $$('[data-cat]', target).forEach(function (c) { c.classList.toggle('hide', f !== 'all' && c.dataset.cat.split(' ').indexOf(f) < 0); });
      });
    });
  });

  /* ---------- forms: validate, then compose an email ---------- */
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); setTimeout(function () { t.classList.remove('show'); }, 4200); }
  window.CH = { toast: toast, icon: icon, paint: paintIcons, EMAIL: EMAIL };

  $$('form[data-form]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!f.reportValidity()) return;
      var fd = new FormData(f), lines = [];
      fd.forEach(function (v, k) { if (v) lines.push(k.replace(/_/g, ' ') + ': ' + v); });
      var sub = f.dataset.form + (fd.get('Service') ? ' — ' + fd.get('Service') : '');
      location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(sub) + '&body=' + encodeURIComponent(lines.join('\n'));
      toast('Thanks! Your email app is opening with the request filled in. We reply within 1–2 business days.');
    });
  });

  /* prefill ?subject= (e.g. contact.html?subject=On-site%20HSE%20Store) */
  var qs = new URLSearchParams(location.search), subj = qs.get('subject');
  if (subj) {
    var sel = $('select[name="Service"]'), msg = $('textarea[name="Message"]');
    if (sel) {
      var found = $$('option', sel).filter(function (o) { return o.value.toLowerCase() === subj.toLowerCase(); })[0];
      if (!found) { found = new Option(subj, subj); sel.add(found, 1); }
      sel.value = found.value;
    }
    if (msg && !msg.value) msg.value = 'Enquiry: ' + subj;
    var banner = $('#subject-note'); if (banner) { banner.hidden = false; banner.querySelector('b').textContent = subj; }
  }

  /* tracking widget → support request with ID */
  $$('form[data-track]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var id = f.querySelector('input').value.trim(); if (!id) return;
      $('.trackres', f.parentNode).textContent = 'Opening a tracking request for ' + id + '…';
      setTimeout(function () { location.href = 'contact.html?subject=' + encodeURIComponent('Track shipment ' + id) + '#quote'; }, 700);
    });
  });
})();
