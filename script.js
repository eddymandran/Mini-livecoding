//gsap.from definit ou les valeurs doivent demarrer pour finir a l'etat actuel

gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce' });
gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
gsap.from('.right', { duration: 1, x: '-100vw', ease: 'power2.in' });
gsap.from('.left', { duration: 1, delay: 1.5, x: '-100%' });

//gasp.to permet de definir les valeurs de destinations
gsap.to('.footer', { duration: 1, y: 0, ease: 'elastic', delay: 2.5 });

// definit a la fois les valeurs de debut et de fin de l'animation
gsap.fromTo(
  '.button',
  { opacity: 0, scale: 0, rotation: 720 },
  { duration: 1, delay: 2, opacity: 1, scale: 1, rotation: 0 }
);

/*
timeline: outil de sequencage qui permet en autre de passer des valeurs par defauts tels que la durée ou le delai 
entre chaque animation. Permet egalement de metre en pause l'animation, de recommencer ou de lire à l'envers l'animation
*/

const myTimeline = gsap.timeline({ defaults: { duration: 1 } });
myTimeline
  .from('.header', { y: '-100%', ease: 'bounce' })
  .from('.link', { opacity: 0, stagger: 0.5 })
  .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
  .from('.left', { x: '-100%' }, '<0.5') // <0.5 lance l'animation 0.5s apres le debut de l'animation la plus récemment ajoutée (.right)
  .to('.footer', { y: 0, ease: 'elastic' })
  .fromTo(
    '.button',
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0 }
  );

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  myTimeline.reverse();
});
