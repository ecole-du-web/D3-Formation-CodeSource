const form = document.querySelector('form');
const nom = document.querySelector('#nom');
const prix = document.querySelector('#prix');
const erreur = document.querySelector('#erreur');

//console.log(form, nom, prix, erreur);

form.addEventListener('submit', (e) => {

    e.preventDefault();

    if(nom.value && prix.value) {

        const item = {
            nom: nom.value,
            prix: parseInt(prix.value)
        }

    db.collection('dépenses').add(item).then(res => {
        erreur.textContent = "";
        nom.value = "";
        prix.value = "";
    });

    } else {
        erreur.textContent = 'Remplissez les deux champs pour continuer';
    }

})