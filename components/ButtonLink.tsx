import React, { AnchorHTMLAttributes, JSX } from 'react'
import { IconType } from 'react-icons'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: IconType
}

export const ButtonLink = (props: ButtonLinkProps): JSX.Element => {
  const { icon: Icon, className, children, ...rest } = props
  return (
    <a
      className={`inline-flex justify-center items-center border border-neutral-400 rounded-2xl px-6 py-2 ${className ?? ''}`}
      {...rest}
    >
      {(Icon != null) && <Icon className='me-2' />}
      <span className='text-lg'>{children}</span>
    </a>
  )
}
