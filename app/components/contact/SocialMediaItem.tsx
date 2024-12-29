import clsx from 'clsx'
import { JSX } from 'react'
import { IconType } from 'react-icons'

interface SocialMediaItemProps {
  className?: string
  name: string
  href: string
  hrefDisplay: string
  icon: IconType
}

export const SocialMediaItem = (props: SocialMediaItemProps): JSX.Element => {
  const { className, name, href, hrefDisplay, icon: Icon } = props

  return (
    <div className={clsx('flex justify-start items-center', className)}>
      <a
        className='flex flex-row justify-center items-center'
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='flex flex-col justify-center items-center rounded-full p-[8px] bg-white'>
          <Icon className='w-[24px] h-[24px] text-black' />
        </div>

        <div className='flex flex-col justify-center items-start ml-2 whitespace-nowrap'>
          <span className='text-sm text-neutral-300'>{name}</span>
          <span className='hidden lg:flex text-md'>{hrefDisplay}</span>
          <span className='flex lg:hidden text-md'>Ir a {name}</span>
        </div>
      </a>
    </div>
  )
}
