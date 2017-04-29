<!DOCTYPE html>
<html>
<head>
    <!-- External stylesheet -->
    <link rel="stylesheet" href="styles.css"/>

	<title>Real Jobs data entry</title>
</head>
<body>
	<div id="container">
		<form id="mainForm" action="processForm.php" method="POST">
			<fieldset id="traineeInfo">
    			<legend>Real Jobs Trainee Data Entry</legend>	
					<label for="lastName">Last Name</label>
    				<input name="lastName" required="required"></input>
    				<br><br>
    				<label for="firstName">First Name</label>
    				<input name="firstName" required="required"></input>
    				<br><br>
					<label for="dob">Date of Birth</label>
    				<input name="dob"></input>
    				<br><br>
    				<label for="soc">Social Security Number</label>
    				<input name="soc"></input>
    				<br><br>
                    <!-- Use Regex pattern validation to ensure that
                    phonenumber is in format matching placeholder -->
                    <label>Home Phone Number:</label>
                    <input 
                      required="required" 
                      type="text" 
                      name="homePhone" 
                      placeholder="555-555-5555" 
                      pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                    />
    				<br><br>
    				<label for="workPhone">Work Phone Number</label>
    				<input name="workPhone"></input>
    				<br><br>
    				<label for="mailingAddress">Mailing Address</label>
    				<input name="mailingAddress"></input>
    				<br><br>
    				<label for="city">City</label>
    				<input name="city"></input>
    				<br><br>


                    <!-- State selection dropdown -->
                    <label>State:</label>
                    <select name="states" size="1" required="required">
                      <option value="">Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
    				<br><br>
                    <!-- Use Regex pattern validation to ensure that
                         zip code is 5 characters -->
                    <label>Zip:</label>
                    <input
                      type="text" 
                      name="zip" 
                      required="required"
                      pattern="^\d{5}(-\d{4})?$" 
                    />
    				<br><br>
    				<label for="emailPrim">Primary Email</label>
    				<input type="email" name="emailPrim" required="required"></input>
    				<br><br>
    				<label for="emailSec">Secondary Email</label>
    				<input name="emailSec"></input>
    				<br><br>
    				<label for="voucherNum">Voucher Number</label>
    				<input name="voucherNum"></input>
    				<br><br>

    				<label for="isPassedSecPlus">Passed Security Plus Exam?</label>
    				<input type="checkbox" name="isPassedSecPlus" value="Yes">Yes
					<input type="checkbox" name="isPassedSecPlus" value="No">No
    				<br><br>
    				<label for="isPassedNetPlus">Passed Network Plus Exam?</label>
    				<input type="checkbox" name="isPassedNetPlus" value="Yes">Yes
					<input type="checkbox" name="isPassedNetPlus" value="No">No
    				<br><br>
    				<label for="isPaperworkTrainingEnroll">Paper work for Training Enrollment?</label>
    				<input type="checkbox" name="isPaperworkTrainingEnroll" value="Yes">Yes
					<input type="checkbox" name="isPaperworkTrainingEnroll" value="No">No
    				<br><br>
    				<label for="isEvalComplete">Evaluation Complete?</label>
    				<input type="checkbox" name="isEvalComplete" value="Yes">Yes
					<input type="checkbox" name="isEvalComplete" value="No">No
    				<br><br>
    				<label for="isSeneidiaInternship">SENEDIA Internship?</label>
    				<input type="checkbox" name="isSeneidiaInternship" value="Yes">Yes
					<input type="checkbox" name="isSeneidiaInternship" value="No">No
    				<br><br>




    				<button name="submit" id="submitbutton">Submit</button>
			</fieldset>
		</form>
	</div>
</body>
</html>