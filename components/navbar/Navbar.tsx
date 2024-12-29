'use client'
import { JSX } from 'react'
import { NavLink } from './NavLink'
import { useScroll } from '@/hooks/useScroll'
import clsx from 'clsx'

export const Navbar = (): JSX.Element => {
  const { isScrollingUp, isScrolledPastScreen } = useScroll()

  const navbarStyles = 'list-none m-0 flex flex-row px-12 py-8 top-0 left-0 w-full fixed bg-neutral-900 transition-transform duration-300 z-50'
  const scrollStyles = isScrollingUp ? 'translate-y-0' : '-translate-y-full'
  const scrollPastHeroSection = isScrolledPastScreen ? 'bg-neutral-900 shadow backdrop-blur-[3px]' : 'bg-transparent'

  return (
    <nav className={clsx(navbarStyles, scrollStyles, scrollPastHeroSection)}>
      <NavLink href='#'>Inicio</NavLink>
      <NavLink href='#projects'>Proyectos</NavLink>
      <NavLink href='#contact'>Contacto</NavLink>
    </nav>
  )
}
