function countDown(num) {
    function printer() {
	    num--;
        if (num <= 0) {
            console.log("DONE!");
	        clearInterval(interval);
	        return;
	    }
	    console.log(num);
    }
    let interval = setInterval(printer, 1000);
}


function randomGame() {
    let counter = 0;
    let interval = setInterval(function () {
        let num = Math.random();
        counter++;
        if (num > 0.75) {
            console.log(counter - 1);
            clearInterval(interval);
        }
    }, 1000);

}
