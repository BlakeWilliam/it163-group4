//@ts-check
  
// 1 in 10 Chance JS Modal popup
 function checkWinner() {
   let randomInt = Math.floor(Math.random() * (10-0) +1);
   console.log(randomInt);

  if (randomInt === 8) {
    return alert("You are a WINNER");
  }

 else {
    return console.log("Not a winner. RandomInt is" + randomInt + ".");
  }
}

checkWinner();