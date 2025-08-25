import { Zap, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 mb-12 lg:mb-0 fade-in">
            <img 
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&fm=webp&q=80" 
              alt="Equipe especializada de técnicos da SolarTech Brasil instalando sistema fotovoltaico, demonstrando qualidade profissional e segurança" 
              className="rounded-2xl shadow-lg w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="lg:col-span-6 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Líderes em <span className="text-solar-gold">Energia Solar</span> no Brasil
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Com mais de 10 anos de experiência, a SolarTech Brasil já instalou mais de 5.000 sistemas 
              fotovoltaicos em todo o país. Nossa missão é democratizar o acesso à energia limpa e 
              renovável, proporcionando economia real e sustentabilidade para nossos clientes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-solar-gold/5 rounded-xl">
                <div className="text-3xl font-bold text-solar-gold mb-2" data-testid="stats-projetos">5.000+</div>
                <div className="text-sm text-slate-600">Projetos Instalados</div>
              </div>
              <div className="text-center p-6 bg-earth-green/5 rounded-xl">
                <div className="text-3xl font-bold text-earth-green mb-2" data-testid="stats-experiencia">10+</div>
                <div className="text-sm text-slate-600">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-sky-blue/5 rounded-xl">
                <div className="text-3xl font-bold text-sky-blue mb-2" data-testid="stats-satisfacao">100%</div>
                <div className="text-sm text-slate-600">Clientes Satisfeitos</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-solar-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-solar-gold" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Missão</h3>
                <p className="text-sm text-slate-600">Transformar energia solar em economia real para todos os brasileiros.</p>
              </div>
              <div className="text-center">
                <div className="bg-earth-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-earth-green" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Visão</h3>
                <p className="text-sm text-slate-600">Ser referência nacional em soluções de energia renovável.</p>
              </div>
              <div className="text-center">
                <div className="bg-sky-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Valores</h3>
                <p className="text-sm text-slate-600">Qualidade, sustentabilidade e compromisso com o cliente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
