
import TestimonialCard from './TestimonialCard';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "A equipe da Patinhas é incrível! O banho e tosa da minha cachorrinha ficou perfeito. Eles são carinhosos e atenciosos com os pets.",
      author: "Carla Silva",
      role: "Cliente",
      rating: 5
    },
    {
      content: "O serviço de busca e entrega é muito prático. Meu pet volta sempre feliz e cheiroso para casa. Super recomendo!",
      author: "Ana Souza",
      role: "Cliente",
      rating: 5
    },
    {
      content: "Encontrei todos os produtos que precisava para meu gato. Ótimo atendimento e orientação sobre alimentação e cuidados específicos.",
      author: "Marcos Oliveira",
      role: "Cliente",
      rating: 5
    },
    {
      content: "Minha cachorra fica super à vontade na Patinhas. A Nádia e toda equipe tratam os pets com muito carinho e profissionalismo.",
      author: "Patricia Mendes",
      role: "Cliente",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.author} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <TestimonialCard 
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
