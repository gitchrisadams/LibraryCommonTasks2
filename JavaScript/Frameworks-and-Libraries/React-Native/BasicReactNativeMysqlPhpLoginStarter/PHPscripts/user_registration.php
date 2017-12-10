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

// Test Data:
// $obj['password'] = 'myFancyPass555';
// $obj['email'] = 'chris@myemailWhatup.com';
// $obj['name'] = 'Christopher Adams Yo!';
 
 // Populate User name from JSON $obj array and store into $name.
$name = $obj['name'];
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];

// Populate Password from JSON $obj array and store into $password.
//$hashed_password = MD5($obj['password']);
$hashed_password = $obj['password'];

//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM UserRegistrationTable WHERE email='$email'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));

if(isset($check)){

 // Note, if you change this text, make sure you update switch statement in client side code that uses this.
 $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
 
 // Converting the message into JSON format.
$EmailExistJson = json_encode($EmailExistMSG);

 
// Echo the message.
 echo $EmailExistJson; 


 }
 else{
    // Creating SQL query and insert the record into MySQL database table.
    if (isset($name) && isset($email) && isset($hashed_password)) {
        $Sql_Query = "insert into UserRegistrationTable (name,email,password) values ('$name','$email', '$hashed_password')";
        mysqli_query($con,$Sql_Query);

         // Note, if you change this text, make sure you update switch statement in client side code that uses this.
        $MSG = 'User Registered Successfully' ;
        
        // Converting the message into JSON format.
        $json = json_encode($MSG);
         
        // Echo the message.
         echo $json ;
     } else {
        $MSG = 'Registration error';

        // Converting the message into JSON format.
        $json = json_encode($MSG);
         
        // Echo the message.
         echo $json ;
     }
 

 }
 mysqli_close($con);
?>