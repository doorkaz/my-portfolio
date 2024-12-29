import { H2, P } from '@/styled/twc.styled'
import { JSX, ReactNode } from 'react'

interface QuestionProps {
  className?: string
  question: string
  children: ReactNode
}

export const Question = (props: QuestionProps): JSX.Element => {
  const { className, question, children } = props
  return (
    <div className={className}>
      <H2 className='text-start mb-2'>{question}</H2>
      <P>{children}</P>
    </div>
  )
}
