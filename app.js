// Initialiser EmailJS avec ton USER ID
emailjs.init("d_CfogyHF8gdpyXsx");

document.getElementById('fiche-client').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des valeurs du formulaire
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const adresse = document.getElementById('adresse').value;
    const longueur = parseFloat(document.getElementById('longueur').value);
    const epaisseur = parseFloat(document.getElementById('epaisseur').value);

    // Validation simple des données
    if (!nom || !email || !telephone || !adresse || isNaN(longueur) || isNaN(epaisseur)) {
        alert('Veuillez remplir correctement tous les champs.');
        return;
    }

    // Calculs
    const nbTrous = longueur * 10;
    const nbPoches600ml = (longueur / 10) * (epaisseur / 22) * 3;
    const prixTotal = longueur * 3900;

    // Affichage des résultats à l'utilisateur (sans le nombre de poches injectées)
    document.getElementById('nom-resultat').innerText = nom;
    document.getElementById('email-resultat').innerText = email;
    document.getElementById('telephone-resultat').innerText = telephone;
    document.getElementById('adresse-resultat').innerText = adresse;
    document.getElementById('longueur-resultat').innerText = longueur;
    document.getElementById('epaisseur-resultat').innerText = epaisseur;
    document.getElementById('nb-trous-resultat').innerText = nbTrous;
    document.getElementById('prix-total-resultat').innerText = prixTotal.toFixed(2) + ' Rs';
    document.getElementById('resultat').style.display = 'block';

    // Préparation des données pour l'email de la compagnie (inclut le nombre de poches injectées)
    const templateParamsCompagnie = {
        nom: nom,
        email: email,
        telephone: telephone,
        adresse: adresse,
        longueur: longueur,
        epaisseur: epaisseur,
        nbTrous: nbTrous,
        nbPoches600ml: nbPoches600ml.toFixed(1),
        prixTotal: prixTotal.toFixed(2)
    };

    // Préparation des données pour l'email du client (sans le nombre de poches injectées)
    const templateParamsClient = {
        nom: nom,
        email: email,
        telephone: telephone,
        adresse: adresse,
        longueur: longueur,
        epaisseur: epaisseur,
        nbTrous: nbTrous,
        prixTotal: prixTotal.toFixed(2)
    };

    // Envoi de l'email à la compagnie
    emailjs.send("service_qp3sjeo", "template_zi0j2ks", templateParamsCompagnie) // ID du template Devis_Compagnie
        .then(function(response) {
            console.log("Email à la compagnie envoyé avec succès !", response.status, response.text);
        }, function(error) {
            console.log("Erreur lors de l'envoi de l'email à la compagnie:", error);
        });

    // Envoi de l'email au client
    emailjs.send("service_qp3sjeo", "template_pljm4xp", templateParamsClient) // ID du template Devis_Client
        .then(function(response) {
            alert("Le devis a été envoyé avec succès au client !");
            console.log("Email au client envoyé avec succès !", response.status, response.text);
        }, function(error) {
            alert("Erreur lors de l'envoi du devis au client. Veuillez réessayer.");
            console.log("Erreur lors de l'envoi de l'email au client:", error);
        });
});
