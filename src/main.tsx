import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "../App";

/**
 * ✅ Global Marketing + Typography System
 * - Applies to the entire page without touching components
 * - Improves heading/body balance + marketing feel
 */
const GlobalEnhancements = () => {
  useEffect(() => {
    // Add a global "mode" class (safe + reversible)
    document.documentElement.classList.add("ewc-marketing");
    return () => document.documentElement.classList.remove("ewc-marketing");
  }, []);

  return (
    <style>
      {`
        /* ===============================
           0) Base font scaling (responsive)
           =============================== */
        html { font-size: 15px; }
        @media (min-width: 1024px) { html { font-size: 15.5px; } }
        @media (max-width: 768px)  { html { font-size: 14px; } }

        /* ===============================
           1) Better readability globally
           =============================== */
        body {
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: geometricPrecision;
        }

        /* Slightly nicer selection */
        ::selection { background: rgba(18,146,183,0.22); }

        /* ===============================
           2) Heading vs body balance (global)
           - Works even with Tailwind classes
           =============================== */
        .ewc-marketing h1,
        .ewc-marketing h2,
        .ewc-marketing h3 {
          letter-spacing: -0.02em;
        }

        .ewc-marketing h1 {
          line-height: 1.05;
        }

        .ewc-marketing h2 {
          line-height: 1.12;
        }

        .ewc-marketing h3 {
          line-height: 1.2;
        }

        .ewc-marketing p,
        .ewc-marketing li {
          line-height: 1.7;
        }

        /* ===============================
           3) Marketing feel (stronger hero + CTAs)
           =============================== */

        /* Make big headings feel more premium (without breaking layout) */
        .ewc-marketing h1 {
          text-wrap: balance;
        }
        .ewc-marketing h2 {
          text-wrap: balance;
        }

        /* Buttons: slightly stronger presence without changing your gradient */
        .ewc-marketing button {
          letter-spacing: 0.01em;
          font-weight: 800;
        }

        /* Subtle lift on hover for all clickable buttons/links (safe) */
        .ewc-marketing a:hover button,
        .ewc-marketing button:hover {
          transform: translateY(-1px);
        }

        /* Reduce "jumpiness" when transforms exist */
        .ewc-marketing button,
        .ewc-marketing a,
        .ewc-marketing img {
          will-change: transform;
        }

        /* ===============================
           4) Optional: keep lists aligned nicely if flex bullets exist
           (won't break your current layout)
           =============================== */
        .ewc-marketing li {
          align-items: flex-start;
        }
      `}
    </style>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalEnhancements />
    <App />
  </React.StrictMode>
);
