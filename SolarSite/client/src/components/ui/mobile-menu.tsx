import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const scrollTo = useScrollTo();

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
    onClose();
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const menu = document.getElementById('mobileMenu');
      const menuButton = target.closest('[data-testid="mobile-menu-toggle"]');
      
      if (isOpen && menu && !menu.contains(target) && !menuButton) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          data-testid="mobile-menu-backdrop"
        />
      )}
      
      {/* Mobile Menu */}
      <div 
        id="mobileMenu"
        className={`mobile-menu md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-50 ${isOpen ? 'open' : ''}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button 
            onClick={() => handleNavClick('inicio')}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-solar-gold w-full text-left transition-colors"
            data-testid="mobile-nav-inicio"
          >
            Início
          </button>
          <button 
            onClick={() => handleNavClick('sobre')}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-solar-gold w-full text-left transition-colors"
            data-testid="mobile-nav-sobre"
          >
            Sobre
          </button>
          <button 
            onClick={() => handleNavClick('servicos')}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-solar-gold w-full text-left transition-colors"
            data-testid="mobile-nav-servicos"
          >
            Serviços
          </button>
          <button 
            onClick={() => handleNavClick('projetos')}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-solar-gold w-full text-left transition-colors"
            data-testid="mobile-nav-projetos"
          >
            Projetos
          </button>
          <button 
            onClick={() => handleNavClick('contato')}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-solar-gold w-full text-left transition-colors"
            data-testid="mobile-nav-contato"
          >
            Contato
          </button>
          <div className="px-3 py-2">
            <Button 
              onClick={() => handleNavClick('orcamento')}
              className="w-full bg-solar-gold text-white hover:bg-solar-gold/90"
              data-testid="mobile-nav-orcamento"
            >
              Orçamento
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
