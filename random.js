getRandomInfluencers();
globalSubject();

function getRandomInfluencers() {
    
    var influencers = [];

    var Tom = {name:"Tom Holland", nation:"British", metier:"Actor",mention:getRandomMen(),img:"img/profil.jpeg"};
    var Ninja = {name:"Ninja", nation:"American", metier:"Video game streamer",mention:getRandomMen(),img:"img/profil.jpeg"};
    var James = {name:"James Northon", nation:"Swedish", metier:"Bio tech-engineer",mention:getRandomMen(),img:"img/profil.jpeg"};
    

    if (Tom.mention>Ninja.mention && Tom.mention>James.mention)
    {
            if (Ninja.mention>James.mention )
            {

                influencers[0]=Tom;
                influencers[1]=Ninja;
                influencers[2]=James;
            }
            else
            {
                influencers[0]=Tom;
                influencers[1]=James;
                influencers[2]=Ninja;
            }
    }
    else if (Ninja.mention>Tom.mention && Ninja.mention >James.mention )
    {
            if (Tom.mention>James.mention )
            {
                influencers[0]=Ninja;
                influencers[1]=Tom;
                influencers[2]=James;
            }
            else
            {
                
                influencers[0]=Ninja;
                influencers[1]=James;
                influencers[2]=Tom;
            }
    }
    else if (James.mention >Tom.mention && James.mention >Ninja.mention)
    {
            if (Tom.mention>Ninja.mention)
            {
                influencers[0]=James;
                influencers[1]=Tom;
                influencers[2]=Ninja;
            }
            else
            {
                influencers[0]=James;
                influencers[1]=Ninja;
                influencers[2]=Tom;
            }
    }

    for( let i = 0; i < influencers.length; i++){
       
        document.getElementById("influencers").innerHTML += "<div class='col-4 '><div class='d-flex bg-purple2 justify-content-center p-3 flex-column'><img class='img-profil2 ml-2 mr-2 align-self-center'src='"+influencers[i].img+"' alt='Avatar'><h3 class='nomEtoile mt-2'>"+influencers[i].name+"</h3><h4 class='nationEtoile mt-3'>Maitre de mon coeur</h4><h5 class='metierEtoile m-0 p-0'>"+influencers[i].metier+"</h5><h5 class='mentionEtoile mt-3'>"+influencers[i].mention+"</h5></div></div>";
      
    }
    animateValue2(".mentionEtoile");
    
}


function getRandomMen(){
    var men = Math.random() * (20 - 10) + 10;
    return Math.round(men)
}


function animateValue2(nom) {
    $(nom).each(function () {
        console.log("manytimes")
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now)+"k mention");
            }
        });
    });
}

function globalSubject(){
    var glob = ["#ChinaFirstLeadingPower","#ChinaFirstLeadingPower","#KylieJenner","#KylieJenner","#whoIsTheaHarper","#ElonMuskInvadeMars","#TrumpisBack","#PuceOnChildren","#WewantreImmigration","#TheForceofWeapon","WeaponagainstsStorm"];
    var shuffledglob = shuffle(glob);
    for( let i = 0; i < 8; i++){
       
        document.getElementById("ulhashtag").innerHTML += "<li class='lihashtag m-3'>"+shuffledglob[i]+"</li>";
    }    
}

function politicalSubject(){
    
    var political = ["#PS10+","#WinterIsGone","#LGBTinvisibilityDay","#doesTomHollandAge","#KimKardashianRobot"];
    var shuffledpolitical = shuffle(political);                

    for( let i = 0; i < 5; i++){
        document.getElementById("politicalhash").innerHTML += "<li class='lihashtag m-3'>"+shuffledpolitical[i]+"</li>";
    }    
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
;