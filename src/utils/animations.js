// Utility pour les animations au scroll
export const observeElements = () => {
  // Attendre que le DOM soit prêt
  if (typeof window === 'undefined') return;
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observer tous les éléments avec la classe 'animate-on-scroll'
  // Utiliser setTimeout pour s'assurer que les éléments sont rendus
  setTimeout(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observer.observe(el);
    });
  }, 100);
};

export const initParallax = () => {
  if (typeof window === 'undefined') return;
  
  const handleScroll = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  };
  
  // Utiliser requestAnimationFrame pour de meilleures performances
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
};

