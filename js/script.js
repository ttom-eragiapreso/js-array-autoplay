// Controllo che carica
console.log("Slider app Loaded")

// Definisco le mie variabili 
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");
const photoContainer = document.querySelector(".photo-container");
const aside = document.querySelector(".aside-photo-container");
const imagesArray = [`01.jpg`, `02.jpg`, `03.jpg`, `04.jpg`, `05.jpg`];
let imagesTags = ``;
let imagesCounter = 0;

let isPlaying = true;






// Itero l'array che contiene le desinenze delle immagini e scrivo un tag IMG con la desinenza consecutiva 
for(let i = 0; i < imagesArray.length; i++){
  imagesTags += `<img src="./consegna/img/${imagesArray[i]}" alt="" class="item">`;
}

// Stampo la serie di img dentro al foto container e le stesse foto anche nel container delle foto nella colonna laterale
photoContainer.innerHTML = imagesTags;
aside.innerHTML += imagesTags;

// Mi creo la lista delle foto nella colonna
const allAsideImages = document.querySelectorAll(".aside img");

// Per iterare e rimuovere la classe che di default le nasconderebbe
for(let i = 0; i < allAsideImages.length; i++){
  allAsideImages[i].classList.remove("item");
  allAsideImages[i].addEventListener("mouseenter", function(){
    isPlaying = false
  })
  allAsideImages[i].addEventListener("mouseleave", function(){
    isPlaying = true
  })
}

// Mi prendo la HTML collection di tutti gli elementi con la classe item che nasconde le foto 
const allImages = document.getElementsByClassName("item");

// Al primo elemento di quella collection aggiungo la classe necessaria per mostrare la prima foto quando carica la pagina. 
allImages[0].classList.add("active");
allAsideImages[0].classList.add("active");



autoplayOnLoad();
  



function autoplayOnLoad(){

  if(isPlaying){

    console.log("Autoplay ON")
    allImages[imagesCounter].classList.remove("active");
    allAsideImages[imagesCounter].classList.remove("active");
  
    // Poi controllo se sono arrivato alla fine della collezione di foto, allora ri-inizilizzo il contatore e mostro la 
    // foto corrispondente
    if(imagesCounter + 1 === imagesArray.length){
      imagesCounter = 0;
      allImages[imagesCounter].classList.add("active")
      allAsideImages[imagesCounter].classList.add("active")
    }
    // Altrimenti aggiungo 1 al contatore e mostro quella foto
    else{
      allImages[++imagesCounter].classList.add("active");
      allAsideImages[imagesCounter].classList.add("active");
    }

    setTimeout(autoplayOnLoad, 1000)
  }
  else {
    console.log("Autoplay OFF")
    setTimeout(autoplayOnLoad, 1000)

  }
}


// Quando clicco la freccia in giù
arrowDown.addEventListener("click", function(){

  // Prima rimuovo la classe active alla foto attualmente mostrata
  allImages[imagesCounter].classList.remove("active");
  allAsideImages[imagesCounter].classList.remove("active");

  // Poi controllo se sono arrivato alla fine della collezione di foto, allora ri-inizilizzo il contatore e mostro la 
  // foto corrispondente
  if(imagesCounter + 1 === imagesArray.length){
    imagesCounter = 0;
    allImages[imagesCounter].classList.add("active")
    allAsideImages[imagesCounter].classList.add("active")
  }
  // Altrimenti aggiungo 1 al contatore e mostro quella foto
  else{
    allImages[++imagesCounter].classList.add("active");
    allAsideImages[imagesCounter].classList.add("active");
  }

});







// Quando clicco la freccia in sù
arrowUp.addEventListener("click", function(){

  // Anche qui nascondo prima la foto attualmente mostrata
  allImages[imagesCounter].classList.remove("active");
  allAsideImages[imagesCounter].classList.remove("active");

  // Se sono arrivato alla fine, resetto il contatore al valore massimo dell'array -1 in quanto la posizione 
  // dell'immagine è a indice 0, ma il metodo length mi ritorna un valore a indice 1.
  if(imagesCounter === 0){
    imagesCounter = imagesArray.length - 1;
    allImages[imagesCounter].classList.add("active")
    allAsideImages[imagesCounter].classList.add("active")
  }
  // Altrimenti sottraggo uno al contatore e mostro la foto corrispondente
  else{
    allImages[--imagesCounter].classList.add("active");
    allAsideImages[imagesCounter].classList.add("active");
  }

})