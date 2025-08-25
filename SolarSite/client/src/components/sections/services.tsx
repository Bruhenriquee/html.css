import { Button } from "@/components/ui/button";
import { Wrench, Settings, FileText, Check } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll";

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Instalação Completa",
      description: "Projeto personalizado, instalação profissional e homologação junto à concessionária. Processo completo do orçamento à geração de energia.",
      features: ["Análise técnica gratuita", "Equipamentos de alta qualidade", "Homologação incluída"],
      buttonText: "Solicitar Orçamento",
      buttonClass: "bg-solar-gold text-white hover:bg-solar-gold/90",
      bgClass: "bg-solar-gold/10",
      iconClass: "text-solar-gold",
      targetSection: "contato"
    },
    {
      icon: Settings,
      title: "Manutenção Preventiva",
      description: "Mantenha seu sistema operando com máxima eficiência. Limpeza, inspeção e monitoramento regular para garantir a melhor performance.",
      features: ["Limpeza especializada", "Monitoramento remoto", "Relatórios de performance"],
      buttonText: "Agendar Manutenção",
      buttonClass: "bg-earth-green text-white hover:bg-earth-green/90",
      bgClass: "bg-earth-green/10",
      iconClass: "text-earth-green",
      targetSection: "contato"
    },
    {
      icon: FileText,
      title: "Consultoria Especializada",
      description: "Análise energética completa, dimensionamento otimizado e orientação para maximizar seu retorno sobre investimento em energia solar.",
      features: ["Análise de viabilidade", "Projeto personalizado", "Acompanhamento técnico"],
      buttonText: "Consultar Especialista",
      buttonClass: "bg-sky-blue text-white hover:bg-sky-blue/90",
      bgClass: "bg-sky-blue/10",
      iconClass: "text-sky-blue",
      targetSection: "contato"
    }
  ];

  const scrollTo = useScrollTo();

  const handleServiceButtonClick = (sectionId: string) => {
    console.log(`Tentando rolar para a seção: #${sectionId}`);
    scrollTo(sectionId);
  };

  return (
    <section id="servicos" className="py-24 bg-sky-blue/5">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Nossos <span className="text-solar-gold">Serviços</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em energia solar, desde o projeto até a manutenção, 
            garantindo máxima eficiência e economia para você.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 fade-in flex flex-col">
              <div className={`${service.bgClass} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <service.icon className={`w-8 h-8 ${service.iconClass}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                    <Check className="w-4 h-4 text-earth-green mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button 
                  onClick={() => handleServiceButtonClick(service.targetSection)}
                  className={`w-full ${service.buttonClass} transition-all duration-300`}
                  data-testid={`button-${service.buttonText.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {service.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
