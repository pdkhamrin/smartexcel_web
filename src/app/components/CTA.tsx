import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#217346] via-[#2d9e5f] to-[#217346] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Специальное предложение
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Готовы работать с Excel быстрее?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Начните бесплатный 7-дневный период прямо сейчас. 
            Отменить можно в любой момент.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#217346] hover:bg-gray-100 text-base px-8 py-6"
            >
              Попробовать бесплатно
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Быстрая настройка
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Месячная подписка, можно отменить в любой момент
            </div>
            <div className="hidden md:flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Бесплатная поддержка
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
