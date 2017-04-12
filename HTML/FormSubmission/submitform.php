<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Form Submission</title>
    <meta name="description" content="Form Submission">
    <meta name="ChristopherAdams.com" content="ChristopherAdams.com Form">

    <link rel="stylesheet" href="styles.css">

    <!-- Bootstrap: -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</head>

<body>
    <!-- Output data from Post to browser -->
    Hello! <?php echo $_POST["name"]; ?><br><br>
    You are <?php echo $_POST["age"]; ?> years old.<br><br>
    Your e-mail is <?php echo $_POST["email"]; ?>.<br><br>
    You are a <?php echo $_POST["gender"]; ?>.<br><br>

    <?php
        // Get Post data:
        $diseases = $_POST['disease'];

        // Loop through diseases array and list them from checkboxes:
        echo "You have the following diseases in your family:<br>";
        foreach($diseases as $disease){
            echo $disease . "<br>";
        }
        echo "<br>";

        // Display the country selected from select option dropdown:
        $countrySelected = $_POST['country'];
        echo "Your are from the country of " . $countrySelected. "<br><br>";

        // Display Date of birth from date picker:
        echo "You were born on " . $_POST['dob'] . "<br><br>";

        // Display Health rating from number picker:
        echo "Your health rating is " . $_POST['healthrating'] . "<br><br>";

        // Display number from the slider:
        echo "Range selected is: " . $_POST['slidername'] . "<br><br>";

        
    ?>







</body>
</html>
































