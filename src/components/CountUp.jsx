import React, { useState, useEffect } from 'react'

export default function CountUp({ end, decimals = 0, duration = 1 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start * Math.pow(10, decimals)) / Math.pow(10, decimals))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [end, duration, decimals])

  return <>{count.toFixed(decimals)}</>
}
