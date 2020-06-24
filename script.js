$(document).ready(
  function() {

    var proprietàOggetto;
    var valore = "";

    // Oggetto Studente
    var studente =   {
        "nome": "Alessandro",
        "cognome": "Orlov",
        "eta": 33
        }

    // Soluzione originale
    // for (var data in studente) {
    //   addElement(studente[dati])
    // }

    for (proprietàOggetto in studente) {
      valore += studente[proprietàOggetto] + " ";
    };

    addElement('Studente: ' + valore)

    $('button').click(
      function() {
        var arrayStudenti = []
        console.log(arrayStudenti);

        // Chiedo i dati del nuovo utente
        var nomeStudente = prompt('Inserisci il nome');
        var cognomeStudente = prompt('Inserisci il cognome');
        var etaStudente = parseInt(prompt('Inserisci l\'età'));

        // Creo nuovoStudente
        var nuovoStudente = {
          "nome":  nomeStudente,
          "cognome": cognomeStudente,
          "eta": etaStudente,
        }

        // Inserisco nuovo utente nell'array
        arrayStudenti.push(nuovoStudente)

        console.log(arrayStudenti)

        for (var i = 0; i < arrayStudenti.length; i++) {
          var datiSingoloStudente = arrayStudenti[i]
          addElement('Studente: ' + datiSingoloStudente['nome'] + ' ' + datiSingoloStudente["cognome"]);
        }
      }
    );


}); // End document ready

// ================================================
// =============== FUNCTIONS ======================

// Fumzione aggiungere l'elemento con il tamplate
function addElement(value) {
  // Clone tamplate dal DOM html
  var listItemClone = $('.tamplate > li').clone();

  // Aggiungo al Tamplate il valore del input
  listItemClone.append(value);

  // Inserisco l'elemento nella lista
  $('ul.lista-studenti').append(listItemClone);
}
