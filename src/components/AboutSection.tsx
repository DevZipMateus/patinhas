import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
const AboutSection = () => {
  const features = ['Equipe altamente qualificada', 'Atendimento personalizado', 'Produtos de qualidade', 'Preços competitivos', 'Ambiente higiênico', 'Horário flexível'];
  return <section id="sobre-nós" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Conheça a Patinhas e o nosso compromisso com o bem-estar do seu pet
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img alt="Patinhas Pet Shop" className="w-full h-auto object-cover" src="/lovable-uploads/946ccf7c-375e-492a-8e7a-2ff557ff621d.jpg" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-100 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-primary/10 text-primary rounded-full font-codec">
              Nossa História
            </span>
            <h3 className="text-3xl font-bold font-codec">Encontre aqui o melhor atendimento e cuidado com seu pet</h3>
            <p className="text-gray-600">
              A Patinhas foi criada com a missão de oferecer o melhor atendimento e cuidado para o seu animal de estimação. 
              Sob a direção da Nádia, nossa equipe é formada por profissionais apaixonados por pets e dedicados a proporcionar 
              o melhor serviço.
            </p>
            <p className="text-gray-600">
              Trabalhamos com agilidade e eficiência, priorizando sempre o cuidado e o carinho com o seu pet. 
              Nossa infraestrutura é equipada para garantir o conforto e bem-estar dos animais durante sua estadia conosco.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map(feature => <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>)}
            </div>
            
            <a href="https://wa.me/5551998198415" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-4">
              Fale com a gente
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default AboutSection;