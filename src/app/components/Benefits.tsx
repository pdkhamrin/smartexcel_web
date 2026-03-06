import { motion } from "motion/react";
import { Clock, TrendingUp, Users, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    stat: "10x",
    label: "Быстрее",
    description: "Сокращение времени на создание формул и анализ данных"
  },
  {
    icon: TrendingUp,
    stat: "95%",
    label: "Точность",
    description: "AI генерирует правильные формулы с первого раза"
  },

  {
    icon: Shield,
    stat: "100%",
    label: "Безопасность",
    description: "Ваши данные остаются только у вас"
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-[#217346] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Результаты, которые говорят сами за себя
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые уже ускорили свою работу
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{benefit.stat}</div>
              <div className="text-xl font-semibold mb-2">{benefit.label}</div>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}