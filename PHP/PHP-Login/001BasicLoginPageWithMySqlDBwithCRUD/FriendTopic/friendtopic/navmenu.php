<?php
  // Generate the navigation menu if user is logged in:
  echo '<hr />';
  if (isset($_SESSION['username'])) {
    // &#x7c is the hex code for a vertical bar |
    echo '<a href="index.php">Home</a> &#x7c; ';
    echo '<a href="viewprofile.php">View Profile</a> &#x7c; ';
    echo '<a href="editprofile.php">Edit Profile</a> &#x7c; ';
    echo '<a href="logout.php">Log Out (' . $_SESSION['username'] . ')</a>';
  }
 // Generate this nav menu if user is not logged in:
  else {
    // &#x7c is the hex code for a vertical bar |
    echo '<a href="index.php">Home</a> &#x7c; ';
    echo '<a href="login.php">Log In</a> &#x7c; ';
    echo '<a href="signup.php">Sign Up</a>';
  }
  echo '<hr />';
?>
