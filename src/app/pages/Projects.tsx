import { ExternalLink, Github, Laptop } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.',
      tags: ['React', 'Node.js', 'MongoDB'],
      year: '2023',
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas colaborativa con actualizaciones en tiempo real y notificaciones.',
      tags: ['Next.js', 'Firebase', 'Tailwind'],
      year: '2023',
    },
    {
      title: 'Portfolio Website',
      description: 'Sitio web de portafolio personal con diseño moderno y animaciones fluidas.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      year: '2024',
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard del clima con pronósticos de 7 días, gráficos interactivos y búsqueda por ubicación.',
      tags: ['Vue.js', 'Chart.js', 'API'],
      year: '2024',
    },
    {
      title: 'Social Media App',
      description: 'Red social con perfiles de usuario, publicaciones, comentarios y sistema de likes.',
      tags: ['React', 'Express', 'PostgreSQL'],
      year: '2023',
    },
    {
      title: 'Blog Platform',
      description: 'Plataforma de blogs con editor Markdown, categorías y sistema de comentarios.',
      tags: ['Next.js', 'Sanity CMS', 'Vercel'],
      year: '2024',
    },
  ];

  return (
    <div className="p-8 md:p-16 max-w-6xl mx-auto">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-6">PROJECTS</h1>
        <div>
          <p className="text-xl text-gray-300">
            Aquí encontrarás una selección de mis proyectos más destacados. Cada uno representa 
            un desafío único y una oportunidad de aprendizaje.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="border-2 border-white p-4 rounded-lg">
            <Laptop size={40} />
          </div>
          <h2 className="text-4xl font-bold">PROYECTO DESTACADO</h2>
        </div>

        <div className="border-2 border-white rounded-lg bg-black/30 backdrop-blur-sm overflow-hidden">
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-3xl font-bold mb-2">Crypto Screener Application</h3>
                <p className="text-gray-300">2024</p>
              </div>
              <div className="flex gap-3">
                <a href="#" className="border-2 border-white p-2 rounded-lg hover:bg-white hover:text-black transition-all">
                  <ExternalLink size={24} />
                </a>
                <a href="#" className="border-2 border-white p-2 rounded-lg hover:bg-white hover:text-black transition-all">
                  <Github size={24} />
                </a>
              </div>
            </div>

            <p className="text-lg mb-6 leading-relaxed">
              Una plataforma sofisticada de monitoreo y análisis de criptomonedas con filtrado 
              avanzado, feeds de precios en tiempo real e integración de wallet Web3 para 
              monitoreo de portafolio. Incluye gráficos interactivos y alertas personalizadas.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {['React', 'TypeScript', 'Web3', 'Tailwind CSS', 'Chart.js'].map((tag) => (
                <span key={tag} className="px-4 py-2 border-2 border-white rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-t-2 border-white/30 pt-6">
              <h4 className="font-bold text-xl mb-3">Características Principales:</h4>
              <ul className="space-y-2 text-gray-200">
                <li>- Monitoreo de precios en tiempo real de múltiples criptomonedas</li>
                <li>- Integración con wallets Web3 para tracking de portafolio</li>
                <li>- Gráficos interactivos con datos históricos</li>
                <li>- Sistema de alertas personalizadas</li>
                <li>- Diseño responsive y moderno</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-4xl font-bold mb-8">OTROS PROYECTOS</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-2 border-white p-6 rounded-lg bg-black/30 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-300">{project.year}</p>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="border border-white p-1.5 rounded hover:bg-white hover:text-black transition-all">
                    <ExternalLink size={18} />
                  </a>
                  <a href="#" className="border border-white p-1.5 rounded hover:bg-white hover:text-black transition-all">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <p className="text-gray-200 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 border border-white rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}