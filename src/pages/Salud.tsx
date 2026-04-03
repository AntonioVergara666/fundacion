import { motion } from 'motion/react';
import { HeartPulse, CheckCircle2 } from 'lucide-react';

const courses = [
  'Primeros Auxilios y RCP',
  'Asistente de Enfermería',
  'Cuidado del Adulto Mayor',
  'Nutrición y Dietética Básica',
  'Masoterapia Terapéutica'
];

export default function Salud() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505751172107-573967a4f39a?auto=format&fit=crop&q=80&w=1920" 
            alt="Salud" 
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
              <HeartPulse className="text-green-400" size={32} />
              <span className="text-green-400 font-bold tracking-widest uppercase text-sm">Área de Formación</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">Salud y Bienestar</h1>
            <p className="text-xl text-slate-200 max-w-2xl font-light">
              Capacitación técnica con sentido humano para el cuidado de la vida y la promoción de la salud.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800" 
                alt="Capacitación en Salud" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-500 p-8 rounded-2xl shadow-xl hidden md:block">
                <HeartPulse className="text-slate-950 mb-2" size={40} />
                <p className="text-slate-950 font-bold">Vocación de Servicio</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-950 mb-6">Excelencia en Capacitación Sanitaria</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
              Nuestros programas de salud están avalados por profesionales del área, garantizando que adquieras las competencias necesarias para brindar un cuidado seguro y profesional.
            </p>
            <ul className="space-y-4">
              {courses.map((course) => (
                <li key={course} className="flex items-center space-x-3 text-slate-700">
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
                Consultar fechas de inicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
