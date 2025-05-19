
import { Instagram, MessageSquare, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/10 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-codec text-primary">Patinhas</h3>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/485e0025-e932-4a74-84a4-060e70ad4a6e.png" 
                alt="Patinhas AgroPet" 
                className="h-12 w-auto mr-2"
              />
            </div>
            <p className="text-gray-600 mb-6">
              Aqui trabalhamos com agilidade e eficiência. Priorizamos o cuidado e o carinho com o seu pet.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/patinhasagropet.tdai" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/5551998198415" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors text-white">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-codec text-primary">Serviços</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#serviços" className="hover:text-primary transition-colors">Banho e Tosa</a></li>
              <li><a href="#serviços" className="hover:text-primary transition-colors">Busca e Entrega</a></li>
              <li><a href="#serviços" className="hover:text-primary transition-colors">Produtos Pet</a></li>
              <li><a href="#serviços" className="hover:text-primary transition-colors">Hospedagem</a></li>
              <li><a href="#serviços" className="hover:text-primary transition-colors">Cuidados Especiais</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-codec text-primary">Links Úteis</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#início" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#sobre-nós" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#serviços" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#planos" className="hover:text-primary transition-colors">Pacotes</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-codec text-primary">Contato</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <p>(51) 99819-8415</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <p>farme901@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <p>Av. Vereador Ivo Schneider</p>
                  <p>Nova Hartz - RS</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-12 pt-8 text-gray-600 text-sm text-center">
          <p>&copy; {currentYear} Patinhas AgroPet. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
