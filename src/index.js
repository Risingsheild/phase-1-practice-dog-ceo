let breeds = []

document.addEventListener('DOMContentLoaded', function (){
    loadimages()
    loadBreedOptions()
})
function loadimages() {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then ( res => res.json)
.then (results => {
    })
}

function addImage(dogPicUrl) {
    let container = document.querySelector('#dog-image-container')
    let newImageP = document.createElement('img')
    newImageP.src = dogPicUrl
    container.appendChild(newImageP)
}

function loadBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res => res.json)
    .then(results => {
        updateBreedList(breeds)
        addBreedSelectListener()
let ul = document.querySelector('#dog-breeds')
    })
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds')
    breeds.forEach(breed => addBreed(breed)
    );
}

function breedsLetter (letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)))
}

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown')
    breedDropdown.addEventListener('change', function (event) {
        breedsLetter(event.target.value)
    })
}

function addBreed(breed) { 
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.innerText = breed 
    ul.appendChild(li)
    li. addEventListener('click', updateColor)
}

function updateColor(event) {
    event.target.style.color = 'purple'
}