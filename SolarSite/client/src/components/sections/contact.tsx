import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const brazilianStates = [ { value: "AC", label: "Acre" }, { value: "AL", label: "Alagoas" }, { value: "AP", label: "Amapá" }, { value: "AM", label: "Amazonas" }, { value: "BA", label: "Bahia" }, { value: "CE", label: "Ceará" }, { value: "DF", label: "Distrito Federal" }, { value: "ES", label: "Espírito Santo" }, { value: "GO", label: "Goiás" }, { value: "MA", label: "Maranhão" }, { value: "MT", label: "Mato Grosso" }, { value: "MS", label: "Mato Grosso do Sul" }, { value: "MG", label: "Minas Gerais" }, { value: "PA", label: "Pará" }, { value: "PB", label: "Paraíba" }, { value: "PR", label: "Paraná" }, { value: "PE", label: "Pernambuco" }, { value: "PI", label: "Piauí" }, { value: "RJ", label: "Rio de Janeiro" }, { value: "RN", label: "Rio Grande do Norte" }, { value: "RS", label: "Rio Grande do Sul" }, { value: "RO", label: "Rondônia" }, { value: "RR", label: "Roraima" }, { value: "SC", label: "Santa Catarina" }, { value: "SP", label: "São Paulo" }, { value: "SE", label: "Sergipe" }, { value: "TO", label: "Tocantins" } ];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    message: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Erro",
        description: "Você deve aceitar os termos de privacidade para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send data to backend
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      message: "",
      consent: false
    });
  };

  const openWhatsApp = () => {
    const phone = "5511999999999";
    const message = "Olá! Gostaria de saber mais sobre energia solar.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Entre em <span className="text-solar-gold">Contato</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estamos prontos para transformar sua energia. Fale conosco e receba um atendimento 
            personalizado com nossos especialistas em energia solar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Solicite seu Orçamento</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-semibold text-slate-700 mb-2">
                      Nome *
                    </Label>
                    <Input 
                      type="text" 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      placeholder="Seu nome"
                      required
                      className="mt-2"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-semibold text-slate-700 mb-2">
                      Sobrenome *
                    </Label>
                    <Input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      placeholder="Seu sobrenome"
                      required
                      className="mt-2"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-2">
                      E-mail *
                    </Label>
                    <Input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="seu@email.com"
                      required
                      className="mt-2"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-slate-700 mb-2">
                      Telefone/WhatsApp *
                    </Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(11) 99999-9999"
                      required
                      className="mt-2"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="city" className="text-sm font-semibold text-slate-700 mb-2">
                      Cidade *
                    </Label>
                    <Input 
                      type="text" 
                      id="city" 
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      placeholder="Sua cidade"
                      required
                      className="mt-2"
                      data-testid="input-city"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-sm font-semibold text-slate-700 mb-2">
                      Estado *
                    </Label>
                    <Select value={formData.state} onValueChange={(value) => setFormData({...formData, state: value})} required>
                      <SelectTrigger className="mt-2" data-testid="select-state">
                        <SelectValue placeholder="Selecione seu estado" />
                      </SelectTrigger>
                      <SelectContent>
                        {brazilianStates.map(state => (
                          <SelectItem key={state.value} value={state.value}>{state.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-slate-700 mb-2">
                    Mensagem
                  </Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto de energia solar..."
                    className="mt-2 resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox 
                      id="consent" 
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
                      className="w-4 h-4"
                      data-testid="checkbox-consent"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label htmlFor="consent" className="text-slate-600">
                      Concordo em receber comunicações da SolarTech Brasil e aceito os 
                      <a href="#" className="text-solar-gold hover:underline ml-1">termos de privacidade</a>.
                    </Label>
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-solar-gold text-white hover:bg-solar-gold/90 transform hover:scale-105 shadow-lg text-lg py-4 transition-all duration-300"
                  data-testid="button-enviar-solicitacao"
                >
                  Enviar Solicitação
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-slate-200/60">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">
                  O que acontece depois?
                </h4>
                <ol className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-solar-gold text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">1</div>
                    <span><strong>Análise da Solicitação:</strong> Um de nossos especialistas revisará suas informações para entender as necessidades do seu projeto.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-solar-gold text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">2</div>
                    <span><strong>Contato e Agendamento:</strong> Entraremos em contato em até 24 horas úteis para tirar dúvidas e, se necessário, agendar uma visita técnica sem compromisso.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-solar-gold text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">3</div>
                    <span><strong>Proposta Personalizada:</strong> Você receberá um orçamento detalhado e transparente, com todas as informações sobre equipamentos, custos e economia.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-solar-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-solar-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Endereço</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Av. Paulista, 1000 - Sala 1205<br />
                      Bela Vista, São Paulo - SP<br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-earth-green/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-earth-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Telefone</h4>
                    <p className="text-slate-600">
                      <a href="tel:+5511999999999" className="hover:text-earth-green transition-colors">
                        (11) 99999-9999
                      </a>
                    </p>
                    <p className="text-slate-600">
                      <a href="tel:+551133333333" className="hover:text-earth-green transition-colors">
                        (11) 3333-3333
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sky-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-sky-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">E-mail</h4>
                    <p className="text-slate-600">
                      <a href="mailto:contato@solartechbrasil.com.br" className="hover:text-sky-blue transition-colors">
                        contato@solartechbrasil.com.br
                      </a>
                    </p>
                    <p className="text-slate-600">
                      <a href="mailto:orcamento@solartechbrasil.com.br" className="hover:text-sky-blue transition-colors">
                        orcamento@solartechbrasil.com.br
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Horário de Atendimento</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Segunda a Sexta:</span>
                  <span className="font-semibold text-slate-900">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sábado:</span>
                  <span className="font-semibold text-slate-900">8h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Domingo:</span>
                  <span className="font-semibold text-slate-900">Fechado</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-4">
                  Atendimento 24h via WhatsApp para emergências
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 text-white hover:bg-green-600 flex items-center justify-center gap-2"
                  data-testid="button-whatsapp-contact"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                  </svg>
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
