import { Project } from '@/models/projects.model'

export const projects: Project[] = [
  {
    id: 1,
    name: 'ComunidadEdificio',
    type: 'Web App',
    year: '2024',
    job: 'Frontend',
    stack: ['React.js', 'Figma', 'SCSS', 'JavaScript', 'ESLint'],
    description: 'Diseño de un software para la administración de una comunidad de un edificio',
    tasks: '',
    color: 'text-red-500',
    link: 'https://github.com/doorkaz/INF322-DIU-ComunidadEdificio',
    images: [
      '/assets/images/projects/comunidadedificio/comunidadEdificio.webp'
    ]
  },
  {
    id: 2,
    name: 'Datafy',
    type: 'Web App',
    year: '2024',
    job: 'Proyecto Personal',
    stack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'TailwindCSS', 'ESLint'],
    description: 'Aplicación web donde puedes visualizar estadísticas de Spotify.',
    tasks: 'Me enseñó muchas cosas.',
    color: 'text-[#20b672]',
    images: [
      '/assets/images/projects/datafy/datafy.webp'
    ]
  },
  {
    id: 3,
    name: 'Hospitapp',
    type: 'Web App',
    year: '2024',
    job: 'QA',
    stack: ['React.js, Node.js, Express.js, MongoDB, Sonarcloud, Postman', 'Unittest'],
    description: 'Aplicación para gestionar la toma de horas en un hospital público.',
    tasks: '',
    color: 'text-[#20b672]',
    images: [
      '/assets/images/projects/hospitapp/hospitapp.webp'
    ]
  },
  {
    id: 4,
    name: 'Claps',
    type: 'Mobile App',
    year: '2023',
    job: 'Frontend',
    stack: ['React Native', 'TypeScript', 'Django DRF', 'SQLite3', 'Python', 'Bootstrap'],
    description: 'Aplicación para descubrir y dar difusión a obras de teatro cercanas a su ubicación.',
    tasks: 'Diseño de la aplicación con el framework de Bootstrap, creación de peticiones a la API con Axios y depuración de errores trabajando en sincronía con el Backend para garantizar un consumo de la API Rest de forma exitosa.',
    color: 'text-[#20b672]',
    images: [
      '/assets/images/projects/claps/claps.webp'
    ]
  },
  {
    id: 5,
    name: 'EasyTake',
    type: 'Web App',
    year: '2023',
    job: 'Full-stack',
    stack: ['Node.js', 'React.js', 'Express.js', 'JavaScript', 'MongoDB', 'CSS3', 'Bootstrap'],
    description: 'Aplicación para gestionar la toma de horas en un hospital público.',
    tasks: 'Creación de modelos, gestión de solicitudes HTTP mediante llamadas creando la API REST con Express.js, depuración de las solicitudes HTTP, creación de la solicitud de toma de horas y la visualización de los exámenes por fecha.',
    color: 'text-[#20b672]',
    images: [
      '/assets/images/projects/easytake/easytake.webp'
    ]
  },
  {
    id: 6,
    name: 'PrestigeTravels',
    type: 'Web App',
    year: '2023',
    job: 'Full-stack',
    stack: ['PHP', 'MySQL', 'SQL Server', 'CSS3', 'Bootstrap'],
    description: 'Aplicación para adquirir paquetes turísticos y reservar alojamientos en hoteles.',
    tasks: 'Implementación de querys SQL para la visualización del contenido en la página, implementación de tanto funciones clave como búsqueda avanzada, carrito de compras y wishlist, así como el diseño de la página con Bootstrap.',
    color: 'text-[#20b672]',
    images: [
      '/assets/images/projects/prestigetravels/prestigetravels.webp'
    ]
  }
]
