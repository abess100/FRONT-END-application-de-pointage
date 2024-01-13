let apprenant = document.querySelector('.apprenant')
let point = document.querySelector('.pointage')
let absent = document.querySelector('.absent')
let tbody = document.querySelector('.container')
let dateJ = document.querySelector('.date')



//recupération de la date du jour
    let dateJour = new Date()
    let sol = dateJour.toLocaleDateString('fr')
    dateJ.innerHTML = ` Date :<span class="rob"> ${sol}</span> `

// affiche le nombre d'apprenant totale
async function nombreApprenant() {
    fetch('https://gpoint.onrender.com/apprenant/dashbord')
        .then(res => res.json())
        .then(data => {
            apprenant.innerHTML = data[0].apprenant
        })
}
nombreApprenant()



// affiche le nombre d'apprenant pointé
async function nombrePointé() {
    fetch('https://gpoint.onrender.com/pointage/dashbord')
        .then(res => res.json())
        .then(data => {

            //recupération de la taille du nombre de personne connecté le jour x
            fetch('https://gpoint.onrender.com/pointage')
                .then(res => res.json())
                .then((element) => {

                    //récupération de la date du jour
                    let DateDay = new Date();
                    let completDay = DateDay.getDate() + ' ' + DateDay.getMonth() + ' ' + DateDay.getFullYear();

                    //filter en fonction de la personne connecté 
                   let filter =  element.filter((data) => {
                        let heurePoint = data.heure
                        let correctDate = new Date(heurePoint)
                        let finalDate = correctDate.getDate() + ' ' + correctDate.getMonth() + ' ' + correctDate.getFullYear();

                        let resultat = ( completDay == finalDate)

                        return resultat   
                    })
                    
                 point.innerHTML = (data[0].pointage - (data[0].pointage - filter.length))
                    // console.log( point.innerHTML);
                })
        })
}
nombrePointé()

// affiche nombre apprenant absent
async function supp() {
    fetch('https://gpoint.onrender.com/apprenant/dashbord')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            fetch('https://gpoint.onrender.com/pointage/')
                .then(res => res.json())
                .then((element) => {
                //    console.log(element);
                    //récupération de la date du jour
                    let DateDay = new Date();
                    let completDay = DateDay.getDate() + ' ' + DateDay.getMonth() + ' ' + DateDay.getFullYear();

                    //filter en fonction de la personne connecté 
                   let pointer =  element.filter((data) => {
                        let heurePoint = data.heure
                        let correctDate = new Date(heurePoint)
                        let finalDate = correctDate.getDate() + ' ' + correctDate.getMonth() + ' ' + correctDate.getFullYear();
                        
                        // console.log(data);
                        let resultat = ( completDay == finalDate)
                        return resultat   
                    })

                    let noPoint = data[0].apprenant - pointer.length
                    // console.log(noPoint);
                    absent.innerHTML = noPoint
                })

        })

}
supp()

//affiche la liste des apprenants pointés
async function readpoint() {
    fetch('https://gpoint.onrender.com/pointage')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            let time = new Date()
            let dateDAy = time.getDate() + ' ' + time.getMonth() + ' ' + time.getFullYear()
            // console.log(dateDAy);
            let date = data.filter((day) => {
                let dayPoint = new Date(day.heure)
                let TotalDay = dayPoint.getDate() + ' ' + dayPoint.getMonth() + ' ' + dayPoint.getFullYear()
                // console.log(TotalDay);
                let result = (dateDAy == TotalDay)
                return result
                console.log(result);
            })

            // // recupération de la date et affiche des données
            date.reverse()
            date.map((day, index) => {
                let num = (day.id = index + 1)
                let news = day
                let dates = new Date(day.heure)
                let heure = dates.getHours() + ' : ' + dates.getMinutes() + ' : ' + dates.getSeconds()
                tbody.innerHTML +=
                    `<tr>
                    <th scope="row">${num}</th>
                    <td>${day.nom}</td>
                    <td>${day.prenom}</td>
                    <td>${day.referentiel}</td>
                    <td>${heure}</td>
                </tr>`
            });



        })
}

readpoint()