$(document).ready(
  function() {

    var proprietàOggetto;
    var valore = "";

    // Oggetto Studente
    var studente = {
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

    var arrayStudenti = [
      studente
    ]
    console.log(arrayStudenti);

    $('button').click(
      function() {

        // Chiedo i dati del nuovo utente
        var nomeStudente = prompt('Inserisci il nome');
        while(nomeStudente === ''|| !(isNaN(nomeStudente)) || nomeStudente.length < 2) {
          nomeStudente = prompt('Errore: inserisci il nome');
        }
        var cognomeStudente = prompt('Inserisci il cognome');
        while(cognomeStudente === ''|| !(isNaN(cognomeStudente)) || cognomeStudente.length < 2) {
          cognomeStudente = prompt('Errore: inserisci il nome');
        }
        var etaStudente = parseInt(prompt('Inserisci l\'età'));
        while(etaStudente === '' || isNaN(etaStudente) || etaStudente > 100) {
          etaStudente = parseInt(prompt('Errore: inserisci l\'età giusta'));
        }

        // Creo nuovoStudente
        var nuovoStudente = {
          "nome":  nomeStudente,
          "cognome": cognomeStudente,
          "eta": etaStudente,
        }

        // Inserisco dati del nuovo studente nell'array
        arrayStudenti.push(nuovoStudente)
        console.log(arrayStudenti)

        // Resetto i valori della lista
        $('.lista-studenti').html('')
        for (var i = 0; i < arrayStudenti.length; i++) {

          var datiSingoloStudente = arrayStudenti[i]
          addElement('Studente: ' + datiSingoloStudente['nome'] + ' ' + datiSingoloStudente["cognome"]);
        }

        console.log('array alla fine : ' + arrayStudenti);
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
