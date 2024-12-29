import { useEffect, useState } from 'react'

export const useScroll = (): { isScrollingUp: boolean, isScrolledPastScreen: boolean } => {
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolledPastScreen, setIsScrolledPastScreen] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY

      setIsScrollingUp(currentScrollY < lastScrollY)
      setLastScrollY(currentScrollY)
      setIsScrolledPastScreen(currentScrollY > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return { isScrollingUp, isScrolledPastScreen }
}
