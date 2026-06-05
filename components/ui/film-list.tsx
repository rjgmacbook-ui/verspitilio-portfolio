"use client"

import { useState, useRef, useEffect, useCallback } from "react"

const films = [
  {
    title: "The Weight of Dusk",
    year: "2024",
    genre: "Drama",
    duration: "94 min",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    video: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
  {
    title: "Salt and Silence",
    year: "2022",
    genre: "Documentary",
    duration: "67 min",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop",
    video: "https://media.w3.org/2010/05/bunny/trailer.mp4",
  },
  {
    title: "Fourteen Moons",
    year: "2021",
    genre: "Drama",
    duration: "112 min",
    img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800&auto=format&fit=crop",
    video: "https://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    title: "The Cartographer's Wife",
    year: "2019",
    genre: "Fiction",
    duration: "88 min",
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=800&auto=format&fit=crop",
    video: "https://media.w3.org/2010/05/video/movie_300.mp4",
  },
]

const TARGET_FPS = 8

function FilmVideoPlayer({ src, active }: { src: string; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (!active) {
      cancelAnimationFrame(rafRef.current)
      video.pause()
      return
    }

    // Load and pause — we manually scrub frames at TARGET_FPS
    video.currentTime = 0
    video.pause()

    const interval = 1000 / TARGET_FPS

    const step = (time: number) => {
      rafRef.current = requestAnimationFrame(step)
      if (time - lastTimeRef.current < interval) return
      lastTimeRef.current = time
      if (video.readyState >= 2) {
        video.currentTime += interval / 1000
        if (video.duration && video.currentTime >= video.duration) {
          video.currentTime = 0
        }
      }
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active])

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          filter: "grayscale(0.5) brightness(0.7) contrast(1.15)",
        }}
      />
      {/* Grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
          opacity: 0.07,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 3px)",
          pointerEvents: "none",
        }}
      />
      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.8) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  )
}

export function FilmList() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [expanded, setExpanded] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = useCallback((i: number) => {
    setHovered(i)
    timerRef.current = setTimeout(() => setExpanded(i), 2500)
  }, [])

  const handleLeave = useCallback(() => {
    setHovered(null)
    setExpanded(null)
    if (timerRef.current) clearTimeout(timerRef.current)
  }, [])

  return (
    <div style={{ position: "relative" }}>
      {/* Label */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.45rem",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#e8e0d0",
          opacity: expanded !== null ? 0 : 0.25,
          marginBottom: "1.4rem",
          transition: "opacity 0.4s ease",
          animation: "filmEntry 1s cubic-bezier(0.16,1,0.3,1) 0.8s both",
        }}
      >
        Selected Works
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {films.map((film, i) => {
          const isExpanded = expanded === i
          const isOther = expanded !== null && expanded !== i

          return (
            <div
              key={film.title}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={handleLeave}
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                height: isExpanded ? "55vh" : isOther ? "0px" : "auto",
                minHeight: isExpanded ? "55vh" : isOther ? "0px" : undefined,
                opacity: isOther ? 0 : 1,
                transition: "height 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease, min-height 0.7s cubic-bezier(0.16,1,0.3,1)",
                animation: `filmEntry 1s cubic-bezier(0.16,1,0.3,1) ${1.0 + i * 0.18}s both`,
                borderBottom: isOther ? "none" : "1px solid rgba(232,224,208,0.07)",
              }}
            >
              {/* Expanded video view */}
              {isExpanded && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                  }}
                >
                  <FilmVideoPlayer src={film.video} active={isExpanded} />
                  {/* Film info overlay — bottom */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "2rem 1.5rem 1.5rem",
                      background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                      zIndex: 3,
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.45rem", letterSpacing: "0.35em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "0.4rem", opacity: 0.8 }}>
                      {film.genre} · {film.duration}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1rem, 2vw, 1.4rem)", color: "#e8e0d0", letterSpacing: "-0.01em" }}>
                      {film.title}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#c9a84c", marginTop: "0.25rem", opacity: 0.7 }}>
                      {film.year}
                    </div>
                  </div>
                  {/* Corner: fps badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.4rem",
                      letterSpacing: "0.3em",
                      color: "#c9a84c",
                      opacity: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    {TARGET_FPS}fps
                  </div>
                </div>
              )}

              {/* Normal tile view */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  padding: "1.1rem 0",
                  opacity: isExpanded ? 0 : 1,
                  transition: "opacity 0.3s ease",
                  pointerEvents: isExpanded ? "none" : "auto",
                }}
              >
                {/* Thumbnail */}
                <div style={{ width: "100px", height: "120px", flexShrink: 0, overflow: "hidden", position: "relative" }}>
                  <img
                    src={film.img}
                    alt={film.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: hovered === i ? "saturate(1) brightness(1)" : "saturate(0) brightness(0.4)",
                      transform: hovered === i ? "scale(1.08)" : "scale(1)",
                      transition: "filter 0.5s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(201,168,76,0.12)",
                      opacity: hovered === i ? 1 : 0,
                      transition: "opacity 0.5s ease",
                    }}
                  />
                  {/* Dwell progress ring — thin amber arc that fills over 2.5s */}
                  {hovered === i && expanded === null && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "6px",
                        right: "6px",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        border: "1px solid rgba(201,168,76,0.3)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          border: "1.5px solid #c9a84c",
                          animation: "dwellRing 2.5s linear forwards",
                          clipPath: "inset(0 50% 0 0)",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.5rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)",
                        fontWeight: 300,
                        color: "#e8e0d0",
                        opacity: hovered === i ? 1 : 0.35,
                        transform: hovered === i ? "translateX(6px)" : "translateX(0)",
                        transition: "opacity 0.4s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {film.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.15em",
                        color: "#c9a84c",
                        opacity: hovered === i ? 0.9 : 0.3,
                        flexShrink: 0,
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      {film.year}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginTop: "0.25rem",
                      opacity: hovered === i ? 0.45 : 0.18,
                      transition: "opacity 0.4s ease",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#e8e0d0" }}>{film.genre}</span>
                    <span style={{ color: "rgba(232,224,208,0.3)", fontSize: "0.55rem" }}>·</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.18em", color: "#e8e0d0" }}>{film.duration}</span>
                  </div>

                  <div
                    style={{
                      height: "1px",
                      background: "linear-gradient(to right, #c9a84c, transparent)",
                      marginTop: "0.6rem",
                      transform: hovered === i ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes dwellRing {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
      `}</style>
    </div>
  )
}
