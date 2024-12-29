import { H2 } from '@/styled/twc.styled'
import { JSX } from 'react'
import { skills } from '@/data/skills.data'
import { SkillCard } from './SkillCard'
import { Skill } from '@/models/skills.model'
import { clsx } from 'clsx'
import animationsStyles from './Animations.module.css'

interface CarouselProps {
  className?: string
  direction: 'left' | 'right'
  items: Skill[]
  inverted?: boolean
}

const Carousel = ({ className, direction, items }: CarouselProps): JSX.Element => {
  const itemsByDirection = (direction === 'left') ? items.slice().reverse() : items
  const carouselStyles = 'flex whitespace-nowrap gap-10'
  const animationStyle = (direction === 'left') ? animationsStyles['animate-scrolling-left'] : animationsStyles['animate-scrolling-right']

  return (
    <div className={clsx(carouselStyles, animationStyle, className)}>
      {itemsByDirection.map((skill, index) => <SkillCard key={index} {...skill} />)}
    </div>
  )
}

export const Skills = (): JSX.Element => {
  const skillsCarouselItems = [...skills, ...skills]

  const baseStyles = 'overflow-hidden w-full py-6 relative'
  const beforeStyles = "before:content-[''] before:absolute before:w-[50px] before:bg-gradient-to-r before:h-full before:z-[2] before:left-0 before:top-0 before:from-neutral-800"
  const afterStyles = "after:content-[''] after:absolute after:w-[50px] after:bg-gradient-to-l after:h-full after:z-[2] after:right-0 after:top-0 after:from-neutral-800"

  return (
    <section
      id='skills'
      className='flex flex-col justify-items-center items-center bg-neutral-800 w-full rounded-2xl text-center py-2'
    >
      <H2 className='mt-4'>Stack de tecnologías</H2>

      {/* Sombra en los extremos del carousel */}
      <div className={clsx(baseStyles, beforeStyles, afterStyles)}>
        <Carousel direction='right' items={skillsCarouselItems} />
        <Carousel className='mt-6' direction='left' items={skillsCarouselItems} />
      </div>
    </section>
  )
}
