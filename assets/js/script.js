
const tbody = document.querySelector('#tbody')
let sata = '';
function FetchApi() {

    //affiche des apprenants 

    fetch('https://gpoint.onrender.com/apprenant')
        .then(response => response.json())
        .then((data) => {


            data.map((elm, index) => {
                let count = (elm.id = index + 1);
                let counts = count + 1
                // console.log(counts);
                tbody.innerHTML += `
            <tr class=" tr">

                <th scope="row" id="th">${count}</th>
                <td id="nom">${elm.nom}</a></td>
                <td  id="prenom">${elm.prenom}</td>
                <td  id="referentiel">${elm.referentiel}</td>
                <td  id="referentiel">
                    <button class="supprime " key="${elm.id_apprenant}" ><i class="fa-solid fa-trash-can"></i></button> 
                    <a href="modifier.html" ><button class="modif"><i class="fa-solid fa-pen-to-square"></i></button></a>              
                </td>
                
            </tr> `

                let tr = document.querySelectorAll('.tr')
                key = elm.id_apprenant
                // console.log(elm.id_apprenant);

                let supprime = document.querySelectorAll('.supprime')
                // console.log(supprime);
              
              
                //supprimer apprenant 
                supprime.forEach((element) => {
                    element.addEventListener('click', () => {
                      let key = element.getAttribute('key')
    
                        // console.log(key);
                        if (confirm('voulez vous supprimez cette apprenant ?')) {
                            fetch('http://localhost:5000/apprenant/' + key, {
                                method: 'delete',

                            })
                                .then(res => res.text())
                                .then(res => alert(res))
                            element.parentNode.parentNode.remove()
                        }

                    })


                })
            })




        })


    }
    FetchApi();
    



    


