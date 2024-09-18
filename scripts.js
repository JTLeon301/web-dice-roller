function rollDice() {
    let total = 0; //Variable to store the total

    for (let i = 1; i <= 5; i++) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        document.getElementById(`dice${i}`).src = `dice_images/dice${diceValue}.png`; //Update path to dice_images
        total += diceValue; //Add the dice value to the total
    }

    //Update the total in the HTML
    document.getElementById('diceTotal').textContent = total;

    //Focus the roll button after rolling
    document.getElementById('rollButton').focus();
}
