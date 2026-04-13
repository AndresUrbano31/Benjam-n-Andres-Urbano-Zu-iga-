'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Home page
    'home.title': 'HOME',
    'home.subtitle': 'Backend developer in training, focused on Java and building efficient, scalable, and well-structured solutions.',
    'home.welcome': 'Welcome',
    'home.welcome.text': 'Hi, I am Andrés Urbano Zúñiga, a Software Engineering student and backend developer in training, passionate about building robust and scalable solutions. I specialize in Java development and am currently strengthening my knowledge in object-oriented programming, data structures, MySQL databases, REST APIs, and tools like Spring Boot.',
    'home.welcome.sub': 'Explore my portfolio to learn more about my profile, my projects, and my professional training process.',
    'home.about': 'About Me',
    'home.name': 'Name',
    'home.profession': 'Profession',
    'home.profession.value': 'Student & Backend Developer',
    'home.focus': 'Focus',
    'home.focus.value': 'Java Backend',
    'home.location': 'Location',
    'home.contact.btn': 'Contact Me',
    'home.download.cv': 'Download CV',
    'home.testimonials': 'What they say about me',
    'home.testimonial.role': 'Position · Company',
    'home.testimonial.text': 'Write the testimonial here. You can describe the experience of working together and the results obtained.',

    // Education
    'edu.title': 'Education',
    'edu.1.period': '2024 - 2028',
    'edu.1.title': 'Software Engineering (in progress)',
    'edu.1.institution': 'Universidad Cooperativa de Colombia | Pasto Campus',
    'edu.1.desc': 'Currently focused on backend development with Java, strengthening knowledge in object-oriented programming, data structures, programming logic, MySQL databases, REST API development, and version control with Git.',
    'edu.2.title': 'Java Technical Specialization',
    'edu.2.desc': 'Developed foundations in technologies and tools in demand in today\'s market, such as Spring Boot, Spring Data JPA, Hibernate, Maven, unit testing, SOLID principles, layered architecture, and fundamentals of security and microservices.',
    'edu.3.title': 'Academic & Professional Profile',
    'edu.3.desc': 'I am characterized by responsibility, honesty, punctuality, and continuous improvement, complementing my training with academic projects and constant strengthening of practical skills to perform as a Java backend developer.',

    // Skills
    'skills.title': 'Technical Skills',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.view': 'View project',
    'projects.viewall': 'View all',
    'projects.page.title': 'Featured Projects',
    'projects.page.subtitle': 'A selection of representative projects that demonstrate my skills in full-stack development and modern solution design.',
    'projects.cta.title': 'Do you have a project in mind?',
    'projects.cta.text': 'I am available for collaborations and new projects. Contact me to discuss your idea.',
    'projects.cta.btn': 'Let\'s start a project',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Do you have a question or proposal? I\'d love to hear from you.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.name': 'Name',
    'contact.name.placeholder': 'Your name',
    'contact.email.placeholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.subject.placeholder': 'Message subject',
    'contact.message': 'Message',
    'contact.message.placeholder': 'Your message here...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.response.title': 'Response Time',
    'contact.response.text': 'I try to respond to all messages within 24-48 hours. For urgent matters, contact me by phone.',
    'contact.availability.title': 'Availability',
    'contact.availability.text': 'Available for consultations, freelance projects, and collaborations. Also open to discussing new opportunities.',

    // Footer
    'footer.about': 'About Me',
    'footer.about.text': 'Software Engineering student and Java backend developer, passionate about building robust and scalable solutions.',
    'footer.links': 'Quick Links',
    'footer.follow': 'Follow Me',
    'footer.rights': 'All rights reserved.',
    'footer.curriculum': 'Curriculum',

    // Bottom nav
    'nav.home.label': 'Home',
    'nav.projects.label': 'Projects',
    'nav.contact.label': 'Contact',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Home page
    'home.title': 'INICIO',
    'home.subtitle': 'Desarrollador backend en formación, enfocado en Java y en la creación de soluciones eficientes, escalables y bien estructuradas.',
    'home.welcome': 'Bienvenido',
    'home.welcome.text': 'Hola, soy Andrés Urbano Zúñiga, estudiante de Ingeniería de Software y desarrollador backend en formación, apasionado por construir soluciones robustas y escalables. Me especializo en el desarrollo con Java y actualmente fortalezco mis conocimientos en programación orientada a objetos, estructuras de datos, bases de datos MySQL, APIs REST y herramientas como Spring Boot.',
    'home.welcome.sub': 'Explora mi portafolio para conocer más sobre mi perfil, mis proyectos y mi proceso de formación profesional.',
    'home.about': 'Sobre Mí',
    'home.name': 'Nombre',
    'home.profession': 'Profesión',
    'home.profession.value': 'Estudiante y Desarrollador Backend',
    'home.focus': 'Enfoque',
    'home.focus.value': 'Java Backend',
    'home.location': 'Ubicación',
    'home.contact.btn': 'Contáctame',
    'home.download.cv': 'Descargar CV',
    'home.testimonials': 'Lo que dicen de mí',
    'home.testimonial.role': 'Cargo · Empresa',
    'home.testimonial.text': 'Escribe aquí el testimonio de esta persona. Puedes describir la experiencia de trabajar juntos y los resultados obtenidos.',

    // Education
    'edu.title': 'Educación',
    'edu.1.period': '2024 - 2028',
    'edu.1.title': 'Ingeniería de Software en formación',
    'edu.1.institution': 'Universidad Cooperativa de Colombia | Campus Pasto',
    'edu.1.desc': 'Actualmente enfoco mi proceso académico en el desarrollo backend con Java, fortaleciendo conocimientos en programación orientada a objetos, estructuras de datos, lógica de programación, bases de datos MySQL, desarrollo de APIs REST y control de versiones con Git.',
    'edu.2.title': 'Especialización técnica en Java',
    'edu.2.desc': 'He desarrollado bases en tecnologías y herramientas demandadas en el mercado actual, como Spring Boot, Spring Data JPA, Hibernate, Maven, pruebas unitarias, principios SOLID, arquitectura por capas y fundamentos de seguridad y microservicios.',
    'edu.3.title': 'Perfil académico y profesional',
    'edu.3.desc': 'Me caracterizo por la responsabilidad, la honestidad, la puntualidad y la mejora continua, complementando mi formación con proyectos académicos y el fortalecimiento constante de habilidades prácticas para desempeñarme como desarrollador backend Java.',

    // Skills
    'skills.title': 'Habilidades Técnicas',

    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.view': 'Ver proyecto',
    'projects.viewall': 'Ver todos',
    'projects.page.title': 'Proyectos Destacados',
    'projects.page.subtitle': 'Selección de proyectos representativos que demuestran mis habilidades en desarrollo full-stack y diseño de soluciones modernas.',
    'projects.cta.title': '¿Tienes un proyecto en mente?',
    'projects.cta.text': 'Estoy disponible para colaboraciones y proyectos nuevos. Contacta conmigo para discutir tu idea.',
    'projects.cta.btn': 'Comencemos un proyecto',

    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes una pregunta o propuesta? Me encantaría escucharte.',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.name': 'Nombre',
    'contact.name.placeholder': 'Tu nombre',
    'contact.email.placeholder': 'tu@email.com',
    'contact.subject': 'Asunto',
    'contact.subject.placeholder': 'Asunto del mensaje',
    'contact.message': 'Mensaje',
    'contact.message.placeholder': 'Tu mensaje aquí...',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.response.title': 'Tiempo de Respuesta',
    'contact.response.text': 'Intento responder todos los mensajes dentro de 24-48 horas. Para asuntos urgentes, preferentemente contacta por teléfono.',
    'contact.availability.title': 'Disponibilidad',
    'contact.availability.text': 'Disponible para consultas, proyectos freelance y colaboraciones. También open para hablar sobre nuevas oportunidades.',

    // Footer
    'footer.about': 'Sobre Mí',
    'footer.about.text': 'Estudiante de Ingeniería de Software y desarrollador backend en Java, apasionado por construir soluciones robustas y escalables.',
    'footer.links': 'Enlaces Rápidos',
    'footer.follow': 'Sígueme',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.curriculum': 'Currículum',

    // Bottom nav
    'nav.home.label': 'Inicio',
    'nav.projects.label': 'Proyectos',
    'nav.contact.label': 'Contacto',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}