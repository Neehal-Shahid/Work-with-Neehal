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
  // Each entry is one "commit." Click order = array order.
  // Add, remove, or reorder freely — the UI adapts.
  //
  // These are written as general appreciation/wishes rather than
  // specific memories — easy to keep as-is, or swap any line for
  // a real memory later if you ever want to.
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
      memory: "Another year in the books. You make it look easier than it probably is.",
      photo: null
    },
    {
      hash: "9b2d0aa",
      title: "feat: became a software engineer",
      memory: "Building an actual career out of nothing but hard work — still impressive to me, every time I think about it.",
      photo: null
    },
    {
      hash: "c73e881",
      title: "feat: showed up for the family, every time",
      memory: "You've done more for this family than you probably give yourself credit for. I notice it, even when I don't say so.",
      photo: null
    },
    {
      hash: "1de5f6b",
      title: "feat: carried more than she let on",
      memory: "Being the older one comes with a weight nobody really thanks you for. So — thank you.",
      photo: null
    },
    {
      hash: "77a0c3d",
      title: "feat: made family proud",
      memory: "Every year you add to that list. Genuinely.",
      photo: null
    },
    {
      hash: "e26v1.0",
      title: "release: sister-v26.0",
      memory: "Here's to whatever you build next. I hope it's good to you, for once.",
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
    `I don't say this enough, but I'm proud of who you've become.`,
    `You've worked hard and grown a lot — and honestly, you've done more for this family, and for me, than I've ever properly thanked you for.`,
    `Being the older one isn't always easy, and I know you've carried more of that than you let on.`,
    `I hope this year gives some of that back to you — happiness, peace, and good things that are just for you.`,
    `You'll always be my sister, no matter how many versions you release.`,
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
