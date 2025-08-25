import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Advantages from "@/components/sections/advantages";
import Projects from "@/components/sections/projects";
import Faq from "@/components/sections/faq";
import Calculator from "@/components/sections/calculator";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import { useScrollAnimation } from "@/hooks/use-scroll";
import { usePerformanceOptimization } from "@/hooks/use-performance";
import { useEffect } from "react";

export default function Home() {
  useScrollAnimation();
  usePerformanceOptimization();

  useEffect(() => {
    // Set page title and meta description
    document.title = "SolarTech Brasil - Instalação de Energia Solar | Economia até 95% na Conta de Luz";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Especialistas em energia solar no Brasil com mais de 10 anos de experiência. Instalação, manutenção e consultoria. Economia até 95% na conta de luz. Orçamento gratuito.");
    
    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: 'SolarTech Brasil - Energia Solar Residencial e Comercial' },
      { property: 'og:description', content: 'Transforme energia solar em economia real. Mais de 5.000 projetos instalados. Orçamento gratuito e instalação em 24h.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630' }
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });
    
    // Preload critical resources
    const preloadResources = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&fm=webp&q=85'
    ];
    
    preloadResources.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = href.includes('fonts.googleapis') ? 'style' : 'image';
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Projects />
        <Faq />
        <Calculator />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
