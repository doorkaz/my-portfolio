import { JSX } from 'react'
import { HeroSection } from './components/HeroSection'
import { AboutMe } from './components/AboutMe'
import { Container } from '@/styled/twc.styled'

export default function Home (): JSX.Element {
  return (
    <>
      <HeroSection />
      <Container>
        <AboutMe />
      </Container>
    </>
  )
}
