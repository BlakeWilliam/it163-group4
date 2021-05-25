//Toggle Button for theme change CSS styles
function toggleTheme() {

  var theme = document.getElementsByTagName('link')[1];

  // Change the value of href attribute 
  // to change the css sheet.
  if (theme.getAttribute('href') == 'css/normalmode.css') {
      theme.setAttribute('href', 'css/darkmode.css');
  } else {
      theme.setAttribute('href', 'css/normalmode.css');
  }
}

//Timer 
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);


//@ts-check
  
// 1 in 10 Chance JS Modal popup
function checkWinner() {
  let randomInt = Math.floor(Math.random() * (10-0) +1);
  console.log(randomInt);

 if (randomInt === 8) {
  let a=document.createElement('a');
  a.target='_blank';
  a.href='https://www.google.com';
  
  if (window.confirm('Congratulation Emerald City UHC Member! Click OK to claim your prize, CANCEL to return home'))
  {
  a.click();
  };
 }

else {
   return console.log("Not a winner. RandomInt is" + randomInt + ".");
 }
}

checkWinner();
