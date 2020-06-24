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
    //   addElement(studente[data])
    // }


    for (proprietàOggetto in studente) {
      valore += studente[proprietàOggetto] + " ";
    };

    addElement('Studente: ' + valore)

    var arrayStudenti = [
      studente
    ]
    console.log(arrayStudenti);

    $('.standard-tamplate button').click(
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


  // ==========================================================
  // ================ HANDLEBARS TEST =========================

  // Prova di handlebars tamplate

  // Valori per handlebars tamplate ("nome" e "cognome")
  var handlebarsPresidenti = [
    {
      "nome": "Donald",
      "cognome": "Trump",
      "eta": 78
    },
    {
      "nome": "Giuseppe",
      "cognome": "Conte",
      "eta": 56
    },
    {
      "nome": "Emanuele",
      "cognome": "Macrone",
      "eta": 43
    }
  ];
  console.log('Presidenti all\'inizio:')
  console.log(handlebarsPresidenti)


  var source = $('#entry-template').html()
  var template = Handlebars.compile(source);


  // Stampo le tutti i valori delle chiavi
  for (var i = 0; i < handlebarsPresidenti.length; i++) {
    var html = template(handlebarsPresidenti[i]);
    addHandlebarsElement(html)
  }


  $('.handlebars-tamplate button').click(
    function() {
      // Chiedo i dati del Presidente
      var nomePresidente = prompt('Inserisci il nome');
      while(nomePresidente === ''|| !(isNaN(nomePresidente)) || nomePresidente.length < 2) {
        nomePresidente = prompt('Errore: inserisci il nome');
      }
      var cognomePresidente = prompt('Inserisci il cognome');
      while(cognomePresidente === ''|| !(isNaN(cognomePresidente)) || cognomePresidente.length < 2) {
        cognomePresidente = prompt('Errore: inserisci il nome');
      }
      var etaPresidente = parseInt(prompt('Inserisci l\'età'));
      while(etaPresidente === '' || isNaN(etaPresidente) || etaPresidente > 100) {
        etaPresidente = parseInt(prompt('Errore: inserisci l\'età giusta'));
      }

      // Inserisco presidente XD
      var nuovoPresidente = {
        "nome":  nomePresidente,
        "cognome": cognomePresidente,
        "eta": etaPresidente,
      }

      handlebarsPresidenti.push(nuovoPresidente);


      var source = $('#entry-template').html()
      var template = Handlebars.compile(source);

      $('.lista-handlebars').html('')
      // Stampo le tutti i valori delle chiavi
      for (var i = 0; i < handlebarsPresidenti.length; i++) {

        var html = template(handlebarsPresidenti[i]);
        addHandlebarsElement(html)
      }

      console.log('Presidenti alla fine:')
      console.log(handlebarsPresidenti)

    }); // end click


}); // End document ready
//
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

function addHandlebarsElement(value) {
  // Clone tamplate dal DOM html
  var listItemClone = $('.tamplate > li').clone();

  // Aggiungo al Tamplate il valore del input
  listItemClone.append(value);

  // Inserisco l'elemento nella lista
  $('ul.lista-handlebars').append(listItemClone);
}
