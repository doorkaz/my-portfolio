'use client'
import { JSX } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { H2 } from '@/styled/twc.styled'
import { projects } from '@/data/projects.data'
import { ProjectCard } from './ProjectCard'
import { Project } from '@/models/projects.model'

import 'swiper/css'
import 'swiper/css/pagination'
import '@/styles/swiper.css'

export const Projects = (): JSX.Element => {
  const pagination = {
    clickable: true
  }

  return (
    <section id='projects' className='overflow-x-hidden mt-6'>
      <H2 className='mb-6'>Mis proyectos.</H2>
      <Swiper
        spaceBetween={40}
        className='mySwiper'
        pagination={pagination}
        modules={[Pagination]}
        grabCursor
        style={{ overflow: 'clip', overflowX: 'initial' }}
      >
        {projects.map((project: Project, index: number) => (
          <SwiperSlide key={index}>
            <ProjectCard key={index} {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
