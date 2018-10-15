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
