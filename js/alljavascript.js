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

  if (window.location.pathname === ('/it163-group4/index.php')) {
    //!!!!!!!NEED TO CHANGE HREF IF ON DIFFERENT SERVER!!!!!!!

    //@ts-check
    // 1 in 10 Chance JS Modal popup
    function checkWinner() {
      let randomInt = Math.floor(Math.random() * (10 - 0) + 1);

      if (randomInt === 8) {
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = 'https://www.google.com';

        if (window.confirm('Congratulation Emerald City UHC Member! Click OK to claim your prize, CANCEL to return home')) {
          a.click();
        };
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
          break;

        case 'dog':
          document.getElementById('animalchange').src = 'https://earthnworld.com/wp-content/uploads/2018/05/Dog-2-scaled.jpg';
          break;

        case 'dolphin':
          document.getElementById('animalchange').src = 'https://earthnworld.com/wp-content/uploads/2017/12/DOLPHIN-1024x731.jpg';
          break;

        case 'tiger':
          document.getElementById('animalchange').src = 'https://earthnworld.com/wp-content/uploads/2017/04/Tiger-1024x684.jpg';
          break;

        case 'fox':
          document.getElementById('animalchange').src = 'https://earthnworld.com/wp-content/uploads/2018/12/Sleeping-Fox-1024x640.jpg';
          break;

        case 'squirrel':
          document.getElementById('animalchange').src = 'https://www.seacoastonline.com/storyimage/SO/20180916/NEWS/180919513/AR/0/AR-180919513.jpg';
          break;

        default:
          document.getElementById('animalchange').src = 'images/mainseattle.png';
      }

      /* HTML and console output */
      /* ----- CHANGE NAME ----- */
      if (!inputName.value) {
        outputName.innerHTML = "Hiker";
      }
      else {
        outputName.innerHTML = inputName.value;
      }

      /* ----- CHANGE FONT SIZE ----- */
      if (inputAge.value > 59) {
        document.documentElement.style.fontSize = "1.5em";

      }
      // Close POP form w/ submitBtn
      document.getElementById("popupForm").style.display = "none";
    }

    //END SURVEY
  }
  else {
    //!!!!!!!NEED TO CHANGE HREF IF ON DIFFERENT SERVER!!!!!!!
    console.log("page location is " + window.location.href + ". In order for the pop ups to work on index, with window.locatio.pathname must = /it163-group4/index.php. Double check line 26.");
  }
}


// Close Popup form w/ close btn
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}
