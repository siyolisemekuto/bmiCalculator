let button = document.getElementById('btn');

button.addEventListener('click',()=>{
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const results = document.getElementById('output');
    let height_status = false, weight_status = false;

    if(height === '' || (height <= 0 )){
        document.getElementById('height_error').innerHTML = 'Provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true
    }

    if(weight === '' || (weight <= 0 )){
        document.getElementById('weight_error').innerHTML = 'Provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true
    }

    if(height_status && weight_status){
        let height2 = height**2
        let BMI = weight/height2;
        const bmi = BMI.toFixed(2)
        if(bmi < 18.5){
            results.innerHTML = 'Under weight : ' + bmi;
        } else if (bmi >= 18.5 && bmi < 24.9){
            results.innerHTML = 'Normal : ' + bmi;
        } else if (bmi >= 24.9 && bmi < 29.9){
            results.innerHTML = 'Over weight : ' + bmi
        } else {
            results.innerHTML = 'Obese : ' + bmi
        }
    } else{
        alert('Please check your inputs');
        results.innerHTML = ''
    }
})
function reset(clear){
    bmi = ""
    document.getElementById("output").innerHTML=bmi   
}