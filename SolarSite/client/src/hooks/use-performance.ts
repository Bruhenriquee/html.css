import { useEffect } from 'react';

/**
 * Hook para otimizações de performance
 */
export function useImageOptimization() {
  useEffect(() => {
    // Lazy loading para imagens que não têm loading="lazy" definido
    const images = document.querySelectorAll('img:not([loading])');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          
          // Adiciona loading lazy se não estiver definido
          if (!img.getAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
          }
          
          // Adiciona decoding async se não estiver definido
          if (!img.getAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
          }
          
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
    
    images.forEach((img) => imageObserver.observe(img));
    
    return () => {
      images.forEach((img) => imageObserver.unobserve(img));
    };
  }, []);
}

/**
 * Hook para precarregar recursos críticos
 */
export function useResourcePreloading() {
  useEffect(() => {
    // Precarregar próximas seções quando o usuário está navegando
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentSection = entry.target;
          const nextSection = currentSection.nextElementSibling;
          
          if (nextSection) {
            // Precarregar imagens da próxima seção
            const nextImages = nextSection.querySelectorAll('img[data-src]');
            nextImages.forEach((element) => {
              const img = element as HTMLImageElement;
              const dataSrc = img.getAttribute('data-src');
              if (dataSrc && !img.src) {
                img.src = dataSrc;
              }
            });
          }
        }
      });
    }, {
      rootMargin: '100px 0px',
      threshold: 0.1
    });
    
    // Observar todas as seções
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => sectionObserver.observe(section));
    
    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);
}

/**
 * Hook para cache inteligente de dados
 */
export function useSmartCache(key: string, data: any, ttl: number = 3600000) { // 1 hora padrão
  useEffect(() => {
    if (data && key) {
      const cacheItem = {
        data,
        timestamp: Date.now(),
        ttl
      };
      
      try {
        localStorage.setItem(`cache_${key}`, JSON.stringify(cacheItem));
      } catch (error) {
        console.warn('Error caching data:', error);
      }
    }
  }, [key, data, ttl]);
}

/**
 * Função para recuperar dados do cache
 */
export function getCachedData(key: string) {
  try {
    const cached = localStorage.getItem(`cache_${key}`);
    if (!cached) return null;
    
    const cacheItem = JSON.parse(cached);
    const now = Date.now();
    
    // Verificar se o cache expirou
    if (now - cacheItem.timestamp > cacheItem.ttl) {
      localStorage.removeItem(`cache_${key}`);
      return null;
    }
    
    return cacheItem.data;
  } catch (error) {
    console.warn('Error retrieving cached data:', error);
    return null;
  }
}

/**
 * Hook para otimizar performance geral
 */
export function usePerformanceOptimization() {
  useImageOptimization();
  useResourcePreloading();
  
  useEffect(() => {
    // Debounce para scroll events
    let scrollTimeout: NodeJS.Timeout;
    
    const optimizedScrollHandler = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Executar ações de scroll aqui se necessário
      }, 16); // ~60fps
    };
    
    // Adicionar passive listeners para melhor performance
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    window.addEventListener('touchstart', () => {}, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler);
      clearTimeout(scrollTimeout);
    };
  }, []);
}