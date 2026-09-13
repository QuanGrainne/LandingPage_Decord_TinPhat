import { useEffect, useRef, useState } from 'react'

/**
 * useScrollReveal — custom hook for scroll-based reveal animations
 * Returns a ref to attach to the element and a boolean isVisible
 * @param {object} options - IntersectionObserver options
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once revealed, stop observing
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
        ...options,
      }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
