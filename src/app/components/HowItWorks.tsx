import { motion } from "motion/react";
import { MessageSquare, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Задайте вопрос",
    description: "Откройте боковую панель в Excel и опишите свою задачу на естественном языке."
  },
  {
    icon: Zap,
    title: "AI обрабатывает запрос",
    description: "Искусственный интеллект анализирует ваши данные и контекст вашего запроса."
  },
  {
    icon: CheckCircle,
    title: "Получите результат",
    description: "Готовая формула, анализ или диаграмма сразу применяются к вашим данным."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Три простых шага до результата
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#217346]/20 to-transparent" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#217346] to-[#2d9e5f] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#217346] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
