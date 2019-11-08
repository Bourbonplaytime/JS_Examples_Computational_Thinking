let dep  = [0, 0, 0, 0];

let num = prompt("Please enter your number of dependents or press 99 to quit: ");

while(num != 99) {
    if(num < 0 || num > 3) {
        alert("Please enter a number between 0 and 3 or 99 to quit");
    } else {
    dep[num] = dep[num] += 1;
    }
    num = prompt("Please enter your number of dependents or press 99 to quit: ");
}

for(dig = 0; dig < dep.length; dig++) {
    console.log(dep[dig]);
} 