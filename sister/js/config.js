/* ============================================================
   SISTER v26.0 — PERSONALIZATION FILE
   ------------------------------------------------------------
   Everything you'll want to change lives in this one file.
   Edit the values below — you don't need to touch any other
   file to update names, dates, memories, the message, or music.
   ============================================================ */

window.birthdayData = {

  // Basic info
  sisterName: "Laiba",
  fromName: "Neehal",
  oldAge: 25,
  newAge: 26,
  birthday: "August 16, 2026",
  role: "Software Engineer",

  // ----------------------------------------------------------
  // GIT COMMIT HISTORY
  // Each entry is one "commit" in her life. Click order = array
  // order. Add, remove, or reorder freely — the UI adapts.
  //
  //   hash    -> any 7-character string, purely cosmetic
  //   title   -> the commit message shown in the log
  //   memory  -> the text revealed when it's clicked
  //   photo   -> optional. Path to an image in assets/images/memories/
  //              Leave as null if you don't have one yet.
  // ----------------------------------------------------------
  memories: [
    {
      hash: "f4a1c9e",
      title: "feat: survived another year",
      memory: "One of my favorite memories with you... (replace this with the actual memory, Neehal).",
      photo: null
    },
    {
      hash: "9b2d0aa",
      title: "feat: became a software engineer",
      memory: "Something I'll always remember about watching you get here...",
      photo: null
    },
    {
      hash: "c73e881",
      title: "feat: collected countless memories",
      memory: "That one trip / day / random moment we still talk about...",
      photo: null
    },
    {
      hash: "1de5f6b",
      title: "feat: became stronger",
      memory: "A moment I saw how much you'd grown, even if you didn't notice it yourself...",
      photo: null
    },
    {
      hash: "77a0c3d",
      title: "feat: made family proud",
      memory: "Something specific you did that made all of us proud of you...",
      photo: null
    },
    {
      hash: "e26v1.0",
      title: "release: sister-v26.0",
      memory: "Here's to this next year — and everything you're about to build.",
      photo: null
    }
  ],

  // ----------------------------------------------------------
  // THE MAIN MESSAGE
  // Shown gradually, line by line, in the emotional section.
  // Each string in the array = one line/paragraph that fades in
  // on its own. Keep lines reasonably short for pacing.
  // ----------------------------------------------------------
  message: [
    `Happy 26th birthday, Laiba.`,
    `I'm genuinely proud of the person you've become.`,
    `You've worked hard, grown so much, and built a life that deserves to be celebrated.`,
    `I'm lucky to have you as my sister.`,
    `I hope 26 brings you happiness, success, peace, new experiences, and everything you're working toward.`,
    `And no matter how many versions you release, you'll always be one of the most important people in my life.`,
    `Happy birthday.`
  ],

  // ----------------------------------------------------------
  // MUSIC (optional)
  // Drop an mp3 into assets/audio/ and point to it here.
  // Leave musicSrc as "" to hide the music control entirely.
  // Audio never autoplays — she has to press play herself.
  // ----------------------------------------------------------
  musicSrc: "", // e.g. "assets/audio/song.mp3"
  musicLabel: "birthday song"
};
