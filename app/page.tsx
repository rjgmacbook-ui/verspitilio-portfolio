import { FilmList } from "@/components/ui/film-list"

const BatIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    className={className}
    viewBox="0 0 100 60"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={style}
  >
    <path d="M50 30
      C50 20 44 10 35 8
      C28 6 20 10 15 5
      C10 0 5 2 2 6
      C8 8 12 14 10 20
      C8 26 2 28 0 34
      C6 32 12 30 18 34
      C22 37 24 44 28 48
      C32 52 38 54 42 50
      C45 47 46 42 50 40
      C54 42 55 47 58 50
      C62 54 68 52 72 48
      C76 44 78 37 82 34
      C88 30 94 32 100 34
      C98 28 92 26 90 20
      C88 14 92 8 98 6
      C95 2 90 0 85 5
      C80 10 72 6 65 8
      C56 10 50 20 50 30Z
      M50 38 C47 42 44 46 50 50 C56 46 53 42 50 38Z" />
  </svg>
);

function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-16"
      style={{ borderBottom: "1px solid rgba(232,224,208,0.08)" }}
    >
      <div className="flex items-center gap-3">
        <BatIcon className="w-8 h-5 opacity-90" />
        <div className="leading-none">
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.95rem",
              letterSpacing: "0.25em",
              fontWeight: 600,
            }}
          >
            VESPERTILIO
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.5rem",
              letterSpacing: "0.3em",
              opacity: 0.5,
              marginTop: "2px",
            }}
          >
            MOTION PICTURES
          </div>
        </div>
      </div>

      <ul
        className="hidden md:flex items-center gap-10"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.25em",
          opacity: 0.6,
        }}
      >
        {["Work", "About", "Contact"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="hover:opacity-100 transition-opacity duration-300"
              style={{ textTransform: "uppercase" }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes batBreathe {
          0%, 100% { opacity: 0.038; transform: scale(1) translateY(0px); }
          50%       { opacity: 0.055; transform: scale(1.025) translateY(-6px); }
        }
        @keyframes lightLeak {
          0%   { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(220%) skewX(-12deg); opacity: 0; }
        }
        @keyframes scanPulse {
          0%, 100% { opacity: 0.018; }
          50%       { opacity: 0.032; }
        }
        @keyframes accentGrow {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
        @keyframes counterFlicker {
          0%, 92%, 95%, 100% { opacity: 0.22; }
          93%, 94%           { opacity: 0.08; }
        }

        .hero-fade-1 { animation: fadeUp 1.8s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
        .hero-fade-2 { animation: fadeUp 1.6s cubic-bezier(0.16,1,0.3,1) 1.0s both; }
        .hero-fade-3 { animation: fadeIn 1.8s ease 1.8s both; }
        .hero-fade-6 { animation: fadeIn 2.4s ease 2.4s both; }

        .bat-watermark {
          animation: batBreathe 9s ease-in-out infinite;
        }
        .light-leak {
          animation: lightLeak 14s ease-in-out 3s infinite;
        }
        .scan-lines {
          animation: scanPulse 6s ease-in-out infinite;
        }
        .accent-line {
          animation: accentGrow 1.2s cubic-bezier(0.16,1,0.3,1) 1.2s both;
        }
        .frame-counter {
          animation: counterFlicker 8s ease-in-out 4s infinite;
        }

        @keyframes filmEntry {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="grain relative min-h-screen overflow-hidden flex flex-col">

        {/* Deep vignette — heavier at edges */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `
              radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 100%),
              linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 20%, transparent 75%, rgba(0,0,0,0.7) 100%)
            `,
          }}
        />

        {/* Scan lines texture */}
        <div
          className="scan-lines pointer-events-none absolute inset-0 z-10"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(232,224,208,0.03) 3px, rgba(232,224,208,0.03) 4px)",
          }}
        />



        {/* Main content — flex row on desktop, column on mobile */}
        <div
          className="relative z-30 flex flex-col md:flex-row flex-1"
          style={{
            padding: "clamp(2rem, 5vw, 5rem)",
            paddingBottom: "clamp(5rem, 10vh, 9rem)",
            paddingTop: "clamp(7rem, 12vh, 10rem)",
            gap: "clamp(2rem, 5vw, 5rem)",
          }}
        >
          {/* Left — identity */}
          <div className="flex flex-col justify-end" style={{ flex: "0 0 38%", minWidth: 0 }}>
            <div
              className="accent-line"
              style={{ width: "52px", height: "1px", background: "#c9a84c", marginBottom: "1.6rem" }}
            />
            <h1
              className="hero-fade-1"
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 300,
                fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)",
                lineHeight: 1.0,
                color: "#e8e0d0",
                letterSpacing: "-0.03em",
                opacity: 0,
                marginBottom: "0.2em",
              }}
            >
              Santosh MP
            </h1>
            <p
              className="hero-fade-2"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.4em",
                color: "#c9a84c",
                opacity: 0,
                textTransform: "uppercase",
                marginBottom: "2.5rem",
              }}
            >
              Filmmaker · Independent Cinema
            </p>
            <div className="hero-fade-3" style={{ opacity: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1.8rem" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontWeight: 300, fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)", color: "#e8e0d0", opacity: 0.5, lineHeight: 1.9, maxWidth: "360px", letterSpacing: "0.05em" }}>
                He doesn&apos;t document the world.
                <br />
                He decides what it means.
              </p>
              <a href="#" className="cta-btn" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#0a0a0a", background: "#c9a84c", padding: "0.85rem 1.8rem", textDecoration: "none", transition: "background 0.3s ease", display: "inline-block" }}>
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right — film list, desktop only */}
          <div className="hidden md:flex flex-col justify-center flex-1">
            <FilmList />
          </div>
        </div>{/* end main content */}

        {/* Bottom bar */}
        <div
          className="hero-fade-6 absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between"
          style={{
            padding: "1.5rem clamp(2rem, 5vw, 5rem)",
            borderTop: "1px solid rgba(232,224,208,0.07)",
            opacity: 0,
          }}
        >
          {/* Scroll indicator */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.48rem",
              letterSpacing: "0.4em",
              opacity: 0.3,
              writingMode: "horizontal-tb",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "28px",
                height: "1px",
                background: "rgba(232,224,208,0.3)",
              }}
            />
            Scroll
          </div>

          {/* Right: film format label */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.48rem",
              letterSpacing: "0.3em",
              opacity: 0.2,
              textTransform: "uppercase",
            }}
          >
            35mm · Anamorphic
          </div>
        </div>

      </section>
    </>
  );
}

function FilmsSection() {
  return (
    <section
      className="md:hidden"
      style={{
        background: "#0a0a0a",
        padding: "clamp(4rem, 8vh, 7rem) clamp(2rem, 5vw, 5rem) clamp(4rem, 8vh, 7rem)",
        borderTop: "1px solid rgba(232,224,208,0.07)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <FilmList />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FilmsSection />
    </main>
  );
}
