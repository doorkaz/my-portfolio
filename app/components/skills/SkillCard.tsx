import { JSX } from 'react'
import { Skill } from '@/models/skills.model'

export const SkillCard = (skill: Skill): JSX.Element => {
  return (
    <div className='bg-neutral-750 w-[160px] h-[160px] flex flex-col justify-center items-center rounded-lg flex-shrink-0'>
      <img
        width={64}
        height={64}
        loading='lazy'
        src={skill.src}
        alt={skill.alt}
      />
      <span className='text-lg text-neutral-400'>
        {skill.name}
      </span>
    </div>
  )
}
