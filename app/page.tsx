import { FilmList } from "@/components/ui/film-list"
import { SimpleHeader } from "@/components/ui/simple-header"
// import { RadialGlowBackground } from "@/components/ui/radial-glow-background"
import MistBackground from "@/components/ui/realistic-fog-background"
// import { GradientBackground4 } from "@/components/ui/gradient-background-4"


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

        {/* <RadialGlowBackground /> */}
        <MistBackground />
        {/* <GradientBackground4 /> */}
        {/* <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/AU-FG-Texture5-8K.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
          }}
        /> */}

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
          className="relative z-30 flex flex-col md:flex-row flex-1 justify-end md:justify-start"
          style={{
            padding: "clamp(2rem, 5vw, 5rem)",
            paddingBottom: "clamp(5rem, 10vh, 9rem)",
            paddingTop: "clamp(7rem, 12vh, 10rem)",
            gap: "clamp(2rem, 5vw, 5rem)",
          }}
        >
          {/* Left — identity */}
          <div className="flex flex-col justify-start md:justify-end" style={{ flex: "0 0 38%", minWidth: 0 }}>
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
                I haven't watched LOTR yet.
                <br />
                Peggy Olson to come up with something witty here.
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
      <SimpleHeader />
      <Hero />
      <FilmsSection />
    </main>
  );
}
