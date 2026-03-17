import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Mensaje enviado! (Esto es una simulación)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="p-8 md:p-16">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-6">CONTACT</h1>
        <div className="max-w-3xl">
          <p className="text-xl text-gray-300">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar? No dudes en contactarme. 
            Estoy siempre abierto a nuevas oportunidades y conversaciones.
          </p>
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl">
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Info Section */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="border-2 border-white p-3 rounded-lg">
                <Send size={32} />
              </div>
              <h2 className="text-3xl font-bold">INFORMACIÓN DE CONTACTO</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border-2 border-white rounded-lg bg-black/30 backdrop-blur-sm">
                <div className="border-2 border-white p-2 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-lg font-medium">tuemail@ejemplo.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border-2 border-white rounded-lg bg-black/30 backdrop-blur-sm">
                <div className="border-2 border-white p-2 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Teléfono</p>
                  <p className="text-lg font-medium">+00-000-0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border-2 border-white rounded-lg bg-black/30 backdrop-blur-sm">
                <div className="border-2 border-white p-2 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Ubicación</p>
                  <p className="text-lg font-medium">Ciudad, País</p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media Section */}
          <section>
            <h3 className="text-2xl font-bold mb-4">REDES SOCIALES</h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center gap-3 p-4 border-2 border-white rounded-lg bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black transition-all"
              >
                <Facebook size={24} />
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-4 border-2 border-white rounded-lg bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black transition-all"
              >
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-4 border-2 border-white rounded-lg bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black transition-all"
              >
                <Github size={24} />
                <span>Github</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-4 border-2 border-white rounded-lg bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black transition-all"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </section>

          {/* Availability */}
          <div className="border-2 border-white p-6 rounded-lg bg-black/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3">DISPONIBILIDAD</h3>
            <p className="text-gray-200 mb-3">
              Actualmente disponible para proyectos freelance y oportunidades de colaboración.
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Disponible Ahora</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="border-2 border-white p-3 rounded-lg">
              <Mail size={32} />
            </div>
            <h2 className="text-3xl font-bold">ENVÍAME UN MENSAJE</h2>
          </div>

          <form onSubmit={handleSubmit} className="border-2 border-white p-8 rounded-lg bg-black/30 backdrop-blur-sm space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                NOMBRE *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border-2 border-white rounded-lg focus:outline-none focus:bg-black/70 text-white placeholder-gray-400"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                EMAIL *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border-2 border-white rounded-lg focus:outline-none focus:bg-black/70 text-white placeholder-gray-400"
                placeholder="tu.email@ejemplo.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-bold mb-2">
                ASUNTO *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border-2 border-white rounded-lg focus:outline-none focus:bg-black/70 text-white placeholder-gray-400"
                placeholder="¿De qué quieres hablar?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                MENSAJE *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border-2 border-white rounded-lg focus:outline-none focus:bg-black/70 text-white placeholder-gray-400 resize-none"
                placeholder="Cuéntame sobre tu proyecto o idea..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-white rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all"
            >
              <Send size={20} />
              ENVIAR MENSAJE
            </button>
          </form>

          <div className="mt-6 text-center border-2 border-white p-4 rounded-lg bg-black/30 backdrop-blur-sm">
            <p className="text-gray-300 italic">
              "Referencias disponibles a solicitud."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
