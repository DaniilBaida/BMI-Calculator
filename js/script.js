const metricInput = document.getElementById("Metric");
const imperialInput = document.getElementById("Imperial");

const heightUnit = document.getElementById("height-unit");
const weightUnit = document.getElementById("weight-unit");

const heightInput = document.querySelector("#height-input");
const weightInput = document.querySelector("#weight-input");

const yourBmi = document.querySelector(".your-bmi");

const bmiSuggestion = document.querySelector(".your-bmi-suggestion");

const yourBmiIs = document.querySelector(".your-bmi-is");

const bmiBetween = document.querySelector(".bmi-between");

const Imperial = {
  heightUnit: "ft",
  weightUnit: "lbs",

  calcBmi: function (height, weight) {
    return (703 * weight) / (height * height);
  },
};

const Metric = {
  heightUnit: "cm",
  weightUnit: "kgs",

  calcBmi: function (height, weight) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  },
};

const isHealthy = function (bmi) {
  switch (true) {
    case bmi < 16:
      return "Severe Thinness";
    case bmi < 17:
      return "Moderate Thinness";
    case bmi < 18.5:
      return "Mild Thinness";
    case bmi < 25:
      return "Normal";
    case bmi < 30:
      return "Overweight";
    case bmi < 35:
      return "Obese Class I";
    case bmi < 40:
      return "Obese Class II";
    default:
      return "Obese Class III";
  }
};

const checkIdealWeight = function (height) {
  if (metricInput.checked) {
    let heightInMeters = height / 100;
    const idealBMI = 22;
    const idealWeight = idealBMI * (heightInMeters * heightInMeters);
    return idealWeight;
  }
};

const calcBmi = function (height, weight) {
  if (metricInput.checked) {
    let bmi = Metric.calcBmi(height, weight);
    if (bmi > 10 && bmi < 60) {
      yourBmi.innerHTML = Metric.calcBmi(height, weight).toFixed(2);
      bmiSuggestion.innerHTML = `Your BMI Suggests you're at a ${isHealthy(
        bmi
      )} weight. <strong>Your ideal weight is ${checkIdealWeight(
        height
      ).toFixed(2)}kg</strong>`;

      yourBmiIs.innerHTML = "Your BMI is...";
    } else {
      yourBmiIs.innerHTML = "Welcome!";
      yourBmi.innerHTML = "";
      bmiSuggestion.innerHTML = "Enter your height and weight to see your BMI!";
    }
  } else if (imperialInput.checked) {
    let bmi = Imperial.calcBmi(height, weight);
    if (bmi > 10 && bmi < 60) {
      yourBmi.innerHTML = Imperial.calcBmi(height, weight).toFixed(2);
      bmiSuggestion.innerHTML = `Your BMI Suggests you're at a ${isHealthy(
        bmi
      )} weight. <strong>Your ideal weight is ${checkIdealWeight(
        height
      ).toFixed(2)}kg</strong>`;

      yourBmiIs.innerHTML = "Your BMI is...";
    } else {
      yourBmiIs.innerHTML = "Welcome!";
      yourBmi.innerHTML = "";
      bmiSuggestion.innerHTML = "Enter your height and weight to see your BMI!";
    }
  }
};

metricInput.addEventListener("click", () => {
  if (metricInput.checked) {
    heightUnit.innerHTML = Metric.heightUnit;
    weightUnit.innerHTML = Metric.weightUnit;
  }
});

imperialInput.addEventListener("click", () => {
  if (imperialInput.checked) {
    heightUnit.innerHTML = Imperial.heightUnit;
    weightUnit.innerHTML = Imperial.weightUnit;
  }
});

heightInput.addEventListener("keyup", () => {
  if (heightInput.value != "" && weightInput.value != "") {
    calcBmi(heightInput.value, weightInput.value);
  }
});

weightInput.addEventListener("keyup", () => {
  if (heightInput.value != "" && weightInput.value != "") {
    calcBmi(heightInput.value, weightInput.value);
  }
});
