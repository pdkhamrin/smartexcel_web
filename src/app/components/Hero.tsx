import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f9f4] to-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#217346]/10 text-[#217346] text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI-ассистент для Excel
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Работайте с Excel в{" "}
              <span className="text-[#217346]">10 раз быстрее с ИИ</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Искусственный интеллект прямо в Excel. Создавайте формулы, анализируйте данные 
              и автоматизируйте работу на естественном языке. Российское решение.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#217346] hover:bg-[#1a5c37] text-white text-base px-8 py-6"
              >
                Попробовать бесплатно
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1772568148392-e3e33f7b851b?q=80&w=1110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Excel AI Assistant"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#217346]/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#217346]/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#217346]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Excel с ИИ</div>
                  <div className="text-xs text-gray-500">Мгновенно и точно</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#217346]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-[#217346]/5 rounded-full blur-3xl" />
    </section>
  );
}
