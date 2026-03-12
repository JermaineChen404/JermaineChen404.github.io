(function () {
  "use strict";

  const homeRoot = document.querySelector(".home-shell");
  if (!homeRoot) return;

  const rotatingEl = document.querySelector("[data-rotating-text]");
  const rotatingWords = ["market intuition", "clear summaries", "exam-ready notes", "faster review"];
  let rotatingIndex = 0;

  if (rotatingEl) {
    rotatingEl.textContent = rotatingWords[0];
    window.setInterval(() => {
      rotatingIndex = (rotatingIndex + 1) % rotatingWords.length;
      rotatingEl.textContent = rotatingWords[rotatingIndex];
    }, 1800);
  }

  const counters = document.querySelectorAll("[data-counter-target]");
  const animateCounter = (el) => {
    const target = Number(el.dataset.counterTarget || "0");
    if (!target || Number.isNaN(target)) return;
    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
      el.textContent = String(value);
      if (progress < 1) window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
  };

  const revealNodes = document.querySelectorAll(".home-reveal");
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (entry.target.hasAttribute("data-counter-target")) animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  revealNodes.forEach((el) => io.observe(el));
  counters.forEach((el) => io.observe(el));

  const filterButtons = document.querySelectorAll(".home-filter");
  const cards = document.querySelectorAll(".home-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.filter || "all";

      filterButtons.forEach((other) => other.classList.remove("is-active"));
      btn.classList.add("is-active");

      cards.forEach((card) => {
        const track = card.dataset.track || "";
        const matches = selected === "all" || track.includes(selected);
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });
})();
