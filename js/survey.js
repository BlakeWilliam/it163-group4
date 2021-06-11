function openForm() {
    document.getElementById("popupForm").style.display = "block";
    console.log("page loaded, is the popup");
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

    /* Radio buttons for animal */
    /* Still needs to change img */
    const rbsPic = document.querySelectorAll('#inputAnimal[name="choice"]');
    let selectedValuePic;
    for (const rb of rbsPic) {
      if (rb.checked) {
        selectedValuePic = rb.value;
      }
      console.log('rb.value is' + selectedValuePic);
    }

    switch (selectedValuePic) {
        case 'cat':
            document.getElementById('animalchange').src = "images/survey_cat.jpg";
            console.log('image of cat');
            break;

          case 'dog':
              document.getElementById('animalchange').src = 'images/survey_dog.jpg';
              console.log('image of dog');
              break;

            default:
                console.log('animal pic did not work');
    } 

/* HTML and console output */
    outputName.innerHTML = inputName.value;
    console.log("inputName.value is " + inputName.value);

    outputAge.innerHTML = inputAge.value;
    console.log('inputAge value is ' + inputAge.value);

    outputAnimal.innerHTML = selectedValuePic;
    console.log('inputAnimal value is ' + selectedValuePic);


    // output animal picture



    console.log("Button clicked");


    // Close POP form w/ submitBtn
    document.getElementById("popupForm").style.display = "none";
    console.log('Form closed with submit button')

}



// Close Popup form w/ close btn
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    console.log('Form closed')
  }
