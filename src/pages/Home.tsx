import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, HeartPulse, GraduationCap } from 'lucide-react';
import { Logo } from '../components/Logo';

const areas = [
  {
    title: 'Belleza',
    description: 'Cursos profesionales de estética, peluquería y cuidado personal.',
    icon: <Sparkles className="text-green-500" size={32} />,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    path: '/belleza',
    color: 'bg-green-50'
  },
  {
    title: 'Salud',
    description: 'Formación en primeros auxilios, enfermería básica y bienestar.',
    icon: <HeartPulse className="text-slate-900" size={32} />,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    path: '/salud',
    color: 'bg-slate-50'
  },
  {
    title: 'Educación',
    description: 'Programas pedagógicos y herramientas para el desarrollo profesional.',
    icon: <GraduationCap className="text-green-500" size={32} />,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    path: '/educacion',
    color: 'bg-green-50'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[850px] md:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[0.35]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10 mb-16">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/20 shadow-2xl hover:bg-white/15 transition-colors">
                <Logo className="w-32 h-32 md:w-48 md:h-48" />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                  Fundación
                </h2>
                <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-green-400 leading-none">
                  Centenario
                </h2>
                <div className="h-2 w-32 bg-green-500 mt-6 rounded-full mx-auto md:mx-0"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-10 leading-tight">
              Donde Todos Somos <span className="text-green-400">Partícipes</span>
            </h1>
            <p className="text-2xl text-slate-200 mb-10 leading-relaxed font-light">
              En Fundación Centenario, brindamos las herramientas necesarias para tu crecimiento profesional y personal a través de programas de formación técnica de alta calidad.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link 
                to="/educacion" 
                className="bg-green-500 hover:bg-green-400 text-slate-950 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                Explorar Cursos
              </Link>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                Consultar ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-6">Nuestras Áreas de Formación</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Contamos con programas especializados diseñados para insertarte rápidamente en el mercado laboral con las mejores herramientas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-slate-100"
              >
                <div className="h-64 overflow-hidden bg-slate-200">
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <div className={`w-16 h-16 ${area.color} rounded-2xl flex items-center justify-center mb-8 shadow-inner`}>
                    {area.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-950 mb-4">{area.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                    {area.description}
                  </p>
                  <Link 
                    to={area.path} 
                    className="inline-flex items-center text-green-600 font-bold text-lg hover:text-green-700 transition-colors group/link"
                  >
                    Ver más <ArrowRight className="ml-2 group-hover/link:translate-x-2 transition-transform" size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 opacity-5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Listo para comenzar tu formación?</h2>
          <p className="text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light">
            Únete a los cientos de egresados que ya están transformando su realidad con nuestros cursos técnicos profesionales.
          </p>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-slate-950 px-12 py-5 rounded-full font-bold text-xl hover:bg-green-400 transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            Inscríbete vía WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
