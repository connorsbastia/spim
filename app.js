// Initialiser EmailJS avec ton USER ID
emailjs.init("d_CfogyHF8gdpyXsx");

document.getElementById('fiche-client').addEventListener('submit', function(event) {
event.preventDefault();

// Récupérer les valeurs des champs du formulaire
const nom = document.getElementById('nom').value;
const email = document.getElementById('email').value;
const telephone = document.getElementById('telephone').value;
const adresse = document.getElementById('adresse').value;
const longueur = parseFloat(document.getElementById('longueur').value);
const epaisseur = parseFloat(document.getElementById('epaisseur').value);

// Calcul du devis
const prixParMetre = 3900;
const prixTotal = longueur * prixParMetre;
const nbTrous = Math.round(longueur * 10); // Utiliser Math.round pour le nombre de trous
const nbPochesParMetre = (epaisseur / 22) * 3 / 10; // Base de calcul pour 22cm d'épaisseur
const nbPochesInjecte = longueur * nbPochesParMetre;

// Préparer les paramètres pour EmailJS
const templateParams = {
nom: nom,
email: email,
telephone: telephone,
adresse: adresse,
longueur: longueur,
epaisseur: epaisseur,
nbTrous: nbTrous,
nbPochesInjecte: nbPochesInjecte.toFixed(1),
prixTotal: prixTotal.toFixed(2)
};

// Afficher les résultats dans la section prévue
document.getElementById('nom-resultat').textContent = nom;
document.getElementById('email-resultat').textContent = email;
document.getElementById('telephone-resultat').textContent = telephone;
document.getElementById('adresse-resultat').textContent = adresse;
document.getElementById('longueur-resultat').textContent = longueur;
document.getElementById('epaisseur-resultat').textContent = epaisseur;
document.getElementById('nb-trous-resultat').textContent = nbTrous;
document.getElementById('nb-Poches-600ml-resultat').textContent = nbPochesInjecte.toFixed(1);
document.getElementById('prix-total-resultat').textContent = "Rs " + prixTotal.toFixed(2);

// Afficher la section des résultats
document.getElementById('resultat').style.display = 'block';

// Envoyer les données par EmailJS
emailjs.send('service_qp3sjeo', 'template_pljm4xp', templateParams)
.then(function(response) {
console.log('SUCCESS!', response.status, response.text);
alert('Devis envoyé par e-mail avec succès!');
}, function(error) {
console.log('FAILED...', error);
alert('Erreur lors de l\'envoi de l\'e-mail :', error);
});
});
