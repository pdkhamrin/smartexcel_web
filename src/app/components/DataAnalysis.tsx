import { motion } from "motion/react";
import exampleImage from "../../assets/962f7509ce3bd7b2d46c004df7c8584888d44d6b.png";

export function DataAnalysis() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <img
              src={exampleImage}
              alt="AI Data Assistant в Excel"
              className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Анализируйте данные
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Задавайте любые вопросы про данные ассистенту
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
