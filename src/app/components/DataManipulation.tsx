import { motion } from "motion/react";
import exampleImage from "../../assets/221459b9b4f8fa941b1b9723b7d39f2c31ed7216.png";

export function DataManipulation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={exampleImage}
              alt="SmartExcel AI изменение данных"
              className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Изменяйте данные
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Создавайте сводные таблицы, очищайте данные, форматируйте и много другое без знаний самого Excel
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
