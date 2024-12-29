import { H2, Span } from '@/styled/twc.styled'
import { JSX } from 'react'

export const Education = (): JSX.Element => {
  return (
    <section
      id='education'
      className='grid grid-cols-1 lg:grid-cols-2 justify-start items-start w-full gap-8'
    >
      <div className='flex flex-col'>
        <H2 className='mb-2'>Educación</H2>
        <Span>Universidad Técnica Federico Santa María (UTFSM)</Span>
        <Span>Ingeniería Civil Informática</Span>
        <Span>2021 - Actualidad</Span>
      </div>

      <div className='flex flex-col'>
        <H2 className='mb-2'>Certificaciones</H2>
        <Span>Python sin fronteras: HTML, CSS, Flask y MySQL</Span>
      </div>
    </section>
  )
}
