import { motion } from 'motion/react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

const courses = [
  'Pedagogía Infantil',
  'Auxiliar Administrativo',
  'Informática y Herramientas Digitales',
  'Liderazgo y Gestión Comunitaria',
  'Inglés para el Trabajo'
];

export default function Educacion() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920" 
            alt="Educación" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="text-green-400" size={32} />
              <span className="text-green-400 font-bold tracking-widest uppercase text-sm">Área de Formación</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">Educación Continua</h1>
            <p className="text-xl text-slate-200 max-w-2xl font-light">
              Expandiendo horizontes a través del conocimiento y el desarrollo de habilidades para el siglo XXI.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Formación para el Desarrollo</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Creemos en el poder transformador de la educación. Nuestros programas están diseñados para potenciar tus capacidades y abrirte nuevas puertas en el ámbito laboral y personal.
            </p>
            <ul className="space-y-4">
              {courses.map((course) => (
                <li key={course} className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle2 className="text-green-500" size={24} />
                  <span className="text-lg font-medium">{course}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-slate-950 px-10 py-5 rounded-full font-bold hover:bg-green-400 transition-all shadow-xl inline-block hover:scale-105 active:scale-95"
              >
                Inscribirse ahora
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
              alt="Estudiantes" 
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-green-600 font-bold text-2xl">+500</p>
              <p className="text-gray-600 font-medium">Egresados anuales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
