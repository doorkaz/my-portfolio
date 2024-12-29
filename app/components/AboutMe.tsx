import { H2, H3, P } from '@/styled/twc.styled'
import { JSX } from 'react'

export const AboutMe = (): JSX.Element => {
  return (
    <section
      id='about-me'
      className='flex flex-col sm:flex-row justify-center items-start'
    >
      <div className='w-full sm:w-3/12 me-0 sm:me-8'>
        <H3>Hey, soy Pablo!</H3>
        <H2 className='font-bold mt-2 mb-2 sm:mb-0'>Estudiante de 4to año de Ingeniería Civil Informática.</H2>
      </div>

      <div className='w-full sm:w-9/12'>
        <P>A lo largo de mi carrera descubrí el atractivo del Desarrollo de Software, tanto Desarrollo Mobile, como Desarrollo Web. Tuve la oportunidad de experimentar continuadas veces con frameworks como React o Django en mis ramos de carrera, así fue como conocí esta disciplina.</P>
        <br />
        <P>Mi primera experiencia con páginas web fue en mi primer año de Ingeniería, con poca experiencia programando nos lanzaron a crear una aplicación con Django, en la que junto a un equipo creamos una app en la que se podía chatear en tiempo real, tuvimos que estudiar bastante, pero lo logramos y destacamos en ello.</P>
      </div>
    </section>
  )
}
