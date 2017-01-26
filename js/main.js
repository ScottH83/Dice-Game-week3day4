const diceGame = {
    button: document.querySelector(".roll-button"),
    counter: 0,
    counterArray: [],
    dateYMD: moment().format("MMMM Do YYYY"),
    dateLTS: moment().format("LTS"),
    //
    dice1: document.querySelector(".dice-text-1 p"),
    dice2: document.querySelector(".dice-text-2 p"),
    header: document.querySelector(".dice-game .output"),
    response: document.querySelector(".dice-game .output1"),
    startTime: document.querySelector(".game-start h1"),

    newRoll() {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        this.dice1.innerHTML = `${randomNumber1}`;
        this.dice2.innerHTML = `${randomNumber2}`;

        if (randomNumber1 + randomNumber2 === 11 || randomNumber1 + randomNumber2 === 7) {
            this.header.innerHTML = `Winner!!!!`;
            this.response.innerHTML = `It took you ${this.counter} rolls.`;
            this.counter = 0;
            this.countArray = [];
            return;
        } else {
            this.header.innerHTML = `Lame!!!`;
            this.response.innerHTML = ``;
        }
    },
    roll() {
        this.button.addEventListener("click", () => {
            event.preventDefault;
            this.counter++;
            this.counterArray.push(this.counter);
            this.newRoll();
        });
    },
    timeStart() {
        this.startTime.innerHTML = `${this.dateYMD} ${this.dateLTS}`;
    },

    init() {
        this.roll();
        this.timeStart();
        // console.log(this.counter++);
        console.log(this.dateYMD);
        console.log(this.dateLTS);
    }
};
diceGame.init();
