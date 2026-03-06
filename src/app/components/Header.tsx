import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Sparkles, Sheet } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#217346] to-[#2d9e5f] rounded-lg flex items-center justify-center">
              <Sheet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">УМНЫЙ EXCEL AI</span>
          </motion.div>

          {/* Desktop Navigation */}
      

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-[#217346] hover:bg-[#1a5c37] text-white">
              Попробовать бесплатно
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="pt-4 space-y-2">
              <Button className="w-full bg-[#217346] hover:bg-[#1a5c37] text-white">
                Попробовать бесплатно
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}