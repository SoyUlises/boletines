//Obtener todos los elementos de la clase .close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){
    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Quitarle las clases de animación que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar clases para animar su salida
        content.classList.add("animate__fadeInUp");
        content.classList.add("animate__animated");

        setTimeout(function() {
            location.href = "../index.html";
        }, 1000);

        return false;
    });
});


//DOM
/*
let links = document.querySelectorAll("a");

links.forEach(function(link) {
    console.log(link);
}) ;
*/

/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
    td.addEventListener('click', function() {
        console.log(this);
    })
});
*/