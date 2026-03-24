import { Link } from 'react-router';
import { User, GraduationCap, Code, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="p-8 md:p-16 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-8">HOME</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Welcome Card */}
          <div className="border-2 border-white p-8 rounded-lg bg-black/30 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="border-2 border-white p-3 rounded-lg">
                <User size={32} />
              </div>
              <h2 className="text-3xl font-bold">BIENVENIDO</h2>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              Hola, soy un desarrollador web full-stack apasionado por crear experiencias 
              digitales increíbles. Me especializo en desarrollo web moderno y diseño UI/UX.
            </p>
            <p className="text-gray-300">
              Explora mi portafolio para conocer más sobre mi trabajo y experiencia.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="border-2 border-white p-8 rounded-lg bg-black/30 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="border-2 border-white p-3 rounded-lg">
                <Award size={32} />
              </div>
              <h2 className="text-3xl font-bold">SOBRE MÍ</h2>
            </div>
            <div className="space-y-3 text-lg">
              <p><strong>Nombre:</strong> Tu Nombre</p>
              <p><strong>Profesión:</strong> Desarrollador Full-Stack</p>
              <p><strong>Experiencia:</strong> 4+ años</p>
              <p><strong>Ubicación:</strong> Ciudad, País</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all"
            >
              Contáctame
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="border-2 border-white p-4 rounded-lg">
            <GraduationCap size={40} />
          </div>
          <h2 className="text-4xl font-bold">EDUCACIÓN</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-white p-6 rounded-lg bg-black/30 backdrop-blur-sm">
            <p className="font-bold text-xl mb-2">2018 - 2022</p>
            <p className="text-2xl mb-2">Licenciatura en Informática</p>
            <p className="text-lg mb-1">Programa en Desarrollo de Software</p>
            <p className="text-gray-300">Universidad Tecnológica</p>
          </div>

          <div className="border-2 border-white p-6 rounded-lg bg-black/30 backdrop-blur-sm">
            <p className="font-bold text-xl mb-2">2022 - 2023</p>
            <p className="text-2xl mb-2">Certificación Profesional</p>
            <p className="text-lg mb-1">Desarrollo Web Full-Stack</p>
            <p className="text-gray-300">Bootcamp Intensivo</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="border-2 border-white p-4 rounded-lg">
            <Code size={40} />
          </div>
          <h2 className="text-4xl font-bold">HABILIDADES TÉCNICAS</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'MongoDB', 'Git', 'Figma'].map((skill) => (
            <div
              key={skill}
              className="border-2 border-white p-6 rounded-lg bg-black/30 backdrop-blur-sm text-center hover:bg-white/10 transition-all"
            >
              <p className="text-xl font-bold">{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}