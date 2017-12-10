<?php

 
// Connect to the database
$con = db_connect();

/**
 * Connect to the database
 * 
 * @return bool false on failure / mysqli MySQLi object instance on success
 */
function db_connect() {
    // Define con as a static variable, to avoid connecting more than once 
    static $con;

    // Try and connect to the database, if a con has not been established yet
    if(!isset($con)) {
        // Load configuration as an array. Use the actual location of your configuration file
        // Put the configuration file outside of the document root
        $config = parse_ini_file('config.ini'); 
        $con = mysqli_connect('localhost',$config['username'],$config['password'],$config['dbname']);
    }

    // If con was not successful, handle the error
    if($con === false) {
        // Handle error - notify administrator, log to a file, show an error screen, etc.
        echo '<script>console.log("con Error")</script>';
        return mysqli_connect_error(); 
        
    }
    else{
        echo '<script>console.log("con successful")</script>';
    }
    return $con;
}
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];

//Applying User Login query with email and password match.
$Sql_Query = "select * from UserRegistrationTable where email = '$email' and password = '$password' ";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));


if(isset($check)){

 $SuccessLoginMsg = 'Data Matched';
 
 // Converting the message into JSON format.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Echo the message.
 echo $SuccessLoginJson ; 

 }
 
 else{
 
 // If the record inserted successfully then show the message.
$InvalidMSG = 'Invalid Username or Password Please Try Again' ;
 
// Converting the message into JSON format.
$InvalidMSGJSon = json_encode($InvalidMSG);
 
// Echo the message.
 echo $InvalidMSGJSon ;
 
 }
 
 mysqli_close($con);
?>
