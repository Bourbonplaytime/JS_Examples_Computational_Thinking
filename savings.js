savings = 0
paycheckSavings = 50;

for(month = 1; month < 13; month++) {
    for(paycheck = 1; paycheck < 3; paycheck++) {
        console.log("The savings for month " + month + " paycheck " + paycheck + " are " + paycheckSavings);
        savings = savings + paycheckSavings;
        paycheckSavings = paycheckSavings + 5;
    }
    console.log("your total savings after month " + month + " are " + savings);
}