// scrollTo.js
/*
const ScrollToSection = () => {
  // Keresd meg az összes navigációs linket
  document.querySelectorAll('.js-nav--item').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Megakadályozza az alapértelmezett link viselkedést

      const targetId = this.getAttribute('href'); // A link href attribútuma
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Számoljuk ki az elem pozícióját
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        // Smooth scroll az elemhez
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });

        // History API használata az URL frissítéséhez
        const sectionName = targetId.replace('#', ''); 
        window.history.pushState(null, '', sectionName); // Frissíti az URL-t
      }
    });
  });
};*/

const ScrollToSection = () => {
  // Keresd meg az összes navigációs linket
  document.querySelectorAll('.js-nav--item').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Megakadályozza az alapértelmezett link viselkedést

      const targetId = this.getAttribute('href'); // A link href attribútuma
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Számoljuk ki az elem pozícióját
        // Használj offsetTop-ot a teljes dokumentumra vonatkozóan
        const elementPosition = targetElement.offsetTop;

        // A fejléc magasságát, pl. 80px, levonhatod, ha van fix fejléc
        const headerHeight = 80; // Módosítsd a saját fejléced magasságának megfelelően

        // Smooth scroll az elemhez
        window.scrollTo({
          top: elementPosition - headerHeight, // Levonjuk a fejléc magasságát
          behavior: 'smooth'
        });

        // History API használata az URL frissítéséhez
        const sectionName = targetId.replace('#', ''); 
        window.history.pushState(null, '', sectionName); // Frissíti az URL-t
      }
    });
  });
};

/*const ScrollToSection = () => {
  document.querySelectorAll('.js-nav--item').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Megakadályozza az alapértelmezett link viselkedését

      const targetId = this.getAttribute('href'); // A link href attribútuma
      const targetElement = document.querySelector(targetId); // Keresd meg a cél elemet

      if (targetElement) {
        // Számoljuk ki az elem pozícióját
        const elementPosition = targetElement.offsetTop;
        const headerHeight = 80; // Módosítsd a saját fejléced magasságának megfelelően

        // Smooth scroll az elemhez
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: 'smooth'
        });

        // History API használata az URL frissítéséhez
        const sectionName = targetId.replace('#', ''); 
        window.history.pushState(null, '', `${window.location.origin}/${sectionName}`); // Frissíti az URL-t
      }
    });
  });
};
*/


export default ScrollToSection;
