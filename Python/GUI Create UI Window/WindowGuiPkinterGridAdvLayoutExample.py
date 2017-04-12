# tkinter Python Library: Creating GUI Windows w/ Grids Adv. example.

# Import tkinter, this way allows for use w/
# Python 2 or Python 3:
try:
    import tkinter
except ImportError: # python 2
    import Tkinter as tkinter

# For populating listboxes:
import os


# Create a GUI Window:
mainWindow = tkinter.Tk()
mainWindow.title("Grid Demo")
mainWindow.geometry('640x480-8-200')

# Add padding to the window:
mainWindow['padx'] = 8

# Create the Window Label(below the title)
# columnspan allows label to span multiple columns.
label = tkinter.Label(mainWindow, text="Tkinter Grid Demo")
label.grid(row=0, column=0, columnspan=3)

# Set weight of columns so label actually spans 3 columns and
# some columns are larger than others, notice weight=3 for col 2,3,4
mainWindow.columnconfigure(0, weight=100)
mainWindow.columnconfigure(1, weight=1)
mainWindow.columnconfigure(2, weight=1000)
mainWindow.columnconfigure(3, weight=600)
mainWindow.columnconfigure(4, weight=1000)

# Set weight for rows:
mainWindow.rowconfigure(0, weight=1)
mainWindow.rowconfigure(1, weight=10)
mainWindow.rowconfigure(2, weight=1)
mainWindow.rowconfigure(3, weight=3)
mainWindow.rowconfigure(4, weight=3)

# Create fileList element and place in the grid:
# Make it sticky to north, south, east, west so it expands all directions.
# Make it span 2 rows.
fileList = tkinter.Listbox(mainWindow)
fileList.grid(row=1, column=0, sticky='nsew', rowspan=2)
fileList.config(border=2, relief='sunken', )

# Populate the Listbox:
# /user/bin is location of files to display(the linux bin folder for linux)
# in this case.
# tkinter.END specifies to place item at end of list.
for zone in os.listdir('/usr/bin'):
    fileList.insert(tkinter.END, zone)

# Add scroll bar to the fileList element:
# .yview so it scrolls vertically.
listScroll = tkinter.Scrollbar(mainWindow, orient=tkinter.VERTICAL, command=fileList.yview)
listScroll.grid(row=1, column=1, sticky='nsw', rowspan=2)

# Make it so our scroll bar can scroll:
fileList['yscrollcommand'] = listScroll.set

# Frame for radio buttons:
# LabelFrame adds the bordered frame box for File Details:
optionFrame = tkinter.LabelFrame(mainWindow, text="File Details")
optionFrame.grid(row=1, column=2, sticky='ne')

# Setup a value of Radiobutton selected and set starting/default value to 3:
rbValue = tkinter.IntVar()
rbValue.set(1)

# Radio Buttons:
radio1 = tkinter.Radiobutton(optionFrame, text="Filename", value=1, variable=rbValue)
radio2 = tkinter.Radiobutton(optionFrame, text="Path", value=2, variable=rbValue)
radio3 = tkinter.Radiobutton(optionFrame, text="Timestamp", value=3, variable=rbValue)

# Add Radio button to grid:
radio1.grid(row=0, column=0, sticky='w')
radio2.grid(row=1, column=0, sticky='w')
radio3.grid(row=2, column=0, sticky='w')

# Create Label for the result:
resultLabel = tkinter.Label(mainWindow, text="Result")

# Add label to grid:
resultLabel.grid(row=2, column=2, sticky='nw')

# Create result entry(For displaying the result):
result = tkinter.Entry(mainWindow)

# Add result to the grid:
result.grid(row=2, column=2, sticky='sw')

# Time Spinner:
# Frame for time spinner:
# Add LabelFrame to put framed border around frame.
timeFrame = tkinter.LabelFrame(mainWindow, text="Time Spinner")
timeFrame.grid(row=3, column=0, sticky='new')

# Hour spinner:
# Use tuple to pass in hour 0 to 23.
hourSpinner = tkinter.Spinbox(timeFrame, width=2, values=tuple(range(0, 24)))

# Minute spinner:
# Instead of tuple, we add minutes another way just for reference of another way to do it:
# Notice we use the underscore from_ This is due to from being a reserved word.
minuteSpinner = tkinter.Spinbox(timeFrame, width=2, from_=0, to=59)

# Seconds Spinner:
secondSpinner = tkinter.Spinbox(timeFrame, width=2, from_=0, to=59)

# Add Spinners to the grid:
# Hour:
hourSpinner.grid(row=0, column=0)
tkinter.Label(timeFrame, text=':').grid(row=0, column=1)

# Minute:
minuteSpinner.grid(row=0, column=2)
tkinter.Label(timeFrame, text=':').grid(row=0, column=3)

# Second:
secondSpinner.grid(row=0, column=4)

# Add padding to the time frame:
timeFrame['padx'] = 36

# Frame for Date Spinners:
dateFrame = tkinter.Frame(mainWindow)
dateFrame.grid(row=4, column=0, sticky='new')

# Date Labels:
dayLabel = tkinter.Label(dateFrame, text="Day")
monthLabel = tkinter.Label(dateFrame, text="Month")
yearLabel = tkinter.Label(dateFrame, text="Year")

# Add Date Labels to Grid:
dayLabel.grid(row=0, column=0, sticky='w')
monthLabel.grid(row=0, column=1, sticky='w')
yearLabel.grid(row=0, column=2, sticky='w')

# Date Spinners:
daySpin = tkinter.Spinbox(dateFrame, width=5, from_=1, to=31)

# Populate the month spinner w/ actual month names:
monthSpin = tkinter.Spinbox(dateFrame, width=5, values=("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"))

# Year spinner:
yearSpin = tkinter.Spinbox(dateFrame, width=5, from_=2000, to=2009)

# Add Spinners to grid:
daySpin.grid(row=1, column=0)
monthSpin.grid(row=1, column=1)
yearSpin.grid(row=1, column=2)

# Buttons:
okButton = tkinter.Button(mainWindow, text="OK")

# command closes window when button clicked.
cancelButton = tkinter.Button(mainWindow, text="Cancel", command=mainWindow.destroy)

# Add Buttons to the grid:
okButton.grid(row=4, column=3, sticky='e')
cancelButton.grid(row=4, column=4, sticky='w')

# Show the window:
mainWindow.mainloop()

# Testing: Print out the rbValue that is clicked:
print("The RB value is:")
print(rbValue.get())
print()

















































