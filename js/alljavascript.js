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
function pad(val) { return val > 9 ? val : "0" + val; }
setInterval(function () {
  document.getElementById("seconds").innerHTML = pad(++sec % 60);
  document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
}, 1000);

// preventOnload keeps the survey and winner popups on the index page.
function preventOnload() {
  if (window.location.href === 'http://www.luannmarston.com/it163-group4/index.php') {
  
  //!!!!!!!NEED TO CHANGE HREF IF ON DIFFERENT SERVER!!!!!!!
    console.log('preventOnoad says we are on the index.php page.');
    console.log("page location is" + window.location.href);

    //@ts-check

    // 1 in 10 Chance JS Modal popup
    function checkWinner() {
      let randomInt = Math.floor(Math.random() * (10 - 0) + 1);
      console.log(randomInt);

      if (randomInt === 8) {
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = 'https://www.google.com';

        if (window.confirm('Congratulation Emerald City UHC Member! Click OK to claim your prize, CANCEL to return home')) {
          a.click();
        };
      }

      else {
        return console.log("Not a winner. RandomInt is" + randomInt + ".");
      }
    }

    checkWinner();


    // START SURVEY
    function openForm() {
      document.getElementById("popupForm").style.display = "block";
    }

    openForm();

    const submitBtn = document.querySelector('#submitBtn');
    submitBtn.addEventListener("click", clickHandler, false);

    function clickHandler() {
      let inputName = document.querySelector('#inputName');
      let inputAge = document.querySelector('#inputAge');
      let inputAnimal = document.querySelector('#inputAnimal');

      let outputName = document.querySelector('#namechange');
      let outputAge = document.querySelector('#outputAge');
      let outputAnimal = document.querySelector('#animalchange');

      // Radio buttons for animal
      const rbsPic = document.querySelectorAll('#inputAnimal[name="choice"]');
      let selectedValuePic;
      for (const rb of rbsPic) {
        if (rb.checked) {
          selectedValuePic = rb.value;
        }
      }

      // Change the image on index page
      switch (selectedValuePic) {
        case 'cat':
          document.getElementById('animalchange').src = "images/survey_cat.jpg";
          console.log('image of cat');
          break;

        case 'dog':
          document.getElementById('animalchange').src = 'https://earthnworld.com/wp-content/uploads/2018/05/Dog-2-scaled.jpg';
          console.log('image of dog');
          break;

        case 'dolphin':
          document.getElementById('animalchange').src = 'https://earthnworld.com/wp-content/uploads/2017/12/DOLPHIN-1024x731.jpg';
          console.log('image of dolphin');
          break;

        case 'tiger':
          document.getElementById('animalchange').src = 'https://earthnworld.com/wp-content/uploads/2017/04/Tiger-1024x684.jpg';
          console.log('image of tigar');
          break;

        case 'fox':
          document.getElementById('animalchange').src = 'https://earthnworld.com/wp-content/uploads/2018/12/Sleeping-Fox-1024x640.jpg';
          console.log('image of fox');
          break;

        case 'squirrel':
          document.getElementById('animalchange').src = 'https://www.seacoastonline.com/storyimage/SO/20180916/NEWS/180919513/AR/0/AR-180919513.jpg';
          console.log('image of squirrel');
          break;

        default:
          document.getElementById('animalchange').src = 'images/mainseattle.png';
          console.log('animal pic did not work');
      }

      /* HTML and console output */
      /* ----- CHANGE NAME ----- */
      if (!inputName.value) {
        outputName.innerHTML = "Hiker";
        console.log('User did not suggest name');
      }
      else {
        outputName.innerHTML = inputName.value;
        console.log("inputName.value is " + inputName.value);
      }

      /* ----- CHANGE FONT SIZE ----- */
      if (inputAge.value > 59) {
        document.documentElement.style.fontSize = "1.5em";
        console.log('user over 59 and font should be larger');
      }
      else {
        console.log('user is younger than 60 or did not answer');
      }
      /* ----- END CHANGE FONT SIZE ----- */


      // Close POP form w/ submitBtn
      document.getElementById("popupForm").style.display = "none";
    }


    //END SURVEY
  }

  else {
    console.log('preventOnoad says we are not on the index.php page.');
    console.log("page location is" + window.location.href);
  }
}
// Close Popup form w/ close btn
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}
