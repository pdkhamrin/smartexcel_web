import { motion } from "motion/react";
import { Briefcase, DollarSign, TrendingUp, Building2 } from "lucide-react";

const audiences = [
  {
    icon: TrendingUp,
    title: "Аналитики",
    description: "Ускорьте обработку данных и создание сложных формул. Сфокусируйтесь на инсайтах, а не на технических деталях.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: DollarSign,
    title: "Финансисты",
    description: "Автоматизируйте финансовое моделирование и отчётность. Создавайте сложные расчёты за минуты, а не часы.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Briefcase,
    title: "Маркетологи",
    description: "Анализируйте эффективность кампаний и строите отчёты без помощи аналитиков. Визуализируйте данные в пару кликов.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Building2,
    title: "Малый и средний бизнес",
    description: "Управляйте учётом, планированием и анализом без специальных навыков. Excel становится вашим личным аналитиком.",
    color: "from-orange-500 to-orange-600"
  }
];

export function TargetAudience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Для кого это решение
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Независимо от вашей роли, наш AI-ассистент сделает работу с Excel проще и быстрее
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#217346]/30 p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${audience.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <audience.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
