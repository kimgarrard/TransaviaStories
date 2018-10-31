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
var loader = document.querySelector(".laden");


function loaddone(value) {
    document.querySelector('.laden').classList.remove('active');
}

//var myTimer = setInterval(loaddone, 8000);
var articles = document.querySelector('.slider');
var results = document.querySelector('main > h1');
var setTimeout;



for (var i = 0; i < pastoe.length; i++) {
    pastoe[i].addEventListener('click', function showLoader() {
        loader.classList.add("active");
        for (var i = 0; i < hiddenElement.length; i++) {
            hiddenElement[i].classList.add('hide');
            for (var x = articles.children.length; x >= 0; x--) {
                articles.appendChild(articles.children[Math.random() * x | 0]);
                results.classList.remove('hidden');
                //                setTimeout(loaddone, 3000);
            }
        }
    });
}







//pastoe[i].addEventListener('click', loaddone);
//
//function loaddone() {
//    document.querySelector('.laden').classList.remove('active');
//    setTimeout(loaddone() 3000);
//}


var downloadText = document.querySelector('main > button:nth-of-type(2) span ');

function loadaway(value) {
    document.querySelector('#verhaal main button img:nth-of-type(4)').classList.add('hidden');

}

function changeWord(value) {
    downloadText.textContent = 'gedownload';
}


var downloaden = document.getElementById('knop');

function download(value) {
    document.getElementById('replace').classList.add('replace');
    document.querySelector('#verhaal main button img:nth-of-type(2)').classList.remove('hiddenload1');
    document.querySelector('#verhaal main button img:nth-of-type(3)').classList.remove('hiddenload2');
    document.querySelector('#verhaal main button img:nth-of-type(4)').classList.remove('hiddenload3');
    setTimeout(loadaway, 1000);
    setTimeout(changeWord, 4000);
}

downloaden.addEventListener('click', download);
//document.getElementById('test3').addEventListener('transitionend', stop);




//var myTimer = setInterval(loadaway, 2000);
