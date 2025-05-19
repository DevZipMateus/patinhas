
import PlanCard from './PlanCard';
import AnimatedSection from './AnimatedSection';

const PlansSection = () => {
  const plans = [{
    title: "Banho",
    price: "A partir de R$35",
    description: "Para pets de pequeno porte",
    features: ["Shampoo adequado", "Secagem completa", "Perfume hipoalergênico", "Escovação", "Limpeza de ouvidos"],
    isPopular: false
  }, {
    title: "Banho & Tosa",
    price: "A partir de R$65",
    description: "O pacote mais procurado",
    features: ["Banho completo", "Tosa higiênica", "Corte das unhas", "Limpeza de ouvidos", "Escovação de dentes", "Perfumação"],
    isPopular: true
  }, {
    title: "Premium",
    price: "A partir de R$85",
    description: "Para pets exigentes",
    features: ["Banho completo", "Tosa na máquina ou tesoura", "Hidratação", "Escovação profunda", "Busca e entrega", "Laço ou gravata"],
    isPopular: false
  }];

  return (
    <section id="planos" className="bg-white py-16">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Pacotes</h2>
          <p className="section-subtitle">
            Escolha o melhor pacote de banho e tosa para o seu pet
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.title} animation="fade-in-up" delay={index * 150}>
              <PlanCard 
                title={plan.title} 
                price={plan.price} 
                description={plan.description} 
                features={plan.features} 
                isPopular={plan.isPopular} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center bg-pink-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3 font-codec">Precisa de um atendimento personalizado?</h3>
          <p className="text-gray-600 mb-6">
            Oferecemos pacotes personalizados para pets com necessidades específicas. 
            Entre em contato conosco para um orçamento sob medida.
          </p>
          <a href="https://wa.me/5551998198415" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            Solicitar Orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlansSection;
