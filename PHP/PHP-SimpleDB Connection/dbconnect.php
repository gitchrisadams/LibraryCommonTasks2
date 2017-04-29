<?php

// Connect to the database
$connection = db_connect();


/**
 * Connect to the database
 * 
 * @return bool false on failure / mysqli MySQLi object instance on success
 */
function db_connect() {
    // Define connection as a static variable, to avoid connecting more than once 
    static $connection;

    // Try and connect to the database, if a connection has not been established yet
    if(!isset($connection)) {
        // Load configuration as an array. Use the actual location of your configuration file
        // Put the configuration file outside of the document root
        $config = parse_ini_file('config.ini'); 
        $connection = mysqli_connect('localhost',$config['username'],$config['password'],$config['dbname']);
    }

    // If connection was not successful, handle the error
    if($connection === false) {
        // Handle error - notify administrator, log to a file, show an error screen, etc.
        echo '<script>console.log("Connection Error")</script>';
        return mysqli_connect_error(); 
        
    }
    else{
        echo '<script>console.log("Connection successful")</script>';
    }
    return $connection;
}
    ?>