import { twc } from 'react-twc'

// Typography Components - Headers tags h1, h2, h3
export const H1 = twc.h1`text-3xl xs:text-5xl md:text-7xl lg:text-8xl xl:text-9xl`
export const H2 = twc.h2`text-2xl md:text-2xl lg:text-3xl xl:text-4xl`
export const H3 = twc.h3`text-xl xs:text-2xl`

// Typography Components - Paragraph
export const P = twc.p`text-lg xs:text-xl`

// Typography Components - Span
export const Span = twc.span`text-xl`

// Layout Components - Container
export const Container = twc.div`container mx-auto px-12`
