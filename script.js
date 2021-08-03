// got my array of dog breeds
let breeds = {dog1: "border collie", 
                dog2: "golden chi", 
                dog3: "beagle", 
                dog4: "german shepherd", 
                dog5: "pomeranian", 
                dog6: "rottweiler", 
                dog7: "pit bull", 
                dog8: "bull terrier", 
                dog9: "bulldog", 
                dog10: "chihuahua", 
                dog11: "pug", 
                dog12: "dobermann", 
                dog13: "boxer", 
                dog14: "great dane", 
                dog15: "shih tzu", 
                dog16: "corgi", 
                dog17: "greyhound", 
                dog18: "basset hound", 
                dog19: "bernese mountain dog", 
                dog20: "dachshund"}




let imgs = ['./dog/bordercollie.jpeg',
            './dog/goldenchi.jpeg',
            './dog/beagle.jpeg']

            

// console.log(imgs[1])


// all my documents are here.
let img = document.querySelectorAll("#dogImage");
let images = document.querySelectorAll('img')
let rButton = document.querySelector('.rightButton')
let lButton = document.querySelector('.leftButton')
let search = document.querySelector('#search')
let enter = document.querySelector('#enter')

function loadImg() {
    images[0].style.display = 'block'    
     console.log(images[0].src)      // displaying border collie.
}

loadImg()


function nextDog() {
    for (let i = 0; i < imgs.length; i++){
        images[i].style.display = 'block'
        if (images[i].src === imgs[i]){
            let newImg = imgs[i];
            console.log(newImg)
        }
        }
    }



rButton.addEventListener('click', nextDog)




// function to display and not display my animals
// function dogImages() {
//     images[0].style.display = 'block'

// }

// dogImages();

// how to make images flip over.












// getting my left button to work so i can go to the next dog.
// function button() {
//     if ()
// }

// lButton.addEventListener('click', button)








































