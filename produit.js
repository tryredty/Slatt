// Récupérer les paramètres d'URL pour afficher le bon produit
const urlParams = new URLSearchParams(window.location.search);
const produit = urlParams.get('produit');

if (produit === 'tshirt1') {
    document.getElementById('produitNom').textContent = "T-shirt 1";
    document.getElementById('produitImage').src = "produit1noir.jpg";
} else if (produit === 'tshirt2') {
    document.getElementById('produitNom').textContent = "T-shirt 2";
    document.getElementById('produitImage').src = "produit2noir.jpg";
}

// Fonction pour changer la couleur du T-shirt
function changerCouleur() {
    const couleur = document.getElementById('couleur').value;
    const image = document.getElementById('produitImage');
    
    if (couleur === 'noir') {
        image.src = 'produit1blanc.jpg'; // Assurez-vous d'avoir cette image
    } else {
        image.src = 'produit1noir.jpg'; // Assurez-vous d'avoir cette image
    }
}

// Redirection vers WhatsApp
document.getElementById('precommander').addEventListener('click', function() {
    const taille = document.getElementById('taille').value;
    const couleur = document.getElementById('couleur').value;
    const message = `Je souhaite précommander le ${produit} en taille ${taille} et couleur ${couleur}.`;
    
    const whatsappURL = `https://wa.me/22870187937?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});
