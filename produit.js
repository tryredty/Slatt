// Récupérer les paramètres d'URL pour afficher le bon produit
const urlParams = new URLSearchParams(window.location.search);
const produit = urlParams.get('produit');

if (produit === 'tshirt1') {
    document.getElementById('produitNom').textContent = "T-shirt 1";
    document.getElementById('produitImage').src = "produit1noir.jpg";
} else if (produit === 'tshirt2') {
    document.getElementById('produitNom').textContent = "T-shirt 2";
    document.getElementById('produitImage').src = "produit2noir.jpg";
} else if (produit === 'tshirt3' ) {
    document.getElementById('produitNom').textContent = "T-shirt 3";
    document.getElementById('produitImage').src = "produit3noir.jpg";
}
// Fonction pour changer la couleur du T-shirt
unction changerCouleur() {
    const couleur = document.getElementById('couleur').value;
    const image = document.getElementById('produitImage');
    const produit = urlParams.get('produit');

    let imageBase;
    if (produit === 'tshirt1') {
        imageBase = 'produit1';
    } else if (produit === 'tshirt2') {
        imageBase = 'produit2';
    } else if (produit === 'tshirt3') {
        imageBase = 'produit3';
    }

    if (couleur === 'noir') {
        image.src = `${imageBase}noir.jpg`;
    } else {
        image.src = `${imageBase}blanc.jpg`;
    }
}

// Redirection vers WhatsApp
document.getElementById('precommander').addEventListener('click', function() {
    const taille = document.getElementById('taille').value;
    const couleur = document.getElementById('couleur').value;
    const message = `Je souhaite précommander le ${produit} en taille ${taille} et couleur ${couleur}.`;
    
    const whatsappURL = `https://wa.me/22871367143?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});
