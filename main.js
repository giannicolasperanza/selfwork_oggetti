
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

// let rubrica = {
//     "contacts": [
//         { 'nome': 'Nicola', 'telefono': '3331111111' },
//         { 'nome': 'Lorenzo', 'telefono': '3332222222' },
//         { 'nome': 'Paola', 'telefono': '3333333333' },
//         { 'nome': 'Jenny', 'telefono': '3334444444' }],



//     mostraContatti: function () {
//         console.log(this.contacts);

//     },

//     mostraSingoloContatto: function (nome) {
//         let trovato = false;
//         this.contacts.forEach((contatto) => {

//             if (contatto.nome === nome) {
//                 console.log(contatto);
//                 trovato = true;
//             }

//             if (trovato == false) {
//                 console.log("utente non trovato");

//             }

//         })
//     },

//     eliminaContatto: function (nome) {
//         // qui noi passiamo il nome, dobbiamo prima verificare se quel nome è presente fra i contatti in rubrica
//         // succesivamente dobbiamo capire a quale indice dell'array corrisponde ed eliminarlo

//         let index = -1;
//         let trovato = false;

//         this.contacts.forEach((contatto, i) => {

//             if (contatto.nome === nome) {
//                 trovato = true;
//                 index = i;
//             }
//         });

//         if (trovato) {
//             this.contacts.splice(index, 1);
//             console.log(` Utente ${nome} è stato rimosso dalla rubrica`);

//         } else {
//             console.log(` ${nome} non è stato trovato, non puoi cancellarlo`);

//         }


//     },

//     aggiungiContatto : function(nome){
//         this.contacts.push({nome : nome , telefono : telefono});
//     },

//     modificaContatto : function(nome, nuovoNome, nuovoTelefono){

//      let trovato = false;

//      this.contacts.forEach(  (contatto) => {
//         if (contatto.nome === nome) {
//             contatto.nome = nuovoNome;
//             contatto.telefono = nuovoTelefono;
//             trovato = true;
//         }
//     });

//     if(trovato){
//       console.log(` Il contatto ${nome} è stato modificato in ${nuovoNome} e con il numero di telefono ${nuovoTelefono}`);
      
//     }else{
//         console.log(` L'utente ${nome} non è stato trovato, non puoi modificarlo`);
        
//     }





// }
// }


// rubrica.mostraContatti();
// rubrica.mostraSingoloContatto("Nicola");
// rubrica.eliminaContatto("Jenny");
// rubrica.aggiungiContatto("gianni", "3554546545")

// console.log(rubrica);
// rubrica.modificaContatto("Nicola","Gianni","4854858458485");
// console.log(rubrica);


// ------------------ fine secondo esercizio ---------------------

// ------------------ terzo esercizio ---------------------

let bowling ={

    'players' : [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],


    punteggioCasuale : function(){

        for( let i = 1; i <= 10; i++){
        this.players.forEach(element => {
            element.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1))
        });
      
    }

    },

    punteggioFinaleGiocatore : function(nome){
        let trovato =false;
        let somma = 0;
        this.players.forEach(player => {
            if(player.name === nome){
                trovato = true;
                somma = player.scores.reduce((acc, n) => acc + n,0);
                
            }
        });

       
        if(!trovato){
            console.log("Giocatore  non presente!");
            
        }

        return  console.log(`Il giocatore ${nome} ha totalizzato un punteggio totale di ${somma} punti in 10 tiri`);
         
    },

    aggiungiGiocatore : function(nome){

        let nuovoGiocatore = {'name' : nome, 'scores' : []}; 
        

        for( let i = 1; i <= 10; i++){
        
                nuovoGiocatore.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1))
            
        }

        this.players.push(nuovoGiocatore);

        return console.log(`Giocatore ${nome} aggiunto`);
        


     
    },

    classificaEVincitore : function(){
       let finali = [];

        this.players.forEach(player => {
            let somma = player.scores.reduce( (acc, n ) => acc + n, 0 );
            finali.push({ name : player.name , scores : somma});
        });
        
        finali.sort((a,b)=>b.scores - a.scores);

        console.log('Classifica :');

        finali.forEach((player, i )=> {

            console.log(` ${i+1} - ${player.name} - ${player.scores}   `);
            
        } )
        
        console.log(`Il vincitore è ${finali[0].name} con un punteggio complessivo di ${finali[0].scores} punti`);
        return finali;

        
        
    }








}




bowling.punteggioCasuale();

bowling.punteggioFinaleGiocatore('Filippo');

bowling.aggiungiGiocatore("gigi");

bowling.classificaEVincitore();

console.log(bowling);

// ---------------------------- fine terzo esercizio ------------------------