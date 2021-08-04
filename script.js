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



let num = 0
function loadImg() {
    images[num].style.display = 'block'          // displaying border collie.
}

loadImg()

// my loop for how i made my next dog button work.
function nextDog() {
    console.log(num)
    num++
    console.log(num)
    loadImg(num)
}



rButton.addEventListener('click', nextDog)


let num1 = 0
// modal work here.

let open = document.querySelector('#open')
let modal = document.querySelector('.modal')

let openModal = () => {
   console.log('click')
    modal.classList.add('modal-active')
    console.log(open.classList)
}



open.addEventListener('click', openModal)











































