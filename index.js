// Code your solutions in this file
function writeCards(names, event) {
    let thanks = []
    for (let i = 0; i < names.length; i++) {
        thanks.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return thanks;
}

function countDown(n) {
    let i = 0;
    while (n >= i) {
        console.log(n - i); i++;
    }

}
