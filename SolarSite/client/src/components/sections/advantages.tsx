import { Button } from "@/components/ui/button";
import { DollarSign, Leaf, TrendingUp } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll";

export default function Advantages() {
  const scrollTo = useScrollTo();

  const advantages = [
    {
      icon: DollarSign,
      title: "Economia Imediata",
      description: "Reduza sua conta de luz em até 95% já no primeiro mês. A energia que você gera é consumida diretamente em sua residência ou empresa.",
      value: "R$ 180",
      valueDescription: "economia média mensal",
      bgClass: "bg-solar-gold/5 hover:bg-solar-gold/10",
      iconBgClass: "bg-solar-gold/20",
      iconClass: "text-solar-gold",
      valueClass: "text-solar-gold"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Contribua para um planeta mais limpo. Cada sistema solar evita a emissão de toneladas de CO2 na atmosfera ao longo de sua vida útil.",
      value: "-2.5t",
      valueDescription: "CO2 evitado por ano",
      bgClass: "bg-earth-green/5 hover:bg-earth-green/10",
      iconBgClass: "bg-earth-green/20",
      iconClass: "text-earth-green",
      valueClass: "text-earth-green"
    },
    {
      icon: TrendingUp,
      title: "Retorno Garantido",
      description: "Investimento com retorno garantido em 3-5 anos. Após esse período, você terá mais 20 anos de energia praticamente gratuita.",
      value: "4 anos",
      valueDescription: "tempo de retorno médio",
      bgClass: "bg-sky-blue/5 hover:bg-sky-blue/10",
      iconBgClass: "bg-sky-blue/20",
      iconClass: "text-sky-blue",
      valueClass: "text-sky-blue"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Por que escolher <span className="text-solar-gold">Energia Solar?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A energia solar oferece benefícios únicos que transformam sua relação com a energia elétrica, 
            proporcionando economia real e contribuindo para um futuro sustentável.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {advantages.map((advantage, index) => (
            <div key={index} className={`text-center p-8 rounded-2xl transition-all duration-300 fade-in ${advantage.bgClass}`}>
              <div className={`${advantage.iconBgClass} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <advantage.icon className={`w-10 h-10 ${advantage.iconClass}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{advantage.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {advantage.description}
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className={`text-3xl font-bold mb-1 ${advantage.valueClass}`} data-testid={`advantage-value-${index}`}>
                  {advantage.value}
                </div>
                <div className="text-sm text-slate-500">{advantage.valueDescription}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-solar-gold/10 to-earth-green/10 rounded-2xl p-8 lg:p-12 text-center fade-in">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Pronto para começar sua jornada solar?
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Faça uma simulação gratuita e descubra quanto você pode economizar com energia solar. 
            Nossos especialistas estão prontos para ajudar você.
          </p>
          <Button 
            onClick={() => scrollTo('orcamento')}
            size="lg"
            className="bg-solar-gold text-white hover:bg-solar-gold/90 transform hover:scale-105 shadow-lg text-lg px-8 py-4 transition-all duration-300"
            data-testid="button-simular-economia"
          >
            Simular Economia Agora
          </Button>
        </div>

        {/* Testimonials and Trust Indicators */}
        <div className="bg-slate-50 rounded-3xl p-12 fade-in">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-slate-900 mb-12">
            Depoimentos de <span className="text-solar-gold">Clientes Satisfeitos</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-xl">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                "A economia na conta de luz foi imediata! Em 6 meses já conseguimos uma redução de 90%. 
                A equipe foi muito profissional e o processo foi super tranquilo."
              </p>
              <div className="font-semibold text-slate-900">Maria Santos</div>
              <div className="text-sm text-slate-500">Residencial - São Paulo</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-xl">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                "Investimento que se pagou em 4 anos. Hoje nossa empresa tem energia praticamente gratuita 
                e ainda contribui com o meio ambiente. Recomendo!"
              </p>
              <div className="font-semibold text-slate-900">João Silva</div>
              <div className="text-sm text-slate-500">Comercial - Rio de Janeiro</div>
            </div>
          </div>
          
          {/* Trust Seals */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-semibold text-slate-900 mb-1">Certificação</div>
              <div className="text-xs text-slate-600">INMETRO Qualidade</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="font-semibold text-slate-900 mb-1">Garantia</div>
              <div className="text-xs text-slate-600">25 anos equipamentos</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-slate-900 mb-1">Homologação</div>
              <div className="text-xs text-slate-600">Todas concessionárias</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-2">📞</div>
              <div className="font-semibold text-slate-900 mb-1">Suporte</div>
              <div className="text-xs text-slate-600">24h emergência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
