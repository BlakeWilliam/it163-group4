<?php include 'dev-config'?>
<!doctype html>
<html lang="en"> 

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap Layout CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  
  <!-- Main CSS -->
  <link rel="stylesheet" href="css/normalmode.css" id="theme">
  <link rel="stylesheet" href="https://use.typekit.net/omb7zgd.css">


  <title>Emerald City UHC</title>
</head>

<body>
  <header>
    <h1>Emerald City UHC</h1>

    <!-- START NAV -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.php"><img src="images/logo.jpg"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="index.php" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#home_top">Home Top Section</a>
              <a class="dropdown-item" href="#">Mid Section</a>
              <a class="dropdown-item" href="#">Lower Section</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="events.php" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Events</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="events.php#groups">Groups</a>
              <a class="dropdown-item" href="events.php#upcoming">Upcoming Events</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="about.php" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="about.php#aboutus">About Us</a>
              <a class="dropdown-item" href="about.php#team">Team Members</a>
              <a class="dropdown-item" href="about.php#volunteer">Volunteer</a>
            </div>
          </li>
            <button type='button' class='light-btnbg' id='normalmode'>Light Mode</button>
            <button type='button' class="dark-btnbg" id='darkmode'>Dark Mode</button> 
        </div>
        </ul>
      </div>
    </nav>
    <!-- END NAV -->

  </header>

  <!-- START MAIN -->
  <main>
    <div class="container">