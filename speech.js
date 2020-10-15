var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var words = [ 'Anito' , 'anito','racisme',"Racisme"];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + words.join(' | ') + ' ;'
var synth = window.speechSynthesis;

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'fr';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
histo();
var micro = document.getElementById("startvoice");
micro.onclick = function() {
  recognition.start();
}

var intro = document.getElementById("intro");
intro.onclick = function() {
  debut();
}

var outro = document.getElementById("outro");
outro.onclick = function() {
  fin();
}

var send = document.getElementById("sendinput");
send.onclick = function() {
  var txtquest = document.getElementById("form-name").value
  if(txtquest != ""){
    responseAnito(txtquest);
  }
}

recognition.onresult = function(event) {
  var word = event.results[0][0].transcript;
  if(word.toUpperCase()=== "ANITO"){
    speak("Bonjour, je suis une intelligence artificiel");
  }
  console.log("Vous avez dit: "+word)
  responseAnito(word);

}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that color.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}

function responseAnito(word){
  var say;
  var said = [];
  var responseAnito = [];
  if(word.toUpperCase().includes("TWITTER")){
    say ="73,7% seraient d'accord d'augmenter la limite de caractères imposée sur le réseau social Twitter";
    speak(say);
    said.push(say)
    responseAnito.push(word);
    aside(said,responseAnito)
    localStorage.setItem(say,word);
    setTimeout(() => { location.replace("index4.html")}, 5000);
    

  }
  if(word.toUpperCase().includes("VIDÉO")){
    say ="23,9% seraient d'accord d'augmenter la durée des videos et films au-delà de 2 minutes";
    speak(say);
    said.push(say)
    responseAnito.push(word);
    aside(said,responseAnito);
    localStorage.setItem(say,word);
    setTimeout(() => { location.replace("index4.html")}, 5000);

    

  }
  
  if(word.toUpperCase().includes("ENFANT")){
    say ="58% seraient d'accord d'implémenter des puces éléctroniques chez les enfants de 8 ans au lieu de 18 ans";
    speak(say);
    said.push(say)
    responseAnito.push(word);
    aside(said,responseAnito);
    localStorage.setItem(say,word);
    setTimeout(() => { location.replace("index4.html")}, 5000);


  }
  if(word.toUpperCase().includes("POLLUTION")){
    say ="74% des personnes pensent que le réchauffement climatique n'existe pas et que c'est un coup monté des chinois";
    speak(say);
    said.push(say)
    responseAnito.push(word);
    aside(said,responseAnito);
    localStorage.setItem(say,word);
    setTimeout(() => { location.replace("index4.html")}, 5000);


  }
  if(word.toUpperCase().includes("IMMIGRATION")){
    say = "90% des personnes pensent que les frontières devraient être renforcées, accompagné d'une politique de réimigration des populations déjà sur le territoire";
    speak(say);
    said.push(say)
    responseAnito.push(word);
    aside(said,responseAnito);
    localStorage.setItem(say,word);
    setTimeout(() => { location.replace("index4.html")}, 5000);


  }

  if(word.toUpperCase().includes("EUGÉNISME")){
    say = "85% des gens aimeraient pouvoir rejeter l'embryon en cas de maladie mentale ou d'handicap physique même mineur";
    speak(say);
    said.push(say)
    responseAnito.push(word);
    aside(said,responseAnito);
    localStorage.setItem(say,word);
    setTimeout(() => { location.replace("index4.html")}, 5000);

  }

  if(word.toUpperCase().includes("ARME")){
    say = "70% des gens aimeraient pouvoir acheter et posséder des fusils d'assauts ainsi que pouvoir sortir en ville avec";
    speak(say);
    said.push(say)
    responseAnito.push(word);
    aside(said,responseAnito);
    localStorage.setItem(say,word);
    setTimeout(() => { location.replace("index4.html")}, 5000);

  }

  
}

function histo(){
  for( let i = 0; i < localStorage.length; i++){
      var temp = localStorage.getItem(localStorage.key(i));
      document.getElementById("historique").innerHTML += "<div class='col-12'><div class='jumbotron jumbotron-fluid bg-jumbotron p-2'><div class='container'><h1 class='display-1 txt-jumbotron'>"+temp+"</h1><p class='text-right txt-jumbotron-bold'>"+localStorage.key(i)+"</p></div></div></div>"
  }
}

function aside(tabsaid, tabquestion){
  for(var i=0; i<tabsaid.length;i++){
    document.getElementById("historique").innerHTML += "<div class='col-12'><div class='jumbotron jumbotron-fluid bg-jumbotron p-2'><div class='container'><h1 class='display-1 txt-jumbotron'>"+tabquestion[i]+"</h1><p class='text-right txt-jumbotron-bold'>"+tabsaid[i]+"</p></div></div></div>"
  }
  // tabsaid.forEach(element => document.getElementById("historique").innerHTML += "<div class='col-12'><div class='jumbotron jumbotron-fluid bg-jumbotron p-2'><div class='container'><h1 class='display-1 txt-jumbotron'>Fluid jumbotron</h1><p class='text-left txt-jumbotron-bold'>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p></div></div></div>");  
}

function speak(wordtoSpeech){
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    var utterThis = new SpeechSynthesisUtterance(wordtoSpeech);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  
}

function debut(){
  speak("Bonjour je suis Anito, une intelligence artificielle chargée de prédire l'opinion publique sur internet et nous sommes en 2064.");
}

function fin(){
  speak("Ce qui n'ont pas levé la main, sortez de la salle.");
}