<?php include "includes/header.php";?>
<!-- START INDEX CONTENT  -->
<!-- START POPUP SURVEY -->
<div class="loginPopup">
    <div class="formPopup" id="popupForm">
      <div id="surveyForm" class="formContainer">
        <p><strong>Welcome to Emerald City UHC</strong></p>
        <p>Please tell us a little more about yourself</p>
        
          <p>What is your name?</p>
          <input id="inputName" type="text" name="name" placeholder="My Name">
          <p>How old are you?</p>
          <input id="inputAge" type="number" placeholder="My Age">
        

        <div class="animal">
          <p>Pick an animal</p>
          <label><input id="inputAnimal" type="radio" name="choice" value="cat">Cat<img class="img-thumbnail" src="images/survey_tnail_cat.png" alt="cat image"></label>

          <label><input id="inputAnimal" type="radio" name="choice" value="dog">Dog<img class="img-thumbnail" src="images/survey_tnail_dog.png" alt="dog image"></label>
    
          <label><input id="inputAnimal" type="radio" name="choice" value="dolphin">Dolphin<img class="img-thumbnail" src="images/survey_tnail_dolphin.png" atl="dolphin image"></label>
          <br>

          <label><input id="inputAnimal" type="radio" name="choice" value="tiger">Tiger<img class="img-thumbnail" src="images/survey_tnail_tiger.png" alt="tiger image"></label>

          <label><input id="inputAnimal" type="radio" name="choice" value="fox">Fox<img class="img-thumbnail" src="images/survey_tnail_fox.png" alt="fox image"></label>

          <label><input id="inputAnimal" type="radio" name="choice" value="squirrel">Squirrel<img class="img-thumbnail" src="images/survey_tnail_squirrel.png" alt="squirrel image"></label>
        </div>
        
        <button type="button" class="btn btn-danger" onclick="closeForm()">Close</button>
        <button id="submitBtn" class="btn btn-success" onclick="closeForm()">Submit</button>
        
      </div>
    </div>
  </div>
<!-- END POPUP SURVEY QUESTINS -->

 <!-- START SECTION 1 -->
 <div id="home_top" class="row justify-content-center">
    <div class="col-sm-4">
      <img src="images/mainseattle.png" id="animalchange" class="img-fluid top-margin" alt="Emerald City UHC Header Image">
    </div>
    <div class="col-sm-8 top-margin">
        <h1>Welcome <span id="namechange">Hiker</span>!</h1>
      <p>We are a group of outdoor enthusiasts sharing our joy and passion with being outdoors with our Emerald City community. Just because we live in city doesn't mean we give up our joy of being outside and hiking. We welcome every person interested in joining one of our groups for a fun urban hike. We stand for equal opprotunity in enjoying what our beautiful city has to offer and encourage any and all to join this amazing community. We strive to build meaningful interpersonal relationships while partaking in our shared love of the outdoors. Please subscribe to our newsletter and don't hesitate to contact one of our lead volunteers with any questions you have. Let's get hiking! </p>
    </div>
  </div>
  <div class="end-spacer"></div>
  <!-- END SECTION -->
  
  <!-- START SECTION 2 -->
  <div class="row justify-content-center">
    <div class="col">
      <h2>Explore the Emerald City with us.</h2>
      <p>Our city is green and lush, take it in with a hike around the urban land we call home. When you just can't get to the mountains - we are there to get you that hiking fix you crave.</p>
    </div>
  </div>
  <!-- END SECTION 2 -->
  <!-- START SECTION 3 -->
<div class="row justify-content-center">
    <div class="card " style="width: 18rem;">
        <img class="card-img-top" src="images/specialspotlight.png " alt="groups spotlight">
        <div class="card-body">
            <h5 class="card-title">Special Interest Groups</h5>
            <p class="card-text org-lead">LGTBQ, Dogs Welcome, 21+ and so much more!</p>
            <p class="card-text">There is something for everyone!</p>
        </div>
        <div class="card-footer ">
            <a href="events.php#groups" class="btn btn-success middle">Find our more about our groups</a>
        </div>
    </div>
    <div class="card " style="width: 18rem;">
        <img class="card-img-top" src="images/teamspotlight.png" alt="staff spotlight">
        <div class="card-body">
            <h5 class="card-title">Our adventure guide team!</h5>
            <p class="card-text org-lead">We are a group of volunteers who donate our time to foster a growing community.</p>
            <p class="card-text">Maybe you'll help us lead the way?</p>
        </div>
        <div class="card-footer ">
            <a href="about.php#team" class="btn btn-success middle">Meet our volunteers</a>
        </div>
    </div>
    <div class="card " style="width: 18rem;">
        <img class="card-img-top" src="images/hikespotlight.png" alt="event spotlight">
        <div class="card-body">
            <h5 class="card-title">Join us on a hike, won't you?</h5>
            <p class="card-text org-lead">Spring schedule out now.</p>
            <p class="card-text">See our upcoming hikes and events, and plan ahead.</p>
        </div>
        <div class="card-footer ">
            <a href="events.php#upcoming" class="btn btn-success middle">See upcoming events</a>
        </div>
    </div>
</div>

  <!-- END SECTION 3 -->
  
  </div>
  <!-- END CONTAINER -->
  
  </main>
  <!-- END MAIN -->
  <!-- START FOOTER-->
<?php include "includes/footer.php";?>