function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

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
    if (inputAge.value > 59){
      document.documentElement.style.fontSize="30px";
      console.log('user over 59 and font should be larger');
    }
    else {
      console.log('user is younger than 60 or did not answer');
    }
    /* ----- END CHANGE FONT SIZE ----- */


    // Close POP form w/ submitBtn
    document.getElementById("popupForm").style.display = "none";
}



// Close Popup form w/ close btn
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}
