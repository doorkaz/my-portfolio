'use client'
import { JSX } from 'react'
import { NavLink } from './NavLink'
import { useScroll } from '@/hooks/useScroll'
import clsx from 'clsx'

export const Navbar = (): JSX.Element => {
  const { isScrollingUp, isScrolledPastScreen } = useScroll()

  const navbarStyles = 'fixed flex flex-row px-12 py-8 w-full transition-transform duration-300 z-50'
  const scrollStyles = isScrollingUp ? 'translate-y-0' : '-translate-y-full'
  const scrollPastHeroSection = isScrolledPastScreen ? 'bg-neutral-900 shadow backdrop-blur-[3px]' : 'bg-transparent'

  return (
    <nav className={clsx(navbarStyles, scrollStyles, scrollPastHeroSection)}>
      <ul className='flex list-none m-0'>
        <NavLink href='#'>Inicio</NavLink>
        <NavLink href='#projects'>Proyectos</NavLink>
        <NavLink href='#contact'>Contacto</NavLink>
      </ul>
    </nav>
  )
}
