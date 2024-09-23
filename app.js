function calculDevis() {
    // Récupérer les valeurs saisies dans le formulaire
    const longueurMurs = parseFloat(document.getElementById('longueur_murs').value);
    const prixUnitaire = 3900; // Prix par mètre

    // Calculer le total du devis
    const total = longueurMurs * prixUnitaire;

    // Afficher le résultat dans la section dédiée
    document.getElementById('result').innerHTML = `Le montant total du devis est : Rs ${total.toFixed(2)}`;
}
