/**  L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
        - creo un bottone e con addeventlistener vado poi a creare una grid dinamica
        -creo una griglia in html e js
        - metto il container in html, lo seleziono in js con il queryselector
        -metto all'interno del container i vari elementi creandoli con createElement e li aggiungo 
        -utilizzo il ciclo for per mettere gli elementi all'interno della pagina
*/

//Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
    // uso addeventlistener e toggle per mettere e togliere la classe "active"
//e emetto un messaggio in console con il numero della cella cliccata.
  //utilizzo this


const btnEl = document.querySelector("button");
const containerEL = document.querySelector(".container");

btnEl.addEventListener("click", function () {

    for (let i = 1; i <= 100; i++) {
        const cellEl = document.createElement("div");
        cellEl.classList.add("cell")
        cellEl.innerText = [i]
        console.log(cellEl);
        containerEL.insertAdjacentElement("beforeend",cellEl);

        //quando clicco sulla casella si mette e toglie la classe active
        cellEl.addEventListener("click", function(){
            cellEl.classList.toggle("active")
            
        })
    }

    
})