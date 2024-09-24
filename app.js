document.getElementById('fiche-client').addEventListener('submit', function(event) {
event.preventDefault();

const longueur = parseFloat(document.getElementById('longueur').value);
const prixParMetre = 3900;
const prixTotal = longueur * prixParMetre;

document.getElementById('prix-total').querySelector('span').textContent = prixTotal;

// Optionnel : sauvegarder les données
const clientData = {
nom: document.getElementById('nom').value,
telephone: document.getElementById('telephone').value,
adresse: document.getElementById('adresse').value,
longueur: longueur,
prixTotal: prixTotal
};

localStorage.setItem('dernierDevis', JSON.stringify(clientData));

alert('Devis calculé et sauvegardé.');
});