function rollDice(){
const numOfDice = document.getElementById("numOfDice").value;
const diceResult= document.getElementById("diceResult");
const diceImages= document.getElementById("diceImages");
const dNO= document.getElementById("dNo");
const values =[];
const images =[];


    for(i=0; i<numOfDice;i++){
      const value= Math.floor(Math.random()*6)+1;
      values.push(value);
      images.push(`<img src="dicephoto/${value}.png">`);
      

    }
        diceResult.textContent = ` dice: ${values.join(`,`)}`;
        diceImages.innerHTML = images.join(``);
         dNO.textContent = `Number of dice rolled: ${numOfDice}, Sum of dice: ${values.reduce((a, b) => a + b, 0)}`;
 



}