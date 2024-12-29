import { JSX } from 'react'
import { HeroSection } from './components/HeroSection'
import { AboutMe } from './components/AboutMe'
import { Container } from '@/styled/twc.styled'
import { Skills } from './components/skills/Skills'
import { Projects } from './components/projects/Projects'
import { FAQ as FrequentlyAskedQuestions } from './components/faq/FAQ'

export default function Home (): JSX.Element {
  return (
    <>
      <HeroSection />
      <Container className='flex flex-col py-8 gap-8'>
        <AboutMe />
        <Skills />
        <Projects />
        <FrequentlyAskedQuestions />
      </Container>
    </>
  )
}
