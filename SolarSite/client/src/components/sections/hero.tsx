import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll";

export default function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-sky-blue-light/10 to-solar-gold-light/10 min-h-screen flex items-center">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Energia Solar 
              <span className="text-solar-gold"> Inteligente</span> 
              para seu 
              <span className="text-earth-green"> Futuro</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Economize até 95% na conta de luz com nossos sistemas fotovoltaicos. 
              Instalação profissional, garantia total e retorno do investimento em até 5 anos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollTo('orcamento')}
                size="lg"
                className="bg-solar-gold text-white hover:bg-solar-gold/90 transform hover:scale-105 shadow-lg text-lg px-8 py-4 transition-all duration-300"
                data-testid="button-calcular-economia"
              >
                Calcular Economia
              </Button>
              <Button 
                onClick={() => scrollTo('sobre')}
                variant="outline"
                size="lg"
                className="border-2 border-earth-green text-earth-green hover:bg-earth-green hover:text-white text-lg px-8 py-4 transition-all duration-300"
                data-testid="button-saiba-mais"
              >
                Saiba Mais
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-earth-green" />
                <span>Instalação em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-earth-green" />
                <span>Garantia de 25 anos</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 mt-12 lg:mt-0 fade-in">
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&fm=webp&q=85" 
              alt="Instalação de painéis solares fotovoltaicos em telhado residencial, mostrando tecnologia moderna e sustentável de energia solar" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
