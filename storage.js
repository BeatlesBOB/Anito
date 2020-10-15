
sucproj();
getRandomFollow();
getRandomPolitician();
function sucproj(){
    for( let i = 0; i < 3; i++){
        var temp = localStorage.getItem(localStorage.key(i));
        document.getElementById("successproject").innerHTML += "<div class='jumbotron jumbotron-fluid bg-jumbotron2 p-3 m-3'><div class='container'><p class='display-1 txt-jumbotron2 text-center'>"+temp+"</p></div></div>"
    }
}


function getRandomFollow() {
    document.querySelectorAll('.presence').forEach(function(element) {
        var follower = Math.random() * (100000000 - 10000000) + 10000000;
        var x = Math.round(follower)
        var withcoma = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        element.innerHTML = withcoma
    });
    
}

function getRandomPolitician() {
    
    var politician = [];

    var Kylie = {name:"Kylie Jenner", post:"President", popularity:getRandomPop(),img:"img/kylie.jpg"};
    var Thea = {name:"Thea Harper", post:"Vice-president", popularity:getRandomPop(),img:"img/profil.jpeg"};
    var Travis  = {name:"Travis Scott", post:"Former president", popularity:getRandomPop(),img:"img/tavis.jpg"};
    

    if (Kylie.popularity>Thea.popularity && Kylie.popularity>Travis.popularity)
    {
            if (Thea.popularity>Travis.popularity )
            {

                politician[0]=Kylie;
                politician[1]=Thea;
                politician[2]=Travis;
            }
            else
            {
                politician[0]=Kylie;
                politician[1]=Travis;
                politician[2]=Thea;
            }
    }
    else if (Thea.popularity>Kylie.popularity && Thea.popularity >Travis.popularity )
    {
            if (Kylie.popularity>Travis.popularity )
            {
                politician[0]=Thea;
                politician[1]=Kylie;
                politician[2]=Travis;
            }
            else
            {
                
                politician[0]=Thea;
                politician[1]=Travis;
                politician[2]=Kylie;
            }
    }
    else if (Travis.popularity >Kylie.popularity && Travis.popularity >Thea.popularity)
    {
            if (Kylie.popularity>Thea.popularity)
            {
                politician[0]=Travis;
                politician[1]=Kylie;
                politician[2]=Thea;
            }
            else
            {
                politician[0]=Travis;
                politician[1]=Thea;
                politician[2]=Kylie;
            }
    }

    for( let i = 0; i < politician.length; i++){
        var place = i+1;
        var txtplace;
        if(place === 1){
            txtplace = "1st";
        }else if(place === 2){
            txtplace = "2nd";
        }else if( place == 3){
            txtplace = "3rd";
        }
        console.log(politician.length);
        document.getElementById("Politician").innerHTML += "<div class='col-4'><div class='d-flex bg-purple"+i+" justify-content-center p-3 flex-column'><img class='img-profil2 ml-2 mr-2 align-self-center'src='"+politician[i].img+"' alt='Avatar'><h3 class='titleCard mt-2'>"+politician[i].name+"</h3><h4 class='subtitleCard mt-2'>"+politician[i].post+"</h4><h5 class='pourcentCard mt-2'>"+politician[i].popularity+"</h5><div class='p-2 bg-light1'><h5 class='placeCard'>"+txtplace+"</h5></div></div></div>";

    }
    animateValue(".pourcentCard");
    
}


function getRandomPop(){
    var pop = Math.random() * (100 - 70) + 70;
    return Math.round(pop)
}


function animateValue(nom) {
    $(nom).each(function () {
        console.log("manytimes")
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now)+"%");
            }
        });
    });
}


