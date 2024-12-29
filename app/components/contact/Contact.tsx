import { JSX } from 'react'
import { SocialMediaItem } from './SocialMediaItem'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { Container, H2 } from '@/styled/twc.styled'

export const Contact = (): JSX.Element => {
  return (
    <footer id='contact' className='border-t border-neutral-750 mt-8'>
      <Container className='flex flex-col sm:flex-row w-full py-8 lg:py-16 gap-4'>
        <H2 className='flex justify-center sm:justify-start items-center text-center w-full sm:w-4/12 lg:6/12'>Contáctame.</H2>

        <div className='flex justify-evenly lg:justify-around items-start w-full sm:w-8/12 lg:w-6/12 gap-10'>
          <SocialMediaItem
            className='justify-center'
            name='LinkedIn'
            href='https://www.linkedin.com/in/pablo-retamales-jara/'
            hrefDisplay='linkedin.com/in/pablo-retamales-jara/'
            icon={FaLinkedin}
          />
          <SocialMediaItem
            className='justify-center'
            name='GitHub'
            href='https://github.com/doorkaz'
            hrefDisplay='github.com/doorkaz'
            icon={FaGithub}
          />
        </div>
      </Container>

    </footer>
  )
}
