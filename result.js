setup();
lastQuestion();
agreement();
emotional();
var question;
var questionResult;
var pourcentage;

function lastQuestion(){
    document.getElementById("questionResult").innerHTML += "'"+question+"'";
}

function setup(){
    question  = localStorage.getItem(localStorage.key(localStorage.length-1));
    questionResult = localStorage.key(localStorage.length-1);
    var pourcentagetemp = questionResult.split('%');
    var pourcentagetemp2 = pourcentagetemp[0]
    var englisation = pourcentagetemp2.toString().replace(',', '.');
    pourcentage = Number(englisation);

    console.log("pourcentage "+pourcentage);
    console.log("Question "+question);
    console.log("Question result "+questionResult);
}

function agreement(){
    $('.div1').css({
        'flex' : '0 0 1'+pourcentage+"%",
        'max-width' : pourcentage+"%"
    });

    $('.div2').css({
        'flex' : '0 0 1'+100-pourcentage+"%",
        'max-width' : 100-pourcentage+"%"
    });
    
    document.getElementById("agree").innerHTML += ""+pourcentage+"%";
    document.getElementById("disagree").innerHTML += ""+100-pourcentage+"%";

    animateValue3(".agree");
}

function animateValue3(nom) {
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


function emotional(){
    var total = 100;
    document.querySelectorAll('.trustpour').forEach(function(element){
        
            var alea = Math.random() * (total - 0) + 0;
            total = total - alea;
            element.innerHTML += alea+"%";
        
    });
    animateValue3(".trustpour");

}
