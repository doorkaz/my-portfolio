import { certifications } from '@/data/certifications.data'
import { H2, Span } from '@/styled/twc.styled'
import { JSX } from 'react'
import { CertificationCard } from './CertificationCard'

export const Education = (): JSX.Element => {
  return (
    <section
      id='education'
      className='grid grid-cols-1 lg:grid-cols-2 justify-start items-start w-full gap-8'
    >
      {/* Educación */}
      <div className='flex flex-col'>
        <H2 className='mb-2'>Educación</H2>
        <Span>Universidad Técnica Federico Santa María (UTFSM)</Span>
        <Span>Ingeniería Civil Informática</Span>
        <Span>2021 - Actualidad</Span>
      </div>

      {/* Certificaciones */}
      <div className='flex flex-col'>
        <H2 className='mb-2'>Certificaciones</H2>
        <div className='flex flex-col gap-8'>
          {certifications.map(certification => (
            <CertificationCard
              key={certification.id}
              {...certification}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
