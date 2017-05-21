""" Christopher Adams
    4/18/17 
    Search through netcdf file and match items with 
    time, standard name, and instrument. Ensure instrument
    name has a variable of the same name in the file. 
"""
# Import NetCDF4 library and Dataset module:
import netCDF4
from netCDF4 import Dataset
import sys

# Function to search url file to test if instrument name has variable
# of the same name.
# param: url is the url/file to search through.
# http://sos.maracoos.org/stable/dodsC/hrecos/stationHRWSTPTH-agg.ncml for example.
def findStandardTimeVars(url):
	try:
		# With opens the file, then automatically will be closed if error and/or when exits:
		with netCDF4.Dataset(url, mode='r') as nc:

			# Keeping track of Test messages displayed.
			messageCount = 0;

			# Loop through all the variables in the file:
			for key in nc.variables:

				# Store the variable dimensions:
				dimOfKey = nc.variables[key].dimensions

				# Determine if there is a time dimension:
				# Ignore the actual 'time' key itself.
				if('time' in dimOfKey):
					if(key != 'time'):

						# Determine if there is a standard_name in this key:
						if("standard_name" in nc.variables[key].ncattrs()):

							# Determine if there is an instrument in this key:
							if("instrument" in nc.variables[key].ncattrs()):
								# It has an instument and time checked so now we have to
								# see if there is a variable named w/ the same name as the 
								# value of instrument.
								# 1. Get the all the variables:
								# 2. Get the Instrument value:
								# 3. Compare instrument string name to variable name such as YSI_6560_ROX: 
								# Get all the variable keys:
								allVariableKeys = nc.variables.keys()

								# Get the instrument value:
								keyTemp = str(key)
								tempVar = nc.variables[keyTemp]

								if(tempVar.instrument in allVariableKeys):
									print("Test Passed! Key name: " + key + " has instrument in list.")
									print("Instrument Name: " + tempVar.instrument)
									print("")

									# Increment counter to keep track of Test Passed messages.
									messageCount+=1
								else:
									print("Test Failed! Key name: " + key + " does not have instrument in list.")
									print("Instrument Name: " + tempVar.instrument)
									print("")

			# Message in case no matches are found in file:
			if(messageCount > 0):
				print("Done processing file.")
			else:
				print("No matches found.")

	except:
		pass
		print("Data file is unable to be opened.")

# Test the program:
def main():
	# Store URL of remote data:
	# Tests that pass:
	url1 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRLCK8H-agg.ncml'
	url2 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRLCK8M-agg.ncml'
	url3 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRTVBM-agg.ncml'

	# Example of when instrument doesn't have name like instrument: 
	# Tests that fail:
	url4 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRMARPH-agg.ncml'

	# Tests that pass:
	url5 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRWSTPTH-agg.ncml'
	url6 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRPIER84-agg.ncml'

	# Fails, unable to read file. 
	# url7 = 'http://sos.maracoos.org/stable/sos/hrecos/stationHRUTICA-agg.ncml'

	# Tests that pass:
	url8 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRREXBR-agg.ncml'
	url9 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRSCHDH-agg.ncml'
	url10 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRSCHDM-agg.ncml'
	url11 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationSTCPBY1-agg.ncml'
	url12 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRPVSC-agg.ncml'
	url13 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRWSTPTH-agg.ncml'

	# No Matches found example:
	url14 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRTVBM-agg.ncml'

	# Tests that pass:
	url15 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRMARPHS-agg.ncml'
	url16= 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRPMNT-agg.ncml'
	url17 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRALBP-agg.ncml'
	url18 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRNOPT-agg.ncml'
	url19 = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRPR26-agg.ncml'

	# Template for above.
	urlNum = ''


	# Call function to search url.
	# param: The url file to search.
	findStandardTimeVars(url1)

if __name__ == '__main__':
	sys.exit(main())
