import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll";

export default function Footer() {
  const scrollTo = useScrollTo();

  const services = [
    { name: "Instalação Residencial", sectionId: "servicos" },
    { name: "Instalação Comercial", sectionId: "servicos" },
    { name: "Instalação Industrial", sectionId: "servicos" },
    { name: "Manutenção Preventiva", sectionId: "servicos" },
    { name: "Consultoria Especializada", sectionId: "servicos" },
  ];

  const company = [
    { name: "Sobre Nós", sectionId: "sobre" },
    { name: "Projetos Realizados", sectionId: "projetos" },
    { name: "Certificações", sectionId: "sobre" },
    { name: "Parceiros", sectionId: "sobre" },
    { name: "Trabalhe Conosco", sectionId: "contato" },
  ];

  const support = [
    { name: "Contato", sectionId: "contato" },
    { name: "FAQ", sectionId: "faq" },
    { name: "Garantias", sectionId: "faq" },
    { name: "Documentação", sectionId: "contato" },
    { name: "Políticas", sectionId: "contato" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/solartechbrasil", testId: "link-twitter" },
    { icon: Facebook, href: "https://facebook.com/solartechbrasil", testId: "link-facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/solartechbrasil", testId: "link-linkedin" },
    { icon: Instagram, href: "https://instagram.com/solartechbrasil", testId: "link-instagram" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-solar-gold">SolarTech</span>
              <span className="text-2xl font-bold text-earth-green">Brasil</span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Transformando o futuro energético do Brasil com soluções inteligentes e sustentáveis em energia solar.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-lg hover:bg-solar-gold transition-colors"
                  data-testid={social.testId}
                  aria-label={`Visite nosso ${social.icon.displayName}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button onClick={() => scrollTo(service.sectionId)} className="text-left text-slate-300 hover:text-solar-gold transition-colors">
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button onClick={() => scrollTo(item.sectionId)} className="text-left text-slate-300 hover:text-solar-gold transition-colors">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Suporte</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <button onClick={() => scrollTo(item.sectionId)} className="text-left text-slate-300 hover:text-solar-gold transition-colors">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 SolarTech Brasil. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm">
              <button onClick={() => scrollTo('contato')} className="text-slate-400 hover:text-solar-gold transition-colors">
                Política de Privacidade
              </button>
              <button onClick={() => scrollTo('contato')} className="text-slate-400 hover:text-solar-gold transition-colors">
                Termos de Uso
              </button>
              <button onClick={() => scrollTo('faq')} className="text-slate-400 hover:text-solar-gold transition-colors">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
