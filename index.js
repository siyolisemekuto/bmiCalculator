function input(event){
    console.log("Your BMI is ")
    let bmiweight= document.getElementById("weight").value;
    let bmiheight= document.getElementById("height").value;
    alert(`Your BMI is ${weight} ${height}`);
}

function calculate(){
    let  sum = ("weight" / "height" ** 2)
    document.getElementById("output").innerHTML = sum
}

function calcBMI() {
    let weight = document.bmiform.kilograms.value;
    let height = document.bmiform.meters.value;
    document.bmiform.bmi.value = parseInt((weight * 2.72) / (height * height));
    document.getElementById("output").innerHTML = value
  }