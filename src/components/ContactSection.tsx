
import { Mail, Phone, MapPin, WhatsApp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-gradient-to-b from-primary/10 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender você e seu pet com todo carinho e atenção
          </p>
        </AnimatedSection>

        <div className="mt-8">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-6 sm:p-8 border-primary/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-primary font-codec">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Telefone */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Telefone</h4>
                    <p className="text-sm text-gray-600">(51) 99819-8415</p>
                    <a 
                      href="https://wa.me/5551998198415" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-sm text-primary mt-1 hover:underline"
                    >
                      <WhatsApp className="h-4 w-4 mr-1" /> WhatsApp
                    </a>
                  </div>
                </div>
                
                {/* E-mail */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">E-mail</h4>
                    <p className="text-sm text-gray-600 break-words">farme901@gmail.com</p>
                    <p className="text-sm text-gray-600 break-words">contato@petpatinhas.com.br</p>
                  </div>
                </div>
                
                {/* Endereço */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Endereço</h4>
                    <p className="text-sm text-gray-600">Av. Vereador Ivo Schneider</p>
                    <p className="text-sm text-gray-600">Nova Hartz - RS</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Horário de Atendimento</h4>
                <p className="text-gray-600 text-sm">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-600 text-sm">Sábados: 8h às 12h</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Botão flutuante de WhatsApp */}
      <a 
        href="https://wa.me/5551998198415" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <WhatsApp className="h-6 w-6" />
      </a>
    </section>
  );
};

export default ContactSection;
