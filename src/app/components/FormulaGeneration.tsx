import { motion } from "motion/react";
import exampleImage from "../../assets/d1038dd5f9fce88eefd1b5961ab29e1b68f81118.png";

export function FormulaGeneration() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Генерируйте формулы
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              SmartExcel автоматически генерирует формулы или объясняет их
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={exampleImage}
              alt="SmartExcel AI генерация формул"
              className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
