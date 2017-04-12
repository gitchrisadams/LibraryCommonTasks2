<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Main Page Title</title>
    <meta name="description" content="Main Content description">
    <meta name="ChristopherAdams.com" content="ChristopherAdams.com Content">

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
    <!-- Form method posts to the submitform.php script -->
    <form action="submitform.php" method="post">

        <!-- Basic text input -->
        Name: <input type="text" placeholder="Enter name" name="name"><br>
        Age: <input type="text" name="age"><br>

        <!-- Email address input -->
        <label for="email">Email Address</label><br>
        <input type="email" class="textboxAddressDetail" placeholder="email@example.com" name="email">
        <br><br>
        
        <!-- Radio Button -->
        <div class="gender">
            <label for="gender">Gender</label><br>
            <input type="radio" name="gender" value="Male"><label>Male</label>
            <input type="radio" name="gender" value="Female"><label>Female</label>
            <input type="radio" name="gender" value="Space Alien"><label>Space Alien</label>
        </div><br>

        <!-- Checkboxes -->
        <label for= "disease">Check all that apply to you or your immediate family?</label><br>
        <input type="checkbox" name="disease[]" id="disease" value="Asthma"><label>Asthma
        </label><br>
        <input type="checkbox" name="disease[]" id="disease" value="Cancer"><label>Cancer
        </label><br>
        <input type="checkbox" name="disease[]" id="disease" value="HIV and Aids"><label>HIV and AIDS
        </label><br>
        <input type="checkbox" name="disease[]" id="disease" value="Diabetes"><label>Diabetes
        </label><br><br>

        <!-- DropDown selection -->
        <select class="selectOption" name="country">
            <option value="Country">Select Country</option>
            <option value="USA">USA</option>
            <option value="inferior country">Inferior Country</option>
        </select>
        <br><br>

        <!-- Date picker -->
        <label for="dob">Date of Birth</label><br>
        <input type="date" name="dob" value="">
        <br><br>

        <!-- Number Picker -->
        <label for="healthrating">In general, would you say your health is</label><br>
        * Taking 1 to be poor and 5 to be excellent<br>
        <input type="number" name="healthrating" min="1" max="5">
        </div><br><br>

        <!-- Slider -->
        <div class="slider1">
            <input type="range" min="0" max="50" value="0" step="5" name="slidername" onchange="showValue(this.value)" />
            <span id="range">0</span>
            <script type="text/javascript">
                function showValue(newValue)
                {
                    document.getElementById("range").innerHTML=newValue;
                }
            </script><br><br>
        </div>

        <!-- Submit the form -->
        <input type="submit"><br><br>

    </form>

</body>
</html>















