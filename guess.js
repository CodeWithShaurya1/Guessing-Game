alert('Start the game and guess the number till you win or enter "quit" to stop' );
let r = +prompt("Enter range of number");
let ng = Math.floor(Math.random()*r)+1;
alert("Are you ready");
let inp = prompt(`Guess a number between 1 to ${r}`);
while(true)
{
    if(ng == inp){
        alert("Congrats you won");
        break;
    }
    if(inp == "quit"){
        alert("Game End");
        break;
    }
    else{
        inp = prompt(`Guess a number between 1 to ${r}`);
    }
}