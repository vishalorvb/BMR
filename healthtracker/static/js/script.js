
function maleBMR(a,h,w){
    let bmr= 88.362 + (13.397*w) + (4.799 * h) - (5.677*a)
    return bmr
}
 function femaleBMR(a,h,w){
    let bmr= 447.593 + (9.247*w) + (3.098 * h) - (4.330*a)
    return bmr
 }


function calculateBmr(e){
    let age = parseInt(document.getElementById("bmrAge").value)
    let height = parseInt(document.getElementById("bmrHeight").value)
    let weight = parseInt(document.getElementById("bmrWeight").value)
    let gender = parseInt(document.querySelector('input[name="gender"]:checked').value)
    let result = document.getElementById("bmrResult")
    if(gender == 1){
        result.innerText = `BMR = ${maleBMR(age,height,weight)} Calories/day`
    }
    else{
    result.innerText = `BMR = ${femaleBMR(age,height,weight)} Calories/day`
    }
}

function calculateTdee(){
    let age = parseInt(document.getElementById("bmrAge").value)
    let height = parseInt(document.getElementById("bmrHeight").value)
    let weight = parseInt(document.getElementById("bmrWeight").value)
    let gender = parseInt(document.querySelector('input[name="gender"]:checked')?.value)
    let result = document.getElementById("bmrResult")
    let tdeeType = parseFloat(document.getElementById("selecttype").value)
    if(gender == 1){
        result.innerText = `TDEE = ${maleBMR(age,height,weight)*tdeeType} Calories/day`
    }
    else{
    result.innerText = `TDEE = ${femaleBMR(age,height,weight)*tdeeType} Calories/day`
    }
}