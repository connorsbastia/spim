document.getElementById('fiche-client').addEventListener('submit', function(event) {
event.preventDefault();

const nom = document.getElementById('nom').value;
const email = document.getElementById('email').value;
const telephone = document.getElementById('telephone').value;
const adresse = document.getElementById('adresse').value;
const longueur = parseFloat(document.getElementById('longueur').value);
const epaisseur = parseFloat(document.getElementById('epaisseur').value);
const prixParMetre = 3900;
const prixTotal = longueur * prixParMetre;

// Calcul du nombre de trous à percer
const nbTrous = longueur * 10;

// Calcul du volume injecté en poches de 600ml
const volumeParMetre = (epaisseur / 22) * 3 / 10;
const volumeInjecte = longueur * volumeParMetre;

// Afficher les résultats
document.getElementById('prix-total').querySelector('span').textContent = prixTotal;
document.getElementById('nb-trous').querySelector('span').textContent = nbTrous;
document.getElementById('volume-injecte').querySelector('span').textContent = volumeInjecte.toFixed(1);

// Envoi de l'e-mail via EmailJS
emailjs.init("stephane"); 

const templateParams = {
nom: nom,
email: email,
telephone: telephone,
adresse: adresse,
longueur: longueur,
epaisseur: epaisseur,
nbTrous: nbTrous,
volumeInjecte: volumeInjecte.toFixed(1),
prixTotal: prixTotal
};

emailjs.send('service_qp3sjeo', 'template_gor9z9a', templateParams)
.then(function(response) {
alert('Devis envoyé par e-mail avec succès!', response.status, response.text);
}, function(error) {
alert('Erreur lors de l\'envoi de l\'e-mail:', error);
});

// Optionnel : sauvegarder les données localement
const clientData = {
nom: nom,
email: email,
telephone: telephone,
adresse: adresse,
longueur: longueur,
epaisseur: epaisseur,
nbTrous: nbTrous,
volumeInjecte: volumeInjecte,
prixTotal: prixTotal
};

localStorage.setItem('dernierDevis', JSON.stringify(clientData));

alert('Devis calculé et sauvegardé.');
});

