<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="robots" content="index, follow">
  <meta name="google-site-verification" content="8ITOve7oNkpGDE83TFWvaHKObxSajQEiABcAbCXGmGw" />

  <!-- Bootstrap Layout CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

  <!-- Main CSS -->
  <link rel="stylesheet" href="css/normalmode.css" id="theme">
  <script src="https://kit.fontawesome.com/902b4b52d9.js" crossorigin="anonymous"></script>
  <!-- Added -->
  <link rel="stylesheet" href="css/calendar.css">
  <link rel="stylesheet" href="css/survey.css">
  <link href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.min.css" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://use.typekit.net/omb7zgd.css">

  <title>Emerald City UHC</title>
  <meta name="description" content="Emerald City UHC:Urban Hiking Club in Seattle Washington.">
</head>

<body onload="preventOnload()">
  <header>
    <img src="images/headerimg.png" class="header-img">
    <h1>Emerald City UHC</h1>

    <!-- START NAV -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.php">Menu</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.php">Home</a>
          </li>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="events.php" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Events</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="events.php#upcoming">Upcoming Events</a>
              <a class="dropdown-item" href="events.php#groups">Groups</a>
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
          <button onclick="toggleTheme()" id='theme'>Change Theme</button>
          
      </div>
      </ul>
      </div>
    </nav>
    <!-- END NAV -->

  </header>

  <!-- START MAIN -->
  <main>
    <div class="container">
