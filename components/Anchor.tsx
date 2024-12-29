import clsx from 'clsx'
import { AnchorHTMLAttributes, JSX } from 'react'

export const Anchor = (props: AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  const { className, href, children } = props
  return (
    <a
      className={clsx('text-green-400 hover:text-green-500 underline', className)}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}
