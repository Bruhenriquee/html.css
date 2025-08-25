import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&fm=webp&q=75",
      title: "Residencial - São Paulo",
      description: "Sistema de 6kWp instalado em residência unifamiliar. Economia de 85% na conta de luz.",
      size: "6 kWp",
      year: "2024",
      sizeClass: "bg-solar-gold/10 text-solar-gold"
    },
    {
      image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&fm=webp&q=75",
      title: "Comercial - Rio de Janeiro",
      description: "Sistema de 25kWp para empresa de médio porte. Redução de 90% nos custos energéticos.",
      size: "25 kWp",
      year: "2024",
      sizeClass: "bg-earth-green/10 text-earth-green"
    },
    {
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&fm=webp&q=75",
      title: "Residencial - Belo Horizonte",
      description: "Sistema de 10kWp em residência de alto padrão. Energia limpa e design moderno.",
      size: "10 kWp",
      year: "2024",
      sizeClass: "bg-sky-blue/10 text-sky-blue"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&fm=webp&q=75",
      title: "Industrial - Porto Alegre",
      description: "Sistema de 100kWp para indústria. Maior independência energética e sustentabilidade.",
      size: "100 kWp",
      year: "2023",
      sizeClass: "bg-solar-gold/10 text-solar-gold"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&fm=webp&q=75",
      title: "Condomínio - Brasília",
      description: "Sistema de 50kWp para condomínio residencial. Economia compartilhada entre moradores.",
      size: "50 kWp",
      year: "2023",
      sizeClass: "bg-earth-green/10 text-earth-green"
    },
    {
      image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&fm=webp&q=75",
      title: "Rural - Goiânia",
      description: "Sistema de 15kWp para propriedade rural. Energia sustentável para agronegócio.",
      size: "15 kWp",
      year: "2023",
      sizeClass: "bg-sky-blue/10 text-sky-blue"
    }
  ];

  return (
    <section id="projetos" className="py-24 bg-earth-green/5">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Nossos <span className="text-solar-gold">Projetos</span> Realizados
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que já realizamos pelo Brasil. 
            Cada instalação é única e personalizada para as necessidades específicas de cada cliente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 fade-in">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-xs text-slate-500 mb-1">Potência</div>
                    <div className={`font-semibold ${project.sizeClass.replace('bg-', 'text-').replace('/10', '/100')}`} data-testid={`project-size-${index}`}>
                      {project.size}
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-xs text-slate-500 mb-1">Ano</div>
                    <div className="font-semibold text-slate-700">{project.year}</div>
                  </div>
                </div>
                <div className="mt-4 px-3 py-2 bg-slate-100 rounded-lg">
                  <div className="text-xs text-slate-500 mb-1">Tipo de Instalação</div>
                  <div className="font-medium text-slate-700">
                    {project.title.includes('Residencial') ? 'Residencial Unifamiliar' : 
                     project.title.includes('Comercial') ? 'Empresarial Comercial' :
                     project.title.includes('Industrial') ? 'Industrial de Grande Porte' :
                     project.title.includes('Condomínio') ? 'Condomínio Residencial' :
                     project.title.includes('Rural') ? 'Propriedade Rural' : 'Sistema Fotovoltaico'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
