var titel = document.querySelectorAll('legend');

//function dropdown(value) {
//    console.log(value)
//    //    document.querySelector(".hidden").classList.remove("hidden");
//}

for (var i = 0; i < titel.length; i++) {
    titel[i].addEventListener("click", function dropdown(value) {
        var hiddenElement = value.toElement.nextElementSibling;
        hiddenElement.classList.toggle("hidden");

        var parentElement = value.toElement.parentElement;
        parentElement.classList.toggle("active");
    });
}


var knop = document.getElementById('knop');

function laden(value) {
    document.getElementById('replace').classList.add('replace');
    document.getElementById('test1').classList.remove('hiddenload1');
    document.getElementById('test2').classList.remove('hiddenload2');
    document.getElementById('test3').classList.remove('hiddenload3');
}

function stop(value) {
    document.getElementById('test3').classList.add('hiddenload3');
}


knop.addEventListener('click', laden);
document.getElementById('test3').addEventListener('transitionend', stop);



function loadaway(value) {
    document.getElementById('test3').classList.add('hidden');
}

var myTimer = setInterval(loadaway, 2000);
