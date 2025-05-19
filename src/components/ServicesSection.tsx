
import { Scissors, Car, HomeIcon, ShoppingBag, Heart, Tag } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Banho e Tosa',
      description: 'Banhos higiênicos e tosa com profissionais experientes, utilizando produtos de qualidade para deixar seu pet limpo e cheiroso.'
    },
    {
      icon: Car,
      title: 'Busca e Entrega',
      description: 'Serviço de transporte para buscar e levar seu pet em sua casa, garantindo praticidade e conforto.'
    },
    {
      icon: HomeIcon,
      title: 'Hospedagem',
      description: 'Ambiente seguro e confortável para seu pet se hospedar durante sua ausência, com cuidados personalizados.'
    },
    {
      icon: ShoppingBag,
      title: 'Produtos Pet',
      description: 'Variedade de produtos para seu pet, incluindo alimentação, acessórios, brinquedos e camas de qualidade.'
    },
    {
      icon: Heart,
      title: 'Cuidados Especiais',
      description: 'Atendimento personalizado para pets com necessidades especiais, garantindo todo o cuidado necessário.'
    },
    {
      icon: Tag,
      title: 'Preços Acessíveis',
      description: 'Oferecemos serviços de qualidade com preços justos e acessíveis para cuidar do seu melhor amigo.'
    }
  ];

  return (
    <section id="serviços" className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas para o bem-estar e cuidado do seu pet
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <a href="https://wa.me/5551998198415" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            Agende um serviço
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
