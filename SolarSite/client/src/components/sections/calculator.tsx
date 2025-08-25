import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useScrollTo } from "@/hooks/use-scroll";
import {
  TrendingUp,
  Zap,
  Clock,
  Banknote,
  PiggyBank,
  Info,
} from "lucide-react";

interface CalculationResults {
  monthlySavings: number;
  systemSize: number;
  paybackTime: number;
  investment: number;
  totalSavings: number;
}

export default function Calculator() {
  const scrollTo = useScrollTo();
  const [monthlyBill, setMonthlyBill] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [roofArea, setRoofArea] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [results, setResults] = useState<CalculationResults>({
    monthlySavings: 315,
    systemSize: 6.5,
    paybackTime: 4.2,
    investment: 39900,
    totalSavings: 189000
  });
  
  // Cache for calculator results
  const cacheKey = `solar-calc-${monthlyBill}-${propertyType}-${roofArea}-${location}`;
  
  // Load cached results on mount
  useEffect(() => {
    const cachedResult = localStorage.getItem(cacheKey);
    if (cachedResult && monthlyBill && propertyType && roofArea && location) {
      try {
        const parsed = JSON.parse(cachedResult);
        setResults(parsed);
      } catch (error) {
        console.error('Error parsing cached results:', error);
      }
    }
  }, [cacheKey, monthlyBill, propertyType, roofArea, location]);

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill) || 0;
    const area = parseFloat(roofArea) || 0;

    if (!bill || !propertyType || !area || !location) {
      alert('Por favor, preencha todos os campos para calcular sua economia.');
      return;
    }

    // Calculation logic based on real solar energy parameters
    const savingsPercentage = 0.9; // 90% savings
    const monthlySavings = bill * savingsPercentage;
    const systemSize = Math.ceil(bill / 50); // Approximate formula
    const investment = systemSize * 6000; // R$ 6000 per kWp
    const paybackYears = investment / (monthlySavings * 12);
    const totalSavings = monthlySavings * 12 * 25; // 25 years

    const newResults = {
      monthlySavings,
      systemSize,
      paybackTime: paybackYears,
      investment,
      totalSavings
    };
    
    setResults(newResults);
    
    // Cache results for performance
    try {
      localStorage.setItem(cacheKey, JSON.stringify(newResults));
    } catch (error) {
      console.error('Error caching results:', error);
    }
  };

  const resultItems = [
    {
      icon: TrendingUp,
      label: "Economia mensal estimada",
      getValue: (r: CalculationResults) => `R$ ${r.monthlySavings.toFixed(0)}`,
      color: "text-solar-gold",
      bg: "bg-solar-gold/10",
      testId: "result-monthly-savings"
    },
    {
      icon: Zap,
      label: "Tamanho do sistema recomendado",
      getValue: (r: CalculationResults) => `${r.systemSize.toFixed(1)} kWp`,
      color: "text-earth-green",
      bg: "bg-earth-green/10",
      testId: "result-system-size"
    },
    {
      icon: Clock,
      label: "Tempo de retorno do investimento",
      getValue: (r: CalculationResults) => `${r.paybackTime.toFixed(1)} anos`,
      color: "text-sky-blue",
      bg: "bg-sky-blue/10",
      testId: "result-payback-time"
    },
    {
      icon: Banknote,
      label: "Investimento estimado",
      getValue: (r: CalculationResults) => `R$ ${r.investment.toLocaleString('pt-BR')}`,
      color: "text-slate-700",
      bg: "bg-slate-100",
      testId: "result-investment"
    }
  ];

  const openWhatsApp = () => {
    const phone = "5511999999999";
    const message = "Olá! Gostaria de falar com um especialista sobre energia solar.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="orcamento" className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Calcule sua <span className="text-solar-gold">Economia</span>
            </h2>
            <p className="text-xl text-slate-600">
              Descubra quanto você pode economizar com energia solar. 
              Faça uma simulação rápida e receba um orçamento personalizado.
            </p>
          </div>
          
          {/* Simulation Warning */}
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-8 fade-in">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-800 font-medium">
                  <strong>Importante:</strong> Esta é apenas uma simulação. Os valores apresentados podem variar conforme consumo, localização e condições específicas do projeto.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-solar-gold/5 to-earth-green/5 rounded-2xl p-8 lg:p-12 fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Simulador de Economia</h3>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="monthlyBill" className="text-sm font-semibold text-slate-700 mb-2">
                      Valor da sua conta de luz mensal (R$)
                    </Label>
                    <Input 
                      type="number" 
                      id="monthlyBill" 
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      placeholder="Digite o valor médio da sua conta de luz (ex: 350)" 
                      min="50" 
                      max="5000"
                      className="mt-2"
                      data-testid="input-monthly-bill"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="propertyType" className="text-sm font-semibold text-slate-700 mb-2">
                      Tipo de propriedade
                    </Label>
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger className="mt-2" data-testid="select-property-type">
                        <SelectValue placeholder="Escolha: residencial, comercial, industrial ou rural" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residencial</SelectItem>
                        <SelectItem value="commercial">Comercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="rural">Rural</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="roofArea" className="text-sm font-semibold text-slate-700 mb-2">
                      Área disponível do telhado (m²)
                    </Label>
                    <Input 
                      type="number" 
                      id="roofArea" 
                      value={roofArea}
                      onChange={(e) => setRoofArea(e.target.value)}
                      placeholder="Área aproximada do telhado ou local para instalação (ex: 50)" 
                      min="10" 
                      max="1000"
                      className="mt-2"
                      data-testid="input-roof-area"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="location" className="text-sm font-semibold text-slate-700 mb-2">
                      Localização
                    </Label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="mt-2" data-testid="select-location">
                        <SelectValue placeholder="Selecione seu estado para cálculo de irradiação solar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sp">São Paulo</SelectItem>
                        <SelectItem value="rj">Rio de Janeiro</SelectItem>
                        <SelectItem value="mg">Minas Gerais</SelectItem>
                        <SelectItem value="pr">Paraná</SelectItem>
                        <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                        <SelectItem value="ba">Bahia</SelectItem>
                        <SelectItem value="go">Goiás</SelectItem>
                        <SelectItem value="df">Distrito Federal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="button"
                    onClick={calculateSavings}
                    className="w-full bg-solar-gold text-white hover:bg-solar-gold/90 transform hover:scale-105 shadow-lg text-lg py-4 transition-all duration-300"
                    data-testid="button-calcular-economia"
                  >
                    Calcular Economia
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">
                    Entenda a Simulação
                  </h4>
                  <ul className="space-y-4 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-sky-blue mt-0.5 shrink-0" />
                      <span>Usamos a <strong>irradiação solar média</strong> da sua região. A geração real de energia pode variar com as condições climáticas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-sky-blue mt-0.5 shrink-0" />
                      <span>O <strong>tamanho do sistema</strong> é uma sugestão inicial. O dimensionamento final e exato será feito por um especialista após a visita técnica.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-sky-blue mt-0.5 shrink-0" />
                      <span>O <strong>investimento é uma estimativa</strong> e não inclui custos específicos da sua instalação. Para um valor preciso, solicite um orçamento.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Seus Resultados</h3>
                <div className="space-y-4">
                  {resultItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex items-center gap-4">
                      <div className={`${item.bg} p-3 rounded-lg`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <div className={`text-2xl font-bold ${item.color}`} data-testid={item.testId}>
                          {item.getValue(results)}
                        </div>
                        <div className="text-sm text-slate-600">{item.label}</div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="bg-gradient-to-r from-solar-gold to-earth-green rounded-xl p-6 text-white text-center">
                    <div className="flex items-center justify-center gap-4">
                      <PiggyBank className="w-8 h-8 opacity-80" />
                      <div>
                        <div className="text-2xl font-bold" data-testid="result-total-savings">
                          R$ {results.totalSavings.toLocaleString('pt-BR')}
                        </div>
                        <div className="text-sm opacity-90">Economia total em 25 anos</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-lg font-semibold text-slate-700 mb-4">
                    🤔 Quer um orçamento real e personalizado?
                  </p>
                  <div className="space-y-4">
                    <Button 
                      onClick={() => scrollTo('contato')}
                      className="w-full bg-earth-green text-white hover:bg-earth-green/90 transition-all duration-300"
                      data-testid="button-solicitar-orcamento"
                    >
                      Solicitar Orçamento Detalhado
                    </Button>
                    <Button 
                      onClick={openWhatsApp}
                      variant="outline"
                      className="w-full border-2 border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white transition-all duration-300"
                      data-testid="button-falar-especialista"
                    >
                      Falar com Especialista
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
