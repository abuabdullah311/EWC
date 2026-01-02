/* ===============================
   EWC Global Marketing System
   Safe global polish WITHOUT breaking Tailwind transforms
   =============================== */

/* 0) Base font scaling (responsive) */
html { font-size: 15px; }
@media (min-width: 1024px) { html { font-size: 15.5px; } }
@media (max-width: 768px)  { html { font-size: 14px; } }

/* 1) Better readability globally */
body {
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}

/* Nicer selection */
::selection { background: rgba(18,146,183,0.22); }

/* 2) Heading vs body balance (global) */
.ewc-marketing h1,
.ewc-marketing h2,
.ewc-marketing h3 {
  letter-spacing: -0.02em;
}

.ewc-marketing h1 { line-height: 1.05; }
.ewc-marketing h2 { line-height: 1.12; }
.ewc-marketing h3 { line-height: 1.2; }

.ewc-marketing p,
.ewc-marketing li { line-height: 1.7; }

/* Make headings feel more premium */
.ewc-marketing h1,
.ewc-marketing h2 {
  text-wrap: balance;
}

/* 3) Marketing feel (buttons/links) - SAFE (no transform override) */
.ewc-marketing button {
  letter-spacing: 0.01em;
  font-weight: 800;
}

/* Give hover feel without touching transform */
.ewc-marketing a:hover,
.ewc-marketing button:hover {
  filter: brightness(0.98);
}

/* Reduce repaint issues for animated elements */
.ewc-marketing button,
.ewc-marketing a,
.ewc-marketing img {
  will-change: auto;
}

/* Optional: if you use flex list items, keep aligned nicely */
.ewc-marketing li {
  align-items: flex-start;
}
