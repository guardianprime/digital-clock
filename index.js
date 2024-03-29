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
        ampmEl = "pm"
    }

    hr < 10 ? hr = "0" + hr : hr
    secs < 10 ? secs = "0" + secs : secs
    min < 10 ? min = "0" + min : min
    hourEl.innerText = hr
    minutesEl.innerText = min
    secondsEl.innerText = secs
    ampmEl, (innerText = ampm)
    setTimeout(() => {
        updateTime()
    }, 1000)
}
updateTime()
