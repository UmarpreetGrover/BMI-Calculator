// Function to calculate the BMI
function calculateBMI() {
    const height = parseFloat(document.getElementById('heightInput').value);
    const weight = parseFloat(document.getElementById('weightInput').value);
    const bmi = weight / Math.pow(height / 100, 2);
    
    let bmiStatus;
    if (bmi < 18.5) {
        bmiStatus = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiStatus = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        bmiStatus = "Overweight";
    } else {
        bmiStatus = "Obese";
    }

    const resultContainer = document.getElementById('bmiResult');
    const userInputContainer = document.getElementById('userInput');
  
    resultContainer.innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${bmiStatus})`;

    // Display the entered height and weight by the user
    userInputContainer.innerHTML = `Height: ${height} cm, Weight: ${weight} kg`;
}

document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateBMI);
});


function selectGender(gender) {
    const maleBtn = document.getElementById('maleBtn');
    const femaleBtn = document.getElementById('femaleBtn');

    if (gender === 'male') {
        maleBtn.classList.add('selected-gender');
        femaleBtn.classList.remove('selected-gender');
    } else {
        femaleBtn.classList.add('selected-gender');
        maleBtn.classList.remove('selected-gender');
    }
}