
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Atualizar metadados para SEO
    document.title = "Patinhas AgroPet - Banho e Tosa, Produtos e Serviços para Pets";
    
    // Adicionar schema.org markup para pet shop
    const schema = {
      "@context": "https://schema.org",
      "@type": "PetStore",
      "name": "Patinhas AgroPet",
      "description": "Encontre aqui o melhor atendimento e cuidado com seu pet. Banho e tosa, produtos de qualidade e busca e entrega.",
      "url": "https://petpatinhas.com.br",
      "telephone": "+5551998198415",
      "email": "farme901@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Vereador Ivo Schneider",
        "addressLocality": "Nova Hartz",
        "addressRegion": "RS",
        "addressCountry": "BR"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "12:00"
        }
      ],
      "image": "/lovable-uploads/485e0025-e932-4a74-84a4-060e70ad4a6e.png"
    };

    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.text = JSON.stringify(schema);
    document.head.appendChild(scriptElement);

    return () => {
      document.head.removeChild(scriptElement);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
