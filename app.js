/* Renders the page from data.js. You rarely need to edit this file. */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const P = PROFILE;
const hasBuild = PROJECTS.some(p => p.type === "build");
if (!hasBuild) { const b = document.getElementById("build"); if (b) b.hidden = true; }
const link = (u, t, cls = "btn") => u ? `<a class="${cls}" href="${esc(u)}" target="_blank" rel="noopener">${t}</a>` : "";

$("#logo").innerHTML = `${esc(P.name.toUpperCase())}<br><span class="mute">// PRODUCT &amp; AI</span>`;
$("#nav").innerHTML = [["Work","#work"],["Design","#design"],["Build","#build"],["About","#about"],["Contact","#contact"]].filter(([l]) => l !== "Build" || hasBuild).map(([l,h]) => `<li><a href="${h}">${l}</a></li>`).join("");
$("#role").textContent = P.role; $("#tagline").textContent = P.tagline; $("#intro").textContent = P.intro;
$("#cta2").textContent = P.navCta;
$("#stats").innerHTML = P.stats.map(([a,b]) => `<div><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join("");
$("#narr").textContent = P.narrative;
$("#dIntro").textContent = P.designIntro; $("#bIntro").textContent = P.buildIntro;
$("#principles").innerHTML = P.principles.map(([a,b],i) => `<div><span class="mono accent">0${i+1}</span><b>${esc(a)}</b><p>${esc(b)}</p></div>`).join("");
$("#bridge").innerHTML = P.bridge.map(([a,b]) => `<div><b>${esc(a)}</b><p>${esc(b)}</p></div>`).join("");
$("#aboutText").innerHTML = P.about.map(t => `<p>${esc(t)}</p>`).join("");
if (P.photo) $("#photo").innerHTML = `<img src="${esc(P.photo)}" alt="Philip Edward" loading="lazy">`;
$("#kit").innerHTML = Object.entries(P.toolkit).map(([k,v],i) => `<div><h3>${k}<span>0${i+1}</span></h3><ul>${v.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");
$("#cText").textContent = P.contactText;
$("#clinks").innerHTML = `<div>${esc(P.email)}</div><div>${P.socials.map(s => link(s.url, esc(s.label) + " ↗", "")).join("")}</div>`;
$("#foot").innerHTML = P.socials.map(s => link(s.url, esc(s.label), "")).join("");
$("#yr").textContent = "© " + new Date().getFullYear() + " Philip Edward";

/* design case study steps (first design project) */
const first = PROJECTS.find(p => p.type === "design" && p.case);
$("#steps").innerHTML = P.process.map((s,i) => `<div><i>0${i+1}</i><b style="font-weight:500">${esc(s)}</b><p>${esc((first && first.case[s]) || "Add this step.")}</p></div>`).join("");

const figs = (g, wide, href) => g.map(([src,cap],i) => {
  const img = `<img src="${esc(src)}" alt="${esc(cap)} screen${href ? " (opens the live site)" : ""}" ${wide ? "" : 'width="393" height="852" '}loading="lazy">`;
  return `<figure>${href ? `<a href="${esc(href)}" target="_blank" rel="noopener">${img}</a>` : img}<figcaption class="mono">${String(i+1).padStart(2,"0")} ${esc(cap)}${href ? " · open live site ↗" : ""}</figcaption></figure>`;
}).join("");
if (first && first.gallery) $("#gallery").innerHTML = figs(first.gallery, !!first.galleryLayout);
$("#csTitle").textContent = first ? first.title : "";

/* project cards */
let filter = "all";
const card = p => {
  const pic = p.image ? `<img src="${esc(p.image)}" alt="${p.link ? "" : esc(p.title) + " preview"}" loading="lazy">` : `<span>Add preview image</span>`;
  const shot = p.link
    ? `<a class="shot" href="${esc(p.link)}" target="_blank" rel="noopener" aria-label="${esc(p.title)}: open the live project in a new tab">${pic}<span class="visit mono">Visit live site ↗</span></a>`
    : `<div class="shot">${pic}</div>`;
  return `<article class="card" data-id="${p.id}">
  <div class="top mono"><span>${esc(p.category)}</span><span>${p.status ? esc(p.status) : p.placeholder ? "placeholder" : ""}</span></div>
  ${shot}
  <h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
  ${p.tools.length ? `<div class="tags">${p.tools.map(t => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
  <button class="go" type="button" data-id="${p.id}" aria-haspopup="dialog">${p.type === "design" ? "Read case study ↗" : "Quick view ↗"}</button></article>`;
};
function draw(){
  $("#cards").innerHTML = PROJECTS.filter(p => filter === "all" || p.type === filter).map(card).join("");
}
const tabs = [["all","All projects"],["design","Design (UI/UX)"],["build","Build (AI & web)"]].filter(([k]) => k !== "build" || hasBuild);
$("#tabs").innerHTML = tabs.map(([k,l]) => `<button data-f="${k}" aria-pressed="${k === "all"}">${l}</button>`).join("");
$("#tabs").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  filter = b.dataset.f;
  document.querySelectorAll("#tabs button").forEach(x => x.setAttribute("aria-pressed", x === b));
  draw();
});
draw();

/* build projects */
$("#builds").innerHTML = PROJECTS.filter(p => p.type === "build").map(p => `<article class="build">
  <div class="mono mute">${esc(p.category)}${p.placeholder ? " // placeholder" : ""}</div>
  <h3 style="font-size:1.6rem;margin-top:.4rem">${esc(p.title)}</h3>
  <p class="mute" style="margin-top:.6rem">${esc(p.description)}</p>
  <div class="tags" style="border:0;padding:0">${(p.tools.length ? p.tools : ["Add technologies"]).map(t => `<span>${esc(t)}</span>`).join("")}</div>
  <dl><div><dt>What I built</dt><dd>${esc(p.built)}</dd></div><div><dt>Why I built it</dt><dd>${esc(p.why)}</dd></div><div><dt>What I learned</dt><dd>${esc(p.learned)}</dd></div></dl>
  <div class="acts">${link(p.link, "Live demo", "btn solid")}${link(p.github, "GitHub")}</div></article>`).join("");

/* dialog */
const dlg = $("#dlg");
document.addEventListener("click", e => {
  const t = e.target.closest("a") ? null : e.target.closest("[data-id]");
  if (t) {
    const p = PROJECTS.find(x => x.id === t.dataset.id);
    const rows = p.type === "design"
      ? P.process.map(s => [s, (p.case && p.case[s]) || "Add this step of the case study."])
      : [["What I built",p.built],["Why I built it",p.why],["Technology used",p.tools.join(", ") || "Add technologies"],["What I learned",p.learned]];
    $("#dbody").innerHTML = `<button class="btn close" id="x">Close</button><div class="eyebrow">${esc(p.category)}${p.status ? " · " + esc(p.status) : ""}</div>
      <h2 id="dt" style="font-size:2rem">${esc(p.title)}</h2><p class="mute" style="margin-top:1rem">${esc(p.description)}</p>
      <div class="steps">${rows.map(([a,b],i) => `<div><i>0${i+1}</i><b style="font-weight:500">${esc(a)}</b><p>${esc(b)}</p></div>`).join("")}</div>
      ${p.gallery ? `<div class="gallery${p.galleryLayout ? " " + p.galleryLayout : ""}">${figs(p.gallery, !!p.galleryLayout, p.gallery.length === 1 ? p.link : "")}</div>` : ""}
      <div class="ctas">${link(p.link, "View project", "btn solid")}${link(p.github, "GitHub")}</div>`;
    dlg.showModal();
  }
  if (e.target.id === "x" || e.target === dlg) dlg.close();
});

/* contact form: opens the visitor's email app, no server needed */
let intent = P.intents[0];
$("#intent").innerHTML = P.intents.map(i => `<button type="button" aria-pressed="${i === intent}">${esc(i)}</button>`).join("");
$("#intent").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  intent = b.textContent;
  document.querySelectorAll("#intent button").forEach(x => x.setAttribute("aria-pressed", x === b));
});
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;
  const body = `${f.m.value}\n\nFrom: ${f.n.value} (${f.e.value})`;
  location.href = `mailto:${P.email}?subject=${encodeURIComponent(intent + " enquiry")}&body=${encodeURIComponent(body)}`;
});

/* mobile menu */
const menuBtn = $("#menuBtn"), navList = $("#nav");
const setMenu = open => { navList.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open); menuBtn.textContent = open ? "Close" : "Menu"; };
menuBtn.addEventListener("click", () => setMenu(!navList.classList.contains("open")));
navList.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
