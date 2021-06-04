const secHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (( seconds / 60 ) * 360 ) + 90;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes();
    const minutesDegrees = (( minutes / 60 ) * 360 ) + (( seconds / 60 ) * 6 ) + 90;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours();
    const hoursDegrees = (( hours / 12 ) * 360 ) + (( minutes / 60 ) * 30 ) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`


}

setInterval(setDate, 1000);