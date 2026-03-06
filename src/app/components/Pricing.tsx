import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Стартовый",
    price: "490",
    period: "мес",
    description: "Для начинающих пользователей",
    features: [
      "100 запросов в месяц",
      "Генерация формул",
      "Объяснение формул",
      "Базовый анализ данных",
      "Email поддержка"
    ],
    highlighted: false
  },
  {
    name: "Профессионал",
    price: "1990",
    period: "мес",
    description: "Для профессионалов",
    features: [
      "Безлимитные запросы",
      "Все функции Starter",
      "Анализ больших данных",
      "Создание диаграмм",
      "Сводные таблицы",
      "Приоритетная поддержка",
      "API доступ"
    ],
    highlighted: true
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Прозрачные цены
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите тариф, который подходит именно вам. 7 дней бесплатно на любом плане.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-[#217346] text-white shadow-2xl scale-105 border-2 border-[#217346]"
                  : "bg-white border border-gray-200 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#217346] rounded-full text-sm font-semibold flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-white/80" : "text-gray-600"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg mb-1 ${plan.highlighted ? "text-white/80" : "text-gray-600"}`}>
                    ₽/{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? "text-white" : "text-[#217346]"
                    }`} />
                    <span className={`text-sm ${plan.highlighted ? "text-white/90" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-white text-[#217346] hover:bg-gray-100"
                    : "bg-[#217346] text-white hover:bg-[#1a5c37]"
                }`}
                size="lg"
              >
                Начать бесплатный период
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 mt-12"
        >
          Все планы включают 7-дневный бесплатный пробный период. Отменить можно в любой момент.
        </motion.p>
      </div>
    </section>
  );
}
