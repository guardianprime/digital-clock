const hourEl = document.getElementById("hour")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateTime() {
    let hr = new Date().getHours()
    let min = new Date().getMinutes()
    let secs = new Date().getSeconds()
    if (hr > 12) {
        hr -= 12
        ampmEl = "PM"
    }

    hr < 10 ? hr = "0" + hr : hr = hr
    min < 10 ? min = "0" + min : min = min
    secs < 10 ? secs = "0" + secs : secs = secs

    hourEl.innerText = hr
    minutesEl.innerText = min
    secondsEl.innerText = secs
    setTimeout(() => { updateTime() })
}

updateTime()

// TEST RUNNING DIFFERENT BACKGROUNDS AND BOX COLORS/* 
/* const bodyEl = document.getElementsByTagName("body")
const imagesLandscape = [
    "forestlake-landscape.jpg",
    "northpole-landscape.jpg",
    "forest-landscape.jpg"
]

const imagesPortrait = [
    "Autumn-portrait.jpg",
    "nightsky-portrait.jpg",
    "snowpeaks-portrait.jpg"
]  */

let imgCount = 3
let dir = "./images/"
let randomCount = Math.round(Math.random() * 2) + 1
let imageLandscape = [
    "forestlake-landscape.jpg",
    "northpole-landscape.jpg",
    "snowpeaks-portrait.jpg"
]
document.body.style.backgroundImage = "url(" + dir + imageLandscape[randomCount] + ")"
/* 
function changeImage() {
    bodyEl.style.background = imagesLandscape[Math.floor(Math.random() * 3) + 1]

}

changeImage() */