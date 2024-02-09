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
    ampmEl, (innerText = ampm)
    setTimeout(() => { updateTime() }, 1000)
}

updateTime()
