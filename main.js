
// // -------------------- primo esercizio --------------------
// let persona = {
//     "nome" : "Giannicola",
//     "cognome" : "Speranza",
//     "età" : 30,

//     saluta : function(){
//         console.log(` Ciao a tutti sono ${this.nome}`);

//     }
// }

// persona.saluta();

// ------------------------ fine primo esercizio ------------------
// ---------------- secondo esercizio --------------------

let rubrica = {
    "contacts": [
        { 'nome': 'Nicola', 'telefono': '3331111111' },
        { 'nome': 'Lorenzo', 'telefono': '3332222222' },
        { 'nome': 'Paola', 'telefono': '3333333333' },
        { 'nome': 'Jenny', 'telefono': '3334444444' }],



    mostraContatti: function () {
        console.log(this.contacts);

    },

    mostraSingoloContatto: function (nome) {
        let trovato = false;
        this.contacts.forEach((contatto) => {

            if (contatto.nome === nome) {
                console.log(contatto);
                trovato = true;
            }

            if (trovato == false) {
                console.log("utente non trovato");

            }

        })
    },

    eliminaContatto: function (nome) {
        // qui noi passiamo il nome, dobbiamo prima verificare se quel nome è presente fra i contatti in rubrica
        // succesivamente dobbiamo capire a quale indice dell'array corrisponde ed eliminarlo

        let index = -1;
        let trovato = false;

        this.contacts.forEach((contatto, i) => {

            if (contatto.nome === nome) {
                trovato = true;
                index = i;
            }
        });

        if (trovato) {
            this.contacts.splice(index, 1);
            console.log(` Utente ${nome} è stato rimosso dalla rubrica`);

        } else {
            console.log(` ${nome} non è stato trovato, non puoi cancellarlo`);

        }


    },

    aggiungiContatto : function(nome){
        this.contacts.push({nome : nome , telefono : telefono});
    },

    modificaContatto : function(nome, nuovoNome, nuovoTelefono){

     let trovato = false;

     this.contacts.forEach(  (contatto) => {
        if (contatto.nome === nome) {
            contatto.nome = nuovoNome;
            contatto.telefono = nuovoTelefono;
            trovato = true;
        }
    });

    if(trovato){
      console.log(` Il contatto ${nome} è stato modificato in ${nuovoNome} e con il numero di telefono ${nuovoTelefono}`);
      
    }else{
        console.log(` L'utente ${nome} non è stato trovato, non puoi modificarlo`);
        
    }





}
}


// rubrica.mostraContatti();
// rubrica.mostraSingoloContatto("Nicola");
// rubrica.eliminaContatto("Jenny");
// rubrica.aggiungiContatto("gianni", "3554546545")

// console.log(rubrica);
// rubrica.modificaContatto("Nicola","Gianni","4854858458485");
// console.log(rubrica);


// ------------------ fine secondo esercizio ---------------------