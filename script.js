const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

updateClock()
setTimeout(setIntervalWrapper, 1000-new Date().getMilliseconds())

function updateClock() {
    let currentTime = new Date();

    let secondInFraction = currentTime.getSeconds() / 60;
    let minuteInFraction = (currentTime.getMinutes() + secondInFraction) / 60
    let hourInFraction = (currentTime.getHours() + minuteInFraction) / 12

    secondHand.style.setProperty('--rotation', secondInFraction * 360);
    minuteHand.style.setProperty('--rotation', minuteInFraction * 360);
    hourHand.style.setProperty('--rotation', hourInFraction * 360);
}

function setIntervalWrapper() {
    updateClock()
    setInterval(updateClock, 1000)
}
