const bill = document.getElementById('bill');
const custom = document.getElementById('custom');
const people = document.getElementById('people');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');

let tipPercent = 0;

function setActive(elem){
    elem.id = 'active';
}

function changePercentage(percent){
    const active = document.getElementById('active');
    if (active) {
        active.id = '';
    }
    tipPercent = percent;
    calculateResults();
}

function calculateResults(){
    if (bill.value < 0) {
        bill.value = 0;
    }

    if (custom.value < 0) {
        custom.value = 0;
        tipPercent = 0;
    }

    if (people.value < 1) {
        people.value = 1;
    }

    const tip = (bill.value / people.value) * (tipPercent / 100);
    const total = bill.value / people.value + tip;
    displayResults(tip, total);
}

function displayResults(tip, total){
    tipAmount.innerHTML = "$" + tip.toFixed(2);
    totalAmount.innerHTML = "$" + total.toFixed(2);
}

function reset(){
    bill.value = '';
    custom.value = '';
    people.value = 1;
    changePercentage(0);
}

bill.addEventListener('change', calculateResults);
people.addEventListener('change', calculateResults);

calculateResults();