import clsx from 'clsx'
import { HTMLAttributes, JSX } from 'react'

export const HighlightText = (props: HTMLAttributes<HTMLSpanElement>): JSX.Element => {
  const { className, children } = props

  return (
    <span
      className={clsx('text-green-400', className)}
    >
      {children}
    </span>
  )
}
