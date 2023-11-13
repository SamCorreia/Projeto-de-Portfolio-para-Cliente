/*-----------------------------Slider de Fotos--------------------------- */
let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)

/*-----------------------Esconder no Botão Saiba mais------------*/

var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.container2');

btn.addEventListener('click' , function() {

    if(container.style.display === 'block') {
        container.style.display = 'none';
    }

    else {
        container.style.display = 'block';

    }

});
/*------------------Função dos Botoes de interação da SKills------------------- */

var tablinks = document.getElementsByClassName("tab-links")
    var tabcontents = document.getElementsByClassName("tab-contents")

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

/*----------Botaão Menu responsive-------*/

var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

/*----------FUnção da Mensagem ----------------- */

const scriptURL = 'https://script.google.com/macros/s/AKfycbwQlzwJWoM5HWf_POVLQnXdIWM94V-hJ6-QuOWwXwxRBUQ4AkhCewcQlU3nuX0oGkT76A/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

