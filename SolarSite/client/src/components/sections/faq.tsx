import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

// Aqui você pode adicionar, remover ou editar as perguntas e respostas facilmente.
const faqData = [
  {
    question: "Qual a garantia dos painéis e do serviço?",
    answer:
      "Oferecemos uma garantia de performance de 25 anos para os painéis solares e uma garantia de 12 anos contra defeitos de fabricação. Nosso serviço de instalação tem garantia de 5 anos, cobrindo qualquer problema relacionado à montagem e conexão do sistema.",
  },
  {
    question: "A instalação faz muita sujeira ou barulho?",
    answer:
      "Nossa equipe é treinada para trabalhar de forma limpa e organizada. A maior parte do trabalho é feita no telhado e no local do inversor. O barulho é mínimo, geralmente restrito ao uso de ferramentas para fixação das estruturas, e sempre buscamos minimizar qualquer incômodo.",
  },
  {
    question: "Como funciona a manutenção do sistema solar?",
    answer:
      "A manutenção é simples. Recomendamos uma limpeza anual dos painéis para remover poeira e detritos, garantindo a máxima eficiência. Além disso, oferecemos planos de manutenção preventiva que incluem inspeções técnicas completas do sistema e dos componentes.",
  },
  {
    question: "Posso financiar o projeto de energia solar?",
    answer:
      "Sim! Temos parceria com diversas instituições financeiras que oferecem linhas de crédito específicas para energia solar, com taxas de juros atrativas e prazos de pagamento flexíveis. Muitas vezes, o valor da parcela do financiamento é menor do que a economia que você terá na conta de luz.",
  },
  {
    question: "O que acontece se eu gerar mais energia do que consumo?",
    answer:
      "A energia excedente que seu sistema produz é injetada na rede da concessionária local, gerando 'créditos de energia'. Esses créditos são usados para abater o seu consumo nos meses em que você gerar menos energia do que consome, como em períodos mais chuvosos ou durante a noite. Os créditos têm validade de 60 meses.",
  },
  {
    question: "O sistema funciona em dias nublados ou chuvosos?",
    answer:
      "Sim, o sistema continua gerando energia mesmo em dias nublados, embora com uma produção menor. Os painéis solares captam a luminosidade, não apenas a luz solar direta. A chuva, inclusive, ajuda a manter os painéis limpos, o que é benéfico para a performance.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Perguntas <span className="text-solar-gold">Frequentes</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tiramos as principais dúvidas para que você tenha total segurança ao
            investir em energia solar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-slate-200 bg-slate-50/50 rounded-xl px-6 transition-all hover:bg-slate-100/70"
              >
                <AccordionTrigger className="text-left font-semibold text-lg text-slate-800 hover:no-underline py-4 group">
                  <span className="flex-1">{item.question}</span>
                  <Plus className="h-5 w-5 shrink-0 text-solar-gold transition-transform duration-200 group-data-[state=open]:hidden" />
                  <Minus className="h-5 w-5 shrink-0 text-solar-gold transition-transform duration-200 group-data-[state=closed]:hidden" />
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 pr-8">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}