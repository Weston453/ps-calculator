let currentArr = document.getElementById('currentArr').value
let newArr = document.getElementById('newArr').value
let yearTotal = document.getElementById('yearTotal').value
let newLicenseCount = document.getElementById('newLicenseCount').value
let currentLicenseCount = document.getElementById('currentLicenseCount').value

currentArr = +currentArr


let output = document.getElementById('output')

let button = document.getElementById('crunch')

button.addEventListener('click', ()=> {
    // let increaseArr = (newArr - currentArr) / currentArr
    // let increaseArrDisplay = document.createElement('li')
    // increaseArr.append(increaseArrDisplay)
    // output.append(increaseArrDisplay)
    console.log(currentArr)
})
