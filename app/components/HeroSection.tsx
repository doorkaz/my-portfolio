import { ButtonLink } from '@/components/ButtonLink'
import { H1, H2 } from '@/styled/twc.styled'
import { JSX } from 'react'
import { FaDownload } from 'react-icons/fa6'

const curriculumPath = '/assets/docs/curriculum.pdf'

export const HeroSection = (): JSX.Element => {
  return (
    <div className='w-screen h-screen bg-cover bg-hero-section'>
      <div className='flex flex-col justify-center items-center text-center w-screen h-screen'>
        <H1>Hey! Soy Pablo.</H1>
        <H2 className='mt-5'>Estudiante de 4to año de Ingeniería Civil Informática UTFSM</H2>
        <ButtonLink
          className='mt-5'
          icon={FaDownload}
          href={curriculumPath}
          download='CV_RETAMALES_PABLO'
        >
          Descargar CV
        </ButtonLink>
      </div>
    </div>
  )
}
