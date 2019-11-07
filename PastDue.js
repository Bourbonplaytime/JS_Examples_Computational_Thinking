input = [{amount: 100, pastDue: 30}, {amount: 100, pastDue: 10}, {amount:10, pastDue: 10}, 
        {amount:50, pastDue: 25}, {amount: 200, pastDue: 20}]
penalty = 15;

for(i = 0; i < input.length; i++) {
    if(input[i].amount > 10){
        if(input[i].pastDue > 15) {
            input[i].amount = parseInt(input[i].amount) + penalty;
            console.log(input[i].amount);
        }
    }
}