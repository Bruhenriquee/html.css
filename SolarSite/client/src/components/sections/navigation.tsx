import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-solar-gold">SolarTech</span>
              <span className="text-2xl font-bold text-earth-green">Brasil</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => handleNavClick('inicio')}
                className="text-slate-700 hover:text-solar-gold px-3 py-2 text-sm font-medium transition-all duration-300"
                data-testid="nav-inicio"
              >
                Início
              </button>
              <button 
                onClick={() => handleNavClick('sobre')}
                className="text-slate-700 hover:text-solar-gold px-3 py-2 text-sm font-medium transition-all duration-300"
                data-testid="nav-sobre"
              >
                Sobre
              </button>
              <button 
                onClick={() => handleNavClick('servicos')}
                className="text-slate-700 hover:text-solar-gold px-3 py-2 text-sm font-medium transition-all duration-300"
                data-testid="nav-servicos"
              >
                Serviços
              </button>
              <button 
                onClick={() => handleNavClick('projetos')}
                className="text-slate-700 hover:text-solar-gold px-3 py-2 text-sm font-medium transition-all duration-300"
                data-testid="nav-projetos"
              >
                Projetos
              </button>
              <button 
                onClick={() => handleNavClick('contato')}
                className="text-slate-700 hover:text-solar-gold px-3 py-2 text-sm font-medium transition-all duration-300"
                data-testid="nav-contato"
              >
                Contato
              </button>
              <Button 
                onClick={() => handleNavClick('orcamento')}
                className="bg-solar-gold text-white hover:bg-solar-gold/90 transition-all duration-300"
                data-testid="nav-orcamento"
              >
                Orçamento
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-solar-gold"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button 
            onClick={() => handleNavClick('inicio')}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-solar-gold w-full text-left transition-all duration-300"
            data-testid="mobile-nav-inicio"
          >
            Início
          </button>
          <button 
            onClick={() => handleNavClick('sobre')}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-solar-gold w-full text-left transition-all duration-300"
            data-testid="mobile-nav-sobre"
          >
            Sobre
          </button>
          <button 
            onClick={() => handleNavClick('servicos')}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-solar-gold w-full text-left transition-all duration-300"
            data-testid="mobile-nav-servicos"
          >
            Serviços
          </button>
          <button 
            onClick={() => handleNavClick('projetos')}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-solar-gold w-full text-left transition-all duration-300"
            data-testid="mobile-nav-projetos"
          >
            Projetos
          </button>
          <button 
            onClick={() => handleNavClick('contato')}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-solar-gold w-full text-left transition-all duration-300"
            data-testid="mobile-nav-contato"
          >
            Contato
          </button>
          <div className="px-3 py-2">
            <Button 
              onClick={() => handleNavClick('orcamento')}
              className="w-full bg-solar-gold text-white hover:bg-solar-gold/90 transition-all duration-300"
              data-testid="mobile-nav-orcamento"
            >
              Orçamento
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
