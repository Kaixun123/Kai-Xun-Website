"use client"

import { useEffect, useState } from "react"

export interface TitleLine {
  text: string
  className?: string
}

interface TypingTitleProps {
  lines: TitleLine[]
  speed?: number
  startDelay?: number
  className?: string
  style?: React.CSSProperties
  cursorColor?: string
}

export function TypingTitle({
  lines,
  speed = 52,
  startDelay = 600,
  className,
  style,
  cursorColor = "#cafe00",
}: TypingTitleProps) {
  const [typed, setTyped] = useState<string[]>(lines.map(() => ""))
  const [currentLine, setCurrentLine] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let lineIdx = 0
    let charIdx = 0
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      if (lineIdx >= lines.length) {
        setDone(true)
        return
      }

      const lineText = lines[lineIdx].text
      charIdx++

      const snapLine = lineIdx
      const snapChar = charIdx

      setTyped((prev) => {
        const next = [...prev]
        next[snapLine] = lineText.slice(0, snapChar)
        return next
      })
      setCurrentLine(snapLine)

      if (snapChar >= lineText.length) {
        lineIdx++
        charIdx = 0
        timer = setTimeout(tick, speed * 6)
      } else {
        const jitter = Math.random() * 20 - 10
        timer = setTimeout(tick, speed + jitter)
      }
    }

    timer = setTimeout(tick, startDelay)
    return () => clearTimeout(timer)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (done) {
      const fadeOut = setTimeout(() => setCursorVisible(false), 1500)
      return () => clearTimeout(fadeOut)
    }
    const blink = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(blink)
  }, [done])

  return (
    <div className={className} style={style}>
      {lines.map((line, i) => (
        <span key={i} className={`block ${line.className ?? ""}`}>
          {typed[i]}

          {currentLine === i && cursorVisible && (
            <span
              aria-hidden
              className="inline-block w-[3px] align-middle ml-[3px]"
              style={{
                height: "0.82em",
                marginBottom: "-0.02em",
                backgroundColor: cursorColor,
                boxShadow: `0 0 10px ${cursorColor}cc`,
              }}
            />
          )}

          {typed[i].length < line.text.length && (
            <span className="invisible select-none pointer-events-none" aria-hidden>
              {line.text.slice(typed[i].length)}
            </span>
          )}
        </span>
      ))}
    </div>
  )
}
