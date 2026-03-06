import { motion } from "motion/react";
import { 
  Calculator, 
  Database, 
  Lightbulb, 
  Wand2, 
  PieChart, 
  BarChart3 
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Генерация формул",
    description: "Опишите задачу на русском языке, и AI создаст нужную формулу Excel за секунды."
  },
  {
    icon: Database,
    title: "Анализ данных",
    description: "Выделите любой диапазон и получите детальный анализ, статистику и инсайты."
  },
  {
    icon: Lightbulb,
    title: "Объяснение формул",
    description: "Не понимаете сложную формулу? AI объяснит её простым языком."
  },
  {
    icon: Wand2,
    title: "Очистка данных",
    description: "Автоматическое форматирование, удаление дубликатов и трансформация данных."
  },
  {
    icon: PieChart,
    title: "Сводные таблицы",
    description: "Создавайте сводные таблицы одной командой без сложных настроек."
  },
  {
    icon: BarChart3,
    title: "Визуализация",
    description: "Генерируйте красивые диаграммы и графики на основе ваших данных."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Всё, что нужно для работы с Excel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Встроенный ИИ-ассистент для ускорения вашей работы с таблицами
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-gray-200 hover:border-[#217346]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#217346]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#217346]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#217346]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
