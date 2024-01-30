
const nom = document.querySelector('.name')
const pnom = document.querySelector('.pnom')
const ident = document.querySelector('.ident')
const ref = document.querySelector('.ref')
const button = document.querySelector('.enregistre')
const input = document.querySelectorAll('.input')


button.addEventListener('click', ajoutApp)

async function ajoutApp(e) {
    e.preventDefault()
    if(nom.value !== "" && ref.value !== "" && ident.value !== '' && ref.value !== '' ){

        fetch('https://gpoint.onrender.com/apprenant',{
            method:"post",
            headers:{'content-type':'application/json'},
            body: JSON.stringify({
                id_unique: ident.value,
                nom: nom.value,
                prenom: pnom.value,
                referentiel: ref.value
            })
        }).then(res => res.text())
        .then(res => alert(res))

        nom.value='';
        pnom.value ='';
        ident.value = ''; 
        ref.value ='';

    }else{
        alert('veillez saisir dans les champs vides')
    }
}
