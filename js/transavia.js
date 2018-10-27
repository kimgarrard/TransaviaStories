var legend = document.querySelectorAll('legend');
var hiddenElement = document.querySelectorAll('.hiddenopt');

for (var i = 0; i < legend.length; i++) {
    legend[i].addEventListener("click", function dropdown(event) {
        var index = event.target.dataset.dropdown;
        hiddenElement[index].classList.toggle('hide');
        hiddenElement[index].classList.add('active');
    });
}

var pastoe = document.querySelectorAll(".pastoe");

for (var i = 0; i < pastoe.length; i++) {
    pastoe[i].addEventListener('click', function showLoader() {
        var loader = document.querySelector(".laden");
        loader.classList.add("active");
        for (var i = 0; i < hiddenElement.length; i++) {
            hiddenElement[i].classList.add('hide');
        }
    });
}

function loaddone(value) {
    document.querySelector('.laden').classList.remove('active');
    var results = document.querySelector('main > h1');
    //    results.classList.remove('hidden');
}

var myTimer = setInterval(loaddone, 7000);

//pastoe[i].addEventListener('click', loaddone);

//function loaddone() {
//    document.querySelector('.laden').classList.remove('active');
//    setTimeout(loaddone() 3000);
//}




var downloaden = document.getElementById('knop');

function download(value) {
    document.getElementById('replace').classList.add('replace');
    document.getElementById('test1').classList.remove('hiddenload1');
    document.getElementById('test2').classList.remove('hiddenload2');
    document.getElementById('test3').classList.remove('hiddenload3');
}

downloaden.addEventListener('click', download);
document.getElementById('test3').addEventListener('transitionend', stop);



function loadaway(value) {
    document.getElementById('test3').classList.add('hidden');
}

var myTimer = setInterval(loadaway, 2000);
