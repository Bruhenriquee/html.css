import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      // Adiciona um pequeno atraso para não ser muito intrusivo
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-slate-900/95 backdrop-blur-sm text-white shadow-lg animate-in slide-in-from-bottom-12 duration-500">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <Cookie className="w-8 h-8 text-solar-gold mt-1 shrink-0" />
          <div>
            <h4 className="font-bold text-lg">Nós usamos cookies</h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Nosso site utiliza cookies para melhorar sua experiência de navegação e analisar o tráfego. Ao continuar, você concorda com o uso de cookies.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0 mt-4 sm:mt-0">
          <Button onClick={handleAccept} className="bg-solar-gold text-white hover:bg-solar-gold/90">
            Entendi e aceito
          </Button>
        </div>
      </div>
    </div>
  );
}