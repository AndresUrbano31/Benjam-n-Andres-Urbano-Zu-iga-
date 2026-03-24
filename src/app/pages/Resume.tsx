import { User, GraduationCap, Code, Briefcase, Mail, Award, FileText } from 'lucide-react';
import backgroundImage from 'figma:asset/0cb28bc1e0c43595b02c27fcf2a8c93e191fd61d.png';

export default function Resume() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Resume Card */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 text-white">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-wider">
              MY RESUME
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                {/* INFO Section */}
                <div className="border-2 border-white/40 rounded-xl p-6 bg-black/30 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="border-2 border-white rounded-lg p-3">
                      <User size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-3">INFO</h2>
                      <div className="space-y-1 text-sm">
                        <p><span className="font-semibold">Nombre:</span> Tu Nombre</p>
                        <p><span className="font-semibold">Profesión:</span> Desarrollador Full-Stack</p>
                        <p><span className="font-semibold">Experiencia:</span> 4+ años</p>
                        <p><span className="font-semibold">Ubicación:</span> Ciudad, País</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EDUCATION Section */}
                <div className="border-2 border-white/40 rounded-xl p-6 bg-black/30 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="border-2 border-white rounded-lg p-3">
                      <GraduationCap size={32} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">EDUCACIÓN</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-sm mb-2">2018 - 2022</p>
                          <p className="font-semibold">Licenciatura en Informática</p>
                          <p className="text-sm">Programa en Desarrollo de Software</p>
                          <p className="text-sm text-gray-300">Universidad Tecnológica</p>
                        </div>

                        <div className="border-t border-white/30 pt-4">
                          <p className="font-semibold text-sm mb-2">2022 - 2023</p>
                          <p className="font-semibold">Certificación Profesional</p>
                          <p className="text-sm">Desarrollo Web Full-Stack</p>
                          <p className="text-sm text-gray-300">Bootcamp Intensivo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WORK EXPERIENCE Section */}
                <div className="border-2 border-white/40 rounded-xl p-6 bg-black/30 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="border-2 border-white rounded-lg p-3">
                      <Briefcase size={32} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-3">EXPERIENCIA LABORAL</h2>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-sm mb-1">2020 - Presente</p>
                          <p className="font-semibold">Desarrollador Full-Stack</p>
                          <p className="text-sm text-gray-300 mb-2">Empresa Tecnológica</p>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>- Desarrollo de aplicaciones web modernas</li>
                            <li>- Implementación de interfaces responsivas</li>
                            <li>- Optimización de rendimiento</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTACT Section */}
                <div className="border-2 border-white/40 rounded-xl p-6 bg-black/30 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="border-2 border-white rounded-lg p-3">
                      <Mail size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-3">CONTACTO</h2>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <p>+1 234 567 8900</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📧</span>
                          <p>tu.email@example.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🌐</span>
                          <p>www.tu-portafolio.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>💼</span>
                          <p>linkedin.com/in/tu-perfil</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-start gap-2 border-t border-white/30 pt-4">
                        <FileText size={20} className="flex-shrink-0 mt-0.5" />
                        <p className="text-xs italic">
                          "Referencias disponibles a solicitud"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* TECHNICAL SKILLS Section */}
                <div className="border-2 border-white/40 rounded-xl p-6 bg-black/30 backdrop-blur-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="border-2 border-white rounded-lg p-3">
                      <Code size={32} />
                    </div>
                    <h2 className="text-2xl font-bold">HABILIDADES<br />TÉCNICAS</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'React', color: 'border-cyan-400' },
                      { name: 'TypeScript', color: 'border-blue-500' },
                      { name: 'Node.js', color: 'border-green-500' },
                      { name: 'Tailwind CSS', color: 'border-teal-400' },
                      { name: 'Next.js', color: 'border-gray-400' },
                      { name: 'MongoDB', color: 'border-green-600' },
                      { name: 'Git', color: 'border-orange-500' },
                      { name: 'Figma', color: 'border-purple-500' },
                    ].map((skill) => (
                      <div key={skill.name} className={`flex items-center justify-center border-2 ${skill.color} rounded-lg p-4 bg-black/40 hover:bg-black/60 transition-colors`}>
                        <span className="font-bold text-sm text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ABOUT ME Section */}
                <div className="border-2 border-white/40 rounded-xl p-6 bg-black/30 backdrop-blur-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="border-2 border-white rounded-lg p-3">
                      <Award size={32} />
                    </div>
                    <h2 className="text-2xl font-bold">ACERCA DE MÍ</h2>
                  </div>
                  
                  <p className="text-sm leading-relaxed mb-4">
                    Desarrollador web full-stack apasionado por crear experiencias digitales increíbles. 
                    Me especializo en desarrollo web moderno y diseño UI/UX.
                  </p>
                  
                  <div className="border-t border-white/30 pt-4 mt-4">
                    <h3 className="font-semibold mb-2 text-sm">Intereses</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Desarrollo Web', 'UI/UX Design', 'Tecnología', 'Innovación'].map((interest) => (
                        <span key={interest} className="px-3 py-1 border border-white/30 rounded-full text-xs bg-black/20">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t border-white/30 pt-4">
                    <p className="text-xs leading-relaxed italic">
                      "Si estás interesado en trabajar conmigo o tienes alguna pregunta, 
                      no dudes en contactarme. Siempre estoy abierto a nuevas oportunidades y colaboraciones."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}