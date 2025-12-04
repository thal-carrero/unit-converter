const inputEl = document.getElementById("input-el")
const lenghtEl = document.getElementById("lenght-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const conversionBtn = document.getElementById("conversion-btn")

function convert(num) {

    // 1 meter = 3.280839895 foot
    // 1 foot = 0.3048 meter

    let feet = (num * 3.280839895).toFixed(3)
    let meters =  (num * 0.3048).toFixed(3)
    let conversionLenght = `${num} meters = ${feet} | ${num} feet = ${meters} meters`

    // 1 L = 0.2641720524 gallon 
    // 1 gallon (US) = 3.785411784 liter

    let gallons = (num * 0.2641720524).toFixed(3)
    let liters = (num * 3.785411784).toFixed(3)
    let conversionVolume = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`

    // 1 kilogram = 2.2046226218 pound
    // 1 pound = 0.45359237 kilogram

    let pounds = (num * 2.2046226218).toFixed(3)
    let kilos = (num * 0.45359237).toFixed(3)
    let conversionMass = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`
    
    return [conversionLenght, conversionVolume, conversionMass]
}

conversionBtn.addEventListener("click", function() {
    let conversionValues = convert(inputEl.value) 
    lenghtEl.textContent = conversionValues[0]
    volumeEl.textContent = conversionValues[1]
    massEl.textContent = conversionValues[2]

})




