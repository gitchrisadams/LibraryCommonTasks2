# Import script from tempconv.py file:
import tempconv

# If you want to use the method name in tempconv
# without qualifying it like ftoc() or ctof()
# you have to do this:
# from tempconv import ctof
# from tempconv import ftoc

# Store a temp:
temp = 212

# Call methods to convert temp:
convTemp = tempconv.ftoc(temp)
convTempCtoF = tempconv.ctof(temp)

# Display the converted temps:
print("The converted temp is f to c is " + str(convTemp))
print("The converted temp is c to f is " + str(convTempCtoF))











