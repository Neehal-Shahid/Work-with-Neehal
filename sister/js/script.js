/* ============================================================
   SISTER v26.0 — APPLICATION LOGIC
   Content lives in config.js. This file only handles behavior.
   ============================================================ */
(function () {
  "use strict";

  const data = window.birthdayData || {
    sisterName: "friend", fromName: "me", oldAge: 25, newAge: 26,
    role: "Software Engineer", memories: [], message: ["Happy birthday."],
    musicSrc: "", musicLabel: "song"
  };

  /* ---------------------------------------------------------
     Small helpers
  --------------------------------------------------------- */
  let skipRequested = false;

  function sleep(ms) {
    return new Promise((resolve) => {
      if (skipRequested) return resolve();
      const start = performance.now();
      function tick(now) {
        if (skipRequested || now - start >= ms) return resolve();
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  function el(tag, cls, html) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function typeInto(container, text, speed) {
    return new Promise((resolve) => {
      const span = document.createElement("span");
      container.appendChild(span);
      let i = 0;
      if (skipRequested) {
        span.textContent = text;
        return resolve();
      }
      const interval = setInterval(() => {
        if (skipRequested) {
          span.textContent = text;
          clearInterval(interval);
          return resolve();
        }
        span.textContent += text[i];
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });
  }

  /* ---------------------------------------------------------
     Stage navigation
  --------------------------------------------------------- */
  const STAGE_ORDER = ["terminal", "upgrade", "git", "debug", "emotional", "celebration"];
  const stageEls = {};
  STAGE_ORDER.forEach((id) => (stageEls[id] = document.getElementById("stage-" + id)));

  let currentStage = "terminal";

  function goToStage(id) {
    skipRequested = false;
    stageEls[currentStage].classList.remove("is-active");
    stageEls[id].classList.add("is-active");
    currentStage = id;
    ambientMode = id === "terminal" || id === "upgrade" || id === "git" || id === "debug" ? "term" : "warm";

    if (id === "emotional" || id === "celebration") {
      document.body.classList.add("theme-warm");
    }

    const skipHint = document.getElementById("skip-hint");
    if (id === "celebration") skipHint.classList.add("is-hidden");

    runStage(id);
  }

  const stageRunners = {};
  const stageStarted = {};
  function runStage(id) {
    if (stageStarted[id]) return;
    stageStarted[id] = true;
    if (stageRunners[id]) stageRunners[id]();
  }

  /* ---------------------------------------------------------
     Skip control — instantly finishes the current stage's
     async sequence rather than jumping the whole experience.
  --------------------------------------------------------- */
  document.getElementById("skip-hint").addEventListener("click", (e) => {
    e.preventDefault();
    skipRequested = true;
  });

  /* ===========================================================
     STAGE 0 — TERMINAL BOOT
  =========================================================== */
  stageRunners.terminal = async function () {
    const linesEl = document.getElementById("terminal-lines");
    const cta = document.getElementById("terminal-cta");

    const seq = [
      { text: "$ ./init_birthday_protocol.sh", cls: "prompt", speed: 28 },
      { text: "Initializing birthday protocol...", speed: 20, pause: 350 },
      { text: "[ok] loading modules", cls: "dim", speed: 0, pause: 200 },
      { text: "[ok] establishing secure connection", cls: "dim", speed: 0, pause: 350 },
      { spacer: true },
      { text: "Detecting user...", speed: 20, pause: 300 },
      { text: "[ok] biometric match: sibling", cls: "dim", speed: 0, pause: 450 },
      { spacer: true },
      { text: "User detected:", cls: "label", speed: 0, pause: 150 },
      { text: data.sisterName, cls: "highlight", speed: 55, pause: 500 },
      { spacer: true },
      { text: "Role:", cls: "label", speed: 0, pause: 150 },
      { text: data.role, cls: "value", speed: 26, pause: 450 },
      { spacer: true },
      { text: "Current version:", cls: "label", speed: 0, pause: 150 },
      { text: data.oldAge + ".0", cls: "value", speed: 40, pause: 500 },
      { spacer: true },
      { text: "New version available:", cls: "label", speed: 0, pause: 150 },
      { text: data.newAge + ".0", cls: "highlight", speed: 40, pause: 650 },
      { spacer: true },
      { text: "Preparing upgrade...", cls: "dim", speed: 20, pause: 700 },
      { spacer: true },
      { text: "Sister v" + data.newAge + ".0 is ready to install.", cls: "highlight", speed: 24, pause: 300 }
    ];

    for (const step of seq) {
      if (step.spacer) {
        linesEl.appendChild(el("div", "spacer"));
        continue;
      }
      const line = el("div", "line" + (step.cls ? " " + step.cls : ""));
      line.style.animationDelay = "0s";
      linesEl.appendChild(line);
      line.classList.add("typing-cursor");
      if (step.speed) {
        await typeInto(line, step.text, step.speed);
      } else {
        line.textContent = step.text;
      }
      line.classList.remove("typing-cursor");
      if (step.pause) await sleep(step.pause);
      document.getElementById("terminal-body").scrollTop = document.getElementById("terminal-body").scrollHeight;
    }

    cta.hidden = false;
    cta.querySelector("button").focus({ preventScroll: true });
  };

  document.getElementById("btn-install").addEventListener("click", () => {
    goToStage("upgrade");
  });

  /* ===========================================================
     STAGE 1 — UPGRADE / RELEASE NOTES
  =========================================================== */
  stageRunners.upgrade = async function () {
    const notesEl = document.getElementById("release-notes");
    const progressWrap = document.getElementById("install-progress-wrap");
    const fill = document.getElementById("progress-fill");
    const percentEl = document.getElementById("progress-percent");
    const buildResult = document.getElementById("build-result");
    const cta = document.getElementById("upgrade-cta");

    const notesHtml = [
      `<span class="rn-title">SISTER v${data.newAge}.0</span>`,
      `<span class="rn-dim">----------------------------</span>`,
      `<span class="rn-add">+ 1 year of experience</span>`,
      `<span class="rn-add">+ More memories</span>`,
      `<span class="rn-add">+ More achievements</span>`,
      `<span class="rn-add">+ More adventures</span>`,
      `<span class="rn-add">+ Increased wisdom</span>`,
      `<span class="rn-add">+ Unlimited potential</span>`,
      ``,
      `<span class="rn-dim">Known issues:</span>`,
      `<span class="rn-issue">- Still refuses to admit she's wrong</span>`,
      `<span class="rn-issue">- Occasionally steals sibling peace</span>`,
      `<span class="rn-issue">- Extremely difficult to debug</span>`
    ];

    for (const lineHtml of notesHtml) {
      const row = el("div", "rn-row", lineHtml || "&nbsp;");
      notesEl.appendChild(row);
      await sleep(90);
    }

    await sleep(500);
    progressWrap.hidden = false;

    let pct = 0;
    while (pct < 100) {
      if (skipRequested) { pct = 100; }
      else { pct += Math.random() * 9 + 4; }
      pct = Math.min(100, pct);
      fill.style.width = pct + "%";
      percentEl.textContent = Math.floor(pct) + "%";
      await sleep(skipRequested ? 0 : 110);
    }

    await sleep(300);
    buildResult.hidden = false;
    await sleep(400);
    cta.hidden = false;
    cta.querySelector("button").focus({ preventScroll: true });
  };

  document.getElementById("btn-continue-git").addEventListener("click", () => {
    goToStage("git");
  });

  /* ===========================================================
     STAGE 2 — GIT LOG
  =========================================================== */
  const gitLogEl = document.getElementById("git-log");
  const commitContinueBtn = document.getElementById("btn-continue-debug");

  stageRunners.git = function () {
    if (gitLogEl.children.length) return; // already built
    data.memories.forEach((commit, idx) => {
      const li = el("li", "git-commit");
      li.style.animationDelay = idx * 0.09 + "s";
      li.tabIndex = 0;
      li.setAttribute("role", "button");
      li.dataset.index = idx;

      const isRelease = commit.title.startsWith("release:");
      const titleHtml = isRelease
        ? commit.title.replace(/^(release):/, '<span class="fn">$1:</span>')
        : commit.title.replace(/^(feat):/, '<span class="fn">$1:</span>');

      li.innerHTML = `
        <div class="git-commit-row">
          <span class="git-commit-hash">${commit.hash}</span>
          <span class="git-commit-title">${titleHtml}</span>
          <span class="git-commit-badge">viewed</span>
        </div>`;

      li.addEventListener("click", () => openCommit(idx));
      li.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openCommit(idx); }
      });

      gitLogEl.appendChild(li);
    });
  };

  const modal = document.getElementById("commit-modal");
  const modalHash = document.getElementById("commit-modal-hash");
  const modalTitle = document.getElementById("commit-modal-title");
  const modalMemory = document.getElementById("commit-modal-memory");
  const modalIndex = document.getElementById("commit-modal-index");
  const modalPhoto = document.getElementById("commit-modal-photo");
  const viewedSet = new Set();

  function openCommit(idx) {
    const commit = data.memories[idx];
    modalHash.textContent = commit.hash;
    modalTitle.textContent = commit.title;
    modalMemory.textContent = commit.memory;
    modalIndex.textContent = String(idx + 1).padStart(2, "0");

    if (commit.photo) {
      modalPhoto.style.backgroundImage = `url("${commit.photo}")`;
      modalPhoto.hidden = false;
    } else {
      modalPhoto.hidden = true;
    }

    modal.hidden = false;

    const li = gitLogEl.children[idx];
    if (li && !li.classList.contains("is-viewed")) {
      li.classList.add("is-viewed");
      viewedSet.add(idx);
      if (viewedSet.size === data.memories.length) {
        commitContinueBtn.disabled = false;
      }
    }
  }

  function closeCommit() {
    modal.hidden = true;
  }

  document.getElementById("commit-modal-close").addEventListener("click", closeCommit);
  document.getElementById("commit-modal-backdrop").addEventListener("click", closeCommit);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeCommit();
  });

  document.getElementById("btn-continue-debug").addEventListener("click", () => {
    goToStage("debug");
  });

  /* ===========================================================
     STAGE 3 — DEBUG MINI-GAME
  =========================================================== */
  const dbg = {
    age: false,
    happy: false,
    cake: false
  };

  function checkDebugComplete() {
    const btn = document.getElementById("btn-compile");
    btn.disabled = !(dbg.age && dbg.happy && dbg.cake);
  }

  document.getElementById("dbg-age-btn").addEventListener("click", function () {
    document.getElementById("dbg-age-display").textContent = data.newAge;
    dbg.age = true;
    this.disabled = true;
    this.querySelector(".debug-fix-btn-arrow").textContent = "✓";
    checkDebugComplete();
  });

  const happySlider = document.getElementById("dbg-happy-slider");
  const happyDisplay = document.getElementById("dbg-happy-display");
  happySlider.addEventListener("input", function () {
    const v = Number(this.value);
    happyDisplay.textContent = v;
    if (v >= 100) {
      happyDisplay.classList.add("is-fixed");
      dbg.happy = true;
    } else {
      happyDisplay.classList.remove("is-fixed");
      dbg.happy = false;
    }
    checkDebugComplete();
  });

  const cakeToggle = document.getElementById("dbg-cake-toggle");
  const cakeDisplay = document.getElementById("dbg-cake-display");
  cakeToggle.addEventListener("click", function () {
    const checked = this.getAttribute("aria-checked") === "true";
    const next = !checked;
    this.setAttribute("aria-checked", String(next));
    cakeDisplay.textContent = String(next);
    cakeDisplay.classList.toggle("is-fixed", next);
    dbg.cake = next;
    checkDebugComplete();
  });

  document.getElementById("btn-compile").addEventListener("click", function () {
    this.disabled = true;
    const result = document.getElementById("debug-result");
    result.hidden = false;
    setTimeout(() => {
      document.getElementById("debug-cta").hidden = false;
      document.getElementById("btn-continue-emotional").focus({ preventScroll: true });
    }, 500);
  });

  document.getElementById("btn-continue-emotional").addEventListener("click", () => {
    goToStage("emotional");
  });

  /* ===========================================================
     STAGE 4 — EMOTIONAL TRANSITION
  =========================================================== */
  stageRunners.emotional = async function () {
    const preEl = document.getElementById("emotional-pre");
    const msgEl = document.getElementById("emotional-message");
    const continueBtn = document.getElementById("btn-continue-celebration");

    const preLines = ["Okay, enough debugging.", "There's actually something I wanted to tell you."];
    for (const text of preLines) {
      const line = el("div", "epre-line", text);
      preEl.appendChild(line);
      await sleep(1400);
    }

    await sleep(400);

    for (const text of data.message) {
      const line = el("p", "em-line", text);
      msgEl.appendChild(line);
      await sleep(1250);
    }

    const sig = el("p", "em-line em-sig", "&mdash; " + data.fromName);
    msgEl.appendChild(sig);
    await sleep(900);

    continueBtn.hidden = false;
  };

  document.getElementById("btn-continue-celebration").addEventListener("click", () => {
    goToStage("celebration");
  });

  /* ===========================================================
     STAGE 5 — CELEBRATION
  =========================================================== */
  const audioEl = document.getElementById("bg-audio");
  const musicToggle = document.getElementById("music-toggle");

  stageRunners.celebration = function () {
    if (data.musicSrc) {
      audioEl.src = data.musicSrc;
      musicToggle.hidden = false;
      document.getElementById("music-label").textContent = "play " + (data.musicLabel || "song");
    }
  };

  let isPlaying = false;
  musicToggle.addEventListener("click", () => {
    if (!data.musicSrc) return;
    if (isPlaying) {
      audioEl.pause();
      document.getElementById("music-icon").textContent = "▶";
      document.getElementById("music-label").textContent = "play " + (data.musicLabel || "song");
    } else {
      audioEl.play().catch(() => {});
      document.getElementById("music-icon").textContent = "❚❚";
      document.getElementById("music-label").textContent = "pause";
    }
    isPlaying = !isPlaying;
  });

  document.getElementById("btn-celebrate").addEventListener("click", function () {
    this.classList.add("is-done");
    this.disabled = true;

    document.getElementById("cake-wrap").hidden = false;

    const finalText = document.getElementById("final-text");
    finalText.textContent = `Happy Birthday, ${data.sisterName} 🎂❤️`;
    finalText.hidden = false;

    launchConfetti();
    setTimeout(launchFireworks, 500);
  });

  /* ===========================================================
     AMBIENT BACKGROUND PARTICLES
  =========================================================== */
  let ambientMode = "term";
  const bgCanvas = document.getElementById("bg-canvas");
  const bgCtx = bgCanvas.getContext("2d");
  let bgParticles = [];

  function resizeCanvas(canvas) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    return dpr;
  }

  let bgDpr = resizeCanvas(bgCanvas);

  function initBgParticles() {
    const count = window.innerWidth < 600 ? 34 : 60;
    bgParticles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.4,
      vy: Math.random() * 0.18 + 0.04,
      vx: (Math.random() - 0.5) * 0.08,
      o: Math.random() * 0.5 + 0.15
    }));
  }
  initBgParticles();

  function drawBg() {
    bgCtx.setTransform(bgDpr, 0, 0, bgDpr, 0, 0);
    bgCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const color = ambientMode === "term" ? [110, 231, 168] : [246, 200, 160];

    for (const p of bgParticles) {
      p.y -= p.vy;
      p.x += p.vx;
      if (p.y < -4) { p.y = window.innerHeight + 4; p.x = Math.random() * window.innerWidth; }
      bgCtx.beginPath();
      bgCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      bgCtx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${p.o})`;
      bgCtx.fill();
    }
    requestAnimationFrame(drawBg);
  }
  requestAnimationFrame(drawBg);

  window.addEventListener("resize", () => {
    bgDpr = resizeCanvas(bgCanvas);
    fxDpr = resizeCanvas(confettiCanvas);
    initBgParticles();
  });

  /* ===========================================================
     CONFETTI + FIREWORKS
  =========================================================== */
  const confettiCanvas = document.getElementById("confetti-canvas");
  const fxCtx = confettiCanvas.getContext("2d");
  let fxDpr = resizeCanvas(confettiCanvas);
  let confettiPieces = [];
  let fireworkParticles = [];
  let fxRunning = false;

  const confettiColors = ["#f2c78c", "#f6a8b8", "#9dffc4", "#f7f1e8", "#d97a95"];

  function launchConfetti() {
    const count = window.innerWidth < 600 ? 90 : 160;
    for (let i = 0; i < count; i++) {
      confettiPieces.push({
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * window.innerHeight * 0.5,
        w: Math.random() * 6 + 4,
        h: Math.random() * 10 + 6,
        vy: Math.random() * 2 + 2,
        vx: (Math.random() - 0.5) * 2.4,
        rot: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        life: 0,
        maxLife: 400 + Math.random() * 200
      });
    }
    ensureFxLoop();
    setTimeout(() => { confettiPieces = []; }, 7000);
  }

  function launchFireworks() {
    const bursts = 4;
    for (let b = 0; b < bursts; b++) {
      setTimeout(() => {
        const cx = window.innerWidth * (0.25 + Math.random() * 0.5);
        const cy = window.innerHeight * (0.2 + Math.random() * 0.3);
        const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        const particles = 46;
        for (let i = 0; i < particles; i++) {
          const angle = (Math.PI * 2 * i) / particles;
          const speed = Math.random() * 3 + 2;
          fireworkParticles.push({
            x: cx, y: cy,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color,
            life: 0,
            maxLife: 60 + Math.random() * 20
          });
        }
        ensureFxLoop();
      }, b * 550);
    }
  }

  function ensureFxLoop() {
    if (fxRunning) return;
    fxRunning = true;
    requestAnimationFrame(fxLoop);
  }

  function fxLoop() {
    fxCtx.setTransform(fxDpr, 0, 0, fxDpr, 0, 0);
    fxCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    confettiPieces.forEach((p) => {
      p.life++;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.02;
      p.rot += p.vr;
      fxCtx.save();
      fxCtx.translate(p.x, p.y);
      fxCtx.rotate((p.rot * Math.PI) / 180);
      fxCtx.globalAlpha = Math.max(0, 1 - p.life / p.maxLife);
      fxCtx.fillStyle = p.color;
      fxCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      fxCtx.restore();
    });
    confettiPieces = confettiPieces.filter((p) => p.life < p.maxLife && p.y < window.innerHeight + 40);

    fireworkParticles.forEach((p) => {
      p.life++;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.03;
      fxCtx.globalAlpha = Math.max(0, 1 - p.life / p.maxLife);
      fxCtx.beginPath();
      fxCtx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      fxCtx.fillStyle = p.color;
      fxCtx.fill();
    });
    fireworkParticles = fireworkParticles.filter((p) => p.life < p.maxLife);

    fxCtx.globalAlpha = 1;

    if (confettiPieces.length || fireworkParticles.length) {
      requestAnimationFrame(fxLoop);
    } else {
      fxRunning = false;
    }
  }

  /* ---------------------------------------------------------
     Boot
  --------------------------------------------------------- */
  document.title = `${data.sisterName}.exe`;
  runStage("terminal");
})();
