<?php
    // Database connection variables:
    require_once('dbconnect.php');

    // Var for connecting? $connection 

    
    if (isset($_POST['submit'])) {
        // Get data from form:
        $lastName = mysqli_real_escape_string($connection, trim($_POST['lastName']));
        $firstName = mysqli_real_escape_string($connection, trim($_POST['firstName']));
        $dob = mysqli_real_escape_string($connection, trim($_POST['dob']));
        $soc = mysqli_real_escape_string($connection, trim($_POST['soc']));
        $homePhone = mysqli_real_escape_string($connection, trim($_POST['homePhone']));
        $workPhone= mysqli_real_escape_string($connection, trim($_POST['workPhone']));
        $states= mysqli_real_escape_string($connection, trim($_POST['states']));
        $zip = mysqli_real_escape_string($connection, trim($_POST['zip']));
        $emailPrim = mysqli_real_escape_string($connection, trim($_POST['emailPrim']));
        $emailSec = mysqli_real_escape_string($connection, trim($_POST['emailSec']));
        $voucherNum = mysqli_real_escape_string($connection, trim($_POST['voucherNum']));
        $isPassedSecPlus = mysqli_real_escape_string($connection, trim($_POST['isPassedSecPlus']));
        $isPassedNetPlus = mysqli_real_escape_string($connection, trim($_POST['isPassedNetPlus']));
        $isPaperworkTrainingEnroll = mysqli_real_escape_string($connection, trim($_POST['isPaperworkTrainingEnroll']));
        $isEvalComplete = mysqli_real_escape_string($connection, trim($_POST['isEvalComplete']));
        $isSeneidiaInternship = mysqli_real_escape_string($connection, trim($_POST['isSeneidiaInternship']));
    }

    // Test Output:
    echo 'Last Name: ' . $lastName . '<br/>'."\n";
    echo 'First Name: ' . $firstName . '<br/>'."\n";
    echo 'DOB: ' . $dob . '<br/>'."\n";
    echo 'Fake Social: ' . $soc . '<br/>'."\n";
    echo 'Home Phone: ' . $homePhone . '<br/>'."\n";
    echo 'Work Phone: ' . $workPhone . '<br/>'."\n";
    echo 'State: ' . $states . '<br/>'."\n";
    echo 'Zip: ' . $zip . '<br/>'."\n";
    echo 'Primary Email: ' . $emailPrim . '<br/>'."\n";
    echo 'Secondary Email: ' . $emailSec . '<br/>'."\n";
    echo 'Voucher Number: ' . $voucherNum . '<br/>'."\n";
    echo 'Passed Security Plus exam?: ' . $isPassedSecPlus . '<br/>'."\n";
    echo 'Passed Network Plus exam?: ' . $isPassedNetPlus . '<br/>'."\n";
    echo 'Training Paperwork in?: ' . $isPaperworkTrainingEnroll . '<br/>'."\n";
    echo 'Filled out Evaluation form?: ' . $isEvalComplete . '<br/>'."\n";
    echo 'In SENEIDIA Internship?: ' . $isSeneidiaInternship . '<br/>'."\n";

    // Crate query to insert data into database:
    $query = "INSERT INTO Trainee
        (l_name, f_name, dob, email, alt_email, home_phone, work_phone, soc_last_four)
        VALUES(
            '$lastName', '$firstName', '$dob', '$emailPrim', '$emailSec', '$homePhone', 
            '$workPhone', '$soc'
        )";
    echo $query;

    // Execute the query:
    mysqli_query($connection, $query);

    // Done w/ MySql so close file:
    mysqli_close($connection);


    

 ?>