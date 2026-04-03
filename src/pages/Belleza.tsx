import { motion } from 'motion/react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const courses = [
  'Peluquería Profesional',
  'Manicura y Pedicura',
  'Maquillaje Social y Artístico',
  'Estética Facial y Corporal',
  'Depilación Integral'
];

export default function Belleza() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
            alt="Belleza" 
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
              <Sparkles className="text-green-400" size={32} />
              <span className="text-green-400 font-bold tracking-widest uppercase text-sm">Área de Formación</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">Belleza Integral</h1>
            <p className="text-xl text-slate-200 max-w-2xl font-light">
              Domina las técnicas más modernas del mundo de la estética y conviértete en un profesional del cuidado personal.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-950 mb-6">Nuestros Cursos de Belleza</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
              En Fundación Centenario, entendemos que la belleza es un arte que requiere técnica, pasión y actualización constante. Nuestros cursos están diseñados para brindarte una formación práctica desde el primer día.
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
                Solicitar programa detallado
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600" 
              alt="Estética" 
              className="rounded-2xl shadow-lg mt-8"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=600" 
              alt="Maquillaje" 
              className="rounded-2xl shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
