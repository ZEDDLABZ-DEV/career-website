'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const percent = (scrollTop / scrollHeight) * 100
      setScrollPercent(percent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className="scroll-progress"
      style={{ transform: `scaleX(${scrollPercent / 100})` }}
    />
  )
}
