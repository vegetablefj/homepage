/* Keep the header, navigation and directory in place, including at page end. */
(() => {
  const navbar = document.getElementById("ptx-navbar");
  const masthead = document.getElementById("ptx-masthead");
  if (!navbar) return;
  const sidebar = document.getElementById("ptx-sidebar");
  const tocToggle = document.getElementById("ptx-toc-toggle");
  const wideScreen = window.matchMedia("(min-width: 1280px)");
  const setDirectoryVisible = (visible) => {
    sidebar.classList.toggle("visible", visible);
    sidebar.classList.toggle("hidden", !visible);
    tocToggle.setAttribute("aria-expanded", String(visible));
  };
  const initializeDirectory = () => {
    if (!sidebar || !tocToggle) return;
    setDirectoryVisible(wideScreen.matches);
  };
  wideScreen.addEventListener("change", initializeDirectory);
  initializeDirectory();
  // Keep outside-click dismissal working after resizing from a desktop layout.
  window.addEventListener("click", (event) => {
    if (!sidebar || !tocToggle || wideScreen.matches || !sidebar.classList.contains("visible")) return;
    const path = event.composedPath();
    if (!path.includes(sidebar) && !path.includes(tocToggle)) setDirectoryVisible(false);
  }, { capture: true });
  let scheduled = false;
  const update = () => {
    scheduled = false;
    const mastheadHeight = masthead ? masthead.getBoundingClientRect().height : 0;
    const navbarHeight = navbar.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--site-masthead-height", `${mastheadHeight}px`);
    document.documentElement.style.setProperty(
      "--site-directory-top", `${mastheadHeight + navbarHeight}px`
    );
  };
  const schedule = () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener("resize", schedule);
  const sizes = new ResizeObserver(schedule);
  sizes.observe(navbar);
  if (masthead) sizes.observe(masthead);
  update();
})();

/* Align margin notes with their paragraphs and let them return to the text on narrow screens. */
(() => {
  const page = document.querySelector(".ptx-page");
  const main = document.querySelector(".ptx-main");
  const rail = document.querySelector(".margin-notes");
  if (!page || !main || !rail) return;
  const notes = [...rail.querySelectorAll(".margin-note")];
  const gap = parseFloat(getComputedStyle(rail).getPropertyValue("--margin-note-gap")) || 12;
  const wideScreen = window.matchMedia("(min-width: 1280px)");
  let scheduled = false;
  const layout = () => {
    scheduled = false;
    if (!wideScreen.matches) {
      const groups = new Map();
      for (const note of notes) {
        const anchor = document.getElementById(note.dataset.marginAnchor);
        if (anchor) {
          if (!groups.has(anchor)) groups.set(anchor, []);
          groups.get(anchor).push(note);
        }
        if (note.hidden) note.hidden = false;
        note.style.top = "";
      }
      for (const [anchor, group] of groups) {
        let previous = anchor;
        for (const note of group) {
          if (previous.nextElementSibling !== note) previous.after(note);
          previous = note;
        }
      }
      rail.style.height = "";
      page.style.minHeight = "";
      return;
    }
    for (const note of notes) if (note.parentElement !== rail) rail.append(note);
    const top = page.getBoundingClientRect().top;
    let bottom = -gap;
    for (const note of notes) {
      const anchor = document.getElementById(note.dataset.marginAnchor);
      const closedProof = anchor?.closest("details:not([open])");
      const visible = !!anchor && !closedProof && anchor.getClientRects().length > 0;
      const hidden = !visible;
      if (note.hidden !== hidden) note.hidden = hidden;
      if (!visible) {
        note.style.top = "";
        continue;
      }
      const position = Math.max(anchor.getBoundingClientRect().top - top, bottom + gap);
      note.style.top = `${position}px`;
      bottom = position + note.getBoundingClientRect().height;
    }
    rail.style.height = `${Math.max(0, bottom)}px`;
    page.style.minHeight = `${Math.max(0, bottom + 24)}px`;
  };
  const schedule = () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(layout);
    }
  };
  wideScreen.addEventListener("change", schedule);
  window.addEventListener("resize", schedule);
  new ResizeObserver(schedule).observe(main);
  const noteSizes = new ResizeObserver(schedule);
  for (const note of notes) noteSizes.observe(note);
  new MutationObserver(schedule).observe(main, { subtree: true, childList: true, attributes: true, attributeFilter: ["open", "aria-expanded", "hidden"] });
  document.fonts.ready.then(schedule);
  window.addEventListener("load", schedule);
  layout();
})();
