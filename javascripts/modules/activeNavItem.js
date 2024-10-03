function activeNavItem() {
  // Lekérjük az összes navigációs elemet
  let links = document.querySelectorAll('.js-nav--item');
  
  // Lekérjük az aktuális hash-t (pl. #about vagy #contact)
  let currentHash = window.location.hash || '#home';  // Alapértelmezett a #home, ha nincs hash
  
  // Végigmegyünk a linkeken, és ellenőrizzük, hogy a hash egyezik-e
  links.forEach(link => {
    let linkHash = link.getAttribute('href');  // A hivatkozás (pl. #about, #contact)
    
    if (linkHash === currentHash) {
      console.log('ok', 'linkHash:', linkHash, 'currentHash:', currentHash);
      link.classList.add('js-nav--item__active');  // Aktív osztály hozzáadása
    } else {
      console.log('not ok', 'linkHash:', linkHash, 'currentHash:', currentHash);
      link.classList.remove('js-nav--item__active');  // Aktív osztály eltávolítása
    }
  });
}

// Meghívjuk az activeNavItem függvényt minden hash változáskor
window.addEventListener('hashchange', activeNavItem);

// Meghívjuk egyszer, amikor az oldal betöltődik
document.addEventListener('DOMContentLoaded', activeNavItem);


export default activeNavItem;

