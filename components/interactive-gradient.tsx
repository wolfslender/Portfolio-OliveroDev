"use client"

import { useRef, useEffect } from "react"

export function InteractiveGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
    }
    resize()
    window.addEventListener("resize", resize)

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      }
    }
    window.addEventListener("mousemove", onMouse)

    const getColor = (hue: number, opacity: number) =>
      `oklch(0.58 0.18 ${hue} / ${opacity})`

    let frame: number
    const animate = () => {
      timeRef.current += 0.005
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      const cx = w * (0.5 + (mx - 0.5) * 0.3)
      const cy = h * (0.5 + (my - 0.5) * 0.3)
      const pulse = 0.8 + Math.sin(timeRef.current) * 0.2

      const grad1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.35 * pulse)
      grad1.addColorStop(0, getColor(30, 0.12))
      grad1.addColorStop(0.5, getColor(30, 0.06))
      grad1.addColorStop(1, getColor(30, 0))
      ctx.fillStyle = grad1
      ctx.fillRect(0, 0, w, h)

      const cx2 = w * (0.5 - (mx - 0.5) * 0.25)
      const cy2 = h * (0.5 - (my - 0.5) * 0.25)
      const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, w * 0.3 * pulse)
      grad2.addColorStop(0, getColor(145, 0.08))
      grad2.addColorStop(0.5, getColor(145, 0.04))
      grad2.addColorStop(1, getColor(145, 0))
      ctx.fillStyle = grad2
      ctx.fillRect(0, 0, w, h)

      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
