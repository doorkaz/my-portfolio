import { Project } from '@/models/projects.model'
import { H2, P } from '@/styled/twc.styled'
import DefaultCardImage from '@/public/assets/images/hero-section-background.jpg'
import { JSX } from 'react'
import Image from 'next/image'
import { HighlightText } from '@/components/HighlightText'

export const ProjectCard = (project: Project): JSX.Element => {
  const imageSrc = (project.images.length > 0) ? project.images[0] : DefaultCardImage

  return (
    <article className='flex flex-col xl:flex-row xl:items-start bg-neutral-800 w-full h-full hyphens-auto xl:hyphens-none xl:h-[550px] 2xl:h-[600px] rounded-3xl px-8 pt-4 overflow-hidden' lang='de'>
      {/* Descripción */}
      <div className='text-start w-full xl:w-5/12 xl:me-8 mb-2 xl:mb-0'>
        <small className='text-base'>{project.type} - {project.job} - {project.year}</small>
        <H2 className='font-bold text-neutral-300 my-3'>{project.name}</H2>
        <P className=' font-lighter'>{project.description}</P>

        {/* Stack */}
        <HighlightText className='font-lighter my-1'>{project.stack.join(', ')}</HighlightText>
      </div>

      {/* Imagen */}
      <figure className='aspect-[4/3] w-full xl:w-7/12 h-full block relative rounded-t-2xl xl:rounded-t-3xl overflow-hidden'>
        <Image
          className='w-auto h-full object-cover object-center'
          src={imageSrc}
          fill
          alt={project.name}
        />
      </figure>
    </article>
  )
}
