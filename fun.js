(function () {
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
document.documentElement.classList.add("js");
const S = d => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const F = d => `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${d}"/></svg>`;
const I = {
  design: S('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>'),
  code: S('<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>'),
  ai: F("M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z"),
  mobile: S('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/>'),
  web: S('<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'),
  game: S('<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10.5v4M5 12.5h4M15 11h.01M18 13.5h.01"/>'),
  mail: S('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
  file: S('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>'),
  github: F("M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.500 11.500 0 0 1 6 0C17.300 4.700 18.300 5 18.300 5c.7 1.700.2 2.900.1 3.200.8.8 1.200 1.900 1.200 3.200 0 4.600-2.800 5.600-5.500 5.900.4.400.8 1.100.8 2.200v3.300c0 .3.2.7.8.6A12 12 0 0 0 12 .3"),
  linkedin: F("M20.400 20.500h-3.600v-5.600c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.700H9.400V9h3.400v1.600c.5-.9 1.600-1.800 3.400-1.800 3.600 0 4.300 2.400 4.300 5.500zM5.300 7.400a2.100 2.100 0 1 1 0-4.100 2.100 2.100 0 0 1 0 4.100zm1.800 13.100H3.600V9h3.500zM22.200 0H1.800C.8 0 0 .8 0 1.700v20.600c0 .9.800 1.700 1.800 1.700h20.400c1 0 1.800-.8 1.800-1.700V1.700C24 .8 23.200 0 22.200 0z"),
  x: F("M18.200 2.300h3.300l-7.200 8.300 8.500 11.200h-6.700l-5.200-6.800-6 6.800H1.700l7.700-8.800L1.300 2.300h6.800l4.700 6.200zm-1.200 17.500h1.800L7.100 4.100H5.100z"),
  figma: '<svg class="ic ic-fig" viewBox="0 0 38 57" aria-hidden="true"><path d="M19 28.500a9.500 9.500 0 1 1 19 0 9.500 9.500 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.500A9.500 9.500 0 0 1 9.500 38H19v9.500a9.500 9.500 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.500a9.500 9.500 0 1 0 0-19z" fill="#FF7262"/><path d="M0 9.500A9.500 9.500 0 0 0 9.500 19H19V0H9.500A9.500 9.500 0 0 0 0 9.500z" fill="#F24E1E"/><path d="M0 28.500A9.500 9.500 0 0 0 9.500 38H19V19H9.500A9.500 9.500 0 0 0 0 28.500z" fill="#A259FF"/></svg>'
};
const ico = (k, c) => `<span class="ico ${c}">${I[k]}</span>`;
let n = 0;
function reveal(el) { if (el.dataset.rv) return; el.dataset.rv = 1; el.classList.add("rv"); el.style.setProperty("--d", (n++ % 6) * 0.07 + "s"); reduce ? el.classList.add("in") : io.observe(el); }
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1 });
function decorate() {
  $$(".stats > div").forEach(d => { if (d.dataset.d) return; d.dataset.d = 1; const b = d.querySelector("b"), m = { design: ["design", "c-d"], build: ["code", "c-b"], ai: ["ai", "c-t"] }[b.textContent.trim().toLowerCase()]; if (m) b.insertAdjacentHTML("afterbegin", ico(...m)); });
  $$(".card[data-id]").forEach(c => {
    if (c.dataset.d) return; c.dataset.d = 1;
    const sp = c.querySelectorAll(".top > span"), t = sp[0].textContent, k = /game/i.test(t) ? "game" : /mobile/i.test(t) ? "mobile" : "web";
    c.dataset.cat = k; sp[0].insertAdjacentHTML("afterbegin", ico(k, "cat-" + k));
    if (sp[1] && /progress/i.test(sp[1].textContent)) sp[1].classList.add("live");
    $$(".tags span", c).forEach(s => { if (s.textContent.trim() === "Figma") s.insertAdjacentHTML("afterbegin", I.figma); });
    reveal(c);
  });
}
decorate();
new MutationObserver(decorate).observe($("#cards"), { childList: true });
// toolkit: icons, group colours, Figma
$$(".kit > div").forEach(d => {
  const h = d.querySelector("h3"), k = h.firstChild.textContent.trim().toLowerCase(), m = { design: ["design", "c-d", ""], development: ["code", "c-b", "g-b"], ai: ["ai", "c-t", "g-t"] }[k];
  if (m) { h.insertAdjacentHTML("afterbegin", ico(m[0], m[1])); if (m[2]) d.classList.add(m[2]); }
  const ul = $("ul", d);
  if (k === "design" && !$$("li", ul).some(l => /^figma$/i.test(l.textContent.trim()))) ul.insertAdjacentHTML("afterbegin", "<li>Figma</li>");
  $$("li", ul).forEach(l => { if (/^figma$/i.test(l.textContent.trim())) l.insertAdjacentHTML("afterbegin", I.figma); });
});
// contact, footer and résumé links
const brand = t => /linkedin/i.test(t) ? "linkedin" : /github/i.test(t) ? "github" : /^x\b/i.test(t) ? "x" : /résumé|resume/i.test(t) ? "file" : null;
$$("#clinks a,#foot a,#aboutText a").forEach(a => { const k = brand(a.textContent.trim()); if (k) a.insertAdjacentHTML("afterbegin", I[k]); });
const em = $$("#clinks > div").find(d => /@/.test(d.textContent) && !d.querySelector("a")); if (em) em.insertAdjacentHTML("afterbegin", I.mail);
// narrative band
const nh = $(".band h2"); if (nh && /design/i.test(nh.textContent)) { nh.classList.add("nar"); nh.innerHTML = '<span class="a">Design</span> <i>→</i> <span class="t">Think</span> <i>→</i> <span class="b">Build</span>.'; }
// tool ticker
try {
  const T = PROFILE.toolkit, items = [...(T.Design || []).map(x => [x, "c-d"]), ["Figma", "c-d"], ...(T.Development || []).map(x => [x, "c-b"]), ...(T.AI || []).map(x => [x, "c-t"])];
  const seen = new Set(), uniq = items.filter(([x]) => !seen.has(x) && seen.add(x));
  const row = uniq.map(([x, c]) => `<span class="${c}"><i></i>${x === "Figma" ? I.figma : ""}${x}</span>`).join("");
  $(".hero").insertAdjacentHTML("afterend", `<div class="ticker" aria-hidden="true"><div class="tick-track">${row}${row}</div></div>`);
} catch (e) {}
// reveal targets
$$(".boxes > div,.steps > div,.kit > div,.band .wrap > *,main section h2,#aboutText p,.photo,form").forEach(reveal);
// button ripple
if (!reduce) document.addEventListener("pointerdown", e => {
  const b = e.target.closest(".btn,.tabs button,.intent button,button.go"); if (!b) return;
  const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height), s = document.createElement("span");
  s.className = "rip"; s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
  b.appendChild(s); setTimeout(() => s.remove(), 650);
});
})();
