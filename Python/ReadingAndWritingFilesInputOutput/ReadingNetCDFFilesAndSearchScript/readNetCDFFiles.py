""" Christopher Adams
    4/18/17 
    Reading NetCdf Files 
"""
# Import NetCDF4 library and Dataset module:
import netCDF4
from netCDF4 import Dataset

def ncdump(nc_fid, verb=True):
    '''
    ncdump outputs dimensions, variables and their attribute information.
    The information is similar to that of NCAR's ncdump utility.
    ncdump requires a valid instance of Dataset.

    Parameters
    ----------
    nc_fid : netCDF4.Dataset
        A netCDF4 dateset object
    verb : Boolean
        whether or not nc_attrs, nc_dims, and nc_vars are printed

    Returns
    -------
    nc_attrs : list
        A Python list of the NetCDF file global attributes
    nc_dims : list
        A Python list of the NetCDF file dimensions
    nc_vars : list
        A Python list of the NetCDF file variables
    '''
    def print_ncattr(key):
        """
        Prints the NetCDF file attributes for a given key

        Parameters
        ----------
        key : unicode
            a valid netCDF4.Dataset.variables key
        """
        try:
            print "\t\ttype:", repr(nc_fid.variables[key].dtype)
            for ncattr in nc_fid.variables[key].ncattrs():
                print '\t\t%s:' % ncattr,\
                      repr(nc_fid.variables[key].getncattr(ncattr))
        except KeyError:
            print "\t\tWARNING: %s does not contain variable attributes" % key

    # NetCDF global attributes
    nc_attrs = nc_fid.ncattrs()
    if verb:
        print "NetCDF Global Attributes:"
        for nc_attr in nc_attrs:
            print '\t%s:' % nc_attr, repr(nc_fid.getncattr(nc_attr))
    nc_dims = [dim for dim in nc_fid.dimensions]  # list of nc dimensions
    # Dimension shape information.
    if verb:
        print "NetCDF dimension information:"
        for dim in nc_dims:
            print "\tName:", dim 
            print "\t\tsize:", len(nc_fid.dimensions[dim])
            print_ncattr(dim)
    # Variable information.
    nc_vars = [var for var in nc_fid.variables]  # list of nc variables
    if verb:
        print "NetCDF variable information:"
        for var in nc_vars:
            if var not in nc_dims:
                print '\tName:', var
                print "\t\tdimensions:", nc_fid.variables[var].dimensions
                print "\t\tsize:", nc_fid.variables[var].size
                print_ncattr(var)
    return nc_attrs, nc_dims, nc_vars



# Store URL of remote data:
url = 'http://sos.maracoos.org/stable/dodsC/hrecos/stationHRLCK8H-agg.ncml'


# Get the dataset:
nc = netCDF4.Dataset(url, mode='r')

# Output the whole dataset:
# print(nc)

# Output the info:
# print("The id is: " + nc.id + "\n")
# print("The license: " + nc.license + "\n")
# print("The publisher email: " + nc.publisher_email + "\n")
# print("publisher institution: " + nc.publisher_institution + "\n")
# print("Data Model: " + nc.data_model + "\n")


# Loop through all variables:
# for allVars in nc.variables:
# 	print(allVars)

# Loop through all variables and items inside:
# for k, v in nc.variables.iteritems():
# 	print k, v

# Print just one item in the dict:
# print (nc.variables['mass_concentration_of_oxygen_in_sea_water'])
# print("")

# Print out all the dimensions:
# print(nc.dimensions.keys())
# print("")

# Print out the dimensions:
# print("Dimensions:")
# print(nc.dimensions)
# print("")

print("NC Dump:")
# Print NC dump info:
nc_attrs, nc_dims, nc_vars = ncdump(nc)
print("")


# print out all the keys:
# print(nc.variables.keys())
# print("")

# Print out the mass concentration ...
massCon = nc.variables['mass_concentration_of_oxygen_in_sea_water'] 
print(massCon)
print("")

# Access the mass_concentration_of_oxygen_in_sea_water description data.
massConDescripData = massCon.description
print("mass_concentration_of_oxygen_in_sea_water - description: " + massConDescripData)
print("")

# See if keyword is in dimensions:
if 'time' in nc.variables['mass_concentration_of_oxygen_in_sea_water'].dimensions:
    print "yes in there"

if 'standard_name' in nc.variables['mass_concentration_of_oxygen_in_sea_water'].ncattrs():
    print 'YIPPEE'

# Print out the dimensions of mass_concentration_of_oxygen_in_sea_water
massConDimensions = nc.variables['mass_concentration_of_oxygen_in_sea_water'].dimensions
print("massConDimensions:")
print(massConDimensions)
print("")

# Display all the dimensions w/ sizes:
for d in nc.dimensions.items():
	print(d)
print("")

# Display the time variable:
timeVar = nc.variables['time']
print("TimeVar:")
print(timeVar)
print("")

# Display a slice of the data in the time global:
#  [0:25:1] is [first_index, last_index, step]
timeVarSliceOfData = timeVar[0:25:1]
print("timeVarSliceOfData:")
print(timeVarSliceOfData)
print("")

# Display a slice of data from the mass_concentration_of_oxygen_in_sea_water time data:
# [0:25:1] is [first_index, last_index, step]
print("mass_concentration_of_oxygen_in_sea_water data: ")
print(massCon[0:25:1])
print("")

# Close the root group:
nc.close()

# With opens the file, then automatically will be closed if error and/or when exits:
with netCDF4.Dataset(url, mode='r') as nc:
    # Output everything in the file:
#     print(nc)
    
    # Output only the global attributes:
#     print(nc.ncattrs())
#     print("")
    
    # Output a single global attribute:
    # Method 1:
#     print(nc.instrument)
    
    # Output a single global attribute:
    # Method 2:(identical to above)
#     print(nc.getncattr('instrument'))

    # Output all the dimensions in the file:
#     print(nc.dimensions.keys())

    # Load information from a variable into an object:
    # Ysi6560RoxVar = nc.variables['YSI_6560_ROX']
#     print(Ysi6560RoxVar)
#     print("")
    
    # Ouput variable attributes for Ysi6560RoxVar a.k.a ['YSI_6560_ROX']
#     print Ysi6560RoxVar.ncattrs()
#     print("")
    
    # Access a single variable attribute:
    # Method1:
#     print(Ysi6560RoxVar.long_name)
    
     # Access a single variable attribute:
    #Method2: Using the String name:(Identical to above)
#     print(Ysi6560RoxVar.getncattr('long_name'))
    
    
    # Print data stored in the variable:
    # [:] represents an array slice that includes the entire array:
    # This one has no data so will display emtpy array:
#     print(Ysi6560RoxVar[:6])
    
    # New Example to demonstrate getting to data.
    # Load information from a variaable into an object:
    # waterSurfaceHeightAbvRefDat = nc.variables['water_surface_height_above_reference_datum']
    
    # Output all variables associated w/ water_surface_height_above_reference_datum
    # print(waterSurfaceHeightAbvRefDat)
    # print("")
    
    # Store the Water Surface height in a variable and print it:
    # [0:10:1] is [start:End:Step]
    # print("water_surface_height_above_reference_datum:")
    # waterSurfaceHeightAbvRefDatValues1 = waterSurfaceHeightAbvRefDat[0:10:1]
    # print(waterSurfaceHeightAbvRefDatValues1)