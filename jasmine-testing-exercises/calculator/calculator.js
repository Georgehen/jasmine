window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            update();
        });
    }
});

function getCurrentUIValues() {
    return {
        amount: +(document.getElementById("loan-amount").value),
        years: +(document.getElementById("loan-years").value),
        rate: +(document.getElementById("loan-rate").value)
    }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    const values = { amount: 1000, years: 5, rate: 3 };
    const amount = document.querySelector("#loan-amount");
    const years = document.querySelector("#loan-years");
    const rate = document.querySelector("#loan-rate");
    amount.value = values.amount;
    years.value = values.years;
    rate.value = values.rate;
    update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    const currentUIValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let numer = values.amount * (values.rate / 1200);
    let denom = 1 - Math.pow(((values.rate / 1200) + 1), -1 * values.years * 12);
    return (numer / denom).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    const showMonthly = document.querySelector("#monthly-payment");
    showMonthly.innerText = "$" + monthly;
    console.log(monthly.innerText);
}
