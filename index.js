let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// document.addEventListener("DOMContentLoaded", function () {
//   const boutonsAjouterAuPanier = document.querySelectorAll(".add-to-cart");
//   const panier = document.getElementById("panier");
//   let compteur = 0;

//   boutonsAjouterAuPanier.forEach((bouton) => {
//     bouton.addEventListener("click", function () {
//       compteur++;
//       panier.textContent = `  ${compteur}`;
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const boutonsAjouterAuPanier = document.querySelectorAll(".add-to-cart");
  const panier = document.getElementById("panier");
  const boutonReset = document.getElementById("reset-cart");
  let compteur = 0;

  boutonsAjouterAuPanier.forEach((bouton) => {
    bouton.addEventListener("click", function () {
      compteur++;
      panier.textContent = ` ${compteur}`;
    });
  });

  boutonReset.addEventListener("click", function () {
    compteur = 0;
    panier.textContent = ` ${compteur}`;
  });
});
