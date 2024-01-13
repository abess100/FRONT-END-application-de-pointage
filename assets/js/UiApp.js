let input = document.querySelector('#yourName')
let  button = document.querySelector('.button')
 
button.addEventListener('click', ajout);

async function ajout(e){
    e.preventDefault()

    fetch('http://localhost:5000/pointage/')
    .then(res => res.json())
    .then( data => {
        
      // date du jour
        let DateDay = new Date();
        let completDay = DateDay.getDate() + ' ' + DateDay.getMonth() + ' ' + DateDay.getFullYear();

      //récupération et filtre des date de pointage
        let table = data.filter((element) =>{
            let heurePoint = element.heure
            let correctDate = new Date(heurePoint)
            let finalDate = correctDate.getDate() + ' ' + correctDate.getMonth() + ' ' + correctDate.getFullYear();
            let trie = (completDay == finalDate)
            console.log(trie);
            return trie
        })

        
        
                
      
    
    })

}
