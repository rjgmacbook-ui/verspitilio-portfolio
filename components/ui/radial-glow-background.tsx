import { cn } from "@/lib/utils"

export function RadialGlowBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 z-0", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
        }}
      />
    </div>
  )
}
