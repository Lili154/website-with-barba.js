  const burger = document.getElementById('burger');
  const nav = document.getElementById('desktopMenu');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  barba.init({
    transitions: [{
      name: 'slide-transition',
      once({ next }) {
        gsap.from(next.container, { x: '100%', duration: 0.5 });
      },
      leave({ current }) {
        return gsap.to(current.container, { x: '-100%', duration: 0.5 });
      },
      enter({ next }) {
        gsap.from(next.container, { x: '100%', duration: 0.5 });
      }
    }]
  });
  barba.hooks.afterEnter(() => {
    const namespace = document.querySelector('[data-barba="container"]').dataset.barbaNamespace;
  
    const bg = document.querySelector('.background-image');
  
    if (namespace === 'index') {
      bg.style.backgroundImage = "url('images/sea.webp')";
    } else if (namespace === 'about_us') {
      bg.style.backgroundImage = "url('images/more-plyazh-4.jpg')";
    }else if (namespace === 'rooms') {
      bg.style.backgroundImage = "url('gallery/gallery10.jpg')";
    }else if (namespace === 'contacts') {
      bg.style.backgroundImage = "url('images/fon-more-plyazh-47.jpg')";
    }else if (namespace === 'reviews') {
      bg.style.backgroundImage = "url('images/palma.jpg')";
    }
    else if (namespace === 'gallery') {
      bg.style.backgroundImage = "url('images/palma.jpg')";
    }
    else if (namespace === 'fun') {
      bg.style.backgroundImage = "url('images/more-plyazh-4.jpg')";
    }
  });
  