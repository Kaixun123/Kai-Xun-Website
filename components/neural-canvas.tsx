"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulsePhase: number
  pulseSpeed: number
}

interface Packet {
  from: number
  to: number
  progress: number
  speed: number
}

export function NeuralCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const isMobile = window.innerWidth < 768
    const NODE_COUNT = isMobile ? 28 : 55
    const MAX_DIST = isMobile ? 110 : 155

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      radius: Math.random() * 1.6 + 0.8,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.018 + 0.008,
    }))

    const packets: Packet[] = []
    let packetTick = 0
    let animFrame: number

    const spawnPacket = () => {
      for (let attempt = 0; attempt < 12; attempt++) {
        const i = Math.floor(Math.random() * nodes.length)
        const j = Math.floor(Math.random() * nodes.length)
        if (i === j) continue
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST) {
          packets.push({ from: i, to: j, progress: 0, speed: Math.random() * 0.018 + 0.006 })
          return
        }
      }
    }

    const draw = () => {
      packetTick++
      if (packetTick % 18 === 0 && packets.length < 18) spawnPacket()

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      }

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0, 180, 220, ${alpha})`
            ctx.lineWidth = 0.55
            ctx.stroke()
          }
        }
      }

      // Packets (data flow dots)
      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k]
        p.progress += p.speed
        if (p.progress >= 1) { packets.splice(k, 1); continue }

        const a = nodes[p.from]
        const b = nodes[p.to]
        const px = a.x + (b.x - a.x) * p.progress
        const py = a.y + (b.y - a.y) * p.progress

        const trail = ctx.createRadialGradient(px, py, 0, px, py, 6)
        trail.addColorStop(0, "rgba(0, 230, 255, 0.92)")
        trail.addColorStop(0.5, "rgba(0, 160, 220, 0.35)")
        trail.addColorStop(1, "rgba(0, 120, 200, 0)")
        ctx.beginPath()
        ctx.arc(px, py, 6, 0, Math.PI * 2)
        ctx.fillStyle = trail
        ctx.fill()
      }

      // Nodes
      for (const n of nodes) {
        n.pulsePhase += n.pulseSpeed
        const pulse = Math.sin(n.pulsePhase) * 0.5 + 0.5
        const r = n.radius * (1 + pulse * 0.45)
        const alpha = 0.38 + pulse * 0.52

        const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 7)
        halo.addColorStop(0, `rgba(0, 224, 255, ${alpha * 0.22})`)
        halo.addColorStop(1, "rgba(0, 224, 255, 0)")
        ctx.beginPath()
        ctx.arc(n.x, n.y, r * 7, 0, Math.PI * 2)
        ctx.fillStyle = halo
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 218, 255, ${alpha})`
        ctx.fill()
      }

      animFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      ro.disconnect()
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className ?? ""}`} />
}
