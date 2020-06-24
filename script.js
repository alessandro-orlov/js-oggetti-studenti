$(document).ready(
  function() {

    // Oggetto Studente
    var studenti = [
      {
        "nome": "Alessandro",
        "cognome": "Orlov",
        "eta": 33
        }
    ]


    for (var dati in studenti[0]) {
      addElement(studenti[0][dati])
    }



    $('button').click(
      function() {

        // Chiedo i dati del nuovo utente
        var nomeStudente = prompt('Inserisci il nome');
        var cognomeStudente = prompt('Inserisci il cognome');
        var etaStudente = parseInt(prompt('Inserisci l\'età'));

        // Creo nuovoStudente
        var nuovoStudente = {
          "nome:":  nomeStudente,
          "cognome:": cognomeStudente,
          "eta: ": etaStudente,
        }

        // Inserisco nuovo utente nell'array
        studenti.push(nuovoStudente)

        console.log(studenti)

      }
    );



}); // End document ready


// Aggiungo l'elemento con il tamplate
function addElement(value) {
  // Clone tamplate dal DOM html
  var cloneLi = $('.tamplate > ul li').clone();

  // Aggiungo al Tamplate il valore del input
  cloneLi.append(value);

  // Inserisco l'elemento nella lista
  $('.lista-studenti').append(cloneLi);

  // Resetto il valore iniziale (vuoto) dell'input
}
