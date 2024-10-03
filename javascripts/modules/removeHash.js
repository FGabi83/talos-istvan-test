const removeHash = () => {
    document.addEventListener('DOMContentLoaded', () => {
      // Ellenőrizd, hogy a hash jelen van-e az URL-ben
      if (window.location.hash) {
        // Hash eltávolítása, a többi URL-tartalom megőrzése
      const cleanUrl = window.location.href.replace(/#/, ''); // Hash eltávolítása, de a többi rész megmarad
        
        // URL frissítése hash nélkül
        window.history.replaceState(null, '', cleanUrl);
      }
    });
  };
  
  export default removeHash;
  
  