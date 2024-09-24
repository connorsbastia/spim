document.getElementById('fiche-client').addEventListener('submit', function(event) {
event.preventDefault();

const longueur = parseFloat(document.getElementById('longueur').value);
const epaisseur = parseFloat(document.getElementById('epaisseur').value);
const prixParMetre = 3900;
const prixTotal = longueur * prixParMetre;

// Calcul du nombre de trous à percer
const nbTrous = longueur * 10;

// Calcul du volume injecté en poches de 600ml
// Pour 10 m de longueur de mur et une épaisseur de 22 cm, on injecte 3 poches
// Le volume injecté est proportionnel à la longueur et l'épaisseur
const volumeParMetre = (epaisseur / 22) * 3 / 10; // 3 poches pour 10 m et 22 cm
const volumeInjecte = longueur * volumeParMetre;

// Afficher les résultats
document.getElementById('prix-total').querySelector('span').textContent = prixTotal;
document.getElementById('nb-trous').querySelector('span').textContent = nbTrous;
document.getElementById('volume-injecte').querySelector('span').textContent = volumeInjecte.toFixed(1);

// Optionnel : sauvegarder les données
const clientData = {
nom: document.getElementById('nom').value,
telephone: document.getElementById('telephone').value,
adresse: document.getElementById('adresse').value,
longueur: longueur,
epaisseur: epaisseur,
nbTrous: nbTrous,
volumeInjecte: volumeInjecte,
prixTotal: prixTotal
};

localStorage.setItem('dernierDevis', JSON.stringify(clientData));

alert('Devis calculé et sauvegardé.');
});
