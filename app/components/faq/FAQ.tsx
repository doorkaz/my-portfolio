import { JSX } from 'react'
import { Question } from './Question'
import { HighlightText } from '@/components/HighlightText'
import { Anchor } from '@/components/Anchor'

export const FAQ = (): JSX.Element => {
  return (
    <section id='faq' className='flex flex-col gap-10'>
      <Question question='¿Qué estoy aprendiendo actualmente?'>
        Actualmente, me encuentro aprendiendo&nbsp;
        <Anchor href='https://nextjs.org/'>Next.js</Anchor> y&nbsp;
        <Anchor href='https://laravel.com/'>Laravel</Anchor>,
        siempre me encuentro mejorando técnicas de refactorización,
        formas de optimizar el código, legibilidad de mi código y
        aprendiendo buenas prácticas.
      </Question>

      <Question question='¿Qué he aprendido?'>
        Si bien considero que es importante dominar unas pocas tecnologías,
        considero que los fundamentos son mucho más importantes, ya que
        me ha hecho adaptarme fácilmente a otros lenguajes/frameworks, lo
        más importante que he aprendido:
        <HighlightText>
          &nbsp;patrones de diseño, arquitecturas como MVC/Microservicios, UX/UI, Atomic
          Design, principios SOLID y fundamentos del Clean Code.
        </HighlightText>
      </Question>

      <Question question='¿Cómo realicé mi portafolio?'>
        Recientemente, migré el portafolio de React.js puro a Next.js, para aprovechar
        su manejo del SEO. Usé <Anchor href='https://nextjs.org/'>Next.js</Anchor>,&nbsp;
        <Anchor href='https://www.typescriptlang.org/'>TypeScript</Anchor> y&nbsp;
        <Anchor href='https://tailwindcss.com/'>Tailwind</Anchor>, donde utilicé librerias
        como&nbsp;<Anchor href='https://swiperjs.com/'>Swiper</Anchor>,
        también apliqué lo aprendido con Atomic Design y Clean Architecture. Además, es un diseño propio, no utilicé
        ninguna plantilla, solo lo aprendido a lo largo del tiempo.
      </Question>
    </section>
  )
}
