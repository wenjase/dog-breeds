// got my array of dog breeds
let breeds = [ "border collie", 
                 "golden chi", 
                 "beagle", 
                 "german shepherd", 
                 "pomeranian", 
                 "rottweiler", 
                 "pit bull", 
                 "bull terrier", 
                 "bulldog", 
                 "chihuahua", 
                 "pug", 
                 "dobermann", 
                 "boxer", 
                 "great dane", 
                 "shih tzu", 
                 "corgi", 
                 "greyhound", 
                 "basset hound", 
                 "bernese mountain dog", 
                 "dachshund"]

let dog = ['./dog/bordercollie.jpeg',
        './dog/goldenchi.jpeg',
        './dog/beagle.jpeg',
        './dog/germansherpherd.jpeg',
        './dog/pomeranian.jpeg',
        './dog/rottweiler.jpeg',
        './dog/pitbull.jpeg',
        './dog/bullterrier.jpeg',
        './dog/bulldog.jpeg',
        './dog/chihuahua.jpeg',
        './dog/pug.jpeg',
        './dog/doberman.jpeg',
        './dog/boxer.jpeg',
        './dog/greatdane.jpeg',
        './dog/shihtzu.jpeg',
        './dog/corgi.jpeg',
        './dog/greyhound.jpeg',
        './dog/bassethound.png',
        './dog/bernesemountaindog.webp',
        './dog/dachshund.jpeg']



// all my documents are here.
let img = document.querySelectorAll("#dogImage");
let images = document.querySelectorAll('img')
let rButton = document.querySelector('.rightButton')
let lButton = document.querySelector('.leftButton')
let search = document.querySelector('#search')
let enter = document.querySelector('#enter')
let paraText = document.querySelector('p')



let num = 0
function loadImg() {
    images[num].style.display = 'block'          // displaying border collie.
}

loadImg();
correctAnswer();


// function animation() {
//     let = setInterval(nextDog, 5000)
// }
// console.log(animation)
// my loop for how i made my next dog button work.
function nextDog() {
    // console.log(num)
    unloadDog();
    num++
    // console.log(num)
    loadImg(num)
    correctAnswer()
}

function unloadDog() {
    images[num].style.display = 'none' 
}



rButton.addEventListener('click', nextDog)










// modal work here.

let open = document.querySelector('#open')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close')
let modalContainer = document.querySelector('#modal-container')





// open and closes modal
let openModal = () => {
    modal.style.display = 'flex'
}

let closeModal = () => {
   modal.style.display = 'none'
}

// shows answers in order.
function correctAnswer() {
    paraText.innerHTML = breeds[num]
}


open.addEventListener('click', openModal)
close.addEventListener('click', closeModal)












































