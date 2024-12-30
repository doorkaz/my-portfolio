import { ButtonLink } from '@/components/ButtonLink'
import { Certification } from '@/models/certifications.model'
import { Span } from '@/styled/twc.styled'
import { JSX } from 'react'
import { FiExternalLink } from 'react-icons/fi'

export const CertificationCard = (props: Certification): JSX.Element => {
  const { id, name, platform, href } = props

  return (
    <div key={id} className='flex flex-col'>
      <Span className='flex items-center'>{name} ({platform})</Span>
      <ButtonLink
        className='w-[225px] mt-2'
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        icon={FiExternalLink}
      >
        Mostrar certificado
      </ButtonLink>
    </div>
  )
}
