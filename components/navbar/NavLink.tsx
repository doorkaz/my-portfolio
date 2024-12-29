import { JSX } from 'react'

interface NavLinkInterface {
  href: string
  children: string
}

export const NavLink = ({ href, children }: NavLinkInterface): JSX.Element => {
  return (
    <li className='me-12'>
      <a href={href} className='text-xl'>{children}</a>
    </li>
  )
}
