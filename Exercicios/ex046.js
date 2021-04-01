let i = 0

for (i; i <= 10; i++) {
    // console.log(i)
}

function sleep( time ) {
    var now = new Date().getTime();
    while(new Date().getTime() < now + time * 1000){
        /* do nothing */ } 
}

for (let i = 10; i >= 0; i--) {
    sleep(1)
    console.log(i)
}
console.log('BUM! BUM! POOOOW')
