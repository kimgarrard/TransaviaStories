var legend = document.querySelectorAll('legend');

for (var i = 0; i < legend.length; i++) {
    legend[i].addEventListener("click", function dropdown(value) {
        var hiddenElement = value.toElement.nextElementSibling;
        hiddenElement.classList.toggle("hidden");

        var parentElement = value.toElement.parentElement;
        parentElement.classList.toggle("active");
    });
}

var pastoe = document.querySelectorAll(".pastoe");

for (var i = 0; i < pastoe.length; i++) {
    pastoe[i].addEventListener('click', function showLoader() {
        var loader = document.querySelector(".laden");
        loader.classList.add("active")
    })
}







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
